import React from "react";

class SeasonDisplay extends React.Component{
    render = () =>{
        return(
            <div className="season-display">
                <div className="season-display-description">Brrr Its Cold!</div>
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
                    Season Display Information
                </div>
            </div>
        )
    }
}

export default SeasonDisplay;