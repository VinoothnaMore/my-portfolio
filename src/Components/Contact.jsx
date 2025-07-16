function Contact() {
    const sectionStyle = {
        textAlign: 'center',
        color: '#4d7c0f',
        fontSize: '25px',
        marginBottom: '70px'
    };
    
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const iconContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
        marginTop: '20px'
    };

    const iconStyle = {
        width: '70px',
        height: 'auto',
        cursor: 'pointer'
    };

    return (
        <div style={sectionStyle}>
            <h1 style={{ letterSpacing: '25px'}}>CONTACT</h1>
            <div style={containerStyle}>
                <div style={iconContainerStyle}>
                    <a href="mailto:vinoothnamore@gmail.com">
                    <img src={process.env.PUBLIC_URL + "/Icons/Email.png"} alt="Email" style={iconStyle} /></a>
                    <a href="https://www.linkedin.com/in/vinoothna-more-5845561b8/" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/Icons/LinkedIn.png"} alt="LinkedIn" style={iconStyle} /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
