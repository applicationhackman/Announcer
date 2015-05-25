
var renderingCount = 0;

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

}




Router.route('/', {name: 'home',

	data : function (argument) {


	}
});




 test = function(){





			subscribers = Folders.findOne({Name:"Subscribers"});

			webforms = Folders.findOne({Name:"Webforms"});

			webpages = Folders.findOne({Name:"Pages"});

			webmails = Folders.findOne({Name:"Mails"});

			first =  subscribers;



			var Leads = Folders.findOne({"_id":this.params._id})


			if(Leads !== undefined){ 

					if(Leads.Name == "Subscribers"){
						first = subscribers;
					}

					if(Leads.Name == "Webforms"){
						first = webforms;	
					}

					if(Leads.Name == "Pages"){
						first = webpages;	 
					}

					if(Leads.Name == "Mails"){ 
						first = webmails;	   
					}

					console.log(Leads.Name," found Subscribers",webforms," renderingCount ",Leads);  
			}
			

			


			var children  = [];
      		var clists = [];
      		var cforms = [];
      		var cpages = [];
      		var cmails = [];


			if(Leads !== undefined){

				var id = this.params['_id'];

				for (var i = 0; i < Leads.children.length; i++) {

						children.push(Folders.findOne(Leads.children[i]));

				};

		
			var elements = [];


			if(Leads.lists !== undefined){

				elements = Leads.lists;

				for (var i = 0; i < elements.length; i++) {	          		
          	
            		clists.push(Lists.findOne(elements[i]));

          		};	
			}

			if(Leads.webforms !== undefined){
				
					elements = Leads.webforms;
				
					for (var i = 0; i < elements.length; i++) {	          		
	          	
	            		cforms.push(WebForms.findOne(elements[i]));

	          		};	
			}


			if(Leads.pages !== undefined){
				
					elements = Leads.pages;
				
					for (var i = 0; i < elements.length; i++) {	          		
	          	
	            		cpages.push(Pages.findOne(elements[i])); 

	          		};	
			}


			if(Leads.mails !== undefined){
				
					elements = Leads.mails;
				
					for (var i = 0; i < elements.length; i++) {	          		
	          	
	            		cmails.push(Mails.findOne(elements[i])); 

	          		};	
			}



	        // console.log(clists," Leads is main folder ",Leads," elements ",elements);  

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
				

				
				/*
				 	Redifining first folder   
				*/

				if(breadcrumbs[0] !== undefined){

						first = Folders.findOne(breadcrumbs[0]['parents'][0]); 						
				}


				renderingCount += 1;        

				return {'breadcrumbs':breadcrumbs,'children':children,'home':first,'lists':clists,'forms':cforms,"last":last,'mails':cmails,'pages':cpages};

			}


 }



// Router.route('/quickleadadd', {path: 'quickleadadd/:_id',data: test});

Router.route('/addlead', {name: 'addlead'});

// Router.route('/lists', {path: 'lists/:_id'});


/* temp routes are here */

Router.route('/addfolder', {name: 'addfolder'});
