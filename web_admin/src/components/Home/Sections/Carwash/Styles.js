export default(theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        paddingTop: 60,
        paddingLeft: 5,
        paddingRight: 5,
        width: window.innerWidth + 2,
        height: window.innerHeight,
    },
    linearProgress: {
        width: '100%'
    },
    header: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'fixed',
        width: window.innerWidth,
        height: 50,
        backgroundColor: theme.palette.primary['500'],
        zIndex: 1
    },
    subHeader: {
        color: '#fff'
    },
    button: {
        position: 'absolute',
        right: 0,
        bottom: 20,
        marginRight: 15,
        marginTop: 15,
        backgroundColor: '#2196F3',
        color: 'white'
    },
    buttonModal: {
        width: 80,
        height: 40
    }
});
