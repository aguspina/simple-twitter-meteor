Template.tweets.helpers({
  username: function(userId) {
    return Users.find({id: userId});
  },
  tweets: function () {
    return Tweets.find({});
  } 
});
