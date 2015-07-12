Meteor.publish('tweets', function() {
  return Tweets.find({}, {sort: {createdAt: -1}});
});