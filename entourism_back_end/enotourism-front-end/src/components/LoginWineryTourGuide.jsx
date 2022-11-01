import { Button } from "./Button"
import React , {useState} from "react"
import './LoginWineryTourGuide.css';
import './RegisterWineryTourGuide';
import Footer from "./Footer";
export const LoginWineryTourGuide = (props) => {

    const[email,setEmail] = useState('');
    const[pass,setPass]= useState('');
     

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
<>
    <form>
       
       <div className="auth6">
            
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login Form </h2>
                <label htmlFor="email">YOUR E-MAIL:</label>
                <input  className = "reg6"value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">YOUR PASSWORD:</label>
                <input className = "reg6" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                 <input className = "reg6"type="submit" value="Log In" />

                 <form action="./RegisterWineryTourGuide">
                <input className = "reg6" type="submit" value="Register here!" />
                </form>
            </form>
               

           
       
        </div>
    </form>
    
    <Footer/>
    </>
)
}