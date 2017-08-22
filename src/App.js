import React, { Component } from 'react';

//App Components
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './Nav';
import Cats from './Cats';
import Flowers from './Flowers';
import Rainbows from './Rainbows';
import apiKey from './config.js';
import Photos from './Photos';
import Search from './Search';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Most Glorious Flickr Gallery</h1>
        <Router>
          <div>
            <Nav/>
            <Switch location={this.props.location}>
              <Route exact path="/" component={Cats}/>
              <Route path="/cats" component={Cats}/>
              <Route path="/flowers" component={Flowers}/>
              <Route path="/rainbows" component={Rainbows}/>
              <Route exact path="/search" component={Search}/>
              <Route exact path="/:query"
                     render={({match})=> (<Photos photo={match.params.query}
                     api_key={apiKey}/>)}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
