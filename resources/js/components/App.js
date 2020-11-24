import React, { Component } from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/index";

import Nav from "./Nav";
import Bio from "./bio";
import Resume from "./resume";
import Projects from "./projects";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDash: true
        };
    }

    componentDidMount() {
        setInterval(() => {
            var state = this.state.showDash;
            var element = document.querySelector(".dash_blink1");
            element.hidden = state;
            this.setState({
                showDash: !state
            });
        }, 500);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Hey yo! </strong> This site is still under construction. :)
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <header>
                        <Nav></Nav>

                        <section className="bio-out-cont container">
                            <Bio></Bio>
                        </section>
                    </header>

                    <section id="hello" className="container">
                        <div className="cont-in hello-cont">
                            <h1 className="cont-header">Hi,</h1>
                            <p className="cont-text">
                                I am Junior Fullstack Web developer able to
                                build a Web presence from the ground up - from
                                concept, navigation, layout and programming to
                                UX and SEO. Skilled at writing well-designed,
                                testable and efficient code using current best
                                practices in Web development. Fast learner, hard
                                worker and team player who is proficient in an
                                array of scripting languages and multimedia Web
                                tools. <span className="dash_blink1">_</span>
                                <br></br>
                            </p>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon1"
                                    >
                                        <i
                                            className="fa fa-download fa-2x"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                </div>
                                <form action="./my-cv">
                                    <button type="submit">Download CV</button>
                                </form>
                            </div>
                        </div>
                    </section>

                    <hr />

                    <section id="resume" className="container">
                        <Resume></Resume>
                    </section>
                    <hr />
                    <section id="projects" className="container">
                        <Projects></Projects>
                    </section>

                </div>
            </ThemeProvider>
        );
    }
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
