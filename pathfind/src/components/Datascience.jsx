import React, { useState } from 'react';
import './styles1.css';

export default function DataScience() {
  const roles = [
    {
      title: 'Data Scientist',
      roleDescription: 'Uses statistical techniques, machine learning, and data analysis to extract insights from data.',
      learningPath: [
        'Mathematics (Statistics, Probability)',
        'Programming (Python, R)',
        'Machine Learning (Supervised, Unsupervised learning)',
        'Data Visualization (Matplotlib, Seaborn)',
        'Deep Learning (TensorFlow, PyTorch)',
        'Big Data Tools (Hadoop, Spark)',
        'Cloud Computing (AWS, Azure, GCP)',
      ],
    },
    {
      title: 'Data Analyst',
      roleDescription: 'Focuses on gathering, processing, and analyzing data to provide actionable insights.',
      learningPath: [
        'Excel and SQL (for data manipulation)',
        'Data Visualization (Tableau, Power BI)',
        'Statistics (Descriptive and Inferential)',
        'Python (Pandas, NumPy)',
        'Basic Machine Learning (for predictive analytics)',
        'Reporting and Presentation skills',
      ],
    },
    {
      title: 'Machine Learning (ML) Engineer',
      roleDescription: 'Designs, develops, and implements machine learning models.',
      learningPath: [
        'Strong Programming Skills (Python, Java)',
        'Mathematics (Linear Algebra, Probability, Statistics)',
        'Machine Learning Algorithms (Regression, Decision Trees, etc.)',
        'Deep Learning (Neural Networks, TensorFlow, PyTorch)',
        'Model Deployment (Flask, FastAPI, Docker)',
        'Cloud Technologies (AWS SageMaker, GCP)',
      ],
    },
    {
      title: 'Data Engineer',
      roleDescription: 'Builds and maintains the architecture (databases, large-scale processing systems) required for data analysis.',
      learningPath: [
        'Databases (SQL, NoSQL, Hadoop, Cassandra)',
        'Data Warehousing (Redshift, BigQuery)',
        'ETL Pipelines (Apache Spark, Apache Airflow)',
        'Programming (Python, Java, Scala)',
        'Cloud Computing (AWS, Azure)',
        'Big Data Tools (Hadoop, Spark)',
      ],
    },
    {
      title: 'BI (Business Intelligence) Analyst',
      roleDescription: 'Analyzes business data to support decision-making through reporting and visualization tools.',
      learningPath: [
        'SQL and Database Management',
        'Data Visualization Tools (Tableau, Power BI)',
        'Excel (Advanced features for data analysis)',
        'Data Warehousing Concepts',
        'Business Acumen and Reporting',
      ],
    },
    {
      title: 'Statistician',
      roleDescription: 'Uses statistical methods to collect, analyze, and interpret quantitative data.',
      learningPath: [
        'Advanced Statistics (Hypothesis Testing, ANOVA)',
        'Probability Theory',
        'Programming (R, Python)',
        'Statistical Software (SPSS, SAS)',
        'Data Analysis Methods (Regression, Time Series)',
      ],
    },
    {
      title: 'Data Architect',
      roleDescription: 'Designs the structure of complex databases and how data is stored, accessed, and managed.',
      learningPath: [
        'Databases (SQL, NoSQL, Data Modeling)',
        'Data Warehousing (ETL, OLAP)',
        'Cloud Data Management (AWS, GCP, Azure)',
        'Big Data Tools (Hadoop, Spark)',
        'Architecture Design Patterns',
      ],
    },
    {
      title: 'Quantitative Analyst (Quant)',
      roleDescription: 'Uses mathematical models to assess financial markets and inform investment decisions.',
      learningPath: [
        'Advanced Mathematics (Calculus, Linear Algebra)',
        'Programming (Python, R, MATLAB)',
        'Financial Markets and Instruments',
        'Statistical Modeling',
        'Machine Learning (for financial predictions)',
      ],
    },
    {
      title: 'Data Consultant',
      roleDescription: 'Provides expert advice on how to best use data for decision-making and business strategy.',
      learningPath: [
        'Data Analysis and Visualization (SQL, Tableau, Power BI)',
        'Consulting and Communication Skills',
        'Business Strategy and Market Research',
        'Data Governance and Compliance',
        'Data Architecture and Management',
      ],
    },
    {
      title: 'Operations Analyst',
      roleDescription: 'Analyzes data to improve business operations, such as efficiency and cost reduction.',
      learningPath: [
        'Data Analysis Tools (SQL, Excel, Python)',
        'Operations Research (Queuing Theory, Linear Programming)',
        'Process Mapping and Optimization',
        'Business Acumen (Supply Chain, Inventory Management)',
        'Data Visualization (Power BI, Tableau)',
      ],
    },
    {
      title: 'Product Analyst',
      roleDescription: 'Analyzes product data to measure success and make data-driven decisions for product development.',
      learningPath: [
        'Data Analysis (SQL, Python, R)',
        'Product Lifecycle and KPIs',
        'User Research and Behavior Analytics',
        'A/B Testing and Experimentation',
        'Data Visualization Tools (Looker, Tableau)',
      ],
    },
    {
      title: 'Research Scientist',
      roleDescription: 'Conducts in-depth research using data analysis and scientific methods to solve problems and innovate.',
      learningPath: [
        'Advanced Statistics and Probability',
        'Machine Learning (for research applications)',
        'Programming (Python, R)',
        'Scientific Research Methodologies',
        'Data Analysis and Visualization (MATLAB, Jupyter)',
      ],
    },
    {
      title: 'NLP (Natural Language Processing) Engineer',
      roleDescription: 'Develops systems that can process and analyze large amounts of natural language data.',
      learningPath: [
        'Programming (Python, Java)',
        'NLP Libraries (spaCy, NLTK, Hugging Face Transformers)',
        'Machine Learning (Supervised/Unsupervised Learning)',
        'Deep Learning for NLP (BERT, GPT)',
        'Text Preprocessing Techniques (Tokenization, Stemming)',
        'Cloud Tools for NLP (AWS Comprehend, GCP NLP APIs)',
      ],
    },
    {
      title: 'Data Mining Specialist',
      roleDescription: 'Extracts patterns from large datasets using data mining techniques.',
      learningPath: [
        'Data Mining Techniques (Clustering, Association, Classification)',
        'Programming (Python, R)',
        'Databases and SQL (for querying and data extraction)',
        'Machine Learning (for predictive models)',
        'Big Data Tools (Hadoop, Spark)',
        'Statistical Methods and Data Cleaning',
      ],
    },
    {
      title: 'Data Governance Specialist',
      roleDescription: 'Ensures the quality, consistency, and security of an organization’s data.',
      learningPath: [
        'Data Governance Principles (Policies, Data Stewardship)',
        'Data Quality Management',
        'Data Privacy Regulations (GDPR, CCPA)',
        'Data Cataloging Tools (Collibra, Alation)',
        'Data Security Practices',
        'Cloud Technologies for Data Management',
      ],
    },
    {
      title: 'AI Engineer',
      roleDescription: 'Develops artificial intelligence models and systems, such as machine learning, deep learning, and natural language processing.',
      learningPath: [
        'Programming (Python, Java)',
        'Machine Learning (Supervised, Unsupervised, Reinforcement Learning)',
        'Deep Learning (Neural Networks, CNNs, RNNs)',
        'AI Frameworks (TensorFlow, PyTorch)',
        'Computer Vision or NLP (specialization areas)',
        'Cloud Tools (AWS, GCP for AI services)',
      ],
    },
    {
      title: 'Data Visualization Specialist',
      roleDescription: 'Presents complex data in graphical, interactive formats to help users understand insights.',
      learningPath: [
        'Data Visualization Tools (Tableau, Power BI, D3.js)',
        'Programming (Python, JavaScript for custom visualizations)',
        'Data Storytelling and Dashboard Design',
        'Statistics (for proper representation of data)',
        'UX/UI Design Principles for visual tools',
        'Knowledge of Data Warehousing (for pulling and visualizing data)',
      ],
    },
    {
      title: 'Big Data Engineer',
      roleDescription: 'Builds, manages, and optimizes large-scale data processing systems.',
      learningPath: [
        'Big Data Technologies (Hadoop, Spark, Kafka)',
        'Programming (Java, Scala, Python)',
        'Data Warehousing (Hive, Redshift)',
        'Cloud Computing (AWS, Azure, GCP)',
        'Data Pipeline and ETL Tools (Airflow, NiFi)',
        'NoSQL Databases (Cassandra, MongoDB)',
      ],
    },
    {
      title: 'Data Quality Analyst',
      roleDescription: 'Ensures that the data used in the organization is accurate, consistent, and reliable.',
      learningPath: [
        'Data Quality Concepts (Data Integrity, Accuracy, Completeness)',
        'Data Cleaning Techniques (Python, SQL)',
        'Data Validation Tools and Processes',
        'Data Governance Principles',
        'Data Profiling and Auditing Tools',
        'Report Generation and Documentation',
      ],
    },
    {
      title: 'Predictive Analytics Expert',
      roleDescription: 'Uses statistical techniques and machine learning to forecast future outcomes based on historical data.',
      learningPath: [
        'Statistics and Probability (for predictive modeling)',
        'Machine Learning (Supervised Learning, Regression, Time Series)',
        'Programming (Python, R)',
        'Data Analysis Tools (Excel, SQL)',
        'Predictive Analytics Tools (IBM SPSS, RapidMiner)',
        'Data Visualization (for presenting forecast results)',
      ],
    },
  ];

  const [rolesList, setRolesList] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const searchChange = (e) => {
    setRolesList(e.target.value.toLowerCase());
  };

  const filteredRoles = roles.filter((role) =>
    role.title.toLowerCase().includes(rolesList)
  );

  const handleCardClick = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRole(null);
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Data Science</h1>
          <p style={styles.description}>
            Welcome to our Data Science section where you can find resources and guides to enhance your skills.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/300" // Replace with your actual image URL
            alt="Data Science Illustration"
            style={styles.image}
          />
        </div>
      </div>
      <section id="datascience">
        <div className="container">
          <h1>Data Science Roles</h1>
          <input
            type="text"
            placeholder="Search roles..."
            value={rolesList}
            onChange={searchChange}
            className="search-input"
          />

          <div className="card-container">
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role, index) => (
                <div key={index} className="card" onClick={() => handleCardClick(role)}>
                  <h2>{role.title}</h2>
                </div>
              ))
            ) : (
              <p>No roles found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Modal for showing role details */}
      {showModal && selectedRole && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{selectedRole.title}</h2>
              <button className="close-button" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <h4>Role:</h4>
              <p>{selectedRole.roleDescription}</p>

              <h4>Learning Path:</h4>
              <ul>
                {selectedRole.learningPath.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button className="btn-close" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '50px',
    backgroundColor: '#f9f9f9', // Change to the background color you prefer
  },
  textContainer: {
    flex: 1,
    marginRight: '20px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};
