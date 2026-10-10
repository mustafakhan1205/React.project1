import './Services.css';

const services = [
  { number: '01', icon: '✳', title: 'UI/UX Design', description: 'Clear, thoughtful interfaces that make complex journeys feel simple and intuitive.', tags: ['Research', 'Prototyping'] },
  { number: '02', icon: '⌘', title: 'Web Development', description: 'Fast, responsive React experiences built to work beautifully across devices.', tags: ['React', 'Responsive'] },
  { number: '03', icon: '↗', title: 'Digital Strategy', description: 'A practical roadmap that connects your business goals with meaningful digital work.', tags: ['Planning', 'Growth'] }
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">What we do</span>
          <h2>Good ideas deserve <span>great execution.</span></h2>
          <p>From the first sketch to the final launch, we help turn your next big idea into something people love using.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top"><span className="service-icon">{service.icon}</span><span className="service-number">{service.number}</span></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="service-link" href="#contact" aria-label={`Discuss ${service.title}`}>Discuss this service <span>↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
