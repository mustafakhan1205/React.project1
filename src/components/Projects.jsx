import { useState } from 'react';
import './Projects.css';

const projects = [
  { title: 'Northstar Finance', type: 'Brand & Web Design', category: 'Web design', number: '01', color: 'project-lilac', initials: 'N.' },
  { title: 'Goodkind Market', type: 'E-commerce Experience', category: 'Development', number: '02', color: 'project-peach', initials: 'gk.' },
  { title: 'Form & Field', type: 'Digital Identity', category: 'Branding', number: '03', color: 'project-green', initials: 'F&F' }
];
const filters = ['All work', 'Web design', 'Development', 'Branding'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All work');
  const visibleProjects = activeFilter === 'All work' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading">
          <div className="section-heading section-heading-left">
            <span className="section-kicker">Selected work</span>
            <h2>Small details.<br /><span>Big difference.</span></h2>
            <p>A few concepts showing how strategy, design and development can work together.</p>
          </div>
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button key={filter} type="button" className={activeFilter === filter ? 'filter-button active' : 'filter-button'} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>
            ))}
          </div>
        </div>
        <div className="projects-grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-art ${project.color}`}>
                <div className="project-art-top"><span>CONCEPT / {project.number}</span><span>↗</span></div>
                <div className="project-art-title">{project.initials}</div>
                <div className="project-art-bottom"><span>Thoughtfully made</span><span>20—26</span></div>
              </div>
              <div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><span className="project-index">{project.number}</span></div>
            </article>
          ))}
        </div>
        <p className="project-disclaimer">These are illustrative portfolio concepts, not claims of completed client work.</p>
      </div>
    </section>
  );
}
