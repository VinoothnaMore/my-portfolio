function Experience () {
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

    const imageStyle = {
        width: '250px',
        height: '250px',
        marginRight: '50px',
        marginLeft: '40px'
    };

    const textStyle = {
        textAlign: 'left',
        color: '#374151',
        fontSize: '20px',
        marginRight: '20px'
    };

    const listStyle = {
        fontFamily: 'Verdana',
        fontSize: '15px',
        marginBottom: '10px'
    };

    return (
        <div style={sectionStyle}>
            <h1 style={{ letterSpacing: '25px'}}>EXPERIENCE</h1>
            <div style={containerStyle}>
                <img src={process.env.PUBLIC_URL + "/Stevens.jpeg"} alt='' style={imageStyle}></img>
                <div style={textStyle}>
                    <h1><strong>Data & Strategy Analyst</strong></h1>
                    <h2><strong>Stevens Institute of Technology</strong></h2>
                    <p>10 months</p>
                    <ul>
                        <li style={listStyle}>Improved operational efficiency by managing budgets, reducing food waste by 10%, and implementing
cost-efficiency strategies that increased revenue by 25% every quarter.</li>
                        <li style={listStyle}>Generated over 40 detailed financial and royalty reports using Excel and Tableau to support executive
decision-making and precise performance tracking.</li>
                        <li style={listStyle}>Increased sales of key products by 20% by identifying top-performing items and executing targeted marketing
campaigns based on customer purchasing trends.</li>
                        <li style={listStyle}>Collaborated with cross-functional teams to streamline operations and implement data-driven strategies,
resulting in a 15% increase in internal efficiency and business outcomes.</li>
                    </ul>
                </div>
            </div>

            <div style={containerStyle}>
                <img src={process.env.PUBLIC_URL + "/Tessrac.jpeg"} alt='' style={imageStyle}></img>
                <div style={textStyle}>
                    <h1><strong>Software Development Intern </strong></h1>
                    <h2><strong>Tessrac Innovations</strong></h2>
                    <p> 3 months</p>
                    <ul>
                        <li style={listStyle}>Built and deployed an interactive web application, improving user experience and functionality.</li>
                        <li style={listStyle}>Designed modular front-end components that reduced front-end bugs by 80% and improved code
maintainability.</li>
                        <li style={listStyle}>Resolved backend integration issues involving APIs, database queries, and authentication modules, enhancing
the performance and scalability of key features by 30%.</li>
                        <li style={listStyle}>Collaborated within an Agile team environment, utilizing sprint planning and retrospectives to ensure alignment
with SDLC processes, project objectives, and code quality standards.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;