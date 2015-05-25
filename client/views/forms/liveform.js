var paramId;
var currentForm;
var moveFieldFrom;
var formfields;
var reArrangedForm;
var formRendered = 0;
var SchemasFormFields;

Array.prototype.insert = function (index, item) { 
this.splice(index, 0, item); 
};




Template.liveforms.helpers({     

    form : function(){


          
          
          
        

          var form = FormsCollections.findOne(paramId);
  


          var nform  = JSON.parse(form['data']);

          currentForm  = nform;    

          reArrangedForm = currentForm;

        
          
       
          formRendered += 1;

          return new SimpleSchema(nform);             
 
    },
    formPrefields : function(){ 

          var keys = Object.keys(Schemas.Person);

          
          var prefields = $(".pre-field.ui-draggable");

          SchemasFormFields = Schemas.Person['_schemaKeys'];

    

          return SchemasFormFields;  

    }


})


 Template.liveforms.onRendered(function(){


      console.log(arguments," form rendered here ",$(this.firstNode).find('.form-horizontal'));

      $(".header").hide();


 });


Meteor.startup( function () {
 

    Router.route('liveforms', {path: 'liveforms/:_id',  
      
        data: function(){


        

            paramId = this.params._id;

        },  

    });  

 

});


