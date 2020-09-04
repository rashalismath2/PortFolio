import React,{Component} from "react"

class Bio extends Component{

    constructor(props){
        super(props)
        this.state={
            showDash:true
        }
    }


    componentDidMount(){
        setInterval(()=>{
            var state=this.state.showDash
            var element=document.querySelector(".dash_blink")
            element.hidden=state 
            this.setState({
                showDash:!state
            })
        }, 500);
    }

    render(){
            
    return(
        <div>
            <div id="bio-cont">
                <div className="bio-image">
                    <img src="../images/profile.jpg" />
                </div>
                <div className="bio-details">
                    <h2>Razzaq Ismathulla</h2>
                    <p>Fullstack Developer <span className="dash_blink">_</span></p>
                   
                    <div className="bio-details-det">
                        <div className="bio-det-titles">
                            <ul >
                                <li>AGE :</li>
                                <li>PHONE :</li>
                                <li>EMAIL :</li>
                                <li>ADDRESS :</li>
                            </ul>
                        </div>
                        <div className="bio-det-vals">
                            <ul>
                                <li>23</li>
                                <li>+94-768646392</li>
                                <li>Rashalismath@gmail.com</li>
                                <li>17/4, Wijayaba lane,kalubovila.</li>
                            </ul>
                        </div>
                        <ul className="bio-social">
                            <li><i className="fa fa-facebook-official fa-1x" aria-hidden="true"></i></li>
                            <li><i className="fa fa-github fa-1x" aria-hidden="true"></i></li>
                            <li><i className="fa fa-twitter fa-1x" aria-hidden="true"></i></li>
                            <li><i className="fa fa-linkedin fa-1x" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
    }

}

export default Bio