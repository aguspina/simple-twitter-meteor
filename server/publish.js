Meteor.publish('tweets', function() {
  if (Meteor.userId()) {
    return Tweets.find();
  } else {
    this.ready();
  }
});