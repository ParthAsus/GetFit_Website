import React from 'react'
import {Box, Typography, Stack} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff34f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt='logo' width="200px" height="40px"/>

        <Typography variant='h6' pb="20px" color="red">
          Made by JALEBI
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
