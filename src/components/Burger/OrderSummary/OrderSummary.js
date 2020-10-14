import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
const orderSummary = props =>{

    const ingredientsList=Object.keys(props.ingredients)
        .map((key)=>{
            return(
                <li key={key}>{key} : {props.ingredients[key]}</li>
            )
        })

    return(
        <Auxiliary>
            <h1>Your order</h1>
            <p>A burger with these ingredients:</p>
            <ul>
                {ingredientsList}
            </ul>
            <p>Continue to checkout?</p>
        </Auxiliary>
    )

}

export default orderSummary;