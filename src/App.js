import React from "react";
import SeasonDisplay from "./Components/SeasonDisplay";
import Title from "./Components/Title";
import './Styles/main.css';
class App extends React.Component{
    render = () =>{
        return (
            <React.Fragment>
                <Title title="SEAS CALC"/>
                <SeasonDisplay/>
            </React.Fragment>
       
        )
    }
}

export default App;