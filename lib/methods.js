Meteor.methods({
  addTweet: function (text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("NOT AUTHORIZED");
    }

    Tweets.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().emails[0].address
    });
  }
});
