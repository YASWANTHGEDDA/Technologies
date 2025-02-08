import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

export default function Fullstack() {
    const [activeTab, setActiveTab] = useState('MERN');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };
    return ( 
        <>
            <section id="full-stack">
                <h2>Full Stack</h2>
                <div className="tabs">
                    <button
                        className={`tablink ${activeTab === 'MERN' ? 'activeTab' : ''}`}
                        onClick={() => openTab('MERN')}
                    >
                        MERN FullStack
                    </button>
                    <button
                        className={`tablink ${activeTab === 'MEAN' ? 'activeTab' : ''}`}
                        onClick={() => openTab('MEAN')}
                    >
                        MEAN FullStack
                    </button>
                    <button
                        className={`tablink ${activeTab === 'Python FullStack' ? 'activeTab' : ''}`}
                        onClick={() => openTab('Python FullStack')}
                    >
                        Python FullStack
                    </button>
                    <button
                        className={`tablink ${activeTab === 'Java FullStack' ? 'activeTab' : ''}`}
                        onClick={() => openTab('Java FullStack')}
                    >
                        Java FullStack
                    </button>
                    <button
                        className={`tablink ${activeTab === 'Ruby FullStack' ? 'activeTab' : ''}`}
                        onClick={() => openTab('Ruby FullStack')}
                    >
                        Ruby FullStack
                    </button>
                    <button
                        className={`tablink ${activeTab === 'PHP FullStack' ? 'activeTab' : ''}`}
                        onClick={() => openTab('PHP FullStack')}
                    >
                        PHP FullStack
                    </button>
                </div>

                {/* MERN FullStack */}
                <div id="MERN" className="tabcontent" style={{ display: activeTab === 'MERN' ? 'block' : 'none' }}>
                    <div className="main">
                        <div className="container">
                            <ul>
                                <li>
                                    <h3 className="heading">Front End</h3>
                                    <p><b style={{ color: 'crimson' }}>HTML&nbsp;:&nbsp;</b>HTML is a markup language for the web that defines the structure of web pages. </p>
                                    <p><b style={{ color: 'crimson' }}>CSS&nbsp;:&nbsp;</b>CSS will be used to style your HTML elements.</p>
                                    <p><b style={{ color: 'crimson' }}>JS&nbsp;:&nbsp;</b>JavaScript is an object-oriented programming language.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">MERN</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Front-End Library</h3>
                                    <p><b style={{ color: 'crimson' }}>React.js : </b>React is a JavaScript-based UI development library.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Primary</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Advanced frontend technologies (optional)</h3>
                                    <p><b style={{ color: 'crimson' }}>Bootstrap (or) Tailwind CSS&nbsp;:&nbsp;</b></p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Primary</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">NodeJs</h3>
                                    <p>Node.js is an open-source and cross-platform JavaScript runtime environment.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">JS</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">ExpressJs</h3>
                                    <p>Express is a Node.js web application framework that provides broad features for building web and mobile applications.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">JS</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">MongoDB</h3>
                                    <p>MongoDB is a non-relational document database that provides support for JSON-like storage.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">JS</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">REST APIs</h3>
                                    <p>REST APIs provide a flexible, lightweight way to integrate applications and connect components in microservices architectures.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">JS</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Git & GitHub</h3>
                                    <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                                    <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* MEAN FullStack */}
                <div id="MEAN" className="tabcontent" style={{ display: activeTab === 'MEAN' ? 'block' : 'none' }}>
                    <div className="main">
                        <div className="container">
                            <ul>
                                <li>
                                    <h3 className="heading">Front End</h3>
                                    <p><b style={{ color: 'crimson' }}>HTML&nbsp;:&nbsp;</b>HTML is a markup language for the web that defines the structure of web pages.</p>
                                    <p><b style={{ color: 'crimson' }}>CSS&nbsp;:&nbsp;</b>CSS will be used to style your HTML elements.</p>
                                    <p><b style={{ color: 'crimson' }}>JS&nbsp;:&nbsp;</b>JavaScript is an object-oriented programming language.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">MEAN</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Front-End Framework</h3>
                                    <p><b style={{ color: 'crimson' }}>Angular.js : </b>AngularJS is an open-source JavaScript framework designed to build dynamic websites and rich internet applications (RIAs).</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Primary</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Advanced frontend technologies (optional)</h3>
                                    <p><b style={{ color: 'crimson' }}>Bootstrap (or) Tailwind CSS&nbsp;:&nbsp;</b></p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Primary</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">NodeJs</h3>
                                    <p>Node.js is an open-source and cross-platform JavaScript runtime environment.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">JS</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">ExpressJs</h3>
                                    <p>Express is a Node.js web application framework that provides broad features for building web and mobile applications.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">JS</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">MongoDB</h3>
                                    <p>MongoDB is a non-relational document database that provides support for JSON-like storage.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">JS</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">REST APIs</h3>
                                    <p>REST APIs provide a flexible, lightweight way to integrate applications and connect components in microservices architectures.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">JS</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Git & GitHub</h3>
                                    <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                                    <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Python FullStack */}
                <div id="Python FullStack" className="tabcontent" style={{ display: activeTab === 'Python FullStack' ? 'block' : 'none' }}>
                    <div className="main">
                        <div className="container">
                            <ul>
                                <li>
                                    <h3 className="heading">Front End</h3>
                                    <p><b style={{ color: 'crimson' }}>HTML&nbsp;:&nbsp;</b>HTML is the backbone of any web project.</p>
                                    <p><b style={{ color: 'crimson' }}>CSS&nbsp;:&nbsp;</b>CSS will be used to style your HTML elements.</p>
                                    <p><b style={{ color: 'crimson' }}>JS&nbsp;:&nbsp;</b>JavaScript is an object-oriented programming language.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Python</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Backend</h3>
                                    <p><b style={{ color: 'crimson' }}>Python&nbsp;:&nbsp;</b>Python is a programming language that lets you work quickly and integrate systems more effectively.</p>
                                    <p><b style={{ color: 'crimson' }}>Django&nbsp;:&nbsp;</b>Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Databases</h3>
                                    <p>PostgreSQL, MongoDB, MySQL, SQLite</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">REST APIs</h3>
                                    <p>REST APIs provide a flexible, lightweight way to integrate applications and connect components in microservices architectures.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Git & GitHub</h3>
                                    <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                                    <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Java FullStack */}
                <div id="Java FullStack" className="tabcontent" style={{ display: activeTab === 'Java FullStack' ? 'block' : 'none' }}>
                    <div className="main">
                        <div className="container">
                            <ul>
                                <li>
                                    <h3 className="heading">Front End</h3>
                                    <p><b style={{ color: 'crimson' }}>HTML&nbsp;:&nbsp;</b>HTML is a markup language for the web that defines the structure of web pages.</p>
                                    <p><b style={{ color: 'crimson' }}>CSS&nbsp;:&nbsp;</b>CSS will be used to style your HTML elements.</p>
                                    <p><b style={{ color: 'crimson' }}>JS&nbsp;:&nbsp;</b>JavaScript is an object-oriented programming language.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Java</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Backend</h3>
                                    <p><b style={{ color: 'crimson' }}>Java : </b>Java is a high-level programming language developed by Sun Microsystems.</p>
                                    <p><b style={{ color: 'crimson' }}>Spring Framework : </b>Spring is a popular Java-based framework for building enterprise-level applications.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Databases</h3>
                                    <p>PostgreSQL, MongoDB, MySQL, SQLite</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">REST APIs</h3>
                                    <p>REST APIs provide a flexible, lightweight way to integrate applications and connect components in microservices architectures.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Git & GitHub</h3>
                                    <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                                    <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ruby FullStack */}
                <div id="Ruby FullStack" className="tabcontent" style={{ display: activeTab === 'Ruby FullStack' ? 'block' : 'none' }}>
                    <div className="main">
                        <div className="container">
                            <ul>
                                <li>
                                    <h3 className="heading">Front End</h3>
                                    <p><b style={{ color: 'crimson' }}>HTML&nbsp;:&nbsp;</b>HTML is a markup language for the web that defines the structure of web pages.</p>
                                    <p><b style={{ color: 'crimson' }}>CSS&nbsp;:&nbsp;</b>CSS will be used to style your HTML elements.</p>
                                    <p><b style={{ color: 'crimson' }}>JS&nbsp;:&nbsp;</b>JavaScript is an object-oriented programming language.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Ruby</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Backend</h3>
                                    <p><b style={{ color: 'crimson' }}>Ruby on Rails : </b>Ruby on Rails is a server-side web application framework written in Ruby under the MIT License.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Databases</h3>
                                    <p>PostgreSQL, MongoDB, MySQL, SQLite</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">REST APIs</h3>
                                    <p>REST APIs provide a flexible, lightweight way to integrate applications and connect components in microservices architectures.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Git & GitHub</h3>
                                    <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                                    <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* PHP FullStack */}
                <div id="PHP FullStack" className="tabcontent" style={{ display: activeTab === 'PHP FullStack' ? 'block' : 'none' }}>
                    <div className="main">
                        <div className="container">
                            <ul>
                                <li>
                                    <h3 className="heading">Front End</h3>
                                    <p><b style={{ color: 'crimson' }}>HTML&nbsp;:&nbsp;</b>HTML is a markup language for the web that defines the structure of web pages.</p>
                                    <p><b style={{ color: 'crimson' }}>CSS&nbsp;:&nbsp;</b>CSS will be used to style your HTML elements.</p>
                                    <p><b style={{ color: 'crimson' }}>JS&nbsp;:&nbsp;</b>JavaScript is an object-oriented programming language.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">PHP</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Backend</h3>
                                    <p><b style={{ color: 'crimson' }}>PHP&nbsp;:&nbsp;</b>PHP is a popular general-purpose scripting language that is especially suited to web development.</p>
                                    <p><b style={{ color: 'crimson' }}>Laravel&nbsp;:&nbsp;</b>Laravel is a web application framework with expressive, elegant syntax.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Databases</h3>
                                    <p>PostgreSQL, MongoDB, MySQL, SQLite</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">REST APIs</h3>
                                    <p>REST APIs provide a flexible, lightweight way to integrate applications and connect components in microservices architectures.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">Git & GitHub</h3>
                                    <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                                    <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                                    <Link to="/" >Read More</Link>
                                    <span className="date">Advanced</span>
                                    <span className="circle"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}