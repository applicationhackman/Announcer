Template.home.events({ 

    'click #Leads' : function () {   
      
        console.log(this," folder click is calling here ",this.leads);    

        // Router.go('leads/:_id', this.leads);      
    }, 


    'click #Mails' : function () {   
      
        console.log(" folder click is calling here ");  
    },


    'click #Socials' : function () {   
       
        console.log(" folder click is calling here ");  
    },


    'click #Pages' : function () {   
      
        console.log(" folder click is calling here ");  
    },


    'click #Forms' : function () {   
      
        console.log(" folder click is calling here ");  
    },

    'click #Workflows' : function () {    
      
        console.log(" folder click is calling here ");  
    }


  
});



Meteor.startup(function() {


    

            var Subscribers = Folders.findOne({"Name":"Subscribers"}); 

            console.log("Subscribers has ",Subscribers); 


    

    console.log("on startup ",Meteor.Mandrill);

   
});
