import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  content: string[];
}

interface ProjectListProps {
  projectContent: Project[];
}

const ProjectContent: React.FC<ProjectListProps> = ({ projectContent }) => {
  useEffect(() => {
    const headings = document.querySelectorAll('.project-title');
    const listItems = document.querySelectorAll('.project-item');

    // Animate headings
    headings.forEach((heading) => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Animate list items with stagger
    listItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          delay: index * 0.1, // Staggering the animation based on the index
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [projectContent]);

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
