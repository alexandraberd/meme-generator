import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Meme from './components/Meme';

function App() {
    return (
        <div className="meme-generator">
            <Navbar />
            <Meme />
        </div>
    );
}

export default App;
