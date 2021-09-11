import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../../src/Login';
import Dashboard from '../../src/Dashboard';


const code = new URLSearchParams(window.location.search).get('code')

function Songs(){
    
    return code ? <Dashboard code={code} /> : <Login/>
}

export default Songs;