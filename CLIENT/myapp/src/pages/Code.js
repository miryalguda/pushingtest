
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

    <div className=  {classes() } style = {{ backgroundImage: "linear-gradient(79deg, #3ff0de , #7b83f5, #cd59f3 )", marginTop: "5rem", maxWidth: "36rem", maxHeight: "36rem", border: "2px solid grey", boxShadow: '2px 3px 3px 2px  #803300'}}>
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



function Code () {
    const [code, setCode]       = React.useState('');
    const [status, setStatus]       = React.useState('');
    const [show, setShow]       = React.useState(true);

    const ctx = React.useContext (UserContext);
    const navigate = useNavigate();


function validate(field, label){
    if (!field){
        setStatus('Error:' + label);
        setTimeout (()=> setStatus ('', 3000));
        return false;
    }
    return true;
}

    function clearForm () {
        setCode('');
        
    setShow (true);
        navigate('/Accounts4')

}


function HandleCreate() {
 
    console.log(code);
    
    if(!validate(code,      'Code')) return;
    ctx.users.push({code});
    setShow(false);
    clearForm();
}



    return (

        <>
        <div className = "text-center " style={{marginTop: "5rem", color: "white"}}> <h2>We sent you security code to your email. Please  enter here</h2></div>
        <Card 
        
         bgcolor =""
        
         header="Security Code"
        status = {status}
         body = {show ? (
                <>
                
                Code <br/>
                    <input type="input"  className= "form-control"
                        id = "number" placeholder = "Enter your code here"
                        value = {code} onChange={e => setCode(e.currentTarget.value)} /> <br/> 

                
                <button type= "submit" className="btn btn-light" 
                        onClick = {HandleCreate}>Submit</button>
               
                </>

                 ) : (

                <>
                 <h5></h5>
                <button type= "submit" className="btn btn-light" 
                        onClick ={clearForm}></button>
                
                
 

                </>

  

         )} 




         />

    </>

    )
 }   
         
         
        
        
    


export default Code