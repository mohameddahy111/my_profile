import { Box } from '@mui/material'
import React from 'react'

export default function Conntect({icon , text ,i ,text2}) {
  return (
    <div>
        <Box style={{display :' flex' , padding:'10px' , alignItems:'center' , margin :'10px 0px '}} >
            <i style={{margin :'0px 10px'}} >{icon}  </i>
            <a href={`${i}${text}`}>{text2}</a>
        </Box>
    </div>
  )
}
