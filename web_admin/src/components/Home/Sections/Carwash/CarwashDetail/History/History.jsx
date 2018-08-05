import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import styles from './Styles';
import IconButton from 'material-ui/IconButton';
import moment from 'moment';

import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Button from 'material-ui/Button';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';

import MonetizationOn from 'material-ui-icons/MonetizationOn'; // tickets_activos
import Receipt from 'material-ui-icons/Receipt'; // tickets
import MoneyOff from 'material-ui-icons/MoneyOff'; // gastos
import AttachMoney from 'material-ui-icons/AttachMoney'; // ingresos
import LocalOffer from 'material-ui-icons/LocalOffer'; // productos
import ContentPaste from 'material-ui-icons/ContentPaste'; // corte
import Replay from 'material-ui-icons/Replay'; // return
import { LinearProgress } from 'material-ui/Progress';

import HistoryDetail from './HistoryDetail';

import { FetchXHR } from '../../../../../../helpers/generals';


function numberWithCommas(num) {
    if (num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return 0;
}

window.__localeId__ = 'es';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            open_detail: false,
            typeOfRangeDate: 0,
            yearSelected: Number(moment().format('YYYY')),
            monthSelected: Number(moment().format('M')) - 1,
            initialDate: moment().format('YYYY-MM-DD'),
            finalDate: moment().format('YYYY-MM-DD'),
            reqInitialDate: '',
            reqFinalDate: '',
            history: {
                totals: {
                    tickets: {
                        quantity: 0,
                        total: 0
                    },
                    cars: {
                        total: 0,
                        data: []
                    },
                    services: {
                        total: 0,
                        data: []
                    },
                    products: {
                        total: 0,
                        data: []
                    },
                    spends: {
                        total: 0,
                        data: []
                    },
                    ingresses: {
                        total: 0,
                        data: []
                    },
                    paybills: {
                        total: 0,
                        data: []
                    },
                    returns: {
                        total: 0,
                        data: []
                    },
                    inventory: [],
                    diff: 0
                },
                products: []
            }
        };
        this.onClickSearch = this.onClickSearch.bind(this);
        this.handleChangeRangeDate = this.handleChangeRangeDate.bind(this);
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);

        this.values = [
            {
                'key': 'tickets',
                'label': 'Tickets',
                'color': '#2196F3',
                'icon': Receipt,
                'detail': ''
            },
            {
                'key': 'ingresses',
                'label': 'Ingresos',
                'color': '#8BC34A',
                'icon': AttachMoney,
                'detail': 'ingresses'
            },
            {
                'key': 'spends',
                'label': 'Gastos',
                'color': '#E53935',
                'icon': MoneyOff,
                'detail': 'spends'
            },
            {
                'key': 'paybills',
                'label': 'Vales',
                'color': '#FF9800',
                'icon': Receipt,
                'detail': 'paybills'
            },
            {
                'key': 'returns',
                'label': 'Devoluciones',
                'color': '#FF5722',
                'icon': Replay,
                'detail': 'returns'
            },
            {
                'key': 'diff',
                'label': 'Diferencia',
                'color': '#009688',
                'icon': ContentPaste
            }
        ];

    }

    componentDidMount() {
        //this.props.getHistory(this.props.session, this.state.initialDate, this.state.finalDate);
    }

    onClickSearch() {
        this.setState({
            loading: true
        });
        let id;
        let fd;
        if (this.state.typeOfRangeDate === 0) {
            const ds = new Date(this.state.yearSelected, this.state.monthSelected, 1, 0, 0, 0, 0);
            id = moment(ds).startOf('month');
            fd = moment(ds).endOf('month');
        } else if (this.state.typeOfRangeDate === 1) {
            id = moment(this.state.initialDate).startOf('day');
            fd = moment(this.state.finalDate).add(1,'day').startOf('day');
        }
        const dfd = moment(fd).diff(moment(id), 'days');
        if (dfd >= 0) {
            const url = `${process.env.REACT_APP_API_URL}/history`;
            let query = {
                carwash_id: this.props.session.carwash._id,
                initial_date: id,
                final_date: fd
            };
            if (this.state.typeOfRangeDate === 0) {
                query.is_monthly = true;
            }
            FetchXHR(url, 'POST', query).then((response) => {
                if (response.json.success) {
                    this.setState({
                        reqInitialDate: id,
                        reqFinalDate: fd,
                        history: response.json.data,
                        loading: false
                    });
                    console.log(response.json.data);
                } else {
                    this.setState({
                        loading: false
                    });
                    alert(response.message);
                }
            }).catch((err) => {
                console.log(err);
            });
        } else {
            //this.props.dataErrorShow('Intervalo de fechas no valido.');
        }
    }

    // FOR THE TABS METHODS:
    handleChangeRangeDate(event, value) {
        this.setState({
            typeOfRangeDate: value
        });
    }
    // FOR THE SELECTOR DATEPICKERS METHODS:
    handleChangeMonth(event) {
        this.setState({
            monthSelected: event.target.value
        });
    }
    handleChangeYear(event) {
        this.setState({
            yearSelected: event.target.value
        });
    }
    // FOR THE RANGE DATEPICKERS METHODS:
    handleChangeDate (id) {
        return (event) => {
            let newState = JSON.parse(JSON.stringify(this.state));
            newState[id] = event.target.value;
            this.setState(newState);
        }
    }

    render() {
        const { classes } = this.props;
        let textfield;
        if (this.state.typeOfRangeDate === 0) {
            textfield = (
                <form className={classes.textFieldContainer} >
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="month_id">Mes</InputLabel>
                        <Select
                            className={classes.monthSelector}
                            value={this.state.monthSelected}
                            onChange={this.handleChangeMonth}
                            inputProps={{
                                name: 'month',
                                id: 'month_id'
                            }}
                        >
                            <MenuItem value={0}>Enero</MenuItem>
                            <MenuItem value={1}>Febrero</MenuItem>
                            <MenuItem value={2}>Marzo</MenuItem>
                            <MenuItem value={3}>Abril</MenuItem>
                            <MenuItem value={4}>Mayo</MenuItem>
                            <MenuItem value={5}>Junio</MenuItem>
                            <MenuItem value={6}>Julio</MenuItem>
                            <MenuItem value={7}>Agosto</MenuItem>
                            <MenuItem value={8}>Septiembre</MenuItem>
                            <MenuItem value={9}>Octubre</MenuItem>
                            <MenuItem value={10}>Noviembre</MenuItem>
                            <MenuItem value={11}>Diciembre</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="year_id">Año</InputLabel>
                        <Select
                            className={classes.monthSelector}
                            value={this.state.yearSelected}
                            onChange={this.handleChangeYear}
                            inputProps={{
                                name: 'year',
                                id: 'year_id'
                            }}
                        >
                            <MenuItem value={2018}>2018</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            );
        } else if (this.state.typeOfRangeDate === 1) {
            textfield = (
                <form className={classes.textFieldContainer}>
                    <TextField
                        id="initialDate"
                        label="Fecha Inicial"
                        type="date"
                        value={this.state.initialDate}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChangeDate('initialDate')}
                    />
                    <TextField
                        id="finalDate"
                        label="Fecha Final"
                        type="date"
                        value={this.state.finalDate}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChangeDate('finalDate')}
                    />
                </form>
            );
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
                        $ {numberWithCommas(this.state.history.totals[el.key].total !== undefined ? this.state.history.totals[el.key].total : this.state.history.totals[el.key] )}
                    </Typography>
                    <GridListTileBar
                        className={classes.listTileBar}
                        title={`${this.state.history.totals[el.key].data !== undefined ? this.state.history.totals[el.key].data.length : this.state.history.totals[el.key].quantity ? this.state.history.totals[el.key].quantity : '' } ${el.label}`}
                        actionIcon={
                            <IconButton className={classes.icon}>
                                <el.icon style={{color: 'white'}}/>
                            </IconButton>
                        }
                    />
                </GridListTile>
            );
        });

        const stylesTab = [
            { backgroundColor: '#0D47A1', outline: '2px solid white' },
            { backgroundColor: '#0D47A1', outline: '2px solid white' }
        ];
        stylesTab[this.state.typeOfRangeDate] = { backgroundColor: '#f50057' };

        let detail = '';
        if (this.state.open_detail) {
            detail = (
                <HistoryDetail
                    initialDate={this.state.reqInitialDate}
                    finalDate={this.state.reqFinalDate}
                    history={this.state.history}
                    onClose={() => {
                        this.setState({
                            open_detail: false
                        })
                    }}
                />
            );
        }
        let loading = <div></div>
        if (this.state.loading) {
            loading = <LinearProgress color="accent" className={classes.linearProgress}/>
        }

        return (
            <div>
                {loading}
                {detail}
                <div
                    className={classes.Container}
                >
                    <Tabs
                        className={classes.tabsContainer}
                        value={this.state.typeOfRangeDate}
                        onChange={this.handleChangeRangeDate}
                        fullWidth
                        centered
                    >
                        <Tab
                            className={classes.tab}
                            style={stylesTab[0]}
                            label="MES"
                        />
                        <Tab
                            className={classes.tab}
                            style={stylesTab[1]}
                            label="RANGO"
                        />
                    </Tabs>
                    {textfield}
                    <br />
                    <div
                        className={classes.buttonsContainer}
                    >
                        <Button
                            raised
                            className={classes.button}
                            onClick={this.onClickSearch}
                        >
                            BUSCAR
                        </Button>
                    </div>
                    <div
                        className={classes.resultsContainer}
                    >
                        <GridList
                            cellHeight={window.innerHeight/3}
                            className={classes.gridList}
                        >
                            {cells}
                        </GridList>
                        <Button
                            raised
                            className={classes.bottomButton}
                            onClick={() => {
                                this.setState({
                                    open_detail: true
                                });
                            }}
                        >
                            DETALLE DE CORTE
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {
    withTheme: true
})(History);
