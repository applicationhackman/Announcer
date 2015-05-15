Router.configure({
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading',
  layoutTemplate: 'layout'
});

dataReadyHold = null;

if (Meteor.isClient) {
	dataReadyHold = LaunchScreen.hold();

}


function  mainData() {




	console.log(" main data is here "); 

		// if(Folders.findOne() !== undefined){

		// 	var Leads 		= Folders.findOne({Name:"Leads"});
		// 	var Mails 		= Folders.findOne({Name:"Mails"});
		// 	var Forms 		= Folders.findOne({Name:"Forms"});
		// 	var Pages 		= Folders.findOne({Name:"Pages"});
		// 	var Workflows 	= Folders.findOne({Name:"Workflows"});


		// 	if(Leads === undefined)
	 //  		{
	 //  			Folders.insert({Name:"Leads",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});
	 //  		}

	 //  		if(Mails === undefined)
	 //  		{
	 //  			Folders.insert({Name:"Mails",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});
	 //  		}

	 //  		if(Forms === undefined)
	 //  		{
	 //  			Folders.insert({Name:"Forms",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});
	 //  		}


	 //  		if(Pages === undefined)
	 //  		{
	 //  			Folders.insert({Name:"Pages",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});
	 //  		}


	 //  		if(Workflows === undefined)
	 //  		{
	 //  			Folders.insert({Name:"Workflows",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});
	 //  		}



		// 	console.log("Finding Leads folder ",Folders.findOne({Name:"Leads"}));

		// 	console.log("Finding Mails folder ",Folders.findOne({Name:"Mails"}));

		// 	console.log("Finding Forms folder ",Folders.findOne({Name:"Forms"}));

		// 	console.log("Finding Pages folder ",Folders.findOne({Name:"Pages"}));

		// 	console.log("Finding Workflows folder ",Folders.findOne({Name:"Workflows"}));


		// 	return  {
		// 				leads : Leads["_id"],
		// 				mails : Mails["_id"],
		// 				forms  : Forms["_id"],
		// 				pages  : Pages["_id"],
		// 				workflows  : Workflows["_id"]
		// 			}



		// }


	}




Router.route('/', {name: 'home',

	data : function (argument) { 


		


	}
});



Router.route('/quickform', {name: 'quickform'});
Router.route('/fieldvalues', {name: 'fieldvalues'});
Router.route('/insertaf', {name: 'insertaf'});
Router.route('/updateaf', {name: 'updateaf'});
Router.route('/qfdetails', {name: 'qfdetails'});
Router.route('/types', {name: 'types'});
Router.route('/select', {name: 'select'});
// Router.route('/update-each', {
//   name: 'update-each',
//   waitOn: function () {
//     return Meteor.subscribe("allItems");
//   }
// });
Router.route('/updatepush', {
  name: 'updatepush'
});
Router.route('/update-array-item', {
  name: 'updateArrayItem'
});



 test = function(){




			first = Folders.findOne({Name:"Subscribers"});

			console.log("Subscribers first folder ",first); 
			
			if(first == undefined && !first) 
	  		{

 
	  			console.log(" going to add Subscribers",first);  

	  			// Folders.insert({Name:"Subscribers",CreatedBy:"Admin",ModifiedBy:"Admin",CreatedTime:new Date().toDateString(),ModifiedTime:new Date().toDateString(),children:[],parents:[]});

	  		}


			var Leads = Folders.findOne({"_id":this.params._id})

	

			var children  = [];
      		var clists = [];


			if(Leads !== undefined){

				var id = this.params['_id'];

				for (var i = 0; i < Leads.children.length; i++) {

						children.push(Folders.findOne(Leads.children[i]));

				};

        if(Leads.lists !== undefined){

          for (var i = 0; i < Leads.lists.length; i++) {

            clists.push(Lists.findOne(Leads.lists[i]));

          };

          console.log("clists ",clists);
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

				var last;
				if(breadcrumbs.length == 0){
					
					last  = first;
						
				}else{
					last = breadcrumbs[breadcrumbs.length-1];
				} 

				console.log(last," breadcrumbs ",breadcrumbs[breadcrumbs.length-1]);  

				return {'breadcrumbs':breadcrumbs,'children':children,'home':first,'lists':clists,"last":last}; 

			}


 }










// Router.route('/quickleadadd', {path: 'quickleadadd/:_id',data: test}); 

Router.route('/addlead', {name: 'addlead'});

// Router.route('/lists', {path: 'lists/:_id'});    


/* temp routes are here */

Router.route('/addfolder', {name: 'addfolder'});
