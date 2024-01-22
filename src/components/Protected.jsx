import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/Context'
const ProtectedRoute = ({children}) => {
 
 const [User,setUser] =useContext(AuthContext)

 if (!User){
        return <Navigate to='/'/>

    }
    return children
}
export default ProtectedRoute;