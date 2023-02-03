import React from 'react';
import * as AiIcons from 'react-icons/ai';
import {MdTravelExplore} from 'react-icons/md';

export const SideBarData =[

    {
        title:'Početna',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Destinacije',
        path:'/destinacije',
        icon:<MdTravelExplore/>,
        cName:'nav-text'
    },
    
];