// function ProjectData() {
//   const NorthenProjects=[
//     {
//       id: "1",
//       title: "Dodoma project",
//       image: "https://www.w3schools.com/css/paris.jpg",
//       desc: "Dodoma projects: more vulnerable years my father gave me some advice that I ve been turning over in my mind ever since.",
//     },
//     {
//       id: "2",
//       title: "Arusha Project",
//       image: "https://www.w3schools.com/css/paris.jpg",
//       desc: "Arusha projects: more vulnerable years my father gave me some advice that I ve been turning over in my mind ever since.",
//     },
//     {
//       id: "3",
//       title: "Mwanza Project",
//       image: "https://www.w3schools.com/css/paris.jpg",
//       desc: "Mwanza projects: more vulnerable years my father gave me some advice that I ve been turning over in my mind ever since.",
//     },
//   ];

//   const handleProjectChange = ()=>{
//     console.log('changed');
//   }

//   return (
//     <>
//       {NorthenProjects.map((project) => (
//         <div className="col">
//           <div className="p-4">
//             <div className="card" style={{ width: "19rem" }}>
//               <img src={project.image} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <div>
//                   <h4>{project.title}</h4>
//                 </div>
//                 <p className="card-text">{project.desc}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default function Projects() {

//   return (
//     <>
//       <div
//         style={{
//           paddingTop: "5px",
//           marginLeft: "auto",
//           marginRight: "auto",
//           width: "335px",
//         }}
//       >
//         <div className="form-check form-check-inline">
//         <label className="form-check-label">Northen Project</label>
//           <input
//             className="form-check-input"
//             type="radio"
//             name="projectSelection"
//             value="northen"

//           />
//         </div>
//         <div className="form-check form-check-inline">
//         <label className="form-check-label">Southen Project</label>
//           <input
//             className="form-check-input"
//             type="radio"
//             name="projectSelection"
//             value="southen"
//           />
//         </div>
//       </div>
//       <div className="row">
//         <ProjectData />
//       </div>
//     </>
//   );
// }

import React, { ChangeEvent, useState } from "react";

function ProjectData({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <div className="col" key={project.id}>
          <div className="p-4">
            <div className="card" style={{ width: "19rem" }}>
              <img src={project.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div>
                  <h4>{project.title}</h4>
                </div>
                <p className="card-text">{project.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function Projects() {
  const [selectedProjectType, setSelectedProjectType] = useState("northen");

  const NorthenProjects = [
    {
      id: "1",
      title: "Dodoma project",
      image: "https://www.w3schools.com/css/paris.jpg",
      desc: "Dodoma projects: more vulnerable years my father gave me some advice that I ve been turning over in my mind ever since.",
    },
    {
      id: "2",
      title: "Arusha Project",
      image: "https://www.w3schools.com/css/paris.jpg",
      desc: "Arusha projects: more vulnerable years my father gave me some advice that I ve been turning over in my mind ever since.",
    },
    {
      id: "3",
      title: "Mwanza Project",
      image: "https://www.w3schools.com/css/paris.jpg",
      desc: "Mwanza projects: more vulnerable years my father gave me some advice that I ve been turning over in my mind ever since.",
    },
  ];

  const SouthenProjects = [
    {
      id: "4",
      title: "Mbeya Project",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Mbeya projects: some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "5",
      title: "Iringa Project",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Iringa projects: some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "6",
      title: "Ruvuma Project",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Ruvuma projects: some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  const handleProjectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedProjectType(e.target.value);
  };

  const projects =
    selectedProjectType === "northen" ? NorthenProjects : SouthenProjects;

  return (
    <>
      <div
        style={{
          paddingTop: "5px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "335px",
        }}
      >
        <div className="form-check form-check-inline">
          <label className="form-check-label">Northen Project</label>
          <input
            className="form-check-input"
            type="radio"
            name="projectSelection"
            value="northen"
            checked={selectedProjectType === "northen"}
            onChange={handleProjectChange}
          />
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">Southen Project</label>
          <input
            className="form-check-input"
            type="radio"
            name="projectSelection"
            value="southen"
            checked={selectedProjectType === "southen"}
            onChange={handleProjectChange}
          />
        </div>
      </div>
      <div className="row">
        <ProjectData projects={projects} />
      </div>
    </>
  );
}
