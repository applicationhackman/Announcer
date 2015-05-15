Template.mails.helpers({   
  folders: function () { 
  	
  	
  		
  		// var Leads = Folders.findOne({"Name":"Leads"}); 

  		// console.log(Leads === undefined," leads folder is ",Leads); 

  		// if(Leads === undefined) 
  		// {
  				
  		// 	Folders.insert({Name:"Leads",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});     
  		// }

  		// Router.go('leads', Folders.findOne());    
  	
  	
    // return Folders.find();
  },
  leadlists	: function () {
  	console.log("Here goting to load lead lists ",Lists.find()); 
  } 
});