import React, { Component } from 'react';
import { FetchXHR } from './generals';
import AlertModal from './AlertModal';
import DeleteConfirm from './DeleteConfirm';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import UpIcon from 'material-ui-icons/ArrowDropUp';
import DownIcon from 'material-ui-icons/ArrowDropDown';

import { LinearProgress } from 'material-ui/Progress';

class CrudBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_add: false,
            open_edit: false,
            open_delete: false,
            loading: false,
            alert: false,
            selectedObject: {},
            data: [],
            alertMsg: '',
            carwash: props.session.carwash || {}
        }

        this.del_component = DeleteConfirm;
        this.numberWithCommas = (num) => {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        this.getData = this.getData.bind(this);
        this.onConfirmAddEdit = this.onConfirmAddEdit.bind(this);
        this.onConfirmDelete = this.onConfirmDelete.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
        this.openAlert = this.openAlert.bind(this);
        this.moveObj = this.moveObj.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({
            loading: true
        });
        const url = process.env.REACT_APP_API_URL + '/' + this.model_name_plural;
        const POSTDATA = {
            'limit': 100,
            'page': 1
        }
        if (this.props.session.carwash) {
            POSTDATA.carwash_id = this.props.session.carwash._id;
        } else {
            if (this.props.session.user.rol !== 'admin') {
                POSTDATA.account_id = this.props.session.user.account_id;
            }
        }

        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
                    data: response.json[this.model_name_plural].docs,
                    loading: false
                });
            } else {
                this.openAlert(response.message);
            }
        }).catch((onError) => {
            console.log(onError);
            this.openAlert( onError.message);
        });
    }

    onConfirmAddEdit(newObj) {
        const objToSave = JSON.parse(JSON.stringify(newObj));
        console.log(objToSave);
        if(this.state.open_add) { // save Object
            console.log("ADD");
            const url = process.env.REACT_APP_API_URL + '/' + this.model_name_singular;
            let POSTDATA = {
                ...objToSave
            }
            if (this.props.session.carwash) {
                POSTDATA.carwash_id = this.props.session.carwash._id
            } else {
                if (!POSTDATA.account_id) {
                    POSTDATA.account_id = this.props.session.user.account_id
                }
            }
            FetchXHR(url, 'POST', POSTDATA).then((response) => {
                if (response.json.success) {
                    const newData = JSON.parse(JSON.stringify(this.state.data));
                    newData.unshift(response.json.obj);
                    let newState = {
                        data: newData,
                        open_add: false,
                        selectedObject: {}
                    }
                    // si es en car o service o product, we need update the order array:
                    if (this.model_name_singular === 'car' || this.model_name_singular === 'service' || this.model_name_singular === 'product') {
                        const actualCarwash = JSON.parse(JSON.stringify(this.state.carwash));
                        actualCarwash['order_' + this.model_name_plural].push(response.json.obj._id);
                        newState.carwash = actualCarwash;
                    }
                    this.setState(newState);
                } else {
                    this.openAlert(response.message);
                }
            }).catch((onError) => {
                console.log(onError);
                this.openAlert(onError.message);
            });
        } else if (this.state.open_edit) { // edit object
            console.log("EDIT");
            const url = process.env.REACT_APP_API_URL + '/' + this.model_name_singular + '/' + this.state.selectedObject._id;
            let POSTDATA = {
                ...objToSave
            }
            if (this.props.session.carwash) {
                POSTDATA.carwash_id = this.props.session.carwash._id
            } else {
                if (!POSTDATA.account_id) {
                    POSTDATA.account_id = this.props.session.user.account_id
                }
            }
            FetchXHR(url, 'PUT', POSTDATA).then((response) => {
                if (response.json.success) {
                    const newData = JSON.parse(JSON.stringify(this.state.data));
                    const i = newData.findIndex((el)=>(el._id === this.state.selectedObject._id));
                    newData[i] = response.json.obj;
                    this.setState({
                        data: newData,
                        open_edit: false,
                        selectedObject: {}
                    });
                } else {
                    this.openAlert(response.message);
                }
            }).catch((onError) => {
                console.log(onError);
                this.openAlert(onError.message);
            });
        }
    }

    moveObj(places) { // to the left
        const obj = JSON.parse(JSON.stringify(this.state.selectedObject));
        let data = [];
        if (this.state.carwash) {
            if (this.state.carwash['order_' + this.model_name_plural]) {
                if (this.state.carwash['order_' + this.model_name_plural].length > 0) {
                    data = JSON.parse(JSON.stringify(this.state.carwash['order_' + this.model_name_plural]));
                } else {
                    data = JSON.parse(JSON.stringify(this.state.data)).map((o)=>(o._id));
                }
            } else {
                data = JSON.parse(JSON.stringify(this.state.data)).map((o)=>(o._id));
            }
        } else {
            data = JSON.parse(JSON.stringify(this.state.data)).map((o)=>(o._id));
        }
        const index = data.findIndex((o) => (o === obj._id));
        if (index !== -1 && index >= 0) {
            const newIndex = index + places;
            if (newIndex >= 0 && newIndex < data.length) {
                const removed = data.splice(index, 1)[0];
                data.splice(newIndex, 0, removed);
                const url = process.env.REACT_APP_API_URL + '/carwash/' + this.props.session.carwash._id;
                let POSTDATA = {};
                POSTDATA['order_' + this.model_name_plural] = data;
                FetchXHR(url, 'PUT', POSTDATA).then((response) => {
                    if (response.json.success) {
                        this.setState({
                            carwash: response.json.obj
                        });
                    } else {
                        this.openAlert(response.message);
                    }
                }).catch((onError) => {
                    console.log(onError);
                    this.openAlert(onError.message);
                });

            }

        }
    }

    onConfirmDelete() {
        const id = this.state.selectedObject._id;
        console.log("DELETE");
        const url = process.env.REACT_APP_API_URL + '/' + this.model_name_singular + '/' + this.state.selectedObject._id;
        console.log(url);
        FetchXHR(url, 'DELETE').then((response) => {
            if (response.json.success) {
                const newData = JSON.parse(JSON.stringify(this.state.data));
                const i = newData.findIndex((el)=>(el._id === this.state.selectedObject._id));
                if (i!=-1) {
                    newData.splice(i, 1);
                }
                let newState = {
                    data: newData,
                    open_delete: false,
                    selectedObject: {}
                };
                // si es en car o service o product, we need delete on the order array:
                if (this.model_name_singular === 'car' || this.model_name_singular === 'service' || this.model_name_singular === 'product') {
                    const actualCarwash = JSON.parse(JSON.stringify(this.state.carwash));
                    const j = actualCarwash['order_' + this.model_name_plural].findIndex((el)=>(el._id === this.state.selectedObject._id));
                    if (j != -1) {
                        actualCarwash['order_' + this.model_name_plural].splice(j, 1);
                    }
                    newState.carwash = actualCarwash;
                }
                this.setState(newState);
            } else {
                this.openAlert(response.message);
            }
        }).catch((onError) => {
            console.log(onError);
            this.openAlert(onError.message);
        });
    }

    onCloseModal() {
        this.setState({
            open_add: false,
            open_edit: false,
            open_delete: false
        });
    }

    openAlert(msg) {
        this.setState({
            alert: true,
            alertMsg: msg
        });
    }

    handleCloseAlert() {
        this.setState({
            alert: false,
            alertMsg: ''
        });
    }

    render() {

        let loading = <div></div>
        if (this.state.loading) {
            loading = <LinearProgress color="accent" style={{ width: '100%' }}/>
        }

        let alert = <div></div>
        if (this.state.alert) {
            alert = <AlertModal msg={this.state.alertMsg} onRequestClose={this.handleCloseAlert}/>
        }

        let add = <div></div>
        if (this.state.open_add) {
            add = (
                <this.add_component
                    session={this.props.session}
                    category={this.category}
                    onClose={()=>{ this.onCloseModal(); }}
                    onConfirm={(newObj) => { this.onConfirmAddEdit(newObj); }}
                />
            );
        }

        let edit = <div></div>
        if (this.state.open_edit) {
            edit = (
                <this.edit_component
                    session={this.props.session}
                    category={this.category}
                    obj={this.state.selectedObject}
                    onClose={()=>{ this.onCloseModal(); }}
                    onConfirm={(newObj) => { this.onConfirmAddEdit(newObj); }}
                />
            );
        }

        let del = <div></div>
        if (this.state.open_delete) {
            del = (
                <this.del_component
                    session={this.props.session}
                    onClose={()=>{ this.onCloseModal(); }}
                    onConfirm={() => { this.onConfirmDelete(); }}
                />
            );
        }
        let addButton = <div></div>
        if (((this.props.session.user.rol === 'admin' || this.props.session.user.rol === 'manager') &&  this.model_name_singular !== 'carwash') || this.props.session.user.rol === 'admin') {
            addButton = (
                <Button
                    key={`button-add-${this.category}`}
                    fab
                    color="inherit"
                    aria-label={`button-add-${this.category}`}
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 20,
                        marginRight: 15,
                        zIndex: 1,
                        backgroundColor: '#43A047',
                        color: 'white'

                    }}
                    onClick={() => {
                        this.setState({
                            open_add: true
                        });
                    }}
                >
                    <AddIcon />
                </Button>
            );
        }

        let editButton = <div></div>
        if ((this.state.selectedObject._id && this.model_name_singular !== 'carwash') && (this.props.session.user.rol === 'admin' || this.props.session.user.rol === 'manager')) {
            editButton = (
                <Button
                    key={`button-edit-${this.category}`}
                    fab
                    color="inherit"
                    aria-label={`button-edit-${this.category}`}
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 20,
                        marginRight: 85,
                        zIndex: 1,
                        backgroundColor: '#FB8C00',
                        color: 'white'
                    }}
                    onClick={() => {
                        this.setState({
                            open_edit: true
                        });
                    }}
                >
                    <EditIcon />
                </Button>
            );
        }

        let deleteButton = <div></div>
        if ((this.state.selectedObject._id && this.model_name_singular !== 'carwash') && (this.props.session.user.rol === 'admin' || this.props.session.user.rol === 'manager')) {
            deleteButton = (
                <Button
                    key={`button-delete-${this.category}`}
                    fab
                    color="inherit"
                    aria-label={`button-delete-${this.category}`}
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 20,
                        marginRight: 155,
                        zIndex: 1,
                        backgroundColor: '#e53935',
                        color: 'white'
                    }}
                    onClick={() => {
                        this.setState({
                            open_delete: true
                        });
                    }}
                >
                    <DeleteIcon />
                </Button>
            );
        }

        let upButton = <div></div>
        if ((this.state.selectedObject._id && (this.model_name_singular === 'car' || this.model_name_singular === 'service' || this.model_name_singular === 'product')) && (this.props.session.user.rol === 'admin' || this.props.session.user.rol === 'manager')) {
            upButton = (
                <Button
                    key={`button-up-${this.category}`}
                    fab
                    color="inherit"
                    aria-label={`button-up-${this.category}`}
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 20,
                        marginRight: 225,
                        zIndex: 1,
                        backgroundColor: '#757575',
                        color: 'white'
                    }}
                    onClick={() => {
                        this.moveObj(-1);
                    }}
                >
                    <UpIcon />
                </Button>
            );
        }

        let downButton = <div></div>
        if ((this.state.selectedObject._id && (this.model_name_singular === 'car' || this.model_name_singular === 'service' || this.model_name_singular === 'product')) && (this.props.session.user.rol === 'admin' || this.props.session.user.rol === 'manager')) {
            downButton = (
                <Button
                    key={`button-down-${this.category}`}
                    fab
                    color="inherit"
                    aria-label={`button-down-${this.category}`}
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 20,
                        marginRight: 295,
                        zIndex: 1,
                        backgroundColor: '#757575',
                        color: 'white'
                    }}
                    onClick={() => {
                        this.moveObj(1);
                    }}
                >
                    <DownIcon />
                </Button>
            );
        }

        return (
            <div>
                {loading}
                {addButton}
                {editButton}
                {deleteButton}
                {upButton}
                {downButton}
                {this.renderChild()}
                {alert}
                {add}
                {edit}
                {del}
            </div>
        );
    }
}

export default CrudBase;
