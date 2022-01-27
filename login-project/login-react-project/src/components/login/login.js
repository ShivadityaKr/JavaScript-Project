import React, {useState} from 'react'
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login( {setLoginUser}) {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        email:"",
        password : ""
    })
    const handleChange = (e)=>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = ()=>{
        axios.post("http://localhost:9000/login",user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        });
    }
    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange } />
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange } />
            <div className="button" onClick={ login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}
