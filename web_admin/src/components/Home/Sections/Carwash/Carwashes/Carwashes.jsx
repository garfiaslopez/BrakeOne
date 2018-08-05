import React, { Component } from 'react';
import styles from './Styles';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import { LinearProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import MoreVert from 'material-ui-icons/MoreVert';

import Slide from 'material-ui/transitions/Slide';
import { FetchXHR } from '../../../../../helpers/generals';
import AlertModal from '../../../../../helpers/AlertModal';
import CrudBase from '../../../../../helpers/CrudBase';
import AddEditModal from './AddEditModal';

class Carwashes extends CrudBase {
    constructor(props) {
        super(props);
        this.model_name_singular = 'carwash';
        this.model_name_plural = 'carwashes';
        this.titleList = 'Lista de lavaautos';
        this.category = 'Autolavado';
        this.edit_component = AddEditModal;
        this.add_component = AddEditModal;

        this.state = {
            ...this.state,
            anchorEl: null,
        }
        this.options = ['Cerrar','Editar', 'Eliminar'];

        this.renderChild = () => {
            const { classes } = this.props;
            let loading = <div></div>
            if (this.state.loading) {
                loading = <LinearProgress color="accent" className={classes.linearProgress}/>
            }
            const { anchorEl } = this.state;
            return (
                <div className={classes.container} >
                    {loading}
                    <GridList
                        cellHeight={window.innerHeight/3}
                        className={classes.gridList}
                    >
                        {this.state.data.map(obj => {
                            return (<GridListTile
                                key={obj._id}
                                onClick={(event) => {
                                    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, JSON.stringify({
                                        ...this.props.session,
                                        carwash: obj
                                    }));
                                    this.props.history.push('/carwash/' + obj._id + '/dashboard');
                                }}
                            >
                                <img src={process.env.REACT_APP_CDN + '/images/carwash.png'} alt={obj.denomination}/>
                                <GridListTileBar
                                    title={obj.denomination}
                                    actionIcon={
                                        (()=>{
                                            if (this.props.session.user.rol === 'admin') {
                                                return (
                                                    <div>
                                                        <IconButton
                                                            aria-label="More"
                                                            aria-owns={anchorEl ? 'long-menu' : null}
                                                            aria-haspopup="true"
                                                            onClick={(e) => {
                                                                this.handleClick(e, obj);
                                                                e.stopPropagation();
                                                            }}
                                                        >
                                                            <MoreVert
                                                                style={{ color: 'white' }}
                                                            />
                                                        </IconButton>
                                                        <Menu
                                                            id="long-menu"
                                                            anchorEl={anchorEl}
                                                            open={Boolean(anchorEl)}
                                                            onClose={this.handleClose}
                                                            PaperProps={{
                                                                style: {
                                                                    width: 120,
                                                                },
                                                            }}
                                                        >
                                                            {this.options.map(option => {
                                                                return(<MenuItem
                                                                    key={option}
                                                                    selected={option === 'Cerrar'}
                                                                    onClick={(e) => {
                                                                        this.selectOption(option);
                                                                        e.stopPropagation();
                                                                    }}
                                                                >
                                                                    {option}
                                                                </MenuItem>);
                                                            })}
                                                        </Menu>
                                                    </div>
                                                );
                                            }
                                        })()
                                    }
                                />
                            </GridListTile>);
                        })}
                    </GridList>
                </div>
            );
        }
    }

    selectOption = (option) => {
        if (option === 'Editar') {
            this.setState({
                anchorEl: null,
                open_edit: true
            });
        } else if (option === 'Eliminar'){
            this.setState({
                anchorEl: null,
                open_delete: true
            });
        } else {
            this.setState({
                anchorEl: null
            });
        }
    }

    handleClick = (event, obj) => {
        this.setState({
            anchorEl: event.currentTarget,
            selectedObject: obj
        });
    };

    handleClose = event => {
        this.setState({ anchorEl: null });
        event.stopPropagation();
    };
}

Carwashes.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Carwashes);
