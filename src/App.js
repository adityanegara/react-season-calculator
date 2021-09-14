import React from "react";
import SeasonDisplay from "./Components/SeasonDisplay";
import Title from "./Components/Title";
import './Styles/main.css';
class App extends React.Component{
    state= {latitude: null, longitude: null, errorMessage:'', }
    componentDidMount(){
        this._getUserLocation();
    }
    render = () =>{
        if(this.state.errorMessage === '' && this.state.latitude != null){
            return (
                <React.Fragment>
                    <Title title="SEAS CALC"/>
                    <SeasonDisplay latitude={this.state.latitude} longitude={this.state.longitude} month={new Date().getMonth()}/>
                </React.Fragment>
            )
        }
        if(this.state.errorMessage && this.state.latitude == null){
            return (
                <React.Fragment>
                    <Title title={this.state.errorMessage}/>
                </React.Fragment>
            )
        }else{
            return (
                <React.Fragment>
                    <Title title='Load'/>
                </React.Fragment>
            )
        }
     
    }
    _getUserLocation(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
                this.setState({longitude:position.coords.longitude})
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        )
    }
}

export default App;