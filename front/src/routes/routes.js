import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './../pages/Home'
import Sobre from './../pages/Sobre'
import Pdf from './../pages/Pdf'
import Excel from './../pages/Excel'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/pdf" component={Pdf} />
                <Route path="/excel" component={Excel} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes