var SourceFolder = "Subscribers";


Template.leads.helpers({
  folders: function () {


    return Lists.find();
  },
  leadlists	: function () {
  	console.log("Here goting to load lead lists ",Lists.find());
  }
});


LeadsController = RouteController.extend({

    sourceFolder  : "Subscribers"

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
                  action: Folder.createForm
              },
              {
                  icon: 'glyphicon-list',
                  text: 'Create page',
                  action: Folder.createPage
              },
              {
                  icon: 'glyphicon-list',
                  text: 'Create list',     
                  action: Folder.createList 
              },
              {
                  icon: 'glyphicon-list',
                  text: 'Create Mail', 
                  action: Folder.createMail
              }


          ]
      };



    context.attach($("#leads"), pagefoldermenu);
    

});


Meteor.startup( function () {

    Router.route('leads', {path: 'subscribers/:_id',  
      controller : LeadsController,
    	data: test, 
     });
 


});
