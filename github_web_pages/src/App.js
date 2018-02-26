import React from 'react';

// Dependence's
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

// App Components
import Home from './components';

const App = () => (
        <BrowserRouter>
          <div>

            <Route path='/' component={Home} />

          </div>
        </BrowserRouter>
    );

export default App;
