function Home() {
    const HomeStyle = {
        backgroundColor: '#fff7ed',
        color: 'black',
        fontSize: '20px',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
        flexDirection: 'row'
    };

    const textStyle = {
        flex: 1,
        paddingLeft: '10rem',
        color: '#374151'
        
    };
    
    const imageWrapperStyle ={
        flex: '0 0 60px'
    };

    const imageStyle ={
        maxWidth: '250px',
        height: 'auto',
        borderRadius: '400px',
        marginLeft: '100px'
    };

    return (
        <div style={HomeStyle}>

            <div style={imageWrapperStyle}>
                <img src={process.env.PUBLIC_URL + "/ProfilePic.png"} alt='' style={imageStyle}/>
            </div>

            <div style={textStyle}>
                <h1>Hello and Welcome to My Portfolio!</h1>
                <h1>I’m Vinoothna More, a recent Computer Science graduate passionate about building meaningful tech. Everything you need to know about me is just a scroll away.</h1>
            </div> 

        </div>
    );
}

export default Home;