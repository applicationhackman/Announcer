var Collections = {};

Meteor.isClient && Template.registerHelper("Collections", Collections);

People = Collections.People = new Mongo.Collection("People");
People.attachSchema(Schemas.Person);


Folders = Collections.Folders = new Mongo.Collection("Folders");
Folders.attachSchema(Schemas.Folder);

Pages = Collections.Pages = new Mongo.Collection("Pages");
Pages.attachSchema(Schemas.Page);


Mails = Collections.Pages = new Mongo.Collection("Mails");
Mails.attachSchema(Schemas.Mails);  

WebForms = Collections.WebForms = new Mongo.Collection("WebForms");  
WebForms.attachSchema(Schemas.WebForms);  
 

Lists = Collections.Lists = new Mongo.Collection("Lists");
Lists.attachSchema(Schemas.List);


FormsCollections  = new Mongo.Collection("FormsCollections");


CampaignSettings = Collections.CampaignSettings = new Mongo.Collection("CampaignSettings");
CampaignSettings.attachSchema(Schemas.CampaignSettings); 
