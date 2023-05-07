import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './scss/style.scss'

import { Header } from './components/Header.js'
import { Navigation } from './components/Navigation.js'
import { Footer } from './components/Footer.js'

document.querySelector('#header').innerHTML = Header();
document.querySelector('#navigation').innerHTML = Navigation();
document.querySelector('#footer').innerHTML = Footer();
