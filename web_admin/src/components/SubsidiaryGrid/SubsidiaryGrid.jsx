import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';

import { 
    Row,
    Col,
    Layout,
    Spin,
    Icon,
    Button
} from 'antd';
import moment from 'moment';
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';

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

    constructor(props) {
        super(props);

        this.state = {
            loading_subsidiaries: false,
            subsidiaries: []
        }

        this.selectSubsidiary = this.selectSubsidiary.bind(this);
        this.getSubsidiaries = this.getSubsidiaries.bind(this);
    }

    componentDidMount() {
        this.getSubsidiaries();
    }

    getSubsidiaries() {
        this.setState({
			loading_subsidiaries: true,
		});
		const url = process.env.REACT_APP_API_URL + '/subsidiarys';
        const POSTDATA = {
            limit: 100,
			page: 1
		}
        POSTDATA['account_id'] = this.props.session.user.account_id;
        
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
					subsidiaries: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
					})),
					total_docs: response.json.data.total,
                    loading_subsidiaries: false
                });
            } else {
				console.log(response.message);
				this.setState({
					loading_subsidiaries: false,
					error: response.message
				});
            }
        }).catch((onError) => {
			console.log(onError);
			this.setState({
				loading_subsidiaries: false,
				error: onError.message
			});
        });
    }

    selectSubsidiary(subsidiary) {
        //save on local and send to main;
        const toSave = { 
            ...this.props.session,
            subsidiary
        };
        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, JSON.stringify(toSave));
        this.props.history.push('/home');
    }
    
    render() {
        if (this.props.coords && this.state.subsidiaries.length > 0) {
            // filter subsidiaries objects:
            let subsidiaries = Object.assign([], this.state.subsidiaries);
            if (this.props.session.user.rol !== 'admin') {
                subsidiaries = this.state.subsidiaries.filter((subsidiary) => {
                    let distance = calculateDistance(
                        this.props.coords.longitude,
                        this.props.coords.latitude,
                        subsidiary.location.coordinates[0],
                        subsidiary.location.coordinates[1]
                    );
                    if (distance <= 7) {
                        return true;
                    }
                    return false;
                });
            }

            //convert to react objs.
            const cols = [];
            subsidiaries.forEach((subsidiary, index) => {
                cols.push(
                    <Col 
                        key={`subsidiary_${index}`} 
                        span={6}
                        style={styles.rowCol}
                        onClick={()=>{
                            this.selectSubsidiary(subsidiary);
                        }}
                    >
                        <p style={styles.labelGrid} >{subsidiary.denomination}</p>
                    </Col>
                );
            });

            if (subsidiaries.length > 0) {
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
                                    gutter={16}
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
                            No hay sucursales cerca
                        </Header>
                        <Content>
                            <div style={styles.centerContainer}>
                                <Icon 
                                    type="frown"
                                    style={styles.iconEmpty}
                                />
                                <p style={styles.label}> Lamentablemente no se ha encontrado una sucursal cercana a ti, revisa que las coordenadas sean correctas al momento de dar de alta una sucursal o contacta con tu admnistrador.</p>
                                <Button
                                    type="primary"
                                    icon="reload"
                                    style={styles.backButton}
                                    onClick={() => {
                                        window.location.reload();
                                    }}
                                >
                                    Volver a buscar
                                </Button>
                                <Button
                                    type="primary"
                                    icon="login"
                                    style={styles.backButton}
                                    onClick={() => {
                                        this.props.history.replace('/login');
                                    }}
                                >
                                    Regresar a login
                                </Button>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            BrakeOne  © {moment().format('YYYY')}
                        </Footer>
                    </Layout>
                );
            }
        } else {
            return (
                <Layout style={styles.layout}>
                    <Header style={styles.header} > 
                        Localizando computadora...
                    </Header>
                    <Content>
                        <div style={styles.centerContainer}>
                            <Spin size="large" />
                            <p style={styles.label}>Favor de aceptar la localización del navegador, sino aparece favor de pulsar F5 o abrir en otro navegador web.</p>
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