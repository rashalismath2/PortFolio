import React,{Component} from "react"

class Projects extends Component{

    constructor(props){
        super(props)
        this.changeProject=this.changeProject.bind(this)
        this.state={
            selectedProject:"web",
            projects:{
                mobile:[
                    {
                        title:"Library App",
                        description:"Developing a library application for API class. Here I used node.js to build my backend with MySQL"+
                                        "database. I also had to use third party API’s to build a fully functional app",
                        tech:["Android Studio","MySQL","Node.js"],
                        repo:"https://github.com/rashalismath2/library-app",
                        img:"/images/mobile.jpg"
                    }
                ],
                web:[
                    {
                        title:"Platform for consult a psychiatrist (College Project)",
                        description:"This was the second year final project. Under the digital wellbeing theme my research was carried"+
                                    "out to build a platform where anyone can sign up and seek help for their mental help. Here I used"+
                                    "WebRTC API to build the video stream capability.",
                        tech:["Node.js","Vue.js","MySQL","Pusher.js","WebRTC"],
                        repo:"https://github.com/rashalismath2/social",
                        img:"/images/cons.jpg"
                    },
                    {
                        title:"Resource allocation system (College Project)",
                        description:"Developing a resource allocation system for BCAS campus for web development class assignment."+
                                    "Here I used Laravel and Vue.js frameworks with MySQL database.",
                        tech:["Laravel","MySQL","Vue.js"],
                        repo:"https://github.com/rashalismath2/wdd",
                        img:"/images/wdd.jpg"
                    },
                    {
                        title:"Accounting software",
                        description:"NaN",
                        tech:["Laravel","MySQL"],
                        repo:"https://github.com/rashalismath2/accounts",
                        img:"/images/accounts.jpg"
                    },
                    {
                        title:"Realstate website",
                        description:"NaN",
                        tech:["Laravel","MySQL","React.js"],
                        repo:"https://github.com/rashalismath2/realstate",
                        img:"/images/realstate.jpg"
                    },
                ]
            }
        }
    }

    changeProject(sel){
        this.setState({
            selectedProject:sel
        })
    }
    imgHovered(e){
        var el=document.getElementById(e)

    }

    render(){

        var showProject=this.state.projects[this.state.selectedProject].map((project,index)=>{
                return(
                    <div className="project-iter" key={project.title}>
                        <div className="project-image">
                            <img  src={project.img} />
                            <div className="project-image-overlay"></div>
                            <button data-toggle="modal" data-target={"#img"+index} >Show</button>
                        </div>
                      
                        <div className="modal fade" id={"img"+index} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="project-image-model-dialog modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img className="project-image-model-image" src={project.img} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    

                        <div className="project-det">
                            <p className="project-title">{project.title}</p>
                            <p className="project-description">{project.description}</p>
                            <p className="project-stack">Used Stack :</p>
                            <ul className="project-tech">
                                {
                                    project.tech.map(element => {
                                    return(
                                        <li key={element}>{element}</li>
                                    )   
                                    })
                                }
                            </ul>
                            <p className="project-repo"><a target="blank" href={project.repo}>GitHub</a></p>
                        </div>
                    </div>
                )
            })
       

        return(
            <div className="cont-in ">
                <h1 className="cont-header">Projects,</h1>
                <div className="projects-header">
                    <ul>
                    <li className={this.state.selectedProject=="web" ? "selected":""} onClick={()=>{this.changeProject("web")}}>WEB</li>
                        <li className={this.state.selectedProject=="mobile" ? "selected":""} onClick={()=>{this.changeProject("mobile")}}>MOBILE</li>
                    </ul>
                </div>
                
                <div className="projects-cont">
                    {showProject}
                </div>
            </div>
        )
    }

}

export default Projects