import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const buildControls = props=>{
    

    const ingredients=[
        {label:"Meat", type:"meat"},
        {label:"Cheese", type:"cheese"},
        {label:"Salad", type:"salad"},
        {label:"Bacon", type:"bacon"}

    ]
    return(
        <div className={classes.BuildControls}>
            <p>Burger price: {props.price.toFixed(2)}</p>
            {
                ingredients.map(ctrl=>(
                    <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    add={()=>props.add(ctrl.type)}
                    remove={()=>props.remove(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
                ))
            }
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.clicked}>ORDER NOW</button>
        </div>
    )
    
}

export default buildControls;