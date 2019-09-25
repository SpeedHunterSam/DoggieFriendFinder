const path = require("path");

const surveyScores = require("../data/friends");


module.exports = function(app){


    app.get("/api/friends", function(req, res) {
        res.json(surveyScores);
        

        //code for comparing differences in values in array (temp location).

        /*
        const arrSum = arr => arr.reduce((a,b) => a + b, 0);  //create a function for summing the array values
        console.log(arrSum(surveyScores.scores));
        */

       let numbers = surveyScores[0].scores;
       let sum = 0;
       for (let i = 0; i < numbers.length; i++) {
         sum += numbers[i]
       }

       console.log(sum);

      });
    
    
      // API POST Requests
      // Below code handles when a user submits a form and thus submits data to the server.
      // In each of the below cases, when a user submits form data (a JSON object)
      // ...the JSON is pushed to the appropriate JavaScript array
      // (ex. User completes request... this data is then sent to the server...
      // Then the server saves the data to the surveyScores array)
      // ---------------------------------------------------------------------------

      app.post("/api/friends", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        if (surveyScores.length > 0) {
            surveyScores.push(req.body);
            res.json(true);
        }
        else {
            surveyScores.push(req.body);
          res.json(false);
        }

        console.log(surveyScores); //print the users input data to the console (temporarily so we can figure out how to work with it)
      });
    
      // ---------------------------------------------------------------------------
      // I added this below code so you could clear out the table while working with the functionality.
      // Don"t worry about it!
    /*
      app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;
    
        res.json({ ok: true });
      });


      */


};


/*

//this function compares the difference between two values

function difference(a, b) {
  return Math.abs(a - b);
}



*/