/**
 * @file SubcategoryProvider hook.
 */

import { useState } from 'react';
import axios from 'axios';

import getLogger from '../utils/logger';

const log = getLogger('subcategoryProvider');

const useSubcategoryProvider = () => {
  const [subcategory, setSubcategory] = useState(null);

  const fetchSubcategory = async () => {
    try {
      const res = await axios.get('/subcategories/index');

      setSubcategory(res.data.subcategory);
    } catch (error) {
      log.error(error);
    }
  };

  return [subcategory, fetchSubcategory];
};

export default useSubcategoryProvider;
