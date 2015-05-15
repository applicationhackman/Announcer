Template.pages.helpers({
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



Template.pages.onRendered(function () {


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
              }


          ]
      };




    context.attach($("#pages"), pagefoldermenu);

    console.log("leads is here ",$("#pages"));

});




Meteor.startup( function () {

    // console.log(LeadsController," CSK testing lead ");

    function pageFilter(){

   			first = Folders.findOne({Name:"Pages"});


   			var Leads = Folders.findOne({"_id":this.params._id})

   			var root;

   			if(first !== undefined){
   				 root = {display_name:"Root",_id:'root',children:[first["_id"]]};
   			}

   			var children  = [];
        var cpages = [];


   			if(Leads !== undefined){

   				var id = this.params['_id'];

        if(Leads.children !== undefined){  

       				for (var i = 0; i < Leads.children.length; i++) {

       						children.push(Folders.findOne(Leads.children[i]));

       				};
         }


          if(Leads.pages !== undefined){

            for (var i = 0; i < Leads.pages.length; i++) {

              cpages.push(Pages.findOne(Leads.pages[i]));

            };

          }



   				breadcrumbs   = [];


   				function  parent(id){

   						var folders  = Folders.findOne({"_id":id});

   						if(folders.parents.length > 0){

   							breadcrumbs.push(folders);
   							parent(folders.parents[0]);

   						}

   				}

   				parent(id);
   				breadcrumbs.reverse();

   				return {'breadcrumbs':breadcrumbs,'children':children,'home':first,'pages':cpages};

   			}


    }



    Router.route('pages', {path: 'pages/:_id',

    	data: pageFilter,
     });




});
