import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import Target from '../assets/icons/target.png';
import Equipment from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: Target,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ]


  return (
    <Stack gap="60px" sx = {{
      flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center',
    }}>
      <img src={gifUrl} alt={name}  loading='lazy' className='detail-image'/>

      <Stack sx={{
        gap: { lg: '35px', xs: '20px'}
      }}>
        <Typography variant="h3" color='red'>{name.toUpperCase()}</Typography>
        <Typography variant="h6" color='white'>Exercises keep you strong. {name.toUpperCase()} {' '}
        is one of the best exercises to target your {target}. It will help to 
        improve your mood and gain energy.
        </Typography>
        {extraDetail.map((detail, index) => (
          <Stack key={index} direction="row" alignItems="center" gap="24px">
            <Button sx={{
              background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'
            }}>
              <img src={detail.icon} alt={detail.name} style={{
                width: '50px', height: '50px'
              }} />
            </Button>
            <Typography textTransform='capitalize' variant="h6" color='red'>{detail.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  ) 
}

export default Detail