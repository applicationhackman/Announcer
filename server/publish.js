Meteor.publish(null, function () {
  return [
    People.find(),
    Folders.find(),
    Lists.find(),
    Pages.find(),      
    FormsCollections.find() 
  ];
});


Meteor.publish("allItems", function () {
  return Items.find();
});
 