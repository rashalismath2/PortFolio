import React from "react";

function Nav() {
    return (
        <nav>
            <section className="container">
                <ul >
                    <li><a data-scroll href="#hello">HELLO</a></li>
                    <li><a data-scroll href="#resume">RESUME</a></li>
                    <li><a data-scroll href="#projects">PORTFOLIO</a></li>
                    <li><a data-scroll href="#contact">CONTACT</a></li>
                    <li><a target="_blank" data-scroll href="https://rashalismath.medium.com/">BLOG</a></li>
                </ul>
            </section>
        </nav>
    );
}

export default Nav;
