import React from "react";
import {limitNumber, convertNumberToMonth, animateToSummer, animateToWinter} from '../Utils/Helper';

class SeasonDisplay extends React.Component{
    onButtonClick = () =>{
      const inputLatiude = document.getElementById('input-latitude').value;
      const inputLongitude = document.getElementById('input-longitude').value;
      const inputMonth = document.getElementById('input-month').value;
      const season = this._getSeason(inputLatiude, inputMonth);
      if(season === "Summer"){
        animateToSummer();
      }else{
        animateToWinter();
      }
      this.props.onCalculateClick(inputLatiude, inputLongitude, inputMonth);
    }  

    render = () =>{
        return(
            <div className="season-display">
                <div className="season-display-description">{this._displayDescription(this._getSeason(this.props.latitude, this.props.month))}</div>
                <div className="season-display-input">
                    <div className="season-display-input-form">
                        <label htmlFor="input-latitude">Latitude</label>
                        <br/>
                        <input id="input-latitude" placeholder="0" type="number"></input>
                    </div>
                    <div className="season-display-input-form">
                        <label htmlFor="input-longitude">Longitude</label>
                        <br/>
                        <input id="input-longitude"  placeholder="0"  type="number"></input>
                    </div>
                    <div className="season-display-input-form">
                        <label htmlFor="input-month">Month</label>
                        <br/>
                        <select id="input-month">
                            <option value="0">January</option>
                            <option value="1" >February</option>
                            <option value="2">March</option>
                            <option value="3">April</option>
                            <option value="4">May</option>
                            <option value="5">June</option>
                            <option value="6">July</option>
                            <option value="7">August</option>
                            <option value="8">September</option>
                            <option value="9">October</option>
                            <option value="10">November</option>
                            <option value="11">December</option>
                        </select>
                    </div>
                    <div className="season-display-input-form">
                        <button className="season-display-input-button" onClick={()=>{this.onButtonClick()}}>Calculate</button>
                    </div>
                </div>

                
                <div className="season-display-information">
                    <div className="flex">
                       <p>Latitude  </p>
                       <p className="bigger">{limitNumber(this.props.latitude, 5)}</p>
                    </div>
                    <div className="flex">
                       <p>Longitude  </p>
                       <p className="bigger">{limitNumber(this.props.longitude, 5)}</p>
                    </div>
                    <div className="flex">
                       <p>Month  </p>
                       <p className="bigger">{convertNumberToMonth(this.props.month)}</p>
                    </div>
                    <div className="flex">
                       <p>Season  </p>
                       <p className="bigger" id="testing">{this._getSeason(this.props.latitude, this.props.month)}</p>
                    </div>
                </div>
            </div>
        )
    }
   
    _getSeason = (latitude, month) =>{ 
        if(month > 2 && month < 9){
            return latitude > 0 ? 'Summer' : 'Winter';
        }else{
            return latitude > 0 ? 'Winter' : 'Summer';
        }
    }

    _displayDescription = (season) =>{
        if(season === 'Summer'){
            return 'Huft Its Hot!';
        }else{
            return 'Brr Its Cold!';
        }
    }
    
}

SeasonDisplay.defaultProps = {
    latitude: '0',
    longitude: '0',
    month:'January',
}

export default SeasonDisplay;