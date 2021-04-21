import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import MainRouting from './components/MainRouting'

function App() {
    return (
            <Router>
                <MainRouting/>
            </Router>
    );
}

export default App;
