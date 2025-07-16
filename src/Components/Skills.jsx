function Skills () {
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
            <h1 style={{ letterSpacing: '25px'}}>SKILLS</h1>
            <div style={imageContainerStyle}>
                <img src={process.env.PUBLIC_URL + "/Icons/Python.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/Java.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/SQL.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/HTML.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/CSS.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/JavaScript.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/Django.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/Bootstrap.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/React.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/GitHub.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/Docker.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/Excel.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/Tableau.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/Notion.png"} alt='' style={imageStyle}></img>
                <img src={process.env.PUBLIC_URL + "/Icons/Agile.jpg"} alt='' style={imageStyle}></img>
            </div>
        </div>
    );
}

export default Skills;