(function() {
  var users;

  users = [
    {
      password: 'password',
      username: 'user'
    }, {
      password: 'password',
      username: 'admin'
    }
  ];

  Meteor.startup(function() {
    var user, _i, _len, _results;
    if (!Meteor.users.find().count()) {
      _results = [];
      for (_i = 0, _len = users.length; _i < _len; _i++) {
        user = users[_i];
        _results.push(Accounts.createUser(user));
      }
      return _results;
    }
  });

}).call(this);
