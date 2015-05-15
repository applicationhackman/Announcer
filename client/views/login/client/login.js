(function() {
  var loginSchema;

  loginSchema = new SimpleSchema({
    login: {
      autoform: {
        placeholder: 'schemaLabel'
      },
      label: 'Email or username',
      type: String
    },
    password: {
      autoform: {
        placeholder: 'schemaLabel',
        type: 'password'
      },
      min: 6,
      type: String
    }
  });

  loginSchema.messages({
    'auth login': 'Incorrect email, username or password',
    'auth password': ' '
  });

  AutoForm.hooks({
    loginForm: {
      onError: function(operation, error, template) {
        var context, _ref;
        if (error instanceof Meteor.Error) {
          if ((_ref = error.reason) === 'Incorrect password' || _ref === 'User not found') {
            context = AutoForm.getValidationContext(this.formId);
            return context.addInvalidKeys([
              {
                name: 'login',
                type: 'auth'
              }, {
                name: 'password',
                type: 'auth'
              }
            ]);
          } else {
            return console.warn(error.message);
          }
        }
      },
      onSubmit: function(insertDoc, updateDoc, currentDoc) {
        var cb, login, password;
        login = insertDoc.login, password = insertDoc.password;
        cb = (function(_this) {
          return function(error) {
            return _this.done(error);
          };
        })(this);
        Meteor.loginWithPassword(login, password, cb);
        return false;
      }
    }
  });

  Template.login.helpers({
    settings: {
      "class": 'form-login',
      id: 'loginForm',
      schema: loginSchema
    }
  });

}).call(this);
