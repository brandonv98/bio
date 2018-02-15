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
      <div className="App">
        <BrowserRouter>
          <div>

            <Route path='/' component={Nav} />
            <Route path='/' component={Home} />
            
          </div>
        </BrowserRouter>
      </div>
    );

export default App;
