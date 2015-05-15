var Collections = {};

Meteor.isClient && Template.registerHelper("Collections", Collections);

People = Collections.People = new Mongo.Collection("People");
People.attachSchema(Schemas.Person);  


Folders = Collections.Folders = new Mongo.Collection("Folders");
Folders.attachSchema(Schemas.Folder);

Pages = Collections.Pages = new Mongo.Collection("Pages");
Pages.attachSchema(Schemas.Page);   


Lists = Collections.Lists = new Mongo.Collection("Lists"); 
Lists.attachSchema(Schemas.List);


FormsCollections  = new Mongo.Collection("FormsCollections");   




