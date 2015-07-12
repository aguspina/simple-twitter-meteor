Template.tweetCreate.helpers({
  'submit .js-tweet-new': function(event) {
    var tweetText = event.target.text.value;
    if (tweetText)
      return;
    
    Meteor.call('addTweet',text);
    event.target.text.value = "";
    return false;
  }
});
