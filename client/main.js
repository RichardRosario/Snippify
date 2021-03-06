import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Header from './components/Header';
import LinkCreate from './components/LinkCreate';
import { Links } from '../imports/collections/links';
import LinkList from './components/LinkList';

const App = () => {
  return(
    <div>
    <Header />
    <LinkCreate />
    <LinkList />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'))
})