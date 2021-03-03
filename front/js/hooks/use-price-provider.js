/**
 * @file priceProvider hook.
 */

import { useState } from 'react';
import axios from 'axios';

import getLogger from '../utils/logger';

const log = getLogger('priceProvider');

const usePriceProvider = () => {
  const [price, setPrice] = useState(null);

  const fetchPrice = async () => {
    try {
      const res = await axios.get('/prices/index');

      setPrice(res.data.price);
    } catch (error) {
      log.error(error);
    }
  };

  return [price, fetchPrice];
};

export default usePriceProvider;
