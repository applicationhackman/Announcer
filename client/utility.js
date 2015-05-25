/*
 * Utility functions can be added to the Utility object in this file
 */

Utility = {};
Folder  =  {};

CollectionElements = {};

Folder  = {


  create : function(ev, jQ, data){

    console.log("While create folder ");

    var ndata = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];

    console.log(ndata," Before ");

    if(ndata == undefined) {
      ndata  = first;
    }

    console.log(ndata," Mze ",data," data ",arguments);


    $( "#addfolder" ).dialog({
              width: 400 ,
              title : "Create Folder",
              modal: true,
              buttons: [
                {
                  text: "OK",
                  click: function(win, ndata, ev) {

                  var userMail = Meteor.user()['emails'][0]['address'];

                    console.log(arguments," user userMail ",userMail);

                    var folder  = {
                        Name:$("#foldername").val(),
                        CreatedBy:userMail,
                        ModifiedBy:userMail,
                        CreatedTime:new Date().toDateString(),
                        ModifiedTime:new Date().toDateString(),
                        children:[],
                        parents:[ndata["_id"]],
                    }
                    var newFolder = Folders.insert(folder);

                    var datac = ndata.children;

                    datac.push(newFolder);

                    Folders.update(ndata["_id"],{$set: {children: datac}});
                    $(".ui-dialog-titlebar-close").click();

                  }.bind(null, this,ndata)
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



},
rename : function (ev, jQ, data){



    var data = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];


    $( "#addfolder" ).dialog({
              width: 400 ,
              title : "Rename Folder",
              modal: true,
              buttons: [
                {
                  text: "OK",
                  click: function(win, data, ev) {

                  var userMail = Meteor.user()['emails'][0]['address'];
                  Folders.update(data["_id"],{$set: {Name: $("#foldername").val()}});


                  $(".ui-dialog-titlebar-close").click();

                  }.bind(null, this,data)
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


},

createList  : function(ev, jQ, data){



    var data = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];

    console.log("data is on ",data);

    if(data == undefined) {
      data  = first;
    }


    $( "#addfolder" ).dialog({
              width: 400 ,
              title : "Create list",
              modal: true,
              buttons: [
                {
                  text: "OK",
                  click: function(win, data, ev) {

                  var userMail = Meteor.user()['emails'][0]['address'];

                  console.log("data is on list ",data," data is ",data['lists']);

                  var list  = {
                        Name:$("#foldername").val(),
                        CreatedBy:userMail,
                        ModifiedBy:userMail,
                        CreatedTime:new Date().toDateString(),
                        ModifiedTime:new Date().toDateString(),
                        lists: [],
                        parents: [data["_id"]]
                    }
                    var newList = Lists.insert(list);
                  

                  if(data['lists'] == undefined){
                    data['lists'] = [];
                  }
                  data['lists'].push(newList);

                  console.log(list," lists ",data['lists'], " id of is ",data["_id"]);

                  Folders.update(data["_id"],{$set: {lists: data['lists']}});


                  $(".ui-dialog-titlebar-close").click();

                  }.bind(null, this,data)
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


},

createPage  : function(ev, jQ, data){



    var data = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];

    console.log("data is on ",data);

    if(data == undefined) {
      data  = first;
    }

    console.log(" CSK ",data);

    console.log(" Rename " ,data['_id']);


    $( "#addfolder" ).dialog({
              width: 400 ,
              title : "Create page",
              modal: true,
              buttons: [
                {
                  text: "OK",
                  click: function(win, data, ev) {

                  var userMail = Meteor.user()['emails'][0]['address'];

                  console.log("data is on page ",data," data is ",data['pages']);

                  var page  = {
                        Name:$("#foldername").val(),
                        CreatedBy:userMail,
                        ModifiedBy:userMail,
                        CreatedTime:new Date().toDateString(),
                        ModifiedTime:new Date().toDateString(),
                        pages: [],
                        parents: [data["_id"]]
                    }
                    var newPage = Pages.insert(page);

                    console.log("newPage is ",newPage," new page of id ",newPage["_id"]);

                    if(data['pages'] == undefined){
                      data['pages'] = [];      
                    }
                  data['pages'].push(newPage);

                  console.log(page," page ",data['pages']);

                  Folders.update(data["_id"],{$set: {pages: data['pages']}});


                  // $(".ui-dialog-titlebar-close").click();

                  }.bind(null, this,data)
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


},



createMail  : function(ev, jQ, data){



    var data = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];

    console.log("data is on ",data);

    if(data == undefined) {
      data  = first;
    }

  


    $( "#addfolder" ).dialog({
              width: 400 ,
              title : "Create mail",
              modal: true,
              buttons: [
                {
                  text: "OK",
                  click: function(win, data, ev) {

                  var userMail = Meteor.user()['emails'][0]['address'];

                  console.log("data is on page ",data," data is ",data['pages']);

                  var mail  = {
                        Name:$("#foldername").val(),
                        CreatedBy:userMail,
                        ModifiedBy:userMail,
                        CreatedTime:new Date().toDateString(),
                        ModifiedTime:new Date().toDateString(),
                        mails: [],
                        parents: [data["_id"]]
                    }
                    var newMail = Mails.insert(mail); 

                    console.log("newMail is ",newMail," new page of id ",newMail["_id"]);

                    if(data['mails'] == undefined){
                      data['mails'] = [];      
                    } 
                  data['mails'].push(newMail);

                  console.log(mails," mail ",data['mails']); 

                  Folders.update(data["_id"],{$set: {mails: data['mails']}});     


                  $(".ui-dialog-titlebar-close").click();

                  }.bind(null, this,data)
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


},

createForm  : function(ev, jQ, data){



    var data = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];

    console.log("data is on ",data);

    if(data == undefined) {
      data  = first;
    }

    console.log(" CSK ",data);

    console.log(" Rename " ,data['_id']);


    $( "#addfolder" ).dialog({
              width: 400 ,
              title : "Create Form",
              modal: true,
              buttons: [
                {
                  text: "OK",
                  click: function(win, data, ev) {

                  var userMail = Meteor.user()['emails'][0]['address'];

                  console.log("data is on page ",data," data is ",data['pages']);

                  var form  = {
                        Name:$("#foldername").val(),
                        CreatedBy:userMail,
                        ModifiedBy:userMail,
                        CreatedTime:new Date().toDateString(), 
                        ModifiedTime:new Date().toDateString(),
                        webforms: [],
                        data : "", 
                        parents: [data["_id"]]
                    }

                    console.log("form ",form); 
 

                    var newForm = WebForms.insert(form);  

                    console.log("newForm is ",newForm," new page of id ",newForm["_id"]);


                    if(data['webforms'] == undefined){
                      data['webforms'] = [];      
                    }
                  data['webforms'].push(newForm);

                  console.log(form," page ",data['webforms']); 

                  Folders.update(data["_id"],{$set: {webforms: data['webforms']}});     


                  $(".ui-dialog-titlebar-close").click();

                  }.bind(null, this,data)
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


},

delete : function(ev, jQ, data){ 



  console.log(data," CSk delete folder is ",Folders.findOne(data["_id"]));


    var parent   = Folders.findOne(data["_id"]);
 
    Folder.recursiveFolderDelete(parent["children"]); 


    for (var i = 0; i < parent["children"].length; i++) {
      parent["children"].pop(i)
    };

    for (var j = 0; j < parent["parents"].length; j++) {


      var elems = parent["parents"][j];

      var parentRoot = Folders.findOne(elems);


          /* Finding remaining children and updating into the roo folder */
          var pnchildren = []; parentRoot["children"].forEach(function(i, da){

                console.log(data["_id"] == i," CSK on ",i," data ",da);
                if(data["_id"] !== i)
                {
                  pnchildren.push(i);
                }

            });

          Folders.update(parentRoot["_id"],{$set: {children: pnchildren}});

    };


    Folders.update(data["_id"],{$set: {children: parent["children"]}})
    Folders.remove(data["_id"]);
},

recursiveFolderDelete : function(children) {



  for (var i = 0; i < children.length; i++) {


    var found = Folders.findOne(children[i]);

    Folders.remove(found["_id"]);

     if(found["children"].length > 0){

          Folder.recursiveFolderDelete(found["children"]);

     }

  };

}




}


FileList  = {

        addLead : function(ev, jQ, data){ 

            var data = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];


                console.log(" CSK going to add ",data['_id']);  
                Router.go("quickleadadd",{"_id":data['_id']})
        
        }
}
