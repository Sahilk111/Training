const express = require("express");

const bodyParser = require("body-parser");

const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended : true}))

app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    
    console.log("Post received");
    console.log(req.body.cityName);

    const query = req.body.cityName;
    const appiKey = "0847bcc50704ad778108e34a9bd38351";
    const unit = "metric";


    const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query+"&appid=" + appiKey+ "&units=" + unit;

    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = " http://openweathermap.org/img/wn/" +icon+ "@2x.png"
            res.write("<h1>The tempreture in " +query + " is" + temp + "Celcius </h1>")
            res.write("<p> The weather is currently " + description + " </p>")
            res.write("<img src=" + imageURL +">")
            res.send();
        })
    })

})

app.listen(3000,function(req,res){
    console.log("server is running in port 3000")
});



