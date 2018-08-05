import React, { Component } from 'react';
import styles from './Styles';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import { LinearProgress } from 'material-ui/Progress';
import Subheader from 'material-ui/List/ListSubheader';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import MenuItem from 'material-ui/Menu/MenuItem';
import { FetchXHR } from '../../helpers/generals';
import AlertModal from '../../helpers/AlertModal';

class Carwashes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true,
            open: false,
            alert: false,
            carwash: {
                name: '',
                address: '',
                phone: '',
                type: ''
            }
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
        this.handleChangeTextField = this.handleChangeTextField.bind(this);
        this.saveCarwash = this.saveCarwash.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const POSTDATA = { username: this.state.username, password: this.state.password};
        const url = process.env.REACT_APP_API_URL + '/carwashes/' + this.props.session.user._id;
        FetchXHR(url, 'GET', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
                    data: response.json.carwashes,
                    loading: false
                });
            } else {
                this.setState({
                    loading: false
                });
                alert(response.message);
            }
        }).catch((onError) => {
            console.log(onError);
        });
    }

    saveCarwash() {
        if (this.state.carwash.name !== '') {
            this.setState({
                loading: true
            });
            const url = process.env.REACT_APP_API_URL + '/carwash';
            FetchXHR(url, 'POST', this.state.carwash).then((response) => {
                if (response.json.success) {
                    this.getData();
                    this.setState({
                        open: false,
                        carwash: {
                            name: '',
                            address: '',
                            phone: '',
                            type: ''
                        },
                        alert: true,
                        alertMsg: response.json.message
                    });
                } else {
                    this.setState({
                        open: false,
                        loading: false,
                        carwash: {
                            name: '',
                            address: '',
                            phone: '',
                            type: ''
                        },
                        alert: true,
                        alertMsg: response.json.message
                    });
                }
            }).catch((onError) => {
                this.setState({
                    alert: true,
                    alertMsg: onError.message
                });
            });
        }
    }

    handleClose() {
        this.setState({
            open: false,
        });
    }
    handleCloseAlert() {
        this.setState({
            alert: false,
        });
    }
    handleChangeTextField (id) {
        return (event) => {
            let newCarwash = Object.assign({}, this.state.carwash);
            newCarwash[id] = event.target.value;
            this.setState({
                carwash: newCarwash
            });
        }
    }
    render() {
        const { classes } = this.props;

        let loading = <div></div>
        if (this.state.loading) {
            loading = <LinearProgress color="accent" className={classes.linearProgress}/>
        }
        let alert = <div></div>
        if (this.state.alert) {
            alert = <AlertModal msg={this.state.alertMsg} onRequestClose={this.handleCloseAlert}/>
        }
        return (
            <div className={classes.container} >
                {loading}
                <div className={classes.header}>
                    <Subheader className={classes.subHeader}>Listado de autolavados</Subheader>
                    <Button
                        fab
                        color="inherit"
                        aria-label="add"
                        className={classes.button}
                        onClick={() => {
                            this.setState({
                                open: true
                            });
                        }}
                    >
                        <AddIcon />
                    </Button>
                </div>
                <GridList
                    cellHeight={window.innerHeight/3}
                    className={classes.gridList}
                >
                    {this.state.data.map(obj => (
                        <GridListTile
                            key={obj._id}
                            onClick={() => {
                                this.props.history.push('/carwashes/' + obj._id + '/dashboard');
                            }}
                        >
                            <img src={process.env.REACT_APP_CDN + 'images/carwash.png'} alt={obj.info.name}/>
                            <GridListTileBar
                                title={obj.info.name}
                            />
                        </GridListTile>
                    ))}
                </GridList>
                <Dialog
                    open={this.state.open}
                    transition={<Slide direction="up" />}
                    keepMounted
                    onRequestClose={this.handleClose}
                >
                    <DialogTitle>{"Agregar Autolavado"}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            value={this.state.carwash.name}
                            label="Nombre"
                            type="search"
                            fullWidth
                            onChange={this.handleChangeTextField('name')}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="address"
                            value={this.state.carwash.address}
                            label="Direccion"
                            type="search"
                            fullWidth
                            onChange={this.handleChangeTextField('address')}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="phone"
                            value={this.state.carwash.phone}
                            label="Telefono"
                            type="search"
                            fullWidth
                            onChange={this.handleChangeTextField('phone')}
                        />
                        <TextField
                            id="type"
                            select
                            label="Tipo autolavado"
                            value={this.state.carwash.type}
                            onChange={this.handleChangeTextField('type')}
                            fullWidth
                            margin="normal"
                        >
                            {[{label: 'Tunel', value: 'tunel'}, {label:'Cajones', value:'parking'}].map(option => (
                                <MenuItem id="type" key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.handleClose}
                            color="primary"
                            className={classes.buttonModal}
                        >
                            Cancelar
                        </Button>
                        <Button
                            raised
                            onClick={this.saveCarwash}
                            color="primary"
                            className={classes.buttonModal}
                        >
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
                {alert}
            </div>
        );
    }
}

Carwashes.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Carwashes);
