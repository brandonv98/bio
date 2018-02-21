import React from 'react';

// Dependence's
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Home from './components';
import Nav from './components/Nav';

const App = () => (
        <BrowserRouter>

            {/* <Route path='/' component={Nav} /> */}
            <Route path='/' component={Home} />


        </BrowserRouter>
    );

export default App;
