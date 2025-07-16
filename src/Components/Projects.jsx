function Projects () {
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

    const textStyle = {
        textAlign: 'left',
        color: '#374151',
        fontSize: '20px',
        marginRight: '20px'
    };

    const listStyle = {
        fontFamily: 'Verdana',
        fontSize: '15px',
        marginLeft: '140px',
        marginRight: '130px',
        marginBottom: '10px'
    };

    return (
        <div style={sectionStyle}>
            <h1 style={{ letterSpacing: '25px'}}>PROJECTS</h1>
            <div style={containerStyle}>
                <div style={textStyle}>
                    <h2><strong><center>AI - Powered Cervical Cancer Risk Assessment</center></strong></h2>
                    <ul>
                        <li style={listStyle}>Applied advanced data analysis techniques and machine learning algorithms to improve the accuracy of
cervical cancer risk prediction.</li>
                        <li style={listStyle}>Engineered and proposed the integration of a novel colposcopy-based diagnostic method into existing
prediction frameworks, leading to a 15% improvement in the model’s ability to detect early-stage abnormalities.</li>
                        <li style={listStyle}>Trained and validated the model, achieving 94% precision, significantly enhancing model reliability.</li>
                        <li style={listStyle}>Improved patient diagnostic accuracy by minimizing false negatives by 21% through the fusion of CNN-based
models with conventional diagnostics.</li>
                    </ul>
                </div>
            </div>

            <div style={containerStyle}>
                <div style={textStyle}>
                    <h2><strong><center>Blood Bank Management with Microsoft Azure</center></strong></h2>
                    <ul>
                        <li style={listStyle}>Developed a user-friendly website using Django, HTML, and Bootstrap, establishing a vital platform for
streamlining blood donations and requests, automating 40% of manual processes.</li>
                        <li style={listStyle}>Deployed the application on Microsoft Azure, ensuring availability, scalability, and reliable access, and
reducing processing time by 35%.</li>
                    </ul>
                </div>
            </div>

            <div style={containerStyle}>
                <div style={textStyle}>
                    <h2><strong><center>Web-Based Library Management System</center></strong></h2>
                    <ul>
                        <li style={listStyle}>Created an online library portal using HTML, Bootstrap, and MySQL, providing 24/7 access to a diverse
collection of books and articles.</li>
                        <li style={listStyle}>Enhanced user experience by implementing an intuitive interface, enabling effective search functionality, and
facilitating easier access to information.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;