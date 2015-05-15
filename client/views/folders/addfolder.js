Template.addfolder.helpers({
  folders: function () {

  	var usermail = Meteor.user();

    return Folders.find();
  }
});


function bindContextMenu() {



    var   foldermenu =
      {
          id: 'Folder-Menu',
          data: [
              {
                  header: 'Folder'
              },
              {
                  icon: 'glyphicon-plus',
                  text: 'Create',
                  action: Folder.create
              },
              {
                  icon: 'glyphicon-edit',
                  text: 'Rename',
                  action: Folder.rename
              },
              {
                  icon: 'glyphicon-trash',
                  text: 'Delete',
                  action: Folder.delete
              },
              {
                  icon: 'glyphicon-list',
                  text: 'Create list',
                  action: Folder.createList
              },
              {
                  icon: 'glyphicon-list',
                  text: 'Create page',
                  action: Folder.createPage
              }


          ]
      };

  	context.init({preventDoubleContext: false});
		context.attach(this.firstNode, foldermenu);

    context.attach($("#leads"), foldermenu);
    context.attach($("#pages"), foldermenu);


}

function bindListMenu(){

  var   listMenu =
    {
        id: 'List-Menu',
        data: [
            {
                header: 'List'
            },

            {
                icon: 'glyphicon-edit',
                text: 'Rename',
                action: Folder.rename
            },

            {
                icon: 'glyphicon-edit',
                text: 'Add Lead',
                action: FileList.addLead
            },
            {
                icon: 'glyphicon-trash',
                text: 'Delete',
                action: Folder.delete
            }

        ]
    };


    context.init({preventDoubleContext: false});
    context.attach(this.firstNode, listMenu);


}

Template.folder.onRendered(bindContextMenu);

Template.pagefolder.onRendered(bindContextMenu);

Template.list.onRendered(bindListMenu);  
