
function Education() {
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
            <h1 style={{ letterSpacing: '25px'}}>EDUCATION</h1>
            <div style={containerStyle}>
                <img src={process.env.PUBLIC_URL + "/Stevens.jpeg"} alt='' style={imageStyle}></img>
                <div style={textStyle}>
                    <h1><strong>Master of Science in Computer Science</strong></h1>
                    <h2><strong>Stevens Institute of Technology</strong></h2>
                    <p><strong>GPA: 3.85/4</strong></p>
                    <p style={{fontFamily: 'Verdana', fontSize: '15px'}}><strong>Coursework:</strong></p> 
                    <ul>
                        <li style={listStyle}><strong>Algorithms & Programming:</strong> Advance Algorithm Design & Implementation, Agile Methods for Software Development</li>
                        <li style={listStyle}><strong>Data Science & Machine Learning:</strong> Data Analysis & Machine Learning, Mathematical Foundations of Machine Learning</li>
                        <li style={listStyle}><strong>Finance & Business Tools:</strong> Advanced Excel for Finance & Accounting</li>
                        <li style={listStyle}><strong>Systems & Infrastructure:</strong> Database Management Systems, Fundamentals of Cybersecurity</li>
                        <li style={listStyle}><strong>User Experience & Interaction:</strong> Human Computer Interaction</li>
                    </ul>
                </div>
            </div>

            <div style={containerStyle}>
                <img src={process.env.PUBLIC_URL + "/GITAM.jpeg"} alt='' style={imageStyle}></img>
                <div style={textStyle}>
                    <h1><strong>Bachelor of Technology in Computer Science & Engineering</strong></h1>
                    <h2><strong>GITAM University</strong></h2>
                    <p><strong>GPA: 3.5/4</strong></p>
                    <p style={{fontFamily: 'Verdana', fontSize: '15px'}}><strong>Coursework:</strong></p>
                    <ul>
                        <li style={listStyle}><strong>Alogithms & Data Structures:</strong> Design & Analysis of Algorithms, Data Structures with Python, Optimization Techniques</li>
                        <li style={listStyle}><strong>Artificial Intelligence & Data Science:</strong> Artificial Intelligence, Data Warehousing & Mining</li>
                        <li style={listStyle}><strong>Core Computer Science Fundamentals:</strong> Engineering Mathematics</li>
                        <li style={listStyle}><strong>Networking & Security:</strong> Computer Networks, Cryptography & Network Security, Data Communications</li>
                        <li style={listStyle}><strong>Software Development & Engineering:</strong> Agile Software Development, Object Oriented Programming Through Java, Software Requirements Management, Software Testing Methodologies, Web Application Development, Problem Solving & Programming</li>
                        <li style={listStyle}><strong>Systems & Architecture:</strong> Compiler Design, Computer Organization & Architecture, Operating Systems, Cloud Computing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Education;