
// import { useAuth } from "./Auth"
import { useNavigate } from "react-router-dom"
export const Profile=()=>{
    // const auth = useAuth()
    const navigate = useNavigate()
    // const deconnecteUser = ()=>{
    //     auth.logOut()
    //     navigate('/')
    // }
    return (
        <div>
            <h1>Profile User</h1>
            {/* <p>Welcome {auth.user}</p>
            <button onClick={deconnecteUser}>Logout</button> */}
        </div>
    )
}