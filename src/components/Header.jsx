import React from 'react';
import { Globe } from 'lucide-react';

const Header = () => (
  <header className="px-4 lg:px-6 h-14 flex items-center">
    <a className="flex items-center justify-center" href="#">
      <Globe className="h-6 w-6" />
      <span className="ml-2 text-lg font-bold">GlobalWelcomeGuide</span>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">Resources</a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">Community</a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">About</a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">Contact</a>
    </nav>
  </header>
);

export default Header;
