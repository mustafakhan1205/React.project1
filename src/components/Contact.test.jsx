import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact.jsx';

describe('Contact form', () => {
  it('shows validation messages when submitted empty', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await user.click(screen.getByRole('button', { name: /check and submit/i }));
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter your email address.')).toBeInTheDocument();
    expect(screen.getByText('Please select a service.')).toBeInTheDocument();
  });

  it('shows confirmation for valid client-side input', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await user.type(screen.getByLabelText(/your name/i), 'Alex Morgan');
    await user.type(screen.getByLabelText(/email address/i), 'alex@example.com');
    await user.selectOptions(screen.getByLabelText(/what do you need/i), 'Web Development');
    await user.type(screen.getByLabelText(/project details/i), 'I need a responsive company website.');
    await user.click(screen.getByRole('button', { name: /check and submit/i }));
    expect(screen.getByRole('status')).toHaveTextContent(/passed validation/i);
  });
});
