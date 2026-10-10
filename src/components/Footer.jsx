import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">N</span><span>Nova<span className="brand-accent">Tech</span></span></a>
        <p>Thoughtful digital work for a world that keeps moving.</p>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} NovaTech. Demo project.</span>
        <span>Designed with care · Built with React</span>
      </div>
    </footer>
  );
}
