// pages/_app.js
import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component


function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
