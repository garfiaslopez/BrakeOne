import { Row } from "antd";

export default {
    modalContainer: {
        width: '100%',
        height: 'calc(100vh - 120px)'
    },
    modalBodyContainer: {
        width: '100%',
        top: 0,
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
    inputElement: {
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        width: '100%'
    }
}