import { Row } from "antd";

export default {
    modalContainer: {
        width: '100%',
        height: 'calc(100vh - 120px)',
        overflowY: 'scroll'
    },
    modalBodyContainer: {
        width: '100%',
        top: 0,
    },
    modalInBodyContainer: {
        height: '100%'
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputsRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 24,
    },
    inputsColumnContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputElement: {
        marginLeft: 10,
        marginRight: 10,
        width: '100%'
    },
    cardContainer: {
        width: '100%',
        marginLeft: 10,
        marginRight: 10,
    },
    cardBody: {
        padding: 0,
    },
    cardInitialText: {
        margin: 24,
    },
    grid_element: {
        height: 50,
        width: '25%',
        padding: 0,
        paddingRight: 10,
        paddingLeft: 10,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    inputSearch: {
        width: 400
    },
    inputSearchCard: {
        display: 'flex',
        alignSelf: 'center',
        width: '80%',
        height: 35,
        marginLeft: 10,
    },
    label_title: {
        fontWeight: 'bold'
    },
    label_value: {

    }
}