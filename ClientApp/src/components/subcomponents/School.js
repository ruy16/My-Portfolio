﻿import React, { Component } from 'react';
import './School.css';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function School(props) {
    //checks if you have a degree, and will display the degree, major or just the major.
    function hasDegree(school) {
        if (school.degree == "") {
            return <CardSubtitle><span>{school.major}</ span></CardSubtitle>
        }
        return <CardSubtitle>{school.degree}, <span>{school.major}</span></CardSubtitle>
    }

    const school = props.school;
    return (
        <Col md={6}>
            <Card className="school-card">
                <CardBody className="school-body">
                    <Row>
                        <Col md={9} sm={12} className="school-info">
                            <CardTitle className="job-title">{school.name}</CardTitle>
                            {hasDegree(school)}
                            <CardText>{school.startDate} - {school.endDate}</CardText>
                            <CardText className="job-location">{school.location}</CardText>
                        </Col>
                        <Col md={3} sm={12}>
                            <CardImg className="school-logo" top width="100%" src={require('../../Images/schools/' + school.logo)} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
}

export default School;