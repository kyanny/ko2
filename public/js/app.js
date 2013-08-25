$(function() {
  function Feed(id, subject, url) {
    var self = this;
    self.id = id;
    self.name = name;
    self.url = url;

    self.fetch = function() {
      return $.get('/api/feeds/' + self.id);
    };
  };
  
  function FeedViewModel() {
    var self = this;
    self.feed = new Feed(1, '', '');
    self.id = self.feed.id;
    self.items = ko.observableArray();

    self.feed.fetch().done(function(data) {
      for (var i = 0; i < data.items.length; i++) {
        self.items.push(data.items[i]);
      }
    });
  };

  ko.applyBindings(new FeedViewModel());
});