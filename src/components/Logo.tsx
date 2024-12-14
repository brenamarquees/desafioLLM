import React from 'react';
import { Database } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Database className="w-8 h-8 text-indigo-600" />
      <span className="text-2xl font-bold text-gray-800">DataFlow</span>
    </div>
  );
};

export default Logo;