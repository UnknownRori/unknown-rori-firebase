import React from 'react';
import { Footer } from './components/navigation/Footer';
import { Navbar } from './components/navigation/Navbar';
import { Profile } from './components/profile/Profile';

function App() {
    return (
        <div className='min-h-screen flex'>
            <Navbar />
            <div className='wrapper'>
                <Profile />
            </div>
            <Footer />
        </div>
    );
}

export default App;
