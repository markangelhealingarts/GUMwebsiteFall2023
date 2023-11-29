import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar />

            <main>
                <div className="flex justify-center p-5">
                    <div className="w-full max-w-4xl min-w-min bg-gray-100 p-5 shadow-md rounded-lg">
                        {children}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Layout;