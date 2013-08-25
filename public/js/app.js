$(function() {
  function Feed(id) {
    var self = this;
    self.id = id;

    self.fetch = function() {
      return $.get('/api/feeds/' + self.id);
    };
  };
  
  function FeedViewModel() {
    var self = this;
    self.id = 1,
    self.items = ko.observableArray();

    self.fetchFeed = function() {
      var feed = new Feed(1);
      feed.fetch().done(function(data) {
        self.id = feed.id + ":";
        for (var i = 0; i < data.items.length; i++) {
          self.items.push(data.items[i]);
        }
      });
    };
  };

  ko.applyBindings(new FeedViewModel());
});