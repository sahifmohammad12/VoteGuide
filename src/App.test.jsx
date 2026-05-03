import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    article: ({ children, ...props }) => <article {...props}>{children}</article>,
    nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

vi.mock('./pages/Home', () => ({ default: () => <div>Home</div> }));
vi.mock('./pages/Timeline', () => ({ default: () => <div>Timeline</div> }));
vi.mock('./pages/Guide', () => ({ default: () => <div>Guide</div> }));
vi.mock('./pages/Assistant', () => ({ default: () => <div>Assistant</div> }));
vi.mock('./pages/FAQ', () => ({ default: () => <div>FAQ</div> }));

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
