import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'

import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICE={
    meat:1.3,
    salad:0.3,
    cheese:0.4,
    bacon:1
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            meat:0,
            salad:0,
            cheese:0,
            bacon:0
        },
        totalPrice:4,
        purchasable:false,
        purchasingMode:false
    }

    updatePurchasableState(ingredients){
        const isPurchasable = Object.keys(ingredients)
        .map(key=>ingredients[key])
        .reduce((sum,el)=>sum+el,0) >0;

        this.setState({
            purchasable:isPurchasable
        })
    }

    addIngredientHandler=(type)=>{
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]+=1;
        const newTotalPrice=this.state.totalPrice+INGREDIENTS_PRICE[type];
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newTotalPrice
        })
        this.updatePurchasableState(updatedIngredients);
    }

    removeIngredientHandler=(type)=>{
        const updatedIngredients={...this.state.ingredients};
        if(updatedIngredients[type]<=0){
            return;
        }
        updatedIngredients[type]-=1;
        const newTotalPrice=this.state.totalPrice-INGREDIENTS_PRICE[type];
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newTotalPrice
        })

        this.updatePurchasableState(updatedIngredients)
    }

    purchaseModeHandler=()=>{
        this.setState({
            purchasingMode:true
        })
    }

    cancelPurchaseHandler=()=>{
        this.setState({
            purchasingMode:false
        })
    }

    render(){
        const disabledInfo={
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }

        let modal=null;
        if(this.state.purchasingMode){
            modal=(<Modal>
            <OrderSummary ingredients={this.state.ingredients} />
            </Modal>)
        }
        return(
            
            <Auxiliary>

                <Modal show={this.state.purchasingMode} cancelPurchase={this.cancelPurchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls add={this.addIngredientHandler} 
                remove={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                clicked={this.purchaseModeHandler}/>
            </Auxiliary>
        )
    
    }
}

export default BurgerBuilder;