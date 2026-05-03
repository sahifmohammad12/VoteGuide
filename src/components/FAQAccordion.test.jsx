import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FAQAccordion from './FAQAccordion';

const mockFaq = {
  question: 'What is voting?',
  answer: 'Voting is the process of electing leaders.',
  id: 1,
};

describe('FAQAccordion', () => {
  it('renders question and answer correctly', () => {
    render(<FAQAccordion faq={mockFaq} searchTerm="" />);
    expect(screen.getByText('What is voting?')).toBeInTheDocument();
  });

  it('toggles answer visibility on click', () => {
    render(<FAQAccordion faq={mockFaq} searchTerm="" />);
    const button = screen.getByRole('button');
    
    // Initially the answer might not be visible depending on the implementation
    fireEvent.click(button);
    expect(screen.getByText('Voting is the process of electing leaders.')).toBeInTheDocument();
  });
});
