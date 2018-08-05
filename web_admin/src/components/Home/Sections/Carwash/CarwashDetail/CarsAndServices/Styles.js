export default theme => ({
    Container: {
        paddingTop: 56,
        display: 'flex',
        width: '100%',
        flexGrow: 1,
        margin: '0 auto',
        flexWrap: 'wrap'
    },
    subContainer: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    grid: {
        width: '100%',
        flexGrow: 1,
        margin: '0 auto'
    },
    subGrid: {
        margin: 10
    },
    ticketPaper: {
        backgroundColor: '#9E9E9E',
        height: 300,
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    ticketTimer: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 60,
    },
    ticketCar: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 40
    },
    ticketTotal: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 60
    },
    carImg: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: 200,
        height: 200
    },
    selectorButton: {
        width: 200,
        height: 50
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
    ticketPaperProducts: {
        backgroundColor: '#9E9E9E',
        height: 300,
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    buttonUp: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99999,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 10,
        boxSizing: 'border-box'
    },
    buttonDown: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 99999,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 10,
        boxSizing: 'border-box'
    },
    detailProductContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'spacce-between'
    },
    detailProductLabelRight: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 25,
        position: 'absolute',
        top: 20,
        right: 20
    },
    detailProductLabelLeft: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 20,
        position: 'absolute',
        bottom: 10,
        left: 12
    },
    list: {
        overflow: 'auto',
        height: 'calc(100vh - 135px)',
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
