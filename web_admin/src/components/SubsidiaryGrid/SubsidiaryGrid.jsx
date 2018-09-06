import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';

import { 
    Row, 
    Col,
    Layout,
    Spin
} from 'antd';
import moment from 'moment';
import styles from './Styles';

const Footer = Layout.Footer;
const Header = Layout.Header;
const Content = Layout.Content;

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calculateDistance(lon1, lat1, lon2, lat2) {
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
}

class SubsidiaryGrid extends Component {

    selectSubsidiary = (subsidiary) => {
        //save on local and send to main;
        const toSave = { 
            ...this.props.session,
            subsidiary
        };
        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, JSON.stringify(toSave));
        this.props.history.push('/home');
    }
    
    render() {
        if (this.props.coords) {
            const cols = [];
            this.props.session.user.subsidiary_id.forEach((subsidiary, index) => {
                let distance = calculateDistance(
                    this.props.coords.longitude,
                    this.props.coords.latitude,
                    subsidiary.location.coordinates[0],
                    subsidiary.location.coordinates[1]
                );
                if (distance <= 7) {
                    cols.push(
                        <Col 
                            key={`subsidiary_${index}`} 
                            span={6}
                            style={styles.rowCol}
                            onClick={()=>{
                                this.selectSubsidiary(subsidiary);
                            }}
                        >
                            <div>{subsidiary.denomination}</div>
                        </Col>
                    );
                }
            });
            return (
                <Layout style={styles.layout}>
                    <Header style={styles.header} > 
                        Selecciona la sucursal
                    </Header>
                    <Content>
                        <div style={styles.centerContainer}>
                            <Row
                                justify="center"
                                align="middle"
                                gutter={{ xs: 8, sm: 16, md: 24, lg: 36 }}
                                style={styles.rowContainer}
                            >
                                    {cols}
                            </Row>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        BrakeOne  © {moment().format('YYYY')}
                    </Footer>
                </Layout>
            );
        } else {
            return (
                <Layout style={styles.layout}>
                    <Header style={styles.header} > 
                        Localizando computadora...
                    </Header>
                    <Content>
                        <div style={styles.centerContainer}>
                            <Spin size="large" />
                            <p>Favor de aceptar la localización del navegador, sino aparece favor de pulsar F5 o abrir en otro navegador web.</p>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        BrakeOne  © {moment().format('YYYY')}
                    </Footer>
                </Layout>
            );
        }
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 15000,
})(SubsidiaryGrid);