import {createContext,useState,useEffect} from 'react';
// import { auth } from '../utils/firebase';
import { auth } from '../utils/firebase/firebase';
import { useNavigate} from 'react-router-dom';



export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
    
    auth.onAuthStateChanged((user)=>{
        setUser(user);
    });
      
    }, [])

    const logout = () =>{
      auth.signOut().then(()=>{
        setUser(null);
        navigate('/login');
      })
    }
    
    

    return ( <AuthContext.Provider value={{user,logout}}>
        {children}
    </AuthContext.Provider>
    );
};
