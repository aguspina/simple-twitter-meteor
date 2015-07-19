Template.tweetCreate.events({
  'click .js-tweet-add': function (event) {

    var tweetText = $("#tweet-text").val();
    if (tweetText.length == 0) return;

    Meteor.call('addTweet', tweetText);
    $("#tweet-text").val("");
    
    return false;
  }
});
