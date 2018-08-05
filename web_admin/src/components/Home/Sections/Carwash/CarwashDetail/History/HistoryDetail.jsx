import React, { Component } from 'react';
import moment from 'moment';
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
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';


function numberWithCommas(num) {
    if (num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return 0;
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class HistoryDetail extends Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close() {
        this.props.onClose();
    }

    render() {
        const { classes } = this.props;

        const CarsRows = this.props.history.totals.cars.data.map(obj => (
            <div
                className={classes.listItem}
                key={`item-car-${obj.denomination}`}
            >
                <Typography
                    className={classes.listLabel}
                >
                    {`${obj.quantity}.- ${obj.denomination}`}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`$ ${numberWithCommas(obj.total)}`}
                </Typography>
            </div>
        ));
        const ServiceRows = this.props.history.totals.services.data.map(obj => (
            <div
                className={classes.listItem}
                key={`item-service-${obj.denomination}`}
            >
                <Typography
                    className={classes.listLabel}
                >
                    {`${obj.quantity}.- ${obj.denomination}`}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`$ ${numberWithCommas(obj.total)}`}
                </Typography>
            </div>
        ));

        const ProductRows = this.props.history.totals.products.data.map(obj => (
            <div
                className={classes.listItem}
                key={`item-product-${obj.denomination}`}
            >
                <Typography
                    className={classes.listLabel}
                >
                    {`${obj.quantity}.- ${obj.denomination}`}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`$ ${numberWithCommas(obj.total)}`}
                </Typography>
            </div>
        ));

        const SpendsRows = this.props.history.totals.spends.data.map((s, i) => (
            <div
                className={classes.listItem}
                key={`item-spends-${i}`}
            >
                <Typography
                    className={classes.listLabel}
                >
                    {s.denomination}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`$ ${numberWithCommas(s.total)}`}
                </Typography>
            </div>
        ));

        const IngressesRows = this.props.history.totals.ingresses.data.map((s, i) => (
            <div
                className={classes.listItem}
                key={`item-ingresses-${i}`}
            >
                <Typography
                    className={classes.listLabel}
                >
                    {s.denomination}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`$ ${numberWithCommas(s.total)}`}
                </Typography>
            </div>
        ));

        const PaybillsRows = this.props.history.totals.paybills.data.map((s, i) => (
            <div
                className={classes.listItem}
                key={`item-paybills-${i}`}
            >
                <Typography
                    className={classes.listLabel}
                >
                    {s.denomination}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`$ ${numberWithCommas(s.total)}`}
                </Typography>
            </div>
        ));

        const ReturnRows = this.props.history.totals.returns.data.map((s, i) => (
            <div
                className={classes.listItem}
                key={`item-returns-${i}`}
            >
                <Typography
                    className={classes.listLabel}
                >
                    {`${s.quantity} - ${s.denomination}`}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`$ ${numberWithCommas(s.total)}`}
                </Typography>
            </div>
        ));

        const AdjustRows = this.props.history.totals.inventory.map(obj => (
            <div
                className={classes.listItem}
                key={`item-adjust-${obj.denomination}`}
            >
                <Typography
                    className={classes.listLabel}
                    style={{ width: 90 }}
                >
                    {obj.denomination.substring(0, 13)}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`${numberWithCommas(obj.start)}`}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`${numberWithCommas(obj.load)}`}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`${numberWithCommas(obj.sell)}`}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`${numberWithCommas(obj.adjust)}`}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`${numberWithCommas(obj.return)}`}
                </Typography>
                <Typography
                    className={classes.listLabel}
                >
                    {`${numberWithCommas(obj.final)}`}
                </Typography>
            </div>
        ));

        if (this.props.history.products) {
            if (this.props.history.products.length > 0) {
                this.props.history.products.forEach((p) => {
                    const i = this.props.history.totals.inventory.findIndex(el => (
                        el.denomination === p.denomination
                    ));
                    if (i === -1) {
                        const obj = (
                            <div
                                className={classes.listItem}
                                key={`item-adjust-${p.denomination}`}
                            >
                                <Typography
                                    className={classes.listLabel}
                                    style={{ width: 90 }}
                                >
                                    {p.denomination.substring(0, 13)}
                                </Typography>
                                <Typography
                                    className={classes.listLabel}
                                >
                                    {`${numberWithCommas(p.initial_stock)}`}
                                </Typography>
                                <Typography
                                    className={classes.listLabel}
                                >
                                    {0}
                                </Typography>
                                <Typography
                                    className={classes.listLabel}
                                >
                                    {0}
                                </Typography>
                                <Typography
                                    className={classes.listLabel}
                                >
                                    {0}
                                </Typography>
                                <Typography
                                    className={classes.listLabel}
                                >
                                    {0}
                                </Typography>
                                <Typography
                                    className={classes.listLabel}
                                >
                                    {`${numberWithCommas(p.stock)}`}
                                </Typography>
                            </div>
                        );
                        AdjustRows.push(obj);
                    }
                });
            }
        }

        return (
            <div>
                <Dialog
                    fullScreen
                    open = {true}
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
                            Detalle historial
                        </Typography>
                        <IconButton
                            className={classes.iconBar}
                            color="inherit"
                            onClick={this.close}
                            aria-label="Close"
                        >
                            <CloseIcon/>
                        </IconButton>
                    </AppBar>
                    <List
                        className={classes.list}
                        subheader={<li />}
                    >
                        <li className={classes.listContainer}>
                            <ul className={classes.listSubContainer}>
                                <ListItem key={`item-${0}-${0}`}>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary="Detalle de historial"
                                    />
                                </ListItem>
                                <ListItem key={`item-${0}-${1}`}>
                                    <ListItemText
                                        primary="Fecha de inicio"
                                        secondary={`${moment(this.props.initialDate).format('DD/MM/YYYY HH:mm:ss')}`}
                                    />
                                    <ListItemText
                                        primary="Fecha de cierre"
                                        secondary={`${moment(this.props.finalDate).format('DD/MM/YYYY HH:mm:ss')}`}
                                    />
                                </ListItem>
                                <ListItem key={`item-${0}-${3}`}>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary="Autos"
                                    />
                                </ListItem>
                                {CarsRows}
                                <ListItem key={`item-${0}-${4}`}>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary="Otros Servicios"
                                    />
                                </ListItem>
                                {ServiceRows}
                                <ListItem key={`item-${0}-${5}`}>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary="Productos"
                                    />
                                </ListItem>
                                {ProductRows}
                                <ListItem key={`item-${0}-${6}`}>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary="Gastos"
                                    />
                                </ListItem>
                                {SpendsRows}
                                <ListItem key={`item-${0}-${7}`}>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary="Ingresos"
                                    />
                                </ListItem>
                                {IngressesRows}
                                <ListItem key={`item-${0}-${8}`}>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary="Vales"
                                    />
                                </ListItem>
                                {PaybillsRows}
                                <ListItem key={`item-${0}-${9}`}>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary="Devoluciones De Inventario"
                                    />
                                </ListItem>
                                {ReturnRows}
                                <ListItem key={`item-${0}-${10}`}>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary="Reporte De Inventario"
                                    />
                                </ListItem>
                                <div
                                    className={classes.listItem}
                                    key="item-report"
                                >
                                    <Typography
                                        className={classes.listLabel}
                                        style={{ width: 90 }}
                                    >
                                        Producto
                                    </Typography>
                                    <Typography
                                        className={classes.listLabel}
                                    >
                                        I
                                    </Typography>
                                    <Typography
                                        className={classes.listLabel}
                                    >
                                        C
                                    </Typography>
                                    <Typography
                                        className={classes.listLabel}
                                    >
                                        V
                                    </Typography>
                                    <Typography
                                        className={classes.listLabel}
                                    >
                                        A
                                    </Typography>
                                    <Typography
                                        className={classes.listLabel}
                                    >
                                        D
                                    </Typography>
                                    <Typography
                                        className={classes.listLabel}
                                    >
                                        F
                                    </Typography>
                                </div>
                                {AdjustRows}
                            </ul>
                        </li>
                    </List>
                </Dialog>
            </div>
        );
    }
}


export default withStyles(styles, {
    withTheme: true
})(HistoryDetail);
