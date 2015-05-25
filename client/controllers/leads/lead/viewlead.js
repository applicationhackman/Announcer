var paramId;
var subscriberdata;  

Template.subscribersinfo.helpers({  

	subscriber : function(){	

		console.log(paramId," found subscriber ",People.findOne(paramId));   
		subscriberdata = People.findOne(paramId)
		return subscriberdata;
	}


});


Template.subscribersinfo.onRendered(function () { 

        
      $("[name='maplist']").parent().hide();
      $("[for="+$("[name='maplist']").attr("id")+"]").hide();        


})

Template.subscribersinfo.events({

	'click .add-sub' : function(){

      console.log(subscriberdata.maplist," Add subscribe ",paramId); 

      Router.go("quickleadadd",{"_id":subscriberdata.maplist});    
      

  },
})


Meteor.startup(function(){

	Router.route('subscribersinfo',{path:"subscribersinfo/:_id",

			data : function(){

				// console.log("View lead information ",this.params._id);

				 paramId = this.params._id;

			}

	});

});