/**
 * @file levelProvider hook.
 */

import { useState } from 'react';
import axios from 'axios';

import getLogger from '../utils/logger';

const log = getLogger('levelProvider');

const useLevelProvider = () => {
  const [level, setLevel] = useState(null);

  const fetchLevel = async () => {
    try {
      const res = await axios.get('/levels/index');

      setLevel(res.data.level);
    } catch (error) {
      log.error(error);
    }
  };

  return [level, fetchLevel];
};

export default useLevelProvider;
