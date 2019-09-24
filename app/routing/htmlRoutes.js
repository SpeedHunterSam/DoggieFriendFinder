const path = require("path");


module.exports = function(app){

    //display the home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));

    });
    //display the survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });
    //default catch all route that displays the home page
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));

    });
};