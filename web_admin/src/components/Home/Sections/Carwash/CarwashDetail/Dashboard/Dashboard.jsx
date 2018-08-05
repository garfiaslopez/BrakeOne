import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Styles';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { LinearProgress } from 'material-ui/Progress';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Refresh from 'material-ui-icons/Refresh';
import Button from 'material-ui/Button';

import IconButton from 'material-ui/IconButton';
import MonetizationOn from 'material-ui-icons/MonetizationOn'; // tickets_activos
import Receipt from 'material-ui-icons/Receipt'; // tickets
import MoneyOff from 'material-ui-icons/MoneyOff'; // gastos
import AttachMoney from 'material-ui-icons/AttachMoney'; // ingresos
import LocalOffer from 'material-ui-icons/LocalOffer'; // productos
import ContentPaste from 'material-ui-icons/ContentPaste'; // corte
import Replay from 'material-ui-icons/Replay'; // return

import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import CloseIcon from 'material-ui-icons/Close';

import Slide from 'material-ui/transitions/Slide';
import MenuItem from 'material-ui/Menu/MenuItem';
import { FetchXHR } from '../../../../../../helpers/generals';
import AlertModal from '../../../../../../helpers/AlertModal';

function numberWithCommas(num) {
    if (num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
        return 0;
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            totals: {},
            loading: false,
            open: false,
            open_detail: false,
            open_detail_data: '',
            alert: false,
            selectedCarwash: {},
            active_tickets: 0,
            carwash: {
                denomination: '',
                address: '',
                phone: '',
                type: ''
            }
        }

        this.values = [
            {
                'key': 'tickets',
                'subKey': 'total_tickets',
                'label': 'Tickets',
                'color': '#2196F3',
                'icon': Receipt,
                'detail': ''
            },
            {
                'key': 'ingresses',
                'subKey': 'total_ingresses',
                'label': 'Ingresos',
                'color': '#8BC34A',
                'icon': AttachMoney,
                'detail': 'ingresses'
            },
            {
                'key': 'spends',
                'subKey': 'total_spends',
                'label': 'Gastos',
                'color': '#E53935',
                'icon': MoneyOff,
                'detail': 'spends'
            },
            {
                'key': 'paybills',
                'subKey': 'total_paybills',
                'label': 'Vales',
                'color': '#FF9800',
                'icon': Receipt,
                'detail': 'paybills'
            },
            {
                'key': 'returns',
                'subKey': 'total_returns',
                'label': 'Devoluciones',
                'color': '#FF5722',
                'icon': Replay,
                'detail': 'returns'
            },
            {
                'key': '',
                'subKey': 'diff',
                'label': 'Diferencia',
                'color': '#009688',
                'icon': ContentPaste
            }
        ];
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
        this.handleChangeTextField = this.handleChangeTextField.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({
            loading: true
        });
        const url = process.env.REACT_APP_API_URL + '/history/dashboard';
        const POSTDATA = {
            'carwash_id': this.props.session.carwash._id
        }
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                FetchXHR(process.env.REACT_APP_API_URL + '/carwash/' + this.props.session.carwash._id, 'GET').then((responseCarwash) => {
                    if (responseCarwash.json.success) {
                        this.setState({
                            totals: response.json.totals,
                            data: response.json.data,
                            active_tickets: responseCarwash.json.carwash.active_tickets,
                            loading: false
                        });
                    } else {
                        this.setState({
                            totals: response.json.totals,
                            data: response.json.data,
                            loading: false
                        });
                    }
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

        let loading = '';
        if (this.state.loading) {
            loading = <LinearProgress color="accent" className={classes.linearProgress}/>
        }
        let alert = '';
        if (this.state.alert) {
            alert = <AlertModal msg={this.state.alertMsg} onRequestClose={this.handleCloseAlert}/>
        }

        const cells = this.values.map((el) => {
            return (
                <GridListTile
                    key={el.key}
                    style={{backgroundColor: el.color}}
                    onClick={() => {
                        if (el.detail !== '') {
                            this.setState({
                                open_detail: true,
                                open_detail_data: el.key
                            });
                        }
                    }}
                >
                    <Typography
                        className={classes.listTile}
                        type="title"
                        color="inherit"
                        noWrap
                    >
                        $ {numberWithCommas(this.state.totals[el.subKey])}
                    </Typography>
                    <GridListTileBar
                        className={classes.listTileBar}
                        title={`${this.state.totals[el.key] !== undefined ? this.state.totals[el.key] : '' } ${el.label}`}
                        actionIcon={
                            <IconButton className={classes.icon}>
                                <el.icon style={{color: 'white'}}/>
                            </IconButton>
                        }
                    />
                </GridListTile>
            );
        });

        let DetailRows = [];
        if (this.state.open_detail_data != '') {
            DetailRows = this.state.data[this.state.open_detail_data].map((el) => (
                <div>
                    <ListItem>
                        <ListItemText primary={`${el.denomination}`} secondary={el.total}/>
                    </ListItem>
                    <Divider/>
                </div>
            ));
        }

        return (
            <div className={classes.container} >
                {loading}
                <Dialog
                    fullScreen
                    open = {this.state.open_detail}
                    onClose = {() => {
                        this.setState({
                            open_detail: false,
                            open_detail_data: ''
                        });
                    }}
                    transition = {Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                onClick={() => {
                                    this.setState({
                                        open_detail: false,
                                        open_detail_data: ''
                                    });
                                }}
                                aria-label="Close"
                            >
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Detalle
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <List className={classes.listDetail}>
                        {DetailRows}
                    </List>
                </Dialog>
                <Button
                    fab
                    color="inherit"
                    aria-label="reload"
                    className={classes.buttonFab}
                    onClick={this.getData}
                    disabled={this.state.loading}
                >
                    <Refresh />
                </Button>
                <GridList
                    cellHeight={window.innerHeight/3}
                    className={classes.gridList}
                >
                    <GridListTile
                        key={'active_tickets'}
                        style={{backgroundColor: '#3F51B5'}}
                    >
                        <Typography
                            className={classes.listTile}
                            type="title"
                            color="inherit"
                            noWrap
                        >
                            {numberWithCommas(this.state.active_tickets)}
                        </Typography>
                        <GridListTileBar
                            className={classes.listTileBar}
                            title={`Tickets activos`}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <MonetizationOn style={{color: 'white'}}/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                    {cells}
                </GridList>
                {alert}
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);
