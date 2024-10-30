import React, { useEffect } from 'react';


interface Project {
  title: string;
  content: string[];
}

interface ProjectListProps {
  projectContent: Project[];
}

const ProjectContent: React.FC<ProjectListProps> = ({ projectContent }) => {
  

  return (
    <div className="flex flex-col gap-9">
      {projectContent && projectContent.map((e, i) => (
        <div className="flex flex-col gap-2" key={i}>
          <h2 className="text-xl font-semibold project-title">{e.title}</h2>
          <ul className="w-full bg-[#232121] rounded-[15px] justify-between p-5 flex flex-col gap-3">
            {e.content.map((c, j) => (
              <li className="relative text-sm text-[#B7B7B7] ml-5 project-item" key={i + j}>
                <div className="bg-white rounded min-w-[5px] h-[5px] absolute top-2 -start-4"></div>
                {c}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectContent;
