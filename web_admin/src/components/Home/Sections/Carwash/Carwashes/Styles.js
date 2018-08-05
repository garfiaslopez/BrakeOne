export default(theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        paddingTop: 65,
        paddingLeft: 5,
        paddingRight: 5,
        width: window.innerWidth + 2,
        height: window.innerHeight - 65,
    },
    linearProgress: {
        width: '100%'
    },
    button: {
        position: 'absolute',
        right: 0,
        bottom: 20,
        marginRight: 15,
        marginTop: 20,
        zIndex: 1,
        backgroundColor: '#2196F3',
        color: 'white'
    },
    buttonModal: {
        width: 80,
        height: 40
    }
});
