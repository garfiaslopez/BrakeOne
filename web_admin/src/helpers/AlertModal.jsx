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

class AlertModal extends Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.onRequestClose();
    }
    render() {
        return (
            <Dialog
                open={true}
                transition={<Slide direction="up" />}
                keepMounted
                onRequestClose={this.handleClose}
            >
                <DialogTitle>{"Notificación"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {this.props.msg}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleClose}
                        color="primary"
                    >
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default AlertModal;
