Meteor.startup(function () {
  // fixtures
  // process.env.MAIL_URL = 'smtp://smtp.mandrillapp.com:587'; 
	process.env.MAIL_URL = 'smtp://postmaster@sandbox5d74f859068945c68d75d1ecedf58f6a.mailgun.org:627de697297c07ef15ec3078dde00c3f@smtp.mailgun.org:587';


});


Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
 
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text    
    });
  }
}); 
