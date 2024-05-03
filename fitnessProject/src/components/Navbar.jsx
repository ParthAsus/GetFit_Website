import React from 'react'
import { Link } from '@mui/material'
import {Stack} from '@mui/material'
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{gap: {sm: '122px', xs: '50px'}, mt: {sm:'32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
      <Link>
        <img src={Logo} alt='logo' sx={{lg: {width: '48px', height: '48px', margin: '0 20px'}}}  />
      </Link>

      <Stack direction="row" gap="48px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href="#exercise" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
