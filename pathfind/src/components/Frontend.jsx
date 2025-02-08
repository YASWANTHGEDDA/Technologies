import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css';
export default function Frontend() {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState('Primary');


  // Function to handle tab switching
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <section id="front-end">
        <h2>Front End</h2>
        <div className="tabs">
          <button
            id="myLink1"
            className={`tablink ${activeTab === 'Primary' ? 'activeTab' : ''}`}
            onClick={() => openTab('Primary')}
          >
            Primary
          </button>
          <button
            id="myLink2"
            className={`tablink ${activeTab === 'Intermediate' ? 'activeTab' : ''}`}
            onClick={() => openTab('Intermediate')}
          >
            Intermediate
          </button>
          <button
            id="myLink3"
            className={`tablink ${activeTab === 'Advanced' ? 'activeTab' : ''}`}
            onClick={() => openTab('Advanced')}
          >
            Advanced
          </button>
        </div>

        <div id="Primary" className="tabcontent" style={{ display: activeTab === 'Primary' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <ul className="list-unstyled">
                    <li className="mb-4">
                      <h3 className="heading">HTML</h3>
                      <p>HTML is the backbone of any web project. For your pathfinder project, HTML will be used to structure the content.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Primary</span>
                      <span className="circle"></span>
                    </li>
                    <li id="con_2" className="mb-4">
                      <h3 className="heading">CSS</h3>
                      <p>CSS will be used to style your HTML elements, making your project visually appealing and enhancing user experience.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Primary</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">JS</h3>
                      <p>JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Primary</span>
                      <span className="circle"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="Intermediate" className="tabcontent" style={{ display: activeTab === 'Intermediate' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <ul className="list-unstyled">
                    <li className="mb-4">
                      <h3 className="heading">HTML</h3>
                      <p>HTML is the backbone of any web project. For your path finder project, HTML will be used to structure the content.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li id="con_2" className="mb-4">
                      <h3 className="heading">CSS</h3>
                      <p>CSS will be used to style your HTML elements, making your project visually appealing and enhancing user experience.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">JS</h3>
                      <p>JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">React (or) Vue.js</h3>
                      <p><b>REACT:</b> React is a popular JavaScript library for building dynamic user interfaces using a component-based architecture.</p>
                      <p><b>VUE.JS:</b> Vue.js is a progressive JavaScript framework for building user interfaces with a component-based architecture. It offers reactive data binding and an extensive ecosystem for efficient development.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">Bootstrap (or) Material UI</h3>
                      <p><b>BOOTSTRAP:</b> CSS framework</p>
                      <p><b>MATERIAL UI:</b> React component library</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">Version Control: Git & GitHub</h3>
                      <p><b>GIT:</b> Git is a distributed version control system that tracks changes in source code, enabling collaboration and version management.</p>
                      <p><b>GITHUB:</b> GitHub is a web-based platform that hosts Git repositories, facilitating collaboration with additional tools for issue tracking and project management.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="Advanced" className="tabcontent" style={{ display: activeTab === 'Advanced' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <ul className="list-unstyled">
                    <li className="mb-4">
                      <h3 className="heading">HTML</h3>
                      <p>HTML is the backbone of any web project. For your pathfinder project, HTML will be used to structure the content.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Advanced</span>
                      <span className="circle"></span>
                    </li>
                    <li id="con_2" className="mb-4">
                      <h3 className="heading">CSS</h3>
                      <p>CSS will be used to style your HTML elements, making your project visually appealing and enhancing user experience.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Advanced</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">JS</h3>
                      <p>JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Advanced</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">Tailwind CSS</h3>
                      <p>Tailwind builds on top of CSS, offering a utility-first approach that can speed up development and ensure consistency. Learning Tailwind can make working with UI design faster and more efficient, especially for complex projects.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Advanced</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">Angular (or) Svelte</h3>
                      <p><b>Angular:</b> AngularJS is a framework for dynamic web apps, enabling two-way data binding and dependency injection. It simplifies building single-page applications with an MVC architecture.</p>
                      <p><b>Svelte:</b> Svelte is a compiler that produces highly efficient code with small file sizes, resulting in fast and lightweight apps.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Advanced</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">Version Control: Git & GitHub</h3>
                      <p><b>GIT:</b> Git is a distributed version control system that tracks changes in source code, enabling collaboration and version management.</p>
                      <p><b>GITHUB:</b> GitHub is a web-based platform that hosts Git repositories, facilitating collaboration with additional tools for issue tracking and project management.</p>
                      <Link to="/" className="btn btn-primary">Read More</Link>
                      <span className="date d-block mt-2">Advanced</span>
                      <span className="circle"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}