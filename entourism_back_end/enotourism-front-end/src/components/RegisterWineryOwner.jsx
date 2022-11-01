import React , {useState} from "react"
import './RegisterWineryOwner.css';
import Footer from "./Footer";

export const RegisterWineryOwner = (props) => {
    const[email,setEmail] = useState('');
    const[pass,setPass]= useState('');
    const[name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (

        <>
        <div className="auth899">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input className="reg6771" value={name} onChange={(e) => setName(e.target.value)}type="name" placeholder="FullName" name="name" id="name"/>
        <label htmlFor="email">email</label>
        <input className="reg6771" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
       
        
        <input className="reg6771" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        
    </form>

    <form action="./LoginWineryOwner">
    <input className="reg6771"  type="submit" value="Already have an account? Login here" />
</form>

</div>


<Footer/>
</>
    )
}