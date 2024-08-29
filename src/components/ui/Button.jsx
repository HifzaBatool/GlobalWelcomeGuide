import React from 'react';

export const Button = ({ children, ...props }) => (
  <button className="px-4 py-2 font-medium rounded-md shadow-sm transition-colors" {...props}>
    {children}
  </button>
);
