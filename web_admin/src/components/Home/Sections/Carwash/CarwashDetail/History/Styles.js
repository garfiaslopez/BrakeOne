const drawerWidth = 300;
export default(theme) => ({
    Container: {
        paddingTop: 56,
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    tabsContainer: {
        minHeight: 40,
        height: 40,
        width: '100%',
        backgroundColor: '#0D47A1'
    },
    tab: {
        height: 40,
        color: 'white'
    },
    textFieldContainer: {
        paddingTop: 10,
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    formControl: {
        width: '45%'
    },
    monthSelector: {
        color: '#0D47A1'
    },
    buttonsContainer: {
        width: '100%',
        height: 60,
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 150,
        height: 30,
        backgroundColor: '#2196F3',
        color: 'white'
    },
    resultsContainer: {
        width: '100%'
    },
    gridList: {
        width: '100%',
        height: window.innerHeight - 256
    },
    listTileBar: {
        fontFamily: 'Roboto-bold',
        fontSize: 20,
        textAlign: 'center'
    },
    listTile: {
        color: 'white',
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontSize: 30,
        textAlign: 'center'
    },
    bottomButton: {
        height: 40,
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#2196F3',
        color: 'white',
        width: '100%'
    },
    linearProgress: {
        width: '100%'
    },
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 48
    },
    titleBar: {
        display: 'flex',
        justifyContent: 'center'
    },
    iconBar: {
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translate(0px, -50%)'
    },
    list: {
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxWidth: 'none',
        maxHeight: 'none'
    },
    listContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '& ul': {
            maxWidth: 'none',
            maxHeight: 'none'
        }
    },
    listSubContainer: {
        maxWidth: 'none',
        maxHeight: 'none',
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 24
    },
    listLabel: {
        fontSize: 16,
        fontFamily: 'Roboto'
    }
});
