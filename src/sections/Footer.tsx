import React from 'react'

import { APP_NAME } from '../data'

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 border-t border-secondary">
      <div className="text-center text-sm">
        <span className="font-bold text-lg mr-2">{APP_NAME}</span> &copy;{" "}
        {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
