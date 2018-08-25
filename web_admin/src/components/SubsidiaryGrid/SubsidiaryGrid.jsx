import React, { Component } from 'react';
import { 
    Row, 
    Col,
    Layout
} from 'antd';
import moment from 'moment';
import styles from './Styles';

const Footer = Layout.Footer;
const Header = Layout.Header;
const Content = Layout.Content;

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
        const cols = [];
        for(let i=0;i<10;i++) {
            this.props.session.user.subsidiary_id.map((subsidiary, index) => {
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
            });
        }
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
                    Brake One  © {moment().format('YYYY')}
                </Footer>
            </Layout>
        );
    }
}

export default SubsidiaryGrid;