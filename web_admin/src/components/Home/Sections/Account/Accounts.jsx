import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import styles from './Styles';
import Button from 'material-ui/Button';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Delete from 'material-ui-icons/Delete';
import ModeEdit from 'material-ui-icons/ModeEdit';
import AddIcon from 'material-ui-icons/Add';
import AddEditModal from './AddEditModal';
import CrudBase from '../../../../helpers/CrudBase';

class Accounts extends CrudBase {
    constructor(props) {
        super(props);
        this.model_name_singular = 'account';
        this.model_name_plural = 'accounts';
        this.titleList = 'Lista de cuentas';
        this.category = 'Cuenta';
        this.edit_component = AddEditModal;
        this.add_component = AddEditModal;

        this.renderChild = () => {
            const { classes } = this.props;
            const Rows = this.state.data.map((d, i) => (
                <ListItem
                    key={i}
                    onClick={()=>{
                        this.setState({
                            selectedObject: d
                        });
                    }}
                    style={(() => {
                        if (d._id === this.state.selectedObject._id) {
                            return({ backgroundColor: '#90CAF9' });
                        }
                        return ({})
                    })()}
                >
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircle />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={d.denomination}
                    />
                </ListItem>
            ));
            return (
                <List
                    className={classes.list}
                >
                    { Rows }
                    <ListItem key={'empty1'} />
                    <ListItem key={'empty2'} />
                    <ListItem key={'empty3'} />
                </List>
            );
        }
    }
}

export default withStyles(styles, {
    withTheme: true
})(Accounts);
