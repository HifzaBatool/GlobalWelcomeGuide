import React from 'react';

export const Input = (props) => (
  <input
    className="block w-full px-3 py-2 text-gray-700 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);
