import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import CarsContainer from './CarsContainer';
import ServicesContainer from './ServicesContainer';
import styles from './Styles';

class CarsAndServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedView: 0
        }
        this.handleChangeOfView = this.handleChangeOfView.bind(this);
    }

    handleChangeOfView(event, value) {
        this.setState({
            selectedView: value
        });
    }

    render() {
        const { classes } = this.props;
        const stylesTab = [
            { backgroundColor: '#0D47A1', outline: '2px solid white', color: 'white' },
            { backgroundColor: '#0D47A1', outline: '2px solid white', color: 'white' }
        ];
        stylesTab[this.state.selectedView] = { backgroundColor: '#f50057', color: 'white' };

        return (
            <div
                className={classes.Container}
            >
                <Tabs
                    className={classes.tabsContainer}
                    value={this.state.selectedView}
                    onChange={this.handleChangeOfView}
                    fullWidth
                    centered
                >
                    <Tab
                        className={classes.tab}
                        label="AUTOS"
                        style={stylesTab[0]}
                    />
                    <Tab
                        className={classes.tab}
                        label="SERVICIOS"
                        style={stylesTab[1]}
                    />
                </Tabs>
                <SwipeableViews
                    index={this.state.selectedView}
                    style={{ width: '100%' }}
                >
                    <div
                        className={classes.subContainer}
                    >
                        <CarsContainer
                            key={'carContainer'}
                            session={this.props.session}
                            history={this.props.history}
                        />
                    </div>
                    <div
                        className={classes.subContainer}
                    >
                        <ServicesContainer
                            key={'serviceContainer'}
                            session={this.props.session}
                            history={this.props.history}
                        />
                    </div>
                </SwipeableViews>

            </div>
        );
    }
}

export default withStyles(styles, {
    withTheme: true
})(CarsAndServices);
