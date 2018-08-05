import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';
import AlertModal from '../../helpers/AlertModal';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passwordFake: '',
            username: '',
            password: '',
            open: false,
            msg: ''
        };
        this.doLogin = this.doLogin.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentDidMount() {

    }
    handleOpen(msg) {
      this.setState({open: true, msg:msg});
    };
    handleClose() {
      this.setState({open: false});
    };
    handleUsername(event) {
        this.setState({username: event.target.value});
    }
    handlePassword(event) {
        let pass = '';
        let newPass = '';
        let letter = '';
        let actualPassword = String(this.state.password);
        if (event.target.value.length > 0) {
            letter = event.target.value[event.target.value.length - 1];
            if (letter !== '*') {
                newPass = actualPassword + letter;
            } else {
                newPass = actualPassword.slice(0, actualPassword.length - 1);
            }
            for (let i = 0; i < event.target.value.length; i++) {
                pass += '*';
            }
        }
        this.setState({
            passwordFake: pass,
            password: newPass
        });
    }
    doLogin() {
        if(this.state.username !== '' && this.state.password !== '') {
            console.log(this.state.username, this.state.password);
            const POSTDATA = { username: this.state.username, password: this.state.password};
            const url = process.env.REACT_APP_API_URL + '/authenticate';
            FetchXHR(url, 'POST', POSTDATA).then((response) => {
                if (response.json.success) {
                    if (response.json.user.rol !== 'user') {
                        const toSave = { token: response.json.token, user: response.json.user };
                        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, JSON.stringify(toSave));
                        this.props.history.push('/home');
                    } else {
                        this.handleOpen('Los usuarios no pueden acceder.');
                    }
                } else {
                    this.handleOpen(response.json.message);
                }
            }).catch((onError) => {
                this.handleOpen('Error al hacer la peticion al servidor.');
            });
        }else{
            this.handleOpen('Favor de rellenar todos los datos');
        }
    }
    render() {
        const { classes } = this.props;
        let alert = <div></div>
        if(this.state.open) {
            alert = (<AlertModal msg={this.state.msg} onRequestClose={this.handleClose} />);
        }

        return (
            <div className={classes.containerStyle}>
                <div className={classes.centerContainer}>
                    <img
                        src={process.env.REACT_APP_CDN + '/images/MainLogo.png'}
                        className={classes.mainLogo}
                        alt="enterpriseImage"
                    />
                    <TextField
                        id="user"
                        label="Usuario"
                        value={this.state.username}
                        placeholder="Usuario"
                        className={classes.textField}
                        InputClassName={classes.inputTextField}
                        labelClassName={classes.inputTextField}
                        helperTextClassName={classes.inputTextField}
                        margin="normal"
                        type="search"
                        onChange={this.handleUsername}
                    />
                    <TextField
                        id="password"
                        label="Contraseña"
                        value={this.state.passwordFake}
                        placeholder="Contraseña"
                        className={classes.textField}
                        InputClassName={classes.inputTextField}
                        labelClassName={classes.inputTextField}
                        helperTextClassName={classes.inputTextField}
                        margin="normal"
                        type="search"
                        onChange={this.handlePassword}
                    />
                    <br/>
                    <Button
                        raised
                        className={classes.button}
                        onClick={this.doLogin}
                    >
                        Iniciar Sesión
                    </Button>
                </div>
                {alert}
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Login);
