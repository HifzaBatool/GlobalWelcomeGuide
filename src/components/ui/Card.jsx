import React from 'react';

export const Card = ({ children, className, ...props }) => (
  <div className={`border p-4 rounded-lg shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

export const CardTitle = ({ children }) => <h3 className="text-lg font-bold">{children}</h3>;

export const CardDescription = ({ children }) => <p className="text-gray-600">{children}</p>;

export const CardContent = ({ children }) => <div>{children}</div>;
