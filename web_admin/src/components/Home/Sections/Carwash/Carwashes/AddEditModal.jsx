import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import { MenuItem } from 'material-ui/Menu';
import Slide from 'material-ui/transitions/Slide';
import { withStyles } from 'material-ui/styles';
import styles from './Styles';
import { FetchXHR } from '../../../../../helpers/generals';

class AddEditModal extends Component {
    constructor(props) {
        super(props);
        console.log(props.obj);
        this.state = {
            accounts: [],
            obj: {
                account_id: props.obj ? props.obj.account_id : '',
                denomination: props.obj ? props.obj.denomination : '',
                address: props.obj ? props.obj.address : '',
                phone: props.obj ? props.obj.phone : '',
                type: props.obj ? props.obj.type : 'tunel',
            }
        };
        this.handleChangeTextField = this.handleChangeTextField.bind(this);
        this.close = this.close.bind(this);
        this.confirm = this.confirm.bind(this);
        this.getAccounts = this.getAccounts.bind(this);
    }

    componentDidMount() {
        this.getAccounts();
    }
    getAccounts() {
        const url = process.env.REACT_APP_API_URL + '/accounts';
        const POSTDATA = {
            'limit': 100,
            'page': 1
        }
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
                    accounts: response.json.accounts.docs
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
        if (this.state.obj.denomination !== '' && this.state.obj.account_id !== '') {
            this.props.onConfirm(this.state.obj);
        }
    }

    handleChangeTextField (id) {
        return (event) => {
            let newObj = Object.assign({}, this.state.obj);
            newObj[id] = event.target.value;
            this.setState({
                obj: newObj
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
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
                        id="type"
                        select
                        label="Cuenta"
                        value={this.state.obj.account_id}
                        onChange={this.handleChangeTextField('account_id')}
                        fullWidth
                        margin="normal"
                    >
                        {this.state.accounts.map(account => (
                            <MenuItem id="type" key={account._id} value={account._id}>
                                {account.denomination}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        margin="dense"
                        id="denomination"
                        value={this.state.obj.denomination}
                        label="Denomination"
                        type="search"
                        fullWidth
                        onChange={this.handleChangeTextField('denomination')}
                    />
                    <TextField
                        margin="dense"
                        id="address"
                        value={this.state.obj.address}
                        label="Direccion"
                        type="search"
                        fullWidth
                        onChange={this.handleChangeTextField('address')}
                    />
                    <TextField
                        margin="dense"
                        id="phone"
                        value={this.state.obj.phone}
                        label="Telefono"
                        type="search"
                        fullWidth
                        onChange={this.handleChangeTextField('phone')}
                    />
                    <TextField
                        id="type"
                        select
                        label="Tipo autolavado"
                        value={this.state.obj.type}
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
        );
    }
}


export default withStyles(styles, {
    withTheme: true
})(AddEditModal);
