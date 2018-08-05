import React, { Component, Fragment } from 'react';
import styles from './Styles';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {

    }

    render() {
        return (
            <Fragment> HELLO IM HOME </Fragment>
        )
    }
}

Home.propTypes = {

};

export default Home;
