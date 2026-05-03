import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Assistant from './Assistant';

// Mock Framer Motion to prevent animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

describe('Assistant Component', () => {
  it('renders the initial welcome message', () => {
    render(<Assistant />);
    expect(screen.getByText(/Hi! I'm Lex, your AI civic education assistant/i)).toBeInTheDocument();
  });

  it('allows user to type in the input field', () => {
    render(<Assistant />);
    const input = screen.getByPlaceholderText(/Ask me anything about voting and elections.../i);
    fireEvent.change(input, { target: { value: 'How do I vote?' } });
    expect(input.value).toBe('How do I vote?');
  });

  it('prevents sending empty messages', () => {
    render(<Assistant />);
    const button = screen.getByRole('button', { name: /Send/i });
    expect(button).toBeDisabled();
  });

  it('adds user message to the chat when submitted', async () => {
    render(<Assistant />);
    const input = screen.getByPlaceholderText(/Ask me anything about voting and elections.../i);
    const button = screen.getByRole('button', { name: /Send/i });

    fireEvent.change(input, { target: { value: 'What is a primary?' } });
    expect(button).not.toBeDisabled();
    
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('What is a primary?')).toBeInTheDocument();
    });
  });
});
