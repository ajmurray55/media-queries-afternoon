import React, {Component} from 'react'
import './Body.css'

class Body extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="body">
               <h1 className="welcome">Welcome To Our Studio!</h1>
               <h1 className="nice">IT'S NICE TO MEET YOU</h1>
               <button className="TMM-button">TELL ME MORE</button>
            </div>
        )
    }

}

export default Body