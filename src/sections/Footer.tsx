import React from "react";

import { APP_NAME } from "../data";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 border-t border-neutral">
      <div className="text-center text-sm">
        <span className="font-bold text-lg mr-2">{APP_NAME}</span> &copy;{" "}
        {new Date().getFullYear()} All Rights Reserved
      </div>
      <div className="text-center text-sm flex flex-col">
        <div>
          <a href="https://t.me/+aVZyKUWivutmZDg0">Telegram</a>
        </div>
        <div>
          <a href="https://twitter.com/YinYangFi">Twitter</a>
        </div>
        <div>
          <a href="https://github.com/yinyang-finance">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
