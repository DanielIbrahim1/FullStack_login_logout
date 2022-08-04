import {React,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {doSigninAsync,selectEmail,selectUserName,logout,selectToken} from './loginSlice'


const Login = () => {
    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const userName = useSelector(selectUserName);
    const token = useSelector(selectToken);
    const [UsrName, setusrName] = useState('')
    const [Pass, setpass] = useState('')
    return (
    <div>
        {userName && <div>User name: {userName}</div>}
        {email && <div> Email: {email}</div>}
        {token && <div> token: {token}</div>}
        <hr/>


        username<input  onChange={((e)=>setusrName(e.target.value))} />
        <br></br>


        password<input type={"password"} onChange={((e)=>setpass(e.target.value))} />
        <button onClick={()=>dispatch(doSigninAsync({username:UsrName, 
          password:Pass}))}>Login</button>

         <br></br>
        <button onClick={()=>dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login