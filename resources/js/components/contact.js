import React,{Component} from "react"

class Contact extends Component{
    
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            message:"",
            hasErrors:false,
            showSpinner:false,
            errors:{},
            showSuccessMessage:false
        }
        this.inputs = this.inputs.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    }

    inputs(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitMessage(){
        this.setState({
            showSpinner:true
        })
        axios.post("/api/messages",{
            name:this.state.name,
            email:this.state.email,
            message:this.state.message.toString()
        })
        .then(res=>{
            this.setState({
                name:"",
                email:"",
                message:"",
                hasErrors:false,
                showSpinner:false,
                showSuccessMessage:true
            })
        })
        .catch(e=>{
            console.log(e)
            this.setState({
                hasErrors:true,
                showSpinner:false,
                errors:e.data
            })
        })
    }

    render(){

        var errors=""
        var spinner=""

        if(this.state.hasErrors){
            errors=<div  className="alert alert-danger alert-dismissible fade show" role="alert">
                Something went wrong with the inputs. Please try again.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        }
        if(this.state.showSuccessMessage){
            errors=<div  className="alert alert-success alert-dismissible fade show" role="alert">
                You message has been submitted. Thank you.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        }
        if(this.state.showSpinner){
            spinner=<div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
        }

        return(
            <div id="contact-cont">
                {errors}
                <div id="cotact-direct">
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
                            <li>17/4, Wijayaba Lane,Kalubovila.</li>
                        </ul>
                    </div>
                    <ul className="bio-social">
                        <li><a target="_blank" href="https://facebook.com/razzaq.ismath"><i className="fa fa-facebook-official fa-1x" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/rashalismath2" target="_blank"><i className="fa fa-github fa-1x" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/RazzaqIsmath" target="_blank"><i className="fa fa-twitter fa-1x" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/rashal-ismathulla/" target="_blank"><i className="fa fa-linkedin fa-1x" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                </div>
                <div id="cotact-message">
                    <p>Or just write me a letter here_</p>
                    <input value={this.state.name} required placeholder="Enter Your Name" onChange={this.inputs}  name="name" />
                    <input value={this.state.email} required onChange={this.inputs} placeholder="Enter Your Email" name="email" />
                    <textarea value={this.state.message} required onChange={this.inputs} placeholder="Enter Your Message" name="message"></textarea>
                    <button onClick={this.submitMessage} id="contact-button">
                    {spinner}
                    {this.state.showSpinner?"":"SEND"}
                    </button>
                </div>
            </div>
        )
    }
}

export default Contact