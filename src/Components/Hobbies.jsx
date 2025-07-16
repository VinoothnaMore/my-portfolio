function Hobbies () {
    const sectionStyle = {
        textAlign: 'center',
        color: '#4d7c0f',
        fontSize: '25px',
        marginBottom: '70px',
    };

    const imageStyle = {
        width: '50px',
        height: '50px'
    };

    const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '40px',
    marginTop: '50px',
    marginLeft: '200px',
    marginRight: '200px'
  };

    return (
        <div style={sectionStyle}>
            <h1 style={{ letterSpacing: '25px'}}>HOBBIES</h1>
            <div style={imageContainerStyle}>
                <img src={process.env.PUBLIC_URL + "/Icons/Dance.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/Drawing.png"} alt='' style={imageStyle}></img>
            </div>
        </div>
    );
}

export default Hobbies;