import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

import { withStyles } from 'material-ui/styles';
import styles from './Styles';
import Chip from 'material-ui/Chip';

import Checkbox from 'material-ui/Checkbox';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import CloseIcon from 'material-ui-icons/Close';
import Save from 'material-ui-icons/Save';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

import { FetchXHR } from '../../../../helpers/generals';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AddEditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_carwashes: false,
            carwashes: [],
            selectedCarwashes: [],
            obj: {
                username: props.obj ? props.obj.username : '',
                password: props.obj ? props.obj.password : '',
                rol: props.obj ? props.obj.rol : 'user',
                phone: props.obj ? props.obj.phone : '',
                name: props.obj ? props.obj.name : '',
            }
        };

        this.handleChangeTextField = this.handleChangeTextField.bind(this);
        this.close = this.close.bind(this);
        this.confirm = this.confirm.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.getCarwashes = this.getCarwashes.bind(this);
    }

    componentDidMount() {
        this.getCarwashes();
    }

    getCarwashes() {
        const url = process.env.REACT_APP_API_URL + '/carwashes';
        const POSTDATA = {
            'limit': 100,
            'page': 1
        }
        if (this.props.session.user.rol !== 'admin') {
            POSTDATA.account_id = this.props.session.user.account_id
        }
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                // check the list versus that user already have:
                const sc = [];
                if (this.props.obj) {
                    this.props.obj.carwashes.forEach((el) => {
                        response.json.carwashes.docs.forEach((obj) => {
                            if (el === obj._id) {
                                sc.push(obj);
                            }
                        });
                    });
                }
                this.setState({
                    selectedCarwashes: sc,
                    carwashes: response.json.carwashes.docs
                });
            }
        }).catch((onError) => {
            console.log(onError);
        });
    }

    close() {
        this.props.onClose();
    }

    confirm() {
        if (this.state.obj.username !== '' && this.state.obj.password !== '') {
            if (this.state.selectedCarwashes.length > 0) {
                const { obj } = this.state;
                obj.carwashes = this.state.selectedCarwashes.map((el)=>(el._id));
                this.props.onConfirm(obj);
            }
        }
    }

    handleChangeTextField(id) {
        return (event) => {
            let newObj = Object.assign({}, this.state.obj);
            newObj[id] = event.target.value;
            this.setState({
                obj: newObj
            });
        }
    }

    handleToggle(carwash) {
        const { selectedCarwashes } = this.state;
        const i = selectedCarwashes.findIndex((obj) => (obj._id === carwash._id));
        if (i !== -1) {
            selectedCarwashes.splice(i, 1);
        } else {
            selectedCarwashes.push(carwash);
        }
        this.setState({
            selectedCarwashes
        });
    };


    render() {
        const { classes } = this.props;

        let DetailRows = [];
        if (this.state.carwashes.length > 0) {
            DetailRows = this.state.carwashes.map((el) => (
                <div
                    key={el._id}
                >
                    <ListItem
                        key={el._id}
                        dense
                        button
                        onClick={() => {
                            this.handleToggle(el);
                        }}
                    >
                        <Checkbox
                            checked={this.state.selectedCarwashes.findIndex((obj) => (obj._id === el._id )) !== -1}
                            tabIndex={-1}
                            disableRipple
                        />
                        <ListItemText primary={`${el.denomination}`} />
                    </ListItem>
                    <Divider/>
                </div>
            ));
        }
        let adminItem = <div></div>;
        if (this.props.session.user.rol === 'admin') {
            adminItem = <MenuItem value={'admin'}>Administrador</MenuItem>;
        }
        return (
            <div>
                <Dialog
                    fullScreen
                    open = {this.state.open_carwashes}
                    transition = {Transition}
                >
                    <AppBar
                        className={classes.appBar}
                    >
                        <Typography
                            variant="title"
                            color="inherit"
                            className={classes.titleBar}
                        >
                            Seleccionar autolavados
                        </Typography>
                        <IconButton
                            className={classes.iconBar}
                            color="inherit"
                            onClick={() => {
                                this.setState({
                                    open_carwashes: false
                                });
                            }}
                            aria-label="Close"
                        >
                            <Save/>
                        </IconButton>
                    </AppBar>
                    <List className={classes.listDetail}>
                        {DetailRows}
                    </List>
                </Dialog>
                <Dialog
                    open={true}
                    transition={<Slide direction="up" />}
                    keepMounted
                    onRequestClose={this.close}
                >
                    <DialogTitle>{`${this.props.obj ? 'Editar' : 'Agregar'} ${this.props.category}`}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            value={this.state.obj.name}
                            label="Nombre"
                            type="search"
                            fullWidth
                            onChange={this.handleChangeTextField('name')}
                        />
                        <TextField
                            margin="dense"
                            id="username"
                            value={this.state.obj.username}
                            label="Usuario"
                            type="search"
                            fullWidth
                            onChange={this.handleChangeTextField('username')}
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            value={this.state.obj.password}
                            label="Contraseña"
                            type="search"
                            fullWidth
                            onChange={this.handleChangeTextField('password')}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="rol">Tipo de usuario</InputLabel>
                            <Select
                                className={classes.rolSelector}
                                value={this.state.obj.rol}
                                onChange={this.handleChangeTextField('rol')}
                                inputProps={{
                                    name: 'rol',
                                    id: 'rol_id'
                                }}
                            >
                                <MenuItem value={'user'}>Usuario</MenuItem>
                                <MenuItem value={'guest'}>Invitado</MenuItem>
                                <MenuItem value={'manager'}>Gerente</MenuItem>
                                {adminItem}
                            </Select>
                        </FormControl>
                        <TextField
                            margin="dense"
                            id="phone"
                            value={this.state.obj.phone}
                            label="Telefono"
                            type="search"
                            fullWidth
                            onChange={this.handleChangeTextField('phone')}
                        />
                        <br/>
                        <Typography
                            variant="title"
                            color="inherit"
                            className={classes.label}
                        >
                            Autolavados asignados
                        </Typography>
                        <div
                            className={classes.chipsContainer}
                        >
                            {this.state.selectedCarwashes.map((obj)=>(
                                <Chip
                                    className={classes.chip}
                                    key={obj._id}
                                    label={obj.denomination}
                                />
                            ))}
                        </div>
                        <div
                            className={classes.buttonsContainer}
                        >
                            <Button
                                onClick={() => {
                                    this.setState({
                                        open_carwashes: true
                                    });
                                }}
                                color="primary"
                                className={classes.buttonList}
                            >
                                Asignar autolavados
                            </Button>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.close}
                            color="primary"
                            className={classes.buttonModal}
                        >
                            Cancelar
                        </Button>
                        <Button
                            raised
                            onClick={this.confirm}
                            color="primary"
                            className={classes.buttonModal}
                        >
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


export default withStyles(styles, {
    withTheme: true
})(AddEditModal);
