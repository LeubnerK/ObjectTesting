var _ = require('lodash');
var jsonfile = require('jsonfile');
const file = 'data.json';

jsonfile.readFile(file, function (err, obj) {
    if (err) console.error(err);
    
    var readMe = {};
    readMe = obj;
    
    _.forEach(readMe, function(value){
        for (i=0;i<2;i++)
        {
            console.log('First Name: ' + value[i].fname);
            console.log('Last Name: ' + value[i].lname);
            console.log('Age: ' + value[i].age);
        }

    });
  });


