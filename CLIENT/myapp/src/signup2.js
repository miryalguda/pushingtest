import React from 'react'
import {useState}  from "react"
import {Link} from 'react-router-dom'
import  axios from "axios";
import {useNavigate} from "react-router-dom"


function Signup () {

const [name, setName] = useState(''); 
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');   

const navigate =  useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post ('/register', {name, email, password})
    .then (result => console.log (result))
    .catch (err => console.log(err))
    navigate('/Loginpage2')
}





  return (
    <div className = "d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className = "bg-white p-3 rounded  w-25">
            <h2>Register</h2>

            <form onSubmit= {handleSubmit}>

                <div className = "mb-3">
                    <label htmlFor = " name">
                        <strong>Name</strong>

                    </label>
                    <input
                        type= "text" placeholder= "Enter Name" autoComplete="off"
                        name= "name" className =" form-control rounder-0"
                        onChange = {(e)=> setName(e.target.value)}
                    />
                </div>

                <div className ="mb-3">
                    <label htmlFor= "email">
                        <strong>Email</strong>

                    </label>
                    <input
                        type= "text" placeholder= "Enter Email" autoComplete="off"
                        name= "email" className =" form-control rounder-0"
                        onChange = {(e)=> setEmail(e.target.value)}
                    />  
                </div>

                <div className ="mb-3">
                    <label htmlFor= "password">
                        <strong>Password</strong>

                    </label>
                    <input
                        type= "password" placeholder= "Enter Password" autoComplete="off"
                        name= "password" className =" form-control rounder-0"
                        onChange = {(e)=> setPassword(e.target.value)}
                    />

                </div>

                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Register
                </button>
                </form>
               <p></p>
                <p> if you have already have an Account, Please Login.</p>
                <Link to = "/Loginpage2"
                               
                className= "btn btn-default border w-100 bg-danger rounded-0">
                    Login
                </Link>
                
          

        </div>
    </div>
  )
};

export default Signup