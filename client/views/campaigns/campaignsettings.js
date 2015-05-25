var paramId;

var hasSettings;

Template.campaignsettings.helpers({

		campaignsetting : function(){


			var settings = CampaignSettings.findOne();

			

			hasSettings = (settings === undefined) ? false : true;  
			

			console.log("settings ",settings, " settings len ",hasSettings);    

			return {'hasSettings':hasSettings,'settings':settings};
  


		},
		hasSettings : function(){

			var settings = CampaignSettings.findOne();
			var hasSettings = (settings === undefined) ? false : true;

			// return true;

		}

  
});


Template.campaignsettings.onRendered(function () {


    console.log(" CSK page ",arguments); 

})



Meteor.startup(function() {


    Router.route('campaignsettings', {path: 'campaignsettings',

          data: function(){

              console.log("  campaignsettings  ",arguments); 

              // paramId = this.params._id;

          },
     });

            

   
});
