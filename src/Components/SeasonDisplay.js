import React from "react";

class SeasonDisplay extends React.Component{
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
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                    <div className="season-display-input-form">
                        <button className="season-display-input-button">Calculate</button>
                    </div>
                </div>

                
                <div className="season-display-information">
                    <div className="flex">
                       <p>Latitude  </p>
                       <p className="bigger">{this.props.latitude}</p>
                    </div>
                    <div className="flex">
                       <p>Longitude  </p>
                       <p className="bigger">{this.props.longitude}</p>
                    </div>
                    <div className="flex">
                       <p>Month  </p>
                       <p className="bigger">{this._convertMonth(this.props.month)}</p>
                    </div>
                    <div className="flex">
                       <p>Season  </p>
                       <p className="bigger">{this._getSeason(this.props.latitude, this.props.month)}</p>
                    </div>
                   
                </div>
            </div>
        )
    }
    _convertMonth(month){
        switch(month) {
            case 0:
              return 'January';
            case 1:
              return 'Feburary';
            case 2:
              return 'March';
            case 3:
              return 'April';
            case 4:
              return 'May';
            case 5:
              return 'June';
            case 6:
              return 'July';
            case 7:
              return 'August';
            case 8:
              return 'September';
            case 9:
              return 'October';
            case 10:
              return 'November'
            default:
              return 'December';
          }
    }

    _getSeason = (latitude, month) =>{ 
        if(month > 2 && month < 9){
            return latitude > 0 ? 'Summer' : 'Winter';
        }else{
            return latitude > 0 ? 'Winter' : 'Summber';
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