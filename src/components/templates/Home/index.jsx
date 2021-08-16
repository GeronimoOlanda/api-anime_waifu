import React, { useEffect, useState } from 'react';
import Animes from '../../Animes';

let Home = () => {
  const [animes, setAnimes] = useState({});
  const [animes2, setAnimes2] = useState([]);

  useEffect(() => {
    getAnimes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animes]);

  const category = {
    option1: 'sfw',
    option2: 'nsfw',
    type: {
      sfw: ['waifu', 'happy', 'neko', 'megumin', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'bonk', 'wink'],
      nsfw: ['waifu', 'neko', 'trap', 'blowjob'],
    },
  };

  const getAnimes = async () => {
    const response = await fetch(`https://api.waifu.pics/${category.option1}/${category.type.sfw[5]}`);
    const data = await response.json();

    setAnimes(data.anime);
    setAnimes2(Object.keys(data).map((key) => [String(key), data[key]]));
  };

  return <Animes animes2={animes2} />;
};

export default Home;
