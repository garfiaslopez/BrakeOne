import React, { Component, Fragment } from 'react';
import { Spin, Layout } from 'antd';
import moment from 'moment';

const { Header, Footer, Sider, Content } = Layout;

const styles = {
    header: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    layout: {
        height: window.innerHeight.toString() + 'px',
        padding: '0'
    },
    centerContainer: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        width: '320px',
        textAlign: 'center'
    },
    mainLogo:{
        width: 350,
        height: 83.1,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 40
    },
    text: {
        fontSize: 20,
    }
}

class NoInternet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout style={styles.layout}>
                <Header style={styles.header} > 
                    BrakeOne - Sin Conexión
                </Header>
                <Content>
                    <div style={styles.centerContainer}>
                        <img
                            src={process.env.REACT_APP_CDN + '/images/MainLogo.png'}
                            style={styles.mainLogo}
                            alt="enterpriseImage"
                        />
                        <div style={styles.formContainer}>
                            <Spin size="large" />
                            <p style={styles.text}>
                                Se perdió la conexión a internet, buscando reconexión.
                            </p>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    BrakeOne  © {moment().format('YYYY')}
                </Footer>
            </Layout>
        );
    }
}

export default NoInternet;
