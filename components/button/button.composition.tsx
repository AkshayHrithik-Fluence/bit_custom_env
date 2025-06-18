import React from 'react';
import { Button } from './button';

export const BasicButton = () => <Button label="Click Me" />;
export const ButtonWithClick = () => (
  <Button label="Click Me" onClick={() => alert('Button clicked!')} />
);
export const DisabledButton = () => (
  <Button label="Disabled" onClick={() => {}} />
);
