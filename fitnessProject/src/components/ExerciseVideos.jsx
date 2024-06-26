import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({name, exerciseVideos}) => {
  return (
    <Box sx={{marginTop: {lg: '100px', xs: '50px'}}} p="20px">
      <Typography variant='h4' mb='33px'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>

      <Stack justifyContent="flex-start" flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection: {lg: 'row'},
          gap: {lg: '110px', xs: '0'}
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'>
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>

            <Box>
              <Typography variant='h5' color="#000">
                {item.video.title}
              </Typography>
              <Typography variant='h5' color="#000">
                Channel Name <span style={{color: '#ff2625', fontSize: '25px', fontWeight: 'bold'}}>{item.video.channelName}</span>
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
