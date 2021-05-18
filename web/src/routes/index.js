import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Books from '../views/Books';
import Authors from '../views/Authors';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/book" exact component={Books} />
                <Route path="/book/:id" exact component={Books} />
                <Route path="/author" exact component={Authors} />
                <Route path="/author/:id" exact component={Authors} />
            </Switch>
        </BrowserRouter>
    )
}

