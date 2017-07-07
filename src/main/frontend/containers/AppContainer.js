"use strict";
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import React, {Component} from 'react';

import ContactInfoCard from '../components/ContactInfoCard';
import EID from '../components/eID';
import Reservation from '../components/Reservation.js';
import Mail from '../components/Mail.js';
import Username from '../components/Username.js';
import Feed from '../components/Feed.js';
import Gamification from '../components/Gamification.js';
import {connect} from "react-redux";
import { saveContactEmail, saveContactPhone, setReservation, removeReservation, setPostbox } from '../utilities/actions';

class AppContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
        }
    }

    componentWillMount() {
    //  Fetch data from API
    }


    render() {
        return (
            <div>
                <Username
                    username={this.props.username}
                />
                <Row>
                    <Col sm={6} md={3} >
                        <ContactInfoCard
                            onSaveEmail={this.props.changeEmail}
                            onSavePhone={this.props.changePhone}
                            savedEmail={this.props.activeContactEmail}
                            savedPhone={this.props.activeContactPhone}
                        />
                    </Col>
                    <Col sm={6} md={3} >
                        <Mail
                            onSetPostbox={this.props.setActivePostbox}
                            postbox={this.props.activePostbox}
                        />
                    </Col>
                    <Col sm={6} md={3} >
                        <EID
                            userActiveEid={this.props.activeEid}
                            userNonActiveEid={this.props.nonActiveEid}
                        />
                    </Col>
                    <Col sm={6} md={3} >
                        <Reservation
                            onSetReservation={this.props.setActiveReservation}
                            onRemoveReservation={this.props.removeActiveReservation}
                            reservation={this.props.activeReservation}
                        />
                    </Col>
                </Row>
                <Gamification
                    hasEmail={this.props.userHasEmail}
                    hasPhone={this.props.userHasPhone}
                    hasPostbox={this.props.userHasPostbox}
                    hasEid={this.props.userHasEid}
                />
                <div className="pageheader"><h3>Aktivitetslogg</h3></div>
                <Feed
                    ownActivity={this.props.recentUserActivity}
                    publicSectorActivity={this.props.recentPublicActivity}
                />
            </div>
        );
    }
}


const mapStateToProps = state => {
    let {info: {username, activeContactEmail, activeContactPhone, activeReservation, activePostbox, activeEid, nonActiveEid, recentUserActivity, recentPublicActivity}} = state;

    let {userHasEmail, userHasPhone, userHasPostbox, userHasEid} = true;

    userHasEmail = activeContactEmail !== '';

    userHasPhone = activeContactPhone !== '';

    userHasPostbox = activePostbox !== '';

    userHasEid = activeEid.length > 0;

    return {
        username: username,
        activeContactEmail: activeContactEmail,
        activeContactPhone: activeContactPhone,
        activeReservation: activeReservation,
        activePostbox: activePostbox,
        activeEid: activeEid,
        nonActiveEid: nonActiveEid,
        userHasEmail: userHasEmail,
        userHasPhone: userHasPhone,
        userHasPostbox: userHasPostbox,
        userHasEid: userHasEid,
        recentUserActivity: recentUserActivity,
        recentPublicActivity: recentPublicActivity,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeEmail: (contactEmail) => dispatch(saveContactEmail(contactEmail)),
        changePhone: (contactPhone) => dispatch(saveContactPhone(contactPhone)),
        setActiveReservation: () => dispatch(setReservation()),
        removeActiveReservation: () => dispatch(removeReservation()),
        setActivePostbox: (postbox) => dispatch(setPostbox(postbox)),
    }
};

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppContainer;
