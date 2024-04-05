import React from 'react'
import {useContext} from "react"
import  bank  from "./bank2.png"
import {AtmContext} from "./Withdraw.js"

function Card (props){
  function classes(){
      const bg = props.bgcolor ? ' bg- ' + props.bgcolor : ' ';
      const  txt = props.txtcolor ? ' text-' + props.txtcolor: ' text -white ';
          return 'card mb-3 ' + bg + txt;

}

return(

  <div className=  {classes() } style = {{}}>
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


const WithdrawData = () => {
  const atm = React.useContext(AtmContext);
  return (
    <>
    <div style={{padding: 20}}>

    data={JSON.stringify(atm.transactions)}
    
    
    
  </div>
<div className="container mx-auto">
      <Card 
      
          bgcolor= "primary"
          txtcolor = "primary"
         
          header = "Successfully Withdrawn the amount!"
        
          body= {atm.transactions.map((data) => {
            return (
              <table className= "table table-stripped">
                <thead>
                  <tr>
                    <th>Withdrawn ($)</th> 
                    <th>Total Balance ($)</th> 
                  
                  </tr>
                </thead>
                <tbody>
            <tr>
             
              <td>{data.withdraw}</td> 
              <td>{data.totalState}</td>
              
            </tr>
            </tbody>
            </table>
            )
          })}
        
      />
</div>

    </>
  )
}

  

export default WithdrawData