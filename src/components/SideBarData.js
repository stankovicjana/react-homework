import React from 'react';
import * as AiIcons from 'react-icons/ai';
import {MdTravelExplore} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
export const SideBarData =[

    {
        title:'Početna',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Kontakt',
        path:'/destinacije',
        icon:<AiOutlineMessage/>,
        cName:'nav-text'
    },
    {
        title:'Putovanja',
        path:'/putovanja',
        icon:<MdTravelExplore/>,
        cName:'nav-text'
    }
    
];