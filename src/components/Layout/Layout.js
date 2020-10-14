import React from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import classes from './Layout.module.css'
const layout = (props)=>(
    <Auxiliary>
        <div>Navigation</div>
        <main className={classes.Content}> 
            <BurgerBuilder />
        </main>
    </Auxiliary>
    
)

export default layout;