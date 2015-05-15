(function() {
  Router.configure({
    layoutTemplate: 'mainLayout'
  });

  Router.plugin('auth');

}).call(this);
