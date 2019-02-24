export default {
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: (window.innerWidth / 2) - 60
    },
    rowElement: {
        width: '100%',
        height: 40,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    },
    tableLayout: {
        width: '100%'
    },
    labelContainer: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    labelTitle: {
        display: 'flex',
        alignSelf: 'left',
        paddingRight: 100,
        fontSize: 20,
        fontWeight: 'bold'
    },
    labelValue: {
        display: 'flex',
        alignSelf: 'right',
        fontSize: 20,
        fontWeight: 'bold'
    },
    quantityLabel: {
        fontSize: 13,
        width: 100,
        display: 'flex',
        alignSelf: 'center'
    },
    discountLabel: {
        fontSize: 13,
        width: 120,
        display: 'flex',
        alignSelf: 'center'
    },
    rowElementQuantity: {
        width: 80,
        height: 40,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    },
    rowElementUser: {
        width: 180,
        height: 40,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    },
    rowElementPrice: {
        width: 200,
        height: 40,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    },
}