import React from 'react'
import './user.css'
export default function User({setLoginUser}) {
   
    return (
        <div className="user">
             <h1>Hello to Homepage</h1>
           <div className="button" onClick={()=>{setLoginUser({})}}>LogOut</div>
        </div>
    )
}
