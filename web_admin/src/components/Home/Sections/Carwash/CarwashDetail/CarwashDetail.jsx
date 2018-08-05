import React, { Component } from 'react';
import styles from './Styles';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import AccountCircle from 'material-ui-icons/AccountCircle';
import ArrowBack from 'material-ui-icons/ArrowBack';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import MenuIcon from 'material-ui-icons/Menu';
import Menu from './MenuList';
import { MenuItem } from 'material-ui/Menu';

class CarwashDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            selectedView: this.props.match.params.menu || 'carwashes'
        };
        this.menu = Menu[this.props.session.user.rol];
        this.getData = this.getData.bind(this);
        this.changeMenu = this.changeMenu.bind(this);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.backToHome = this.backToHome.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    getData() {

    }

    changeMenu(key) {
        this.setState({
            selectedView: key,
            mobileOpen: !this.state.mobileOpen
        });
    }
    backToHome() {
        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, JSON.stringify({
            ...this.props.session,
            carwash: null
        }));
        this.props.history.push('/home');
    }
    render() {
        const { classes, theme } = this.props;

        console.log("ON PARENT CARWASH DETAIL CONTAINER");
        console.log(this.props);

        const ActualView = this.menu.find((el) => {
            return el.key === this.state.selectedView;
        });

        const MenuItems = this.menu.map((m) => {
            const Icon = m.icon;
            return (
                <MenuItem
                    key={m.key}
                    onClick={() => {
                        this.changeMenu(m.key);
                    }}
                    selected={(() => {
                        if (m.key === ActualView.key) {
                            return true;
                        }
                        return false;
                    })()}
                >
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                    <ListItemText primary={m.title} />
                </MenuItem>
            );
        });

        const drawer = (
            <div>
                <div className={classes.drawerHeader} >
                    <div
                        className={classes.containerTitle}
                        onClick={this.backToHome}
                    >
                        <img
                            className={classes.mainLogo}
                            src={process.env.REACT_APP_CDN + '/images/MainLogo.png'}
                            alt={'ProfilePhoto'}
                        />
                        <Typography
                            className={classes.titleDrawer}
                            type="title"
                            noWrap>
                            {this.props.session.carwash.denomination}
                        </Typography>
                    </div>
                    <div className={classes.infoUser}>
                        <img
                            className={classes.profilePhoto}
                            src={process.env.REACT_APP_CDN + '/images/profile.png'}
                            alt={'ProfilePhoto'}
                        />
                        <div className={classes.infoUserText}>
                            <Typography type="body2" noWrap>
                                {this.props.session.user.name}
                            </Typography>
                            <Typography type="body2" noWrap>
                                {this.props.session.user.rol}
                            </Typography>
                        </div>
                    </div>
                </div>
                <Divider/>
                <MenuItem
                    onClick={this.backToHome}
                >
                    <ListItemIcon>
                        <ArrowBack />
                    </ListItemIcon>
                    <ListItemText primary="Regresar" />
                </MenuItem>
                <Divider/>
                <List>
                    {MenuItems}
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar className={classes.toolBar}>
                            <IconButton
                                color="contrast"
                                aria-label="back to home"
                                onClick={this.backToHome}
                                className={classes.navIconHide}
                            >
                                <ArrowBack/>
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap>
                                {ActualView.title}
                            </Typography>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            type="temporary"
                            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                            open={this.state.mobileOpen}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            onRequestClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                                {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown implementation="css">
                        <Drawer type="permanent" open classes={{
                            paper: classes.drawerPaper
                        }}>
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        <ActualView.component
                            session={this.props.session}
                            history={this.props.history}
                        />
                    </main>
                </div>
            </div>
        );
    }
}

CarwashDetail.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CarwashDetail);
