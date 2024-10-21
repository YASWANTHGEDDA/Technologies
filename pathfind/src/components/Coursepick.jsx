import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function Coursepick() {
  return (
    <>
        <div className="box-container">
            <div className="box"><a href="#front-end">Front End</a></div>
            <div className="box"><a href="#back-end">Back End</a></div>
            <div className="box"><a href="#full-stack">Full Stack</a></div>
            {/* <div className="box"><a href="#datascience">Data Science</a></div> */}
            <div className="box"><Link to="/datascience">Data Science</Link></div>
        </div>
    </>
  ) 
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './styles.css';

// const roles = [
//   { name: 'Data Scientist', path: '/role/data-scientist' },
//   { name: 'Data Analyst', path: '/role/data-analyst' },
//   { name: 'ML Engineer', path: '/role/ml-engineer' },
//   { name: 'Data Engineer', path: '/role/data-engineer' },
//   { name: 'BI Analyst', path: '/role/bi-analyst' },
//   { name: 'Statistician', path: '/role/statistician' },
//   { name: 'Data Architect', path: '/role/data-architect' },
//   { name: 'Quantitative Analyst', path: '/role/quant' },
//   { name: 'Data Consultant', path: '/role/data-consultant' },
//   { name: 'Operations Analyst', path: '/role/operations-analyst' },
//   { name: 'Product Analyst', path: '/role/product-analyst' },
//   { name: 'Research Scientist', path: '/role/research-scientist' },
//   { name: 'NLP Engineer', path: '/role/nlp-engineer' },
//   { name: 'Data Mining Specialist', path: '/role/data-mining-specialist' },
//   { name: 'Data Governance Specialist', path: '/role/data-governance-specialist' },
//   { name: 'AI Engineer', path: '/role/ai-engineer' },
//   { name: 'Data Visualization Specialist', path: '/role/data-visualization-specialist' },
//   { name: 'Big Data Engineer', path: '/role/big-data-engineer' },
//   { name: 'Data Quality Analyst', path: '/role/data-quality-analyst' },
//   { name: 'Predictive Analytics Expert', path: '/role/predictive-analytics-expert' },
//   { name: 'Cognitive Computing Engineer', path: '/role/cognitive-computing-engineer' },
//   { name: 'Fraud Analyst', path: '/role/fraud-analyst' },
//   { name: 'Customer Insights Analyst', path: '/role/customer-insights-analyst' },
//   { name: 'Business Analytics Consultant', path: '/role/business-analytics-consultant' },
//   { name: 'Data Privacy Officer', path: '/role/data-privacy-officer' },
//   { name: 'Marketing Data Analyst', path: '/role/marketing-data-analyst' },
// ];

// export default function Coursepick() {
//   return (
//     <><div className="box-container">
//       {roles.map(role => (
//         <div className="box" key={role.name}>
//           <Link to={role.path}>{role.name}</Link>
//         </div>
//       ))}
//     </div>
//       <div className="box-container">
//         <div className="box"><a href="#front-end">Front End</a></div>
//         <div className="box"><a href="#back-end">Back End</a></div>
//         <div className="box"><a href="#full-stack">Full Stack</a></div>
//         <div className="box"><a href="#datascience">Data Science</a></div>
//       </div>
//     </>
//   );
// }
