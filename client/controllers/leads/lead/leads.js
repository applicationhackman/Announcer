Template.leads.helpers({
  folders: function () {



  		// var Leads = Folders.findOne({"Name":"Subscribers"});

  		// console.log(Leads === undefined," leads folder is ",Leads);

  		// if(Leads === undefined)
  		// {

  		// 	Folders.insert({Name:"Subscribers",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});

  		// }   

  		// Router.go('leads', Folders.findOne());


    return Lists.find();
  },
  leadlists	: function () {
  	console.log("Here goting to load lead lists ",Lists.find());
  }
});


LeadsController = RouteController.extend({

});



Template.leads.onRendered(function () {


    var   pagefoldermenu =
      {
          id: 'Folder-Menu',
          data: [
              {
                  header: 'Folder'
              },
              {
                  icon: 'glyphicon-plus',
                  text: 'Create',
                  action: Folder.create
              },
              {
                  icon: 'glyphicon-edit',
                  text: 'Rename',
                  action: Folder.rename
              },
              {
                  icon: 'glyphicon-trash',
                  text: 'Delete',
                  action: Folder.delete
              },
              {
                  icon: 'glyphicon-list',
                  text: 'Create form',
                  action: Folder.createPage
              },
              {
                  icon: 'glyphicon-list',
                  text: 'Create list', 
                  action: Folder.createList
              }


          ]
      };


 

    context.attach($("#leads"), pagefoldermenu);

    console.log("leads is here ",$("#leads"));

});


Meteor.startup( function () {

    // console.log(LeadsController," CSK testing lead ");


    Router.route('leads', {path: 'subscribers/:_id',  
      controller : LeadsController,
    	data: test, 
     });

 


});
