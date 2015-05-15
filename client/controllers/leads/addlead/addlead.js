Template.addlead.helpers({  
  people: function () {

  	console.log("folders are here ",People.find());  
    return People.find();
  }
});