Template.tweetCreate.events({
  'click .js-tweet-add': function(event) {
    debugger;
    var tweetText = $(".js-tweet-new").find("input").val();
    if (!tweetText)
      return;
    
    Meteor.call('addTweet',tweetText);
    $(".js-tweet-new").find("input").val("");
    return false;
  }
});

