import React from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = React.useContext(UserContext)

    if(!user) return <h1>Please Login</h1>

    return (
        <h1>Welcome {user.Username}</h1>
    )
 }
    


export default Profile