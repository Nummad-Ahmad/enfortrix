import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Toaster } from 'react-hot-toast';
ReactDOM.render(
 <div>
    <App/>
    <Toaster />
    </div>,
    document.getElementById('root')
)