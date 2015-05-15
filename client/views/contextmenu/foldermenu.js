//
// function createFolder(ev, jQ, data){
//
//
//
//
//     var ndata = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];
//
//     if(ndata == undefined) {
//       ndata  = first;
//     }
//
//     console.log(ndata," Mze ",data," data ",arguments);
//
//
//     $("#addfolder" ).dialog({
//               width: 400 ,
//               title : "Create Folder",
//               modal: true,
//               buttons: [
//                 {
//                   text: "OK",
//                   click: function(win, ndata, ev) {
//
//                   var userMail = Meteor.user()['emails'][0]['address'];
//
//                     console.log(arguments," user userMail ",userMail);
//
//                     var folder  = {
//                         Name:$("#foldername").val(),
//                         CreatedBy:userMail,
//                         ModifiedBy:userMail,
//                         CreatedTime:new Date().toDateString(),
//                         ModifiedTime:new Date().toDateString(),
//                         children:[],
//                         parents:[ndata["_id"]],
//                         elements:[]
//                     }
//                     var newFolder = Folders.insert(folder);
//
//                     var datac = ndata.children;
//
//                     datac.push(newFolder);
//
//                     Folders.update(ndata["_id"],{$set: {children: datac}});
//                     $(".ui-dialog-titlebar-close").click();
//
//                   }.bind(null, this,ndata)
//                 },
//                 {
//                   text: "Cancel",
//                   click: function() {
//                      console.log("Cancel is ",this);
//                      $( this ).dialog( "close" );
//                   }
//                 }
//               ]
//             });
//
//
// }
//
//
//
// function createList(ev, jQ, data){
//
//
//
//     var data = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];
//
//     console.log("data is on ",data);
//
//     if(data == undefined) {
//       data  = first;
//     }
//
//     console.log(" CSK ",data);
//
//     console.log(" Rename " ,data['_id']);
//
//
//     $( "#addfolder" ).dialog({
//               width: 400 ,
//               title : "Create list",
//               modal: true,
//               buttons: [
//                 {
//                   text: "OK",
//                   click: function(win, data, ev) {
//
//                   var userMail = Meteor.user()['emails'][0]['address'];
//
//                   console.log("data is on list ",data," data is ",data['lists']);
//
//                   var list  = {
//                         Name:$("#foldername").val(),
//                         CreatedBy:userMail,
//                         ModifiedBy:userMail,
//                         CreatedTime:new Date().toDateString(),
//                         ModifiedTime:new Date().toDateString(),
//                         lists: []
//                     }
//                     var newList = Lists.insert(list);
//
//                   data['lists'].push($("#foldername").val());
//
//                   console.log(list," lists ",data['lists']);
//
//                   Folders.update(data["_id"],{$set: {lists: data['lists']}});
//
//
//                   // $(".ui-dialog-titlebar-close").click();
//
//                   }.bind(null, this,data)
//                 },
//                 {
//                   text: "Cancel",
//                   click: function() {
//                      console.log("Cancel is ",this);
//                      $( this ).dialog( "close" );
//                   }
//                 }
//               ]
//             });
//
//
// }
//
//
//
//
// function renameFolder(ev, jQ, data){
//
//
//
//     var data = (data['_id'] !== undefined) ? data : breadcrumbs[breadcrumbs.length-1];
//
//
//     $( "#addfolder" ).dialog({
//               width: 400 ,
//               title : "Rename Folder",
//               modal: true,
//               buttons: [
//                 {
//                   text: "OK",
//                   click: function(win, data, ev) {
//
//                   var userMail = Meteor.user()['emails'][0]['address'];
//                   Folders.update(data["_id"],{$set: {Name: $("#foldername").val()}});
//
//
//                   $(".ui-dialog-titlebar-close").click();
//
//                   }.bind(null, this,data)
//                 },
//                 {
//                   text: "Cancel",
//                   click: function() {
//                      console.log("Cancel is ",this);
//                      $( this ).dialog( "close" );
//                   }
//                 }
//               ]
//             });
//
//
// }
//
//
// function deleteFolder(ev, jQ, data){
//
//
//
//   console.log(data," CSk delete folder is ",Folders.findOne(data["_id"]));
//
//
//     var parent   = Folders.findOne(data["_id"]);
//
//     recursiveFolderDelete(parent["children"]);
//
//
//     for (var i = 0; i < parent["children"].length; i++) {
//       parent["children"].pop(i)
//     };
//
//     for (var j = 0; j < parent["parents"].length; j++) {
//
//
//       var elems = parent["parents"][j];
//
//       var parentRoot = Folders.findOne(elems);
//
//
//           /* Finding remaining children and updating into the roo folder */
//           var pnchildren = []; parentRoot["children"].forEach(function(i, da){
//
//                 console.log(data["_id"] == i," CSK on ",i," data ",da);
//                 if(data["_id"] !== i)
//                 {
//                   pnchildren.push(i);
//                 }
//
//             });
//
//           Folders.update(parentRoot["_id"],{$set: {children: pnchildren}});
//
//     };
//
//
//     Folders.update(data["_id"],{$set: {children: parent["children"]}})
//     Folders.remove(data["_id"]);
// }
//
//
// function recursiveFolderDelete (children) {
//
//
//
//   for (var i = 0; i < children.length; i++) {
//
//
//     var found = Folders.findOne(children[i]);
//
//     Folders.remove(found["_id"]);
//
//      if(found["children"].length > 0){
//
//           recursiveFolderDelete(found["children"]);
//
//      }
//
//   };
//
// }
 
