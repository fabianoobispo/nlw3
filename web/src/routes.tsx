import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OphanagesMap from './pages/OphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/app" component={OphanagesMap}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;