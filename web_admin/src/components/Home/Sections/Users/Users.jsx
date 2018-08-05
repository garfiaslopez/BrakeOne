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

class Users extends CrudBase {
    constructor(props) {
        super(props);

        this.model_name_singular = 'user';
        this.model_name_plural = 'users';
        this.titleList = 'Lista de usuarios';
        this.category = 'Usuario';
        this.edit_component = AddEditModal;
        this.add_component = AddEditModal;

        this.renderChild = () => {
            const { classes } = this.props;
            const Rows = [];
            this.state.data.forEach((d, i) => {
                if (!(d.rol === 'admin' && this.props.session.user.rol != 'admin')) {
                    Rows.push(
                        <ListItem
                            key={d._id}
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
                                primary={d.name}
                                secondary={`${d.phone}`}
                            />
                        </ListItem>
                    );
                }
            });
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
})(Users);
