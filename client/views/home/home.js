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

            subscribers = Folders.findOne({Name:"Subscribers"});

            webforms = Folders.findOne({Name:"Webforms"});            

            webpages = Folders.findOne({Name:"Pages"});

            mails = Folders.findOne({Name:"Mails"}); 



            if(webpages === undefined)
            {          
                console.log(" going to add Pages",webforms);                          
                // Folders.insert({Name:"Pages",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[],pages:[]});
            }


            if(subscribers === undefined) 
            {
                console.log(" going to add Subscribers"); 
                // Folders.insert({Name:"Subscribers",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});
            }

            if(webforms === undefined)
            {                    
                console.log(" going to add Webforms"); 
                // Folders.insert({Name:"Webforms",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});
            }

            if(mails === undefined)
            {                    
                console.log(" going to add Mails"); 
                // Folders.insert({Name:"Mails",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});
            }


            // console.log("subscribers ",subscribers," webforms ",webforms," webpages ",webpages," Mails ",mails);   

   
});
