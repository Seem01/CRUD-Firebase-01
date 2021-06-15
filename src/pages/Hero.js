import React from 'react';
import FirebaseCrud from './FirebaseCrud';
import FirebaseUser from './FirebaseUser'
import { Button } from "semantic-ui-react";
import { BrowserRouter, Link } from 'react-router-dom';

const Hero = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Dashboard</h2>
                <Button primary onClick={handleLogout}>Logout</Button>
            </nav>
                <FirebaseCrud></FirebaseCrud>
        </section>
    )
}

export default Hero;