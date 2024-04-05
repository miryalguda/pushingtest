import "../styles.css"
import React, { startTransition } from 'react'
import {createContext, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../index.css"
import { useNavigate } from "react-router-dom";
import TransactionsData from "./TransactionsData"

export const AtmContext = createContext(500);

const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
 
  
    const choice = ['Deposit'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
      </label>
    );
  };
  
  const Deposit = () => {
    const atm = React.useContext(AtmContext);
    const navigate = useNavigate()
    const [state, setState] = useState();
    // let deposit = 0; // state of this transaction
    const [deposit, setDeposit] = React.useState(0);
   const [amount, setAmount] = React.useState(0)
    const [totalState, setTotalState] = React.useState(500);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
    const [transactions, setTransactions] = React.useState([]);


    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  
    const handleDeposit  =(event)=> {
      
      console.log(Number(event.target.value));

      if (Number(event.target.value) <= 0) {
        window.alert(
          "Minimum Deposit Amount should be $1 !"
        )
        return setValidTransaction(false);
     
      } else {
        setValidTransaction(true);
      }
      setDeposit(Number(event.target.value));
    


    if (isNaN (Number(event.target.value))){
      window.alert(
        "Deposit Amount should be number only !"
      )
      return setValidTransaction(false);
   
    } else {
      setValidTransaction(true);
    }
  
    setDeposit(Number(event.target.value));
  
  };
   


     
    
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState ;
      let amount = isDeposit ? deposit : 0;
      setTotalState(newTotal); 
          
      setValidTransaction(false);
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {
      console.log(event.target.value);
      setAtmMode(event.target.value);
      setValidTransaction(false);
      if (event.target.value === 'Deposit') {
        setIsDeposit(true);
       
      } else {
        setIsDeposit(false);
      }
    };
  
    return (
    <>

        <button className= "btn btn-lg btn-block  bg-success text-center text-white p-2 mt-5" onClick ={() => navigate('/Accounts4')}>Accounts page</button> 

    <div>
      <AtmContext.Provider value ={{transactions:[{
        choice : ['deposit'],
       
        amount : [deposit],
        totalState: [totalState]
        
      }]}} >
      <form onSubmit={handleSubmit}>
        <>
        <div className = "box1 mx-auto"  ><h1 >BAD BANK</h1>
          <div className= "box" >
            <h2 style={{ color: "cornsilk"}}>Your Total Balance ${totalState}</h2>
              <h2 id="total" className = "card p2 m2"> Deposited amount $ {deposit}</h2>
          <div className = "card p2 m-2">
            <label >Select an action below to continue</label>
              <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
                <option id="no-selection" value="" ></option>
                <option id="deposit-selection" value="Deposit"  >
                  Deposit
                </option>
                
              </select>
            {atmMode && (
              <ATMDeposit
                onChange={handleDeposit}
                isDeposit={isDeposit}
                isValid={validTransaction}
              ></ATMDeposit>
          )}
            </div>
          </div>
        </div>
        </>
      </form>
        <TransactionsData />  
      </AtmContext.Provider>
      </div>
      </> 
    );
  };
  export  default Deposit
  