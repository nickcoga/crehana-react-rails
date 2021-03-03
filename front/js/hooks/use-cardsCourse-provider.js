/**
 * @file CardslProvider hook.
 */

import { useState } from 'react';
import axios from 'axios';

import getLogger from '../utils/logger';

const log = getLogger('cardsProvider');

const usecardsCourseProvider = () => {
  const [cards, setCards] = useState(null);

  const fetchCards = async () => {
    try {
      const res = await axios.get('/courses/index');
      console.log(res);

      setCards(res.data.course);
    } catch (error) {
      log.error(error);
    }
  };

  return [cards, fetchCards];
};

export default usecardsCourseProvider;
