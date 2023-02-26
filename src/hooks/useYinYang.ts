import React from 'react'

import { YinYangContext } from '../contexts/Yinying'

export const useYinYang = () => {
  return React.useContext(YinYangContext);
};
