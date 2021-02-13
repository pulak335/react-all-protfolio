import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';
import Protfolio from './components/Protfolio';
import Contact from './components/Contact';


function App() {
  return (
    <Fragment>
      <CssBaseline />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/protfolio' component={Protfolio}/>
        <Route path='/contact' component={Contact}/>
        </Switch>
    </Fragment>
  );
}

export default App;
