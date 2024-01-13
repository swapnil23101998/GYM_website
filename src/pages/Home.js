import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async () => {
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    setExercises(exercisesData);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises} />
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home