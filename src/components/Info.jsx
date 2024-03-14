import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Mail } from '@mui/icons-material';


const Info = ({isPhone,text,des}) => {
  return (
    <div className='flex items-center py-8'>
{  isPhone ? 
  <LocalPhoneIcon fontSize='large'  style={{color:'black',background:"#e9b23f",padding:"0.3rem",fontSize:"3rem"}}/>
  :
  <Mail fontSize='large' style={{color:'black',background:"#e9b23f",padding:"0.3rem",fontSize:"3rem"}}/>
}    <div className='ml-6 font-bold'>
      <p>{text}</p>
      <p>{des}</p>
    </div>
    </div>
      )
}

export default Info