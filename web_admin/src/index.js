import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './reset.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import indigo from 'material-ui/colors/indigo';
import { FetchXHR } from './helpers/generals';
import {
    Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import CarwashDetail from './components/Home/Sections/Carwash/CarwashDetail/CarwashDetail';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './helpers/NotFound';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const history = createBrowserHistory();
const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: indigo,
        error: red,
    }
});

class PrivateHandler extends Component {
    constructor(props) {
        super(props);
        const initialRender = (
            <div style={{ height: 1000, backgroundColor: '#2196F3', padding: 50 }}>
                <div className="loader"></div>
                <p className="label"> Iniciando Admin </p>
            </div>
        );
        this.state = {
            toRender: initialRender
        };
        this.validateSession = this.validateSession.bind(this);
    }

    componentDidMount() {
        this.validateSession(this.props.comp);
    }

    componentWillReceiveProps(nextProps) {
        this.validateSession(nextProps.comp);
    }

    validateSession(ComponentToRender) {
        const session = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE));
        if (session) {
            const POSTDATA = { username: session.user.username, password: session.user.password};
            const url = process.env.REACT_APP_API_URL + '/authenticate';
            FetchXHR(url, 'POST', POSTDATA).then((response) => {
                if (response.json.success) {
                    if (session.carwash) {
                        FetchXHR(process.env.REACT_APP_API_URL + '/carwash/' + session.carwash._id, 'GET').then((response) => {
                            if (response.json.success) {
                                session.carwash = response.json.carwash;
                                const continueObj = (<ComponentToRender session={session} {...this.props}/>);
                                this.setState({
                                    toRender: continueObj
                                });
                            }
                        });
                    } else {
                        const continueObj = <ComponentToRender session={session} {...this.props}/>;
                        this.setState({
                            toRender: continueObj
                        });
                    }
                } else {
                    const redirect = (<Redirect to={{
                        pathname: '/login',
                        state: { from: this.props.location }
                    }}/>);
                    this.setState({
                        toRender: redirect
                    });
                }
            });
        } else {
            const redirect = (<Redirect to={{
                pathname: '/login',
                state: { from: this.props.location }
            }}/>);
            this.setState({
                toRender: redirect
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.toRender}
            </div>
        );
    }
}
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={ (props) => {
            return(<PrivateHandler comp={Component} {...props} />);
        }}/>
    );
};

const initialView = () => {
    return (
        <Redirect to={{
            pathname: '/home'
        }}/>
    );
}

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path="/index.html" component={initialView}/>
                <PrivateRoute exact path="/" component= {initialView}/>
                <Route path="/login" component={Login} />

                <PrivateRoute exact path="/home" component={Home}/>
                <PrivateRoute exact path="/home/:menu" component={Home}/>

                <PrivateRoute exact path="/carwash" component={CarwashDetail}/>
                <PrivateRoute exact path="/carwash/:carwash_id" component={CarwashDetail}/>
                <PrivateRoute exact path="/carwash/:carwash_id/:menu" component={CarwashDetail}/>

                <Route path="/*" component={NotFound} />
            </Switch>
        </Router>
    </MuiThemeProvider>
,document.getElementById('root'));


registerServiceWorker();
