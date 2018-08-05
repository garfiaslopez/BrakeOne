const drawerWidth = 300;
export default(theme) => ({
    root: {
        width: '100%',
        height: window.innerHeight,
        marginTop: theme.spacing.unit * 0,
        zIndex: 1,
        overflow: 'hidden'
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    toolBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    drawerHeader: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    infoUser: {
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center'
    },
    infoUserText: {
        paddingTop: 15
    },
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%'
        }
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            height: '100%',
            width: `calc(100% - ${drawerWidth}px)`,
            marginTop: 10
        }
    },
    profilePhoto:{
        alignSelf: 'center',
        width: 60,
        height: 60,
        padding: 10
    },
    mainLogo: {
        width: 35,
        height: 35,
        paddingTop: 5,
        paddingLeft: 30,
    },
    containerTitle: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        backgroundColor: theme.palette.primary['500'],
        height: 55,
        verticalAlign: 'center'
    },
    titleDrawer: {
        color: 'white',
        paddingTop: 15,
        paddingLeft: 40
    }
});
