import React, { useState} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Typography, Stack } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercise = currentPage * 9;
  const indexOfFirstExercise = indexOfLastExercise - 9;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
  const Paginate = (e, value) => {
    setCurrentPage(value);
  }

  return (
    <Box
    id='exercises'
    sx={{mt: {lg: '110px'}}}
    mt='50px'
    p='20px'
    >
      <Typography variant='h4' mb='46px' color='white'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px'}}}
      flexWrap="wrap" justifyContent='center'>
        {currentExercises.map((exercise, index) => {
          return <ExerciseCard exercise={exercise} key={index} />
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination 
          className='pagination'
          color='primary'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / 9)}
          page={currentPage}
          onChange={Paginate}
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises