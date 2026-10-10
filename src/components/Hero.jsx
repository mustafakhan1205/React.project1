import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Independent digital studio</div>
          <h1>We turn bold ideas into <span>digital impact.</span></h1>
          <p className="hero-lead">We design and build thoughtful digital experiences that help ambitious businesses move forward with confidence.</p>
          <div className="hero-actions">
            <a className="button" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#projects">Explore our work <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true"><span>AM</span><span>SK</span><span>RJ</span></div>
            <p><strong>Built around your goals</strong><br /><span>Strategy, design and development</span></p>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract digital design illustration">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-card art-card-main">
            <div className="art-card-top"><span className="mini-brand"><i /> nova / studio</span><span className="live-pill">● Live preview</span></div>
            <div className="art-gradient"><span>Make room<br />for <em>what’s next.</em></span><div className="art-sun" /></div>
            <div className="art-card-bottom"><span>Digital experiences</span><span>01 — 04</span></div>
          </div>
          <div className="float-note note-top"><span className="note-icon">✳</span><span><strong>Fresh thinking</strong><small>Ideas with intention</small></span></div>
          <div className="float-note note-bottom"><span className="check-icon">✓</span><span><strong>Built to perform</strong><small>Made for real people</small></span></div>
          <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✦</span>
        </div>
      </div>
    </section>
  );
}
