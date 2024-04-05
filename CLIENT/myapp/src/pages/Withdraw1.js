import "../styles.css"
import React from 'react'
import {createContext, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../index.css"
import { useNavigate } from "react-router-dom";

import Withdrawdata from "./Withdrawdata"

export const AtmContext = createContext(500);

const ATMDeposit = ({ onChange, isWithdraw, isValid }) => { 
    const choice = ['Withdraw'];
    console.log(`ATM isWithdraw: ${isWithdraw}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isWithdraw)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
      </label>
    );
  };
  
  const Withdraw = () => {
    const atm = React.useContext(AtmContext);
    const navigate = useNavigate()
    // let deposit = 0; // state of this transaction
    const[withdraw, setWithdraw] =React.useState (0);
   
    const [totalState, setTotalState] = React.useState(500);
    const [isWithdraw, setIsWithdraw] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isWithdraw}`);
  
    const handleWithdraw = (event) => {
      console.log(Number(event.target.value));

      if (Number(event.target.value) <= 0) {
        window.alert(
          "Amount should be $1 to $300!"
        )
        return setValidTransaction(false); 
     
      } else {
        setValidTransaction(true);
      };

      if (Number(event.target.value)  > totalState) {
        window.alert(
          "Withdrawal amount should not be more  than your balance!"
        )
        return setValidTransaction(false); 
     
      } else {
        setValidTransaction(true);
      };


      if (Number(event.target.value) >= 300) {
        window.alert(
          "Maximum only $300 allowed  to withdraw!"
      );
        return setValidTransaction(false);
      } else {
        setValidTransaction(true);
      }
      setWithdraw(Number(event.target.value));
    };
    
    const handleSubmit = (event) => {
      let newTotal = isWithdraw ? totalState - withdraw: totalState ;
      setTotalState(newTotal);
                
      setValidTransaction(false);
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {
      console.log(event.target.value);
      setAtmMode(event.target.value);
      setValidTransaction(false);
      if (event.target.value === 'Withdraw') {
        setIsWithdraw(true);
      } else {
        setIsWithdraw(false);
      }
    };
  
    return (
      <>
      <button className= "btn btn-lg btn-block  bg-success text-center text-white p-3 mt-5" onClick ={() => navigate('/Accounts4')}>Accounts page</button> 

      <div>
      <AtmContext.Provider value ={{transactions:[{
        withdraw:[withdraw],
        totalState: [totalState]
        
      }]}} >

      <form onSubmit={handleSubmit}>
        <>
        <div className = "box1 mx-auto "  ><h1 >BAD BANK</h1>
          <div className= "box" >
            <h2 style={{ color: "cornsilk"}}>Your Total Balance ${totalState}</h2>
              <h2 id="total" className = "card p2 m2"> Withdrawal amount $ {withdraw}</h2>
          <div className = "card p2 m-2">
            <label >Select an action below to continue</label>
              <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
                <option id="no-selection" value="" ></option>
                <option id="deposit-selection" value="Withdraw"  >
                  Withdraw
                </option>
                
              </select>
            {atmMode && (
              <ATMDeposit
                onChange={handleWithdraw}
                isWithdraw={isWithdraw}
                isValid={validTransaction}
              ></ATMDeposit>
          )}
            </div>
          </div>
        </div>
        </>
      </form>
  
        <Withdrawdata />
        </AtmContext.Provider>
        </div>
        </>
        
    );
  };
  export  default Withdraw
  