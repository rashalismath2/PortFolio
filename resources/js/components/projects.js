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
                        repo:"https://github.com/rashalismath2/library-app"
                    }
                ],
                web:[
                    {
                        title:"Platform for consult a psychiatrist (College Project)",
                        description:"This was the second year final project. Under the digital wellbeing theme my research was carried"+
                                    "out to build a platform where anyone can sign up and seek help for their mental help. Here I used"+
                                    "WebRTC API to build the video stream capability.",
                        tech:["Node.js","Vue.js","MySQL","Pusher.js","WebRTC"],
                        repo:"https://github.com/rashalismath2/social"
                    },
                    {
                        title:"Resource allocation system (College Project)",
                        description:"Developing a resource allocation system for BCAS campus for web development class assignment."+
                                    "Here I used Laravel and Vue.js frameworks with MySQL database.",
                        tech:["Laravel","MySQL","Vue.js"],
                        repo:"https://github.com/rashalismath2/wdd"
                    },
                    {
                        title:"Accounting software",
                        description:"NaN",
                        tech:["Laravel","MySQL"],
                        repo:"https://github.com/rashalismath2/accounts"
                    },
                    {
                        title:"Realstate website",
                        description:"NaN",
                        tech:["Laravel","MySQL","React.js"],
                        repo:"https://github.com/rashalismath2/realstate"
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

    render(){

        var showProject=this.state.projects[this.state.selectedProject].map(project=>{
                return(
                    <div className="project-iter" key={project.title}>
                        <div className="project-image">
                            <img src="https://via.placeholder.com/300/09f/fff.png" />
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
                            <p className="project-repo"><a href={project.repo}>GitHub</a></p>
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