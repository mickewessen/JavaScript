import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Welcome1 from './components/Welcome1'
import Welcome2 from './components/Welcome2'
import Welcome3 from './components/Welcome3'
import Welcome4 from './components/Welcome4'
import Alert from './components/Alert'
import Navigation from './components/Navbar'




export default function app() {
    return (
        <div>
            <Navigation />
            <Alert />
            <Welcome1 />
            <Welcome2 />
            <Welcome3 />
            <Welcome4 />
        </div>
    )
}
