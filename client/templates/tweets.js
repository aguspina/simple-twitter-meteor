Template.tweets.helpers({
  tweets: function () {
    return Tweets.find({}, {sort: {createdAt: -1}});
  } 
});
