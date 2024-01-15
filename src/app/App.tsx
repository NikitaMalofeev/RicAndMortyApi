import React from 'react';
import './styles/App.css';
import './styles/reset.css';
import { PageCharacters } from '../pages/PageCharacters/ui/PageCharacters';
import { Header } from '../widgets/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <PageCharacters />
        </div>
    );
}

export default App;
