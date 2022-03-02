import React from 'react'

// import icon styles
import { ChevronRightRounded } from '@mui/icons-material';

// import css styles
import "./subMenuContainer.css"


export default function SubMenuContainer( {name} ) {
    return <div className="sub-menu-container" >
        <h3>{name} </h3>
        <div className='view-all'>
            <p>view all</p>
            <i><ChevronRightRounded/> </i>
        </div>
    </div>
}
