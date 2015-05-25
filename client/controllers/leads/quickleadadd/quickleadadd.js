
var listid = "";
var list;

Template.quickleadadd.helpers({
  people: function () {

    alert("quickleadadd has been loading ");  

    // return People.find();
  },
  list : function() {
     
     return Lists.findOne(listid); 
  }
});


Template.quickleadadd.onRendered(function () {

      $("[name='maplist']").val(listid);   
      $("[name='maplist']").parent().hide();
      $("[for="+$("[name='maplist']").attr("id")+"]").hide();  
      
      console.log(listid," quickleadadd loading ",$("[name='maplist']"));   


})

Template.quickleadadd.events({

  'click #chooselist' : function(){


    $("#leadlistchooser").dialog({
         width: 400 ,
         title : "Rename Folder",
         dialogClass: "confine",
         modal: true,
         buttons: [
           {
             text: "OK",
             click: function(win, data, ev) {

             console.log("Calling this here ");

             }.bind(null)
           },
           {
             text: "Cancel",
             click: function() {
                console.log("Cancel is ",this);
                $( this ).dialog( "close" );
             }
           }
         ]
       });
          console.log(this," choose list ",arguments);

  }


});



Meteor.startup(function(){
 
    // Router.route('/quickleadadd', {path: 'quickleadadd/:_id',data:test});  

       Router.route('/quickleadadd', {path: 'quickleadadd/:_id',data: function(){

        // console.log($("[name='maplist']")," This is how it works ",this," flock ",this.params._id);      

        listid = this.params._id;

        list = Lists.findOne(listid)

        console.log("Found lis is",list); 


        

    }});

});


