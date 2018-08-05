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
import LocalOffer from 'material-ui-icons/LocalOffer';
import Delete from 'material-ui-icons/Delete';
import ModeEdit from 'material-ui-icons/ModeEdit';
import AddIcon from 'material-ui-icons/Add';
import AddEditModal from './AddEditModal';
import CrudBase from '../../../../../../helpers/CrudBase';

class Products extends CrudBase {
    constructor(props) {
        super(props);
        this.model_name_singular = 'product';
        this.model_name_plural = 'products';
        this.titleList = 'Lista de productos';
        this.category = 'Producto';
        this.edit_component = AddEditModal;
        this.add_component = AddEditModal;

        this.renderChild = () => {
            const { classes } = this.props;
            const MappedObj = {};
            const data = Object.assign([], this.state.data);
            data.forEach((obj, i) => {
                MappedObj[obj._id] = obj;
            });
            let orderArray = [];
            if (this.state.carwash.order_products) {
                if (this.state.carwash.order_products.length > 0) {
                    orderArray = this.state.carwash.order_products;
                } else {
                    orderArray = data.map((d) => (d._id));
                }
            } else {
                orderArray = data.map((d) => (d._id));
            }
            const Rows = orderArray.map((key, i) => {
                const d = Object.assign({}, MappedObj[key]);
                if (d._id) {
                    return (
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
                                    <LocalOffer />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={d.denomination}
                                secondary={`$ ${this.numberWithCommas(d.price)}`}
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
})(Products);
