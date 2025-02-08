import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

export default function Backend() {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState('JavaScript');

  // Function to handle tab switching
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <> 
      <section id="back-end">
        <h2>Back End</h2>
        <div className="tabs">
          <button
            className={`tablink ${activeTab === 'JavaScript' ? 'activeTab' : ''}`}
            onClick={() => openTab('JavaScript')}
          >
            JavaScript
          </button>
          <button
            className={`tablink ${activeTab === 'Java' ? 'activeTab' : ''}`}
            onClick={() => openTab('Java')}
          >
            Java
          </button>
          <button
            className={`tablink ${activeTab === 'Python' ? 'activeTab' : ''}`}
            onClick={() => openTab('Python')}
          >
            Python
          </button>
          <button
            className={`tablink ${activeTab === 'Ruby' ? 'activeTab' : ''}`}
            onClick={() => openTab('Ruby')}
          >
            Ruby
          </button>
          <button
            className={`tablink ${activeTab === 'PHP' ? 'activeTab' : ''}`}
            onClick={() => openTab('PHP')}
          >
            PHP
          </button>
        </div>

        <div id="JavaScript" className="tabcontent" style={{ display: activeTab === 'JavaScript' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">Basics Of FrontEnd</h3>
                  <p>HTML, CSS, and JavaScript</p>
                  <Link to="/">Read More</Link>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Node.js</h3>
                  <p>Node.js is an open-source and cross-platform JavaScript runtime environment.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Express.js</h3>
                  <p>Express.js is a Node.js web application framework that provides broad features for building web and mobile applications.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">MongoDB</h3>
                  <p>MongoDB is a non-relational document database that provides support for JSON-like storage.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">REST APIs</h3>
                  <p>REST APIs provide a flexible, lightweight way to integrate applications and to connect components in microservices architectures.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">React (or) Angular</h3>
                  <p><b>React:</b> React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.</p>
                  <p><b>Angular:</b> AngularJS is an open-source JavaScript framework designed to build dynamic websites and rich internet applications (RIAs).</p>
                  <Link to="/">Read More</Link>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                  <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="Java" className="tabcontent" style={{ display: activeTab === 'Java' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">Java</h3>
                  <p>Java is a versatile, object-oriented programming language known for its reliability and platform independence.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Java</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Basics of Frontend</h3>
                  <p>HTML, CSS, and JavaScript</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Java</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Spring Boot</h3>
                  <p>Spring Boot is an open-source, microservice-based Java web framework offered by Spring.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">PostgreSQL</h3>
                  <p>PostgreSQL is a powerful database for storing and managing data in web applications.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">RESTful APIs</h3>
                  <p>REST APIs provide a flexible, lightweight way to integrate applications and to connect components in microservices architectures.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Angular (or) React</h3>
                  <p><b>React:</b> React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.</p>
                  <p><b>Angular:</b> AngularJS is an open-source JavaScript framework designed to build dynamic websites and rich internet applications (RIAs).</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                  <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="Python" className="tabcontent" style={{ display: activeTab === 'Python' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">Python</h3>
                  <p>Python is a computer programming language often used to build websites and software, automate tasks, and analyze data.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Basics of Frontend</h3>
                  <p>HTML, CSS, and JavaScript</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Django (or) Flask</h3>
                  <p><b>Django:</b> Django is a high-level open-source Python web development framework for building websites.</p>
                                    <p><b>Flask:</b> Flask is a lightweight WSGI web application framework in Python that is easy to learn and use.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">SQLite</h3>
                  <p>SQLite is a self-contained, serverless SQL database engine that is highly reliable and lightweight.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">RESTful APIs</h3>
                  <p>REST APIs provide a flexible, lightweight way to integrate applications and to connect components in microservices architectures.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">React (or) Angular</h3>
                  <p><b>React:</b> React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.</p>
                  <p><b>Angular:</b> AngularJS is an open-source JavaScript framework designed to build dynamic websites and rich internet applications (RIAs).</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                  <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="Ruby" className="tabcontent" style={{ display: activeTab === 'Ruby' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">Ruby</h3>
                  <p>Ruby is an open-source programming language that emphasizes simplicity and productivity with an elegant syntax.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Ruby on Rails</h3>
                  <p>Ruby on Rails is a server-side web application framework written in Ruby that follows the model-view-controller (MVC) architecture.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">PostgreSQL</h3>
                  <p>PostgreSQL is a powerful, open-source object-relational database system known for its robustness and performance.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">RESTful APIs</h3>
                  <p>REST APIs provide a flexible, lightweight way to integrate applications and to connect components in microservices architectures.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">React (or) Angular</h3>
                  <p><b>React:</b> React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.</p>
                  <p><b>Angular:</b> AngularJS is an open-source JavaScript framework designed to build dynamic websites and rich internet applications (RIAs).</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                  <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="PHP" className="tabcontent" style={{ display: activeTab === 'PHP' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">PHP</h3>
                  <p>PHP is a popular general-purpose scripting language that is especially suited for web development.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Basics of Frontend</h3>
                  <p>HTML, CSS, and JavaScript</p>
                  <Link to="/">Read More</Link>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Laravel</h3>
                  <p>Laravel is a PHP framework for web artisans with elegant syntax and extensive features.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">MySQL</h3>
                  <p>MySQL is an open-source relational database management system.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">RESTful APIs</h3>
                  <p>REST APIs provide a flexible, lightweight way to integrate applications and to connect components in microservices architectures.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">React (or) Angular</h3>
                  <p><b>React:</b> React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.</p>
                  <p><b>Angular:</b> AngularJS is an open-source JavaScript framework designed to build dynamic websites and rich internet applications (RIAs).</p>
                  <Link to="/">Read More</Link>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                  <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                  <Link to="/">Read More</Link>
                  <span className="date">PHP</span>
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

