import React from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [Username, setUsername] = React.useState('')
    const [Password, setPassword] = React.useState('')

    const {setUser} = React.useContext(UserContext)

    const HandleSubmit = (e) => {
        e.preventDefault()
        setUser({Username, Password})
    }

    return (
        <div>
        <h2>Login</h2>
        <input type='text'
        value={Username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={Password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={HandleSubmit}>Submit</button>
    </div>
    )
 }
    


export default Login