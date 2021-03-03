/**
 * @file CategoryProvider hook.
 */

import { useState } from 'react';
import axios from 'axios';

import getLogger from '../utils/logger';

const log = getLogger('categoryProvider');

const useCategoryProvider = () => {
  const [category, setCategory] = useState(null);

  const fetchCategory = async () => {
    try {
      const res = await axios.get('/categories/index');

      setCategory(res.data.category);
    } catch (error) {
      log.error(error);
    }
  };

  return [category, fetchCategory];
};

export default useCategoryProvider;
