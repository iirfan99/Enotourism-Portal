import { Button } from "./Button"
import React , {useState} from "react"
import './LoginWineryOwner.css';
import './RegisterWineryOwner';
import Footer from "./Footer";
export const LoginWineryOwner = (props) => {

    const[email,setEmail] = useState('');
    const[pass,setPass]= useState('');
     

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
<>
    <form>
       
       <div className="auth89">
            
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login Form </h2>
                <label htmlFor="email">YOUR E-MAIL:</label>
                <input className="reg67"value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">YOUR PASSWORD:</label>
                <input className="reg67" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                 <input className="reg67"  type="submit" value="Log In" />

                 <form action="./RegisterWineryOwner">
                <input className="reg67" type="submit" value="Register here!" />
                </form>
            </form>
               

           
       
        </div>
    </form>
    
    <Footer/>
    </>
)
}