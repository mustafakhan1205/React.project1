import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navabr from './Navabr.jsx';

describe('Navbar', () => {
  it('renders main navigation links', () => {
    render(<Navabr />);
    expect(screen.getByRole('link', { name: /novatech home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
  });

  it('toggles the mobile navigation state', async () => {
    const user = userEvent.setup();
    render(<Navabr />);
    const toggle = screen.getByRole('button', { name: /open navigation menu/i });
    await user.click(toggle);
    expect(screen.getByRole('button', { name: /close navigation menu/i })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation').querySelector('ul')).toHaveClass('is-open');
  });
});
