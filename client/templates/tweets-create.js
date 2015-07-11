Template.tweetCreate.helpers({
  'submit .js-tweet-new': function(event) {
    event.preventDefault();

    var $input = $(event.target).find('[type=text]');
    if (!$input.val())
      return;
    
    Tweets.insert({
      text: $input.val(),
      owner: Meteor.userId(),
      createdAt: new Date()
    });
    $input.val('');
  }
});
