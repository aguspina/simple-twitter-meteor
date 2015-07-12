Meteor.startup(function () {
});

Tweets.allow({
  insert: function (userId, doc) {
    return true;
  }
});