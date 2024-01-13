import React from 'react';
import { Stack, Typography } from '@mui/material';
import icon from '../assets/icons/gym.png';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const BodyPart = ({ item, setBodyPart, bodyPart, setExercises }) => {
  return (
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{
      borderTop: bodyPart === item ? `4px solid #ff2625` : '',
      background: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '270px',
      cursor: 'pointer',
      gap: '47px',
    }}
    onClick={ async () => {
      setBodyPart(item);
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercies = exercisesData.filter((exercise) => {
        return exercise.name.toLowerCase().includes(item) || exercise.target.toLowerCase().includes(item) || exercise.equipment.toLowerCase().includes(item) || exercise.bodyPart.toLowerCase().includes(item);
    })
    setExercises(searchedExercies);
    }}
    >
      <img src={icon} alt='dumbbell' style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight='bold' color='#3A1212' testTransform='capitalize' >{item}</Typography>
    </Stack>
  )
}

export default BodyPart