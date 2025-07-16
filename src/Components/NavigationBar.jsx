import React from 'react';

function NavigationBar() {
    return (
        <nav style={{ 
            backgroundColor: '#4d7c0f',
            padding: '25px', 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }}>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '50px',
                    margin: 0,
                    padding: 0
                }}>
                    <li><a href='#home' style={linkStyle}>Intro</a></li>
                    <li><a href='#education' style={linkStyle}>Education</a></li>
                    <li><a href='#experience' style={linkStyle}>Experience</a></li>
                    <li><a href='#projects' style={linkStyle}>Projects</a></li>
                    <li><a href='#skills' style={linkStyle}>Skills</a></li>
                    <li><a href='#hobbies' style={linkStyle}>Hobbies</a></li>
                    <li><a href='#contact' style={linkStyle}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

const linkStyle = {
    color: '#ffd54f',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '20px'
};

export default NavigationBar;