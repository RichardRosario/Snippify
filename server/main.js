import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  })
});

function onRoute(req, res, next) {
  //take token out and try to find match
  const link = links.findOne({ token: req.params.token });
  //if link is found, redirect user to orig url
  if (link) {
      Links.update(link, { $inc: { clicks: 1} });
      res.writeHead(307, { 'Location': link.url });
      res.end();
    } else {
      
      next();
    }

  //if not link is found, send user to React app
}

const middleware = ConnectRoute(function(router) {
  router.get('/:token', (req) => console.log(req))
})

WebApp.connectHandlers.use(middleware);