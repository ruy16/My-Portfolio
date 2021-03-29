import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { About } from './components/About';
import { Jobs } from './components/Jobs';
import './custom.css'
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Musics } from './components/Musics';

export default class App extends Component {
    static displayName = App.name;


  render () {
    return (
        <Layout>
        <Route exact path='/' component={About} />
        <Route exact path='/' component={Jobs} />
        <Route path='/jobs' component={Jobs} />
        <Route exact path='/' component={Education} />
        <Route path='/Education' component={Education} />
        <Route exact path='/' component={Projects} />
        <Route path='/projects' component={Projects} />
        <Route exact path='/' component={Musics} />
        <Route path='/music' component={Musics} />
      </Layout>
    );
  }
}
