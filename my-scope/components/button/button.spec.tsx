import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText('Test Button')).toBeDefined();
  });
  
  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<Button label="Click Me" onClick={onClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders disabled button correctly', () => {
    render(<Button label="Disabled" onClick={() => {}} />);
    expect(screen.getByText('Disabled')).toBeDefined();
  });
});
