import React, { Component } from 'react';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './music.css';

//props are properties that come from a parent component, in this case Jobs. props will not change, so we can use them directly in our render function
function Music(props) {
    const music = props.music;

    return (
        <div className="music">
            <Card className="music-card">
                <CardBody className="music-body">
                    <Row>
                        <Col md={5} sm={12}>
                            <div className="center-music-info">
                                <CardTitle className="h4">{music.description}</CardTitle>
                                <CardImg top width="100%" src={require('../../Images/music/' + music.image_link )} />
                                <audio controls="controls" src={require('../../Audios/compositions/' + music.link_play)}>
                                    Your browser does not support the audio element. 
                                </audio>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}

export default Music;