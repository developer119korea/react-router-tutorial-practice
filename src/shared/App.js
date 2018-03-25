import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from 'pages';
import Switch from 'react-router-dom/Switch';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;