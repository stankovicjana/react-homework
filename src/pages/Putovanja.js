import React from 'react'
import Cards from '../components/Cards'

function Putovanja({putovanja1, putovanja2}) {
    return (
        <div>
            <Cards 
                data1={putovanja1} 
                data2 = {putovanja2} 
                title='PUTOVANJA' 
                type='putovanja' 
               
               />
        </div>
    )
}

export default Putovanja
