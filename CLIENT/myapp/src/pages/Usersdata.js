import React from 'react'
import  bank  from "./bank2.png"
import {UserContext} from "../LoginApp2"
import { useNavigate } from "react-router-dom";


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

function Usersdata() {
  const ctx = React.useContext(UserContext);
  const navigate = useNavigate()


    return (
      <>
       <button className= "btn btn-lg btn-block  bg-success text-center text-white p-2 mt-5" onClick ={() => navigate('/Accounts4')}>Accounts page</button> 
      <div style={{padding: 20}}>
  
      {JSON.stringify(ctx.users)}
      <div className= "col-md-3 mx-auto">
        <img  src={bank} alt="" />
           </div>
      
      
    </div>
<div className="container mx-auto">
        <Card 
        
            bgcolor= "primary"
            txtcolor = "primary"
           
            header = "welcome to All submitted Data"
            
            body= {ctx.users.map((data) => {
              return (
                <table className= "table table-stripped">
                  <thead>
                    <tr>
                      <th>Name</th> 
                      <th>email</th> 
                      <th>password</th> 
                      <th>Code</th>
                      <th>fromAccountNumber</th>
                      <th>toAccountNumber</th>
                      <th>Amount</th>


                    </tr>
                  </thead>
                  <tbody>
              <tr>
               
                <td>{data.name}</td> 
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.code}</td>
                <td>{data.fromAccountnumber}</td>
                <td>{data.toAccountnumber}</td>
                <td>{data.amount}</td>
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

export default Usersdata