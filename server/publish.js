Meteor.publish(null, function () {
  return [
    People.find(),
    Folders.find(),
    Lists.find(),
    Pages.find(),      
    Mails.find(),      
    FormsCollections.find(),
    WebForms.find(),
    CampaignSettings.find() 
  ];
});


Meteor.publish("allItems", function () {
  return Items.find();
});
 