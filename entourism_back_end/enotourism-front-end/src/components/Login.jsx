import { Button } from "./Button"
import React , {useState} from "react"
import './Login.css';
import Footer from './Footer';



export const Login = (props) => {

    

    return (
<>
    <form>
       
       <div className="auth-form-container">
           <h1 className="h1" >Sign in as</h1>

            <form className="Buttons" >
                
                 <form action="./LoginWineTester">
                <input className="winetaster-button" type="submit" value="WINE TASTER" />
                </form>

                

                <form action="./LoginWineryOwner">
                <input className="wineryowner-button" type="submit" value="WINERY OWNER" />
                </form>

                <form action="./LoginWineryTourGuide">
                <input className="wine-tour-guide-button" type="submit" value="WINE TOUR GUIDE" />
                </form>

            </form>
        </div>
    </form>
    
    

          
          <Footer/>
        </>
)
    }