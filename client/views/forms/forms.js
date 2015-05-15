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


function getShiftObjs(nobj, one,two){

  var gkeys = Object.keys(nobj);

          var ascObj = []; 
          var remain = [];

    for(var i=0; i<gkeys.length; i++){
   

 
      if(one == i){
       var g = {};
       g[gkeys[i]]    = nobj[gkeys[i]];
       ascObj.push(g);
      }

     if(two == i){   
             var g = {};
       g[gkeys[i]]    = nobj[gkeys[i]];
       ascObj.push(g);

      }   

      if(one !== i && two !== i ){

           var g = {};
           g[gkeys[i]]    = nobj[gkeys[i]];
           console.log("oher obj ",g);

      }

  


    }
     return ascObj;

    console.log(ascObj," Good things happen ");  
}






function makeAsArray(nobj, one,two){

  var gkeys = Object.keys(nobj);

          
          var arr = [];

    for(var i=0; i<gkeys.length; i++){
   

           var g = {};
           var gg = {};

           g[gkeys[i]]    = nobj[gkeys[i]];

           arr.push(g);    
           

    }
   return arr; 
    console.log(arr," Good things happen ");  
}



function shiftMerge (nobj,one,two) {

  

  shifObjs = getShiftObjs(nobj,one,two)
  g = makeAsArray(nobj,one,two)

  console.log(g," shiftObj ",shifObjs); 

  // g[one] = shifObjs[1];
  // g[two] = shifObjs[0]; 

 console.log(g," after shiftObj ",shifObjs); 
  return g; 
  
}




Template.forms.helpers({     

    form : function(){


          
          

          console.log("Form rendering time ",formRendered); 

          // if(formRendered > 0){ 

          //   console.log("reArrangedForm on after more ",reArrangedForm);  

          //   var nform  = JSON.parse(reArrangedForm);

            

          //   return new SimpleSchema(nform);             
          // } 

          var form = FormsCollections.findOne(paramId);
          

          console.log(form,"  formdata ",paramId, JSON.parse(form['data']));      


          var nform  = JSON.parse(form['data']);

          currentForm  = nform;    

          reArrangedForm = currentForm;


          formfields = makeAsArray(currentForm); 

          
  
          setTimeout(function(){

            var children = $(".ui-sortable .form-group");               
            var fieldKeys = Object.keys(currentForm);

            for (var i = 0; i < fieldKeys.length; i++) {
                var nf ={};
                nf[fieldKeys[i]] =  currentForm[fieldKeys[i]];
                
                $(children[i]).attr("data",JSON.stringify(nf));                  

            }; 


          },400);
          
       
          formRendered += 1;

          return new SimpleSchema(nform);             
 
    },
    formPrefields : function(){ 

          var keys = Object.keys(Schemas.Person);

          
          var prefields = $(".pre-field.ui-draggable");

          SchemasFormFields = Schemas.Person['_schemaKeys'];

          
          setTimeout(function(){

            var children = $(".pre-field.ui-draggable");               
            var fieldKeys = Object.keys(currentForm);

            for (var i = 0; i < SchemasFormFields.length; i++) {
                var ngp = {};

                ngp[SchemasFormFields[i]] = json.Person[SchemasFormFields[i]];
                // console.log($(children[i])," child of prefields ",ngp); 
                $(children[i]).attr("data",JSON.stringify(ngp));                   

            }; 


          },400);

          return SchemasFormFields;  

    }


})


function fieldStart (e,ui) {

  console.log("Field drag start");

  moveFieldFrom = $(ui.item).index();
  
}


function fieldStop (e,ui) {

  console.log($(ui.item),"Field drag stop ",arguments,$(ui.item).index());      
     
      updateFormFields(); 
          

}

function updateFormFields () {

   var uiformfields = $(".ui-sortable .form-group");
      
      var narrangedField  =  {};
      var jsonStr = "";

      $.each(uiformfields,function(i,ui){
        
           if($(ui).attr("data") !== undefined){            


             var field  = JSON.parse($(ui).attr("data")); 
             var ngkeys = Object.keys(field);  
             
              narrangedField[ngkeys[0]] = field[ngkeys[0]];            

           }

        })
        

        reArrangedForm = JSON.stringify(narrangedField);

      console.log(currentForm," selectField ",jsonStr, JSON.stringify(narrangedField));               

       FormsCollections.update(paramId,{$set: {data:JSON.stringify(narrangedField)}});   
  
}

function deleteFormField (fieldName) {

         delete reArrangedForm[fieldName];

         FormsCollections.update(paramId,{$set: {data:JSON.stringify(narrangedField)}});           
         
  
}
 

 Template.forms.onRendered(function(){


      console.log(arguments," form rendered here ",$(this.firstNode).find('.form-horizontal'));

       
       $(".pre-field").draggable({ 
       containment: "body",helper: "clone",connectToSortable: ".ui-sortable",
         start : function(e,ui){
                  console.log("drag start 8844",arguments, ui); 
         },
         stop : function(e,ui){
            // console.log(json.Person[SchemasFormFields[$(ui.helper.context).index()]] ," drag stop 8855 ",arguments, $(ui.context));      

            var newFound = $(".form-horizontal.ui-sortable").find(".pre-field");             


            console.log("newFound ",newFound);

            $(newFound).removeClass("pre-field");            
            $(newFound).addClass("form-group");

            updateFormFields(); 
            $(".ui-draggable.form-group").remove();

         },

       }) //No I18N  

       $(this.firstNode).find('.form-horizontal').sortable({ containment: ".panel-body",
        items: ":not(last-child)"
        });  

       $(".ui-sortable").on("sortstart",fieldStart);    //No I18N           
       $(".ui-sortable").on("sortstop",fieldStop); //No I18N  


       $(".pre-field").on("dragEnd",prefieldDrag);    //No I18N    


 });

 function prefieldDrag () {

      console.log("drag here "); 
   
 }

Meteor.startup( function () {

    console.log(" Forms content loading  "); 


    Router.route('forms', {path: 'forms/:_id',  
      
        data: function(){


        console.log("CSK form id is ",this.params._id);   

            paramId = this.params._id;

        },  

    });  

 

});


