Schemas = {};
json = {};

Meteor.isClient && Template.registerHelper("Schemas", Schemas);

// Schemas.Person = new SimpleSchema({
//   firstName: {
//     type: String,
//     optional: true
//   },
//    middleName: {
//     type: String,
//     optional: true
//   },
//   lastName: {
//     type: String,
//     optional: true
//   },
//   age: {
//     type: Number,
//     optional: true
//   },
//   subscribe: {
//     type: Boolean,  
//     optional: true
//   }


// });

 

Schemas.Folder = new SimpleSchema({
  Name: {
    type: String,
    index: 1,
    optional: true
  },
  CreatedBy : {
      type: String,
      optional: true
  },
  ModifiedBy : {
      type: String,
      optional: true
  },
  CreatedTime : {
      type: Date,
      optional: true
  },
  ModifiedTime : {
      type: Date,
      optional: true
  },
   parents: {
    type: Array,
    optional: true
  },
  'parents.$': {
    type: String
  },
  children: {
    type: Array,
    optional: true
  },
  'children.$': {
    type: String
  },
  lists: {
    type: Array,
    optional: true
  },
  'lists.$': {
    type: String
  }
  ,
  pages: {
    type: Array,
    optional: true
  },
  'pages.$': {
    type: String
  }

  ,
  forms: {
    type: Array,
    optional: true
  },
  'forms.$': {
    type: String
  }


  ,
  workflows: {
    type: Array,
    optional: true
  },
  'workflows.$': {
    type: String
  }

  ,
  mails: {
    type: Array,
    optional: true
  },
  'mails.$': {
    type: String
  }


});




Schemas.Page = new SimpleSchema({
  Name: {
    type: String,
    index: 1,
    optional: true
  },
  CreatedBy : {
      type: String,
      optional: true
  },
  ModifiedBy : {
      type: String,
      optional: true
  },
  CreatedTime : {
      type: Date,
      optional: true
  },
  ModifiedTime : {
      type: Date,
      optional: true
  },
  Type  : {
      type: String,
      optional: true
  }, parents: {
    type: Array,
    optional: true
  },
  'parents.$': {
    type: String
  },
});



Schemas.List = new SimpleSchema({
  Name: {
    type: String,
    index: 1,
    optional: true
  },
  CreatedBy : {
      type: String,
      optional: true
  },
  ModifiedBy : {
      type: String,
      optional: true
  },
  CreatedTime : {
      type: Date,
      optional: true
  },
  ModifiedTime : {
      type: Date,
      optional: true
  },
  Type  : {
      type: String,
      optional: true
  },
  parents: {
   type: Array,
   optional: true
 },
 'parents.$': {
   type: String
 },
});





Schemas.Select = new SimpleSchema({
  favoriteYear: {
    type: Number
  }
});

Schemas.SelectMultiple = new SimpleSchema({
  favoriteYears: {
    type: [Number]
  }
});


json.Person = {
    firstName: {
    type: String,
    optional: true
  },
   middleName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  mail: {
    type: 'email',        
  },
  age: {
    type: Number,
    optional: true
  },
  subscribe: {
    type: Boolean,  
    optional: true
  },
  phone: {
    type: String,
    optional: true
  },
  mobile: {
    type: 'Number',
    optional: true
  },
  department: {
    type: 'String',
    optional: true
  },
  doNotCall : {
     type: 'String',
    optional: true
  },
  inferredCompany : {
     type: 'String',
    optional: true
  },
  inferredCountry : {
     type: 'String',
    optional: true
  },
  leadRole : {
     type: 'String',
    optional: true
  }, 
  leadScore : {
     type: 'String',
    optional: true
  }, 
  gender : {
      type: 'Boolean',
      label: "Gender",
      optional: true,
      autoform: {
         type: "boolean-radios",
         trueLabel: "Male",
         falseLabel: "Female", 
         value: false
      },  
  },
  leadStatus : {
     type: 'String',
    optional: true
  },  
  dateOfBirth: {
    type: 'Date',
    optional: true
  },
  address: {
    type: Object,
    optional: true
  },
  'address.street': {
    type: String,
    optional: true
  },
  'address.street2': {
    type: String,
    optional: true
  },
  'address.city': {
    type: String,
    optional: true
  },
  'address.state': {
    type: String,
    optional: true,
    allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select a State)"
      }
    }
  },
  'address.postalCode': {
    type: String,
    optional: true, 
    label: "ZIP"
  }, 
  maplist: { 
    type: String,    
    optional: true,  
  }

  
}

Schemas.Person = new SimpleSchema(json.Person);  







Schemas.TestForm = new SimpleSchema({
    firstName: {
    type: String,
    optional: true
  },
   middleName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  mail: {
    type: 'email',        
  }, 
  
}); 




var g  = {
    firstName: {
    type: String,
    optional: true
  },
   middleName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  mail: {
    type: 'email',        
  }, 
  
}

var gg = Object.keys(g);

for (var i = 0; i < gg.length; i++) {
  console.log(gg[i]," Object keys ",i);
};

