import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ChatBubble from './ChatBubble';

describe('ChatBubble', () => {
  it('renders a user message correctly', () => {
    render(<ChatBubble message="Hello world" isUser={true} timestamp="10:00 AM" />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
    expect(screen.getByText('10:00 AM')).toBeInTheDocument();
  });

  it('renders an assistant message correctly', () => {
    render(<ChatBubble message="How can I help you?" isUser={false} timestamp="10:01 AM" />);
    expect(screen.getByText('How can I help you?')).toBeInTheDocument();
    expect(screen.getByText('10:01 AM')).toBeInTheDocument();
  });
});
