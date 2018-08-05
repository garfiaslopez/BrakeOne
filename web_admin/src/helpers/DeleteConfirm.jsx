/**
 * ALERT MODAL COMPONENT
 */
import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

class DeleteConfirm extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }
    handleConfirm() {
        this.props.onConfirm();
    }
    handleClose() {
        this.props.onClose();
    }
    render() {
        return (
            <Dialog
                open={true}
                transition={<Slide direction="up" />}
                keepMounted
                onRequestClose={this.handleClose}
            >
                <DialogTitle>{"¿Desea Eliminar?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Esta acción es irreversible.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleClose}
                        color="primary"
                    >
                        Cancelar
                    </Button>
                    <Button
                        raised
                        onClick={this.handleConfirm}
                        color="accent"
                    >
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default DeleteConfirm;
