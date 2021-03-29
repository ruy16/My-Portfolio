import React, { Component } from 'react';
import {
    Row, Col
} from 'reactstrap';
import Music from './subcomponents/Music';


export class Musics extends Component {
    displayName = Musics.name;

    constructor(props) {
        super(props);
        this.state = {
            music: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('api/music')
            .then(response => response.json())
            .then(data => {
                this.setState({ music: data, isLoading: false })
            })
    }

    render() {
        if (this.state.isLoading) {
            return (<div className="spinner-border image-center" style={{ width: '5rem', height: '5rem' }}> </div>);
        }
        else {
            return (
                <div>
                    <div>
                        <h1 className="text-center">Music</h1>
                      
                        <hr></hr>
   
                        <Row>
                            {this.state.music.map(music =>
                                <Music key={music.id} music={music} />
                            )}
                        </Row>
                    </div>
                </div>
            );
        }
    }
}; 