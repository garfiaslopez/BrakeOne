export default (theme) => ({
    containerStyle: {
        backgroundColor: '#2196F3',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
    },
    centerContainer: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    mainLogo:{
        width: 200,
        height: 200,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 10
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
        height: 50,
        alignSelf: 'center',
        color: '#fff',
    },
    inputTextField: {
        color: '#fff',
        textAlign: 'center'
    },
    underlineTextField: {
        color: '#fff'
    },
    button: {
        width: 300,
        height: 50,
        alignSelf: 'center'
    }
});
