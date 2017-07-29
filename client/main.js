import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players,calculatePlayerPositions} from './../imports/api/players';

import App from "../imports/ui/App";





Meteor.startup(function() {

    Tracker.autorun(()=>{
        let playerslist = Players.find({},{sort:{score: -1}}).fetch()
        let positionedPlayer = calculatePlayerPositions(playerslist)
        let title = "Scoreboard"
        ReactDOM.render(<App title={title} players={positionedPlayer}/>, document.getElementById('app'));
    })

});