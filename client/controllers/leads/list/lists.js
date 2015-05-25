var paramId;
var selectedSubscribers = [];

if (Meteor.isClient) {

  var setSelect = function (k,obj) {

    // console.log(" setSelect ",obj);  

      var html = "<input type='checkbox' class='subsc-select' id="+obj['_id']+">" 

      return new Spacebars.SafeString(html);
      
  }

} 
 
Template.lists.helpers({ 
  people: function () {

  	var filteredPeople = People.find({"maplist":paramId}).fetch();
  	var filterList = Lists.findOne({"_id":paramId});

    console.log( filteredPeople," filteredPeople ",filterList," len ",filteredPeople.length); 

     filteredPeople  = (filteredPeople.length == 0 && filterList == undefined) ? People.find().fetch() : filteredPeople;  
    

    return filteredPeople; 
  },
   tableSettings : function () {
      return {
        rowsPerPage: Math.round(window.innerHeight/100), 
        showNavigation: 'auto',        
        fields: [        
          { key: 'multiselect', label: 'Choose', fn: setSelect },  
          { key: 'firstName', label: 'First Name' },           
          { key: 'middleName', label: 'Middle Name' },          
          { key: 'lastName', label: 'Last Name' },
          { key: 'mail', label: 'Mail' },
          { key: 'age', label: 'Age' },
          { key: 'address.street', label: 'Street' },
          { key: 'address.street2', label: 'Street' },
          { key: 'address.city', label: 'City' },
          { key: 'address.postalCode', label: 'Postal Code' },
          { key: 'subscribe', label: 'Subscribed' }, 

        ]
      };
    }
});


Template.subscribersactionback.events({

  'click .bck' : function(){      

      window.history.back();

  },

});
   
    

Template.lists.events({

	'click .reactive-table tbody tr' : function(e){
			// console.log(this["_id"],this," lcell clicked ",arguments, $(e.target).hasClass('subsc-select'));  
			if(this !== undefined && !$(e.target).hasClass('subsc-select') && !$(e.target).hasClass('multiselect')){  
				Router.go("subscribersinfo",{"_id":this["_id"]}); 
			}else{

          // selectedSubscribers.push(this["_id"]);
          console.log(selectedSubscribers," $(e.target) ",$(e.target).attr("checked"));    

      }
	},
  'click .add-sub' : function(){

      console.log(" Add subscribe ",paramId); 

      Router.go("quickleadadd",{"_id":paramId});  

  },
  'click .bck' : function(){      

      window.history.back();

  },
  'click .multiselect' : function(){      

      console.log(arguments," CSk argu ",this);  

  },
  'click .trash-sub' : function(){      
      
     

      $( "#dialog-confirm" ).dialog({
          resizable: false,
          height: "auto",
          width: 400,
          modal: true,
          buttons: {
            "Delete": function() {

               $.each($("input:checked"),function(i,ui){                    
                    People.remove(ui.id);
                })

              $(this).dialog( "close" );
            },
            Cancel: function() {
              $( this ).dialog( "close" );
            }
          }
        });

  },

  

  

});

Template.lists.rendered= function(){
  
  console.log(" csk going to hide "); 
 
}



Router.route('/lists', {path: 'lists/:_id',data : function(){

		console.log("CSK list id is ",this.params._id);  

		paramId = this.params._id;

}});     



Meteor.startup( function () {


})