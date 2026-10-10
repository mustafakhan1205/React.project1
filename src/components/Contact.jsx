import { useState } from 'react';
import './Contact.css';

const initialValues = { name: '', email: '', service: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!values.service) errors.service = 'Please select a service.';
  if (!values.message.trim()) errors.message = 'Please tell us a little about your project.';
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy" id="about">
          <span className="section-kicker">Let’s work together</span>
          <h2>Have a good idea?<br /><span>Let’s make it happen.</span></h2>
          <p>Tell us what you’re working on. Share a little about your goals and we’ll help you figure out a sensible next step.</p>
          <div className="contact-detail"><span className="contact-detail-icon">✉</span><div><small>Email us</small><a href="mailto:hello@novatech.example">hello@novatech.example</a></div></div>
          <div className="contact-detail"><span className="contact-detail-icon">◷</span><div><small>Response time</small><strong>Usually within 2 business days</strong></div></div>
          <p className="contact-note">Demo contact details — replace these with your real business information.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-heading"><h3>Tell us about your project</h3><p>Fields marked * are required.</p></div>
          {submitted && <div className="form-success" role="status"><strong>Thanks — your form passed validation!</strong><br />This demo does not send or store messages. Connect a backend or form service to receive submissions.</div>}
          <div className="form-field">
            <label htmlFor="name">Your name *</label>
            <input id="name" name="name" value={values.name} onChange={handleChange} placeholder="e.g. Alex Morgan" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
            {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address *</label>
            <input id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder="alex@company.com" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
            {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="service">What do you need? *</label>
            <select id="service" name="service" value={values.service} onChange={handleChange} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? 'service-error' : undefined}>
              <option value="">Choose a service</option>
              <option value="UI/UX Design">UI/UX design</option>
              <option value="Web Development">Web development</option>
              <option value="Digital Strategy">Digital strategy</option>
              <option value="Other">Something else</option>
            </select>
            {errors.service && <span className="field-error" id="service-error">{errors.service}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="message">Project details *</label>
            <textarea id="message" name="message" value={values.message} onChange={handleChange} rows="4" placeholder="A few details about your goals, timeline, or idea..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
          </div>
          <button className="button submit-button" type="submit">Check and submit <span aria-hidden="true">↗</span></button>
          <p className="privacy-note">Your details stay in this page demo; submissions are not sent to a server.</p>
        </form>
      </div>
    </section>
  );
}
