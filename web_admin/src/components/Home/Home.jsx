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
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import MenuIcon from 'material-ui-icons/Menu';
import Menu from './MenuList';
import { MenuItem } from 'material-ui/Menu';

class Home extends Component {
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
    closeSession() {
        localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE);
        this.props.history.push('/login');
    }
    render() {
        const { classes, theme } = this.props;
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
                    <div className={classes.containerTitle}>
                        <img
                            className={classes.mainLogo}
                            src={process.env.REACT_APP_CDN + '/images/MainLogo.png'}
                            alt={'ProfilePhoto'}
                        />
                        <Typography
                            className={classes.titleDrawer}
                            type="title"
                            noWrap>
                            Carwash
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
                <List>
                    {MenuItems}
                    <MenuItem
                        onClick={() => {
                            this.closeSession();
                        }}
                    >
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Cerrar Sesión" />
                    </MenuItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap>
                                {ActualView.title}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            type="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
