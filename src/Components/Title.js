import React from "react";

class Title extends React.Component{
    render(){
        return(
            <h1 className="application-title">
                {this.props.title}
            </h1>
        )
    }
}

export default Title;
