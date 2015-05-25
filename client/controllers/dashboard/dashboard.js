var SourceFolder = "Subscribers";


Template.dashboard.helpers({

    subscribers :  function(){


          var sub = Folders.findOne({Name:"Subscribers"});            
          return {url:"/subscribers/"+sub._id};

    },
    forms :  function(){


          var sub = Folders.findOne({Name:"Webforms"});                      

          return {url:"/subscribers/"+sub._id};

    },
    pages :  function(){

          var sub = Folders.findOne({Name:"Pages"});                      

          return {url:"/subscribers/"+sub._id};

    },
     mails :  function(){  

          var sub = Folders.findOne({Name:"Mails"});                       

          return {url:"/subscribers/"+sub._id};

    }

  
});



Meteor.startup( function () {

    


});
