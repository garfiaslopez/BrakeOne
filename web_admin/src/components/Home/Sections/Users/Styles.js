export default theme => ({
    list: {
        overflow: 'auto',
        position: 'relative',
        paddingTop: 56,
        height: 'calc(100vh - 56px)',
    },
    buttonModal: {
        width: 80,
        height: 40
    },
    buttonList: {
        width: '100%',
        height: 20,
    },
    buttonsContainer: {
        paddingTop: 10,
    },
    formControl: {
        width: '100%'
    },
    rolSelector: {
        color: '#0D47A1'
    },
    listDetail: {
        paddingTop: 60,
        overflow: 'auto'
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
    label: {
        paddingTop: 20,
        color: '#0D47A1',
        fontFamily: 'roboto'
    },
    chipsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    chip: {
        margin: 5
    }
});
