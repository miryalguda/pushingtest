
import "bootstrap/dist/css/bootstrap.min.css"

import {UserContext } from "../LoginApp2"

import {useNavigate, Link} from "react-router-dom"
import "../index.css"
import React from "react"




function Card (props){
    function classes(){
        const bg = props.bgcolor ? ' bg- ' + props.bgcolor : ' ';
        const  txt = props.txtcolor ? ' text-' + props.txtcolor: ' text -white ';
            return 'card   col-md-5 mx-auto    ' + bg + txt;

}

return(

    <div className=  {classes() } style = {{ backgroundImage: "linear-gradient(79deg, #3ff0de , #7b83f5, #cd59f3 )", marginTop: "5rem", maxWidth: "36rem", maxHeight: "36rem", border: "2px solid grey"}}>
        <div className="card-header">{props.header}</div>
        <div className ="card-body">
          {props.title && (<h5 className="card-title"> {props.title} </h5>)}
          {props.text && (<p className="card-text"> {props.text} </p>)}
            {props.body}
            {props.status && (<div id ="createStatus"> {props.status} </div>)} 
        </div>

    </div>
);

}



function Transfers () {
    const [show, setShow]       = React.useState(true);
    const[status, setStatus]    = React.useState('');
    const[fromAccountnumber, setFromAccountnumber]  = React.useState('');
    const[toAccountnumber, setToAccountnumber]  = React.useState('');
    const[amount, setAmount]= React.useState('');
    
    const ctx = React.useContext (UserContext);
    const navigate = useNavigate();


function validate(field, label){
    if (!field){
        window.alert( "Please  fill out all fields!")
        setStatus('Error:' + label);
        setTimeout (()=> setStatus ('', 3000));
        return false;
    }
    return true;
}

    function clearForm () {
        setFromAccountnumber ('');
        setToAccountnumber ('')
        setAmount ('');
    setShow (true);


}


function handleCreate() {
 
    console.log(fromAccountnumber, toAccountnumber, amount);
    if(!validate(fromAccountnumber,      'fromAccountnumber')) return;
    if(!validate(toAccountnumber,      'toAccountnumber')) return;
    if(!validate(amount,      'Amount')) return;
    ctx.users.push({fromAccountnumber,  toAccountnumber, amount});
    setShow(false);

}

function Redirect() {
    let navigate = useNavigate();
    function handleClick() {
      navigate('/Accountsactivity')
    }
    return (
      <div>
        <button onClick={handleClick}>Accounts Activity</button>
      </div>
    );
  }
    

    return (

        <>
        <button className= "btn btn-lg btn-block  bg-success text-center text-white p-2 mt-5" onClick ={() => navigate('/Accounts4')}>Accounts page</button> 
        <div className = "text-center " style={{marginTop: "5rem", color: "yellow"}}> <h2>Internal Money Transfer to Other Accounts</h2></div>
        <Card 
        
         bgcolor =""
        
         header="Internal transfer"
         status = {status}
         body = {show ? (
                <>
                <label><h4>Transfer from: </h4></label>
                Account Number <br/>
                    <input type="input"  className= "form-control"
                        id = "name" placeholder = "Transfer From Account Number" maxLength = {10} minLength= {10}
                        value = {fromAccountnumber} onChange={e => setFromAccountnumber(e.currentTarget.value)} /> <br/> 

                <label><h4>Transfer To: </h4></label>
                Account Number <br/>
                    <input type="input"  className= "form-control"
                        id = "name" placeholder = " Transfer To Account Number" maxLength = {10} minLength= {10}
                        value = {toAccountnumber} onChange={e => setToAccountnumber(e.currentTarget.value)} /> <br/> 


                Amount ($$$)<br/>    
                    <input type="input"  className= "form-control"
                        id = "amount" placeholder = "Amount"
                        value = {amount} onChange={e => setAmount(e.currentTarget.value)} /> <br/> 

                
                                
                <button type= "submit" className="btn btn-light" 
                        onClick = {handleCreate}>Transfer</button>
               
                </>

                 ) : (

                <>
                <h5>Success</h5>
                <button type= "submit" className="btn btn-light" 
                        onClick ={clearForm}>Any other Transfers?</button>
                
                
 

                </>

  

         )} 




         />

    </>

    )
 }   
         
         
        
        
    


export default Transfers