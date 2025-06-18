import React from 'react';

function NavigationBar() {
    return (
        <nav style={{ 
            backgroundColor: '#4d7c0f',
            padding: '25px', 
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <ul style={{
                    listStyle: 'none',
                    diaply: 'flex',
                    gap: '20px',
                    margin: 0,
                    padding: 0
                }}>
                    <li><a href='#home' style={linkStyle}>Intro</a></li>
                </ul>
            </div>
        </nav>
    );
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontweight: '500'
};

export default NavigationBar;