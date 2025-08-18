// import type React from "react"
// import "./WorkingProcess.css"

// interface ProcessStep {
//   icon: string
//   title: string
//   description: string
// }

// const WorkingProcess: React.FC = () => {
//   const processSteps: ProcessStep[] = [
//     {
//       icon: "/image.png?height=60&width=60",
//       title: "Result and Report",
//       description: "Enabling informed decision-making and fostering continuous improvement across various realms.",
//     },
//     {
//       icon: "/image.png?height=60&width=60",
//       title: "Activity Management",
//       description: "Focuses on optimizing project workflows, enhancing collaboration, and ensuring efficient resource.",
//     },
//     {
//       icon: "/image.png?height=60&width=60",
//       title: "Payment Process",
//       description:
//         "Authorizing the transaction, and confirming the payment to complete a purchase securely and efficiently.",
//     },
//   ]

//   return (
//     <section className="working-process">
//       <div className="working-process-overlay">
//         <div className="container">
//           <h2 className="working-process-title">The Working Process</h2>

//           <div className="process-grid">
//             {processSteps.map((step, index) => (
//               <div key={index} className="process-card">
//                 <div className="process-icon">
//                   <img src={step.icon || "/image.png"} alt={`${step.title} icon`} />
//                 </div>
//                 <h3 className="process-title">{step.title}</h3>
//                 <p className="process-description">{step.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="process-action">
//             <button className="btn btn-primary">Start New Project</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WorkingProcess
import React from 'react';
import './WorkingProcess.css';

interface ProcessItem {
  title: string;
  description: string;
}

const WorkingProcess: React.FC = () => {
  const processItems: ProcessItem[] = [
    {
      title: "Result and Report",
      description: "Existing informed decision-making and fostering continued improvement across various fields"
    },
    {
      title: "Activity Management",
      description: "Focuses on optimising context workflow, ensuring collaborative, and ensuring efficient resource"
    },
    {
      title: "Keyword Process",
      description: "Authorised the transaction, and confirming the payment to complete a particular security and efficiently."
    }
  ];

  return (
    <section className="working-process">
      <div className="container">
        <h2 className="section-title">The Working Process</h2>
        
        <div className="process-grid">
          {processItems.map((item, index) => (
            <div key={index} className="process-card">
              <h3 className="process-title">{item.title}</h3>
              <p className="process-description">{item.description}</p>
            </div>
          ))}
        </div>

        <button className="new-project-btn">
          Start New Project
        </button>
      </div>
    </section>
  );
};

export default WorkingProcess;