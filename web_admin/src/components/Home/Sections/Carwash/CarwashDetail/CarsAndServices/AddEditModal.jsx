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

class AddEditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: {
                denomination: props.obj ? props.obj.denomination : '',
                price: props.obj ? props.obj.price : ''
            }
        };
        this.handleChangeTextField = this.handleChangeTextField.bind(this);
        this.close = this.close.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    close() {
        this.props.onClose();
    }

    confirm() {
        if (this.state.obj.denomination !== '' && Number(this.state.obj.price) > -1) {
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
                        id="price"
                        value={this.state.obj.price}
                        label="Precio ($)"
                        type="search"
                        fullWidth
                        onChange={this.handleChangeTextField('price')}
                    />
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
