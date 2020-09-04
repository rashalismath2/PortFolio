import React, { Component } from "react";
import ReactDOM from 'react-dom';

class App extends Component{

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                
            </div>
        );
    }

}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
