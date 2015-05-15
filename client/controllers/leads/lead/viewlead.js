var paramId;

Template.subscribersinfo.helpers({  

	subscriber : function(){	

		// console.log(paramId," found subscriber ",People.findOne(paramId));  
		return People.findOne(paramId);
	}


});


Template.subscribersinfo.onRendered(function () { 

        
      $("[name='maplist']").parent().hide();
      $("[for="+$("[name='maplist']").attr("id")+"]").hide();        


})


Meteor.startup(function(){

	Router.route('subscribersinfo',{path:"subscribersinfo/:_id",

			data : function(){

				// console.log("View lead information ",this.params._id);

				 paramId = this.params._id;

			}

	});

});