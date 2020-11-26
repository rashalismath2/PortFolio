import React from "react";

function Resume() {
    return (
        <div  className="cont-in resume-cont">
            <h1 className="cont-header">Resume,</h1>
            <p className="cont-text">
                A passionate individual about the field of Computer Science and
                Web Development who is always found to be reading and watching
                videos about new tools and technologies. A person who also can
                work with less supervision and handle tasks responsively.
                Possesses the Ability to function in a multi-cultural working
                environment and multi task. Eagerly accepts new challenges and
                adapts well to any possible situation. Willing to shift to other
                professions and expertise in order to grow and learn other
                ventures.
            </p>
            <br></br>
            <h2>Objective</h2>

            <p>
                To associate with a vibrant organization, to fully utilize my
                knowledge, skills and contribute to the overall growth of the
                organization.
            </p>

            <div className="resume-education-cont clearfix">
                <div className="resume-education res-edu">
                    <h2 className="resume-sub-head">EDUCATION</h2>
                    <ul>
                        <li>
                            <p className="ed-title">PEARSON UK</p>
                            <p className="ed-year">2018 - 2020</p>
                            <p className="ed-desc">
                                HIGHER NATIONAL DIPLOMA IN COMPUTING
                            </p>
                        </li>
                        <li>
                            <p className="ed-title">PEARSON UK</p>
                            <p className="ed-year">2017 - 2018</p>
                            <p className="ed-desc">
                                DIPLOMA IN INFORMATION TECHNOLOGY
                            </p>
                        </li>
                        <li>
                            <p className="ed-title">
                                DEHIOWITA NATIONAL COLLEGE
                            </p>
                            <p className="ed-year">2015 - 2017</p>
                            <p className="ed-desc">ADVANCED LEVEL (MATHS)</p>
                        </li>
                        <li>
                            <p className="ed-title">KEGALLE VIDYALAYA</p>
                            <p className="ed-year">2014</p>
                            <p className="ed-desc">ORDINARY LEVEL</p>
                        </li>
                    </ul>
                </div>

                <div className="resume-education  tech-stack">
                    <h2 className="resume-sub-head">TECH STACK</h2>
                    <ul>
                        <li>
                            <p className="ed-title">WIREFRAMING</p>
                            <p className="ed-desc">Adobe XD</p>
                        </li>
                        <li>
                            <p className="ed-title">PROGRAMMING LANGUAGES</p>
                            <p className="ed-desc">
                                Java, C#, PHP, Python, JavaScript, TypeScript
                            </p>
                        </li>
                        <li>
                            <p className="ed-title">FRONT-END FRAMEWORKS</p>
                            <p className="ed-desc">
                                React.js, Vue.js, Angular.js
                            </p>
                        </li>
                        <li>
                            <p className="ed-title">BACK-END FRAMEWORKS</p>
                            <p className="ed-desc">
                                LARAVEL,NODE.Js
                            </p>
                        </li>
                        <li>
                            <p className="ed-title">DATABASE SYSTEMS</p>
                            <p className="ed-desc">
                                MySQL, Oracle SQL, MS SQL, Mongo DB, FireBase,
                                Redis
                            </p>
                        </li>
                        <li>
                            <p className="ed-title">DevOps</p>
                            <p className="ed-desc">GitHub, CircleCI, Docker</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;
