import $ from 'jquery';
import 'bootstrap';
import '../scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);