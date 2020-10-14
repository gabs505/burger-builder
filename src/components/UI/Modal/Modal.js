import React from 'react'
import classes from './Modal.module.css'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

const modal=(props)=>{
    return(
        
        <Auxiliary>
            <Backdrop show={props.show} cancelPurchase={props.cancelPurchase}/>
                <div className={classes.Modal} style={{transform: props.show ? "translateX(0)" : "translateX(-100vw)",
            opacity: props.show ? "1" : "0"}}>
                {props.children}
                </div>
        </Auxiliary>)
    

}

export default modal;