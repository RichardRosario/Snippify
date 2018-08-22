import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'links.insert': function(url) {
    //validUrl.isUri(url);
    //check to see if it is valid url
    check(url, Match.Where(url => validUrl.isUri(url)));

    //if valid, save the url, generate token and add both
    const token = Math.random().toString(36).slice(-7);
    Links.insert({ url, token, clicks: 0 })
  }
})

export const Links = new Mongo.Collection('links'); 