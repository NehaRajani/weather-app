$(document).ready(function () {
    /*documnet.object(model)*/
    $("#submitweather").click(function () {                 /*id of input feild for on click event on that id that is button*/

        var city = $("#city").val();                         /* value for which city we want the api to give the output will go from input feild so we are making use of id=city which is der in html input feild element which ll request api to send the data*/

        /*to cheack that input feild is not empty*/
        if (city != '') {
            /*since we are using jqyery  we can use ajax as well as get json request methods or get request to get data using API KEY given to us  here we will use ajax method eg for json req is  $.getJSON() this alsi works*/
            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +
                    "&APPID=671d3c32b444c022bd96948afddcdf37",     /*paramtertes we pass*/
                type: "GET",
                dataType: "jsonp",                                 /*js obj notation pading*/
                success: function (data) {
                    var widget = show(data);                       /*results stored in this data paramter*/
                    $("#show").html(widget);
                    $("#error").html('');                          /*WHEN u have empty feild and enter u see the msg but when next u correct ursle so to vanish the msg u have this statement*/
                                                                   /*for console output u can use console.log bt for real output we make a funtion below and call it*/
                }
            });


        } else {                                                    /*ie if its empty error is shown to user*/
            $("#error").html(`<div class='alert alert-danger' id='errorcity'>
                <a href="#" class='close' data-dismiss='alert' aria-label='close'>Feild Cannot Be Empty</a>.
          </div>`);
        }
    });
});

function show(data) {
    var temp = data.main.temp;
    return "<h3 style='font-size:40px; font-weight:bold;' class='text-center'>Current Weather for " + data.name + "," +
        data.sys.country + "</h3>" +
        "<h3 style='padding-left:40px;'><strong>Weather</strong>:" + data.weather[0].main + "</h3>" +
        "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/" + data.weather[0].description + ".png'>" + data.weather[0].description + "</h3>" +
        "<h3 style='padding-left:40px;'><strong>Temperature</strong>:" + temp + "&deg;C</h3>" +
        "<h3 style='padding-left:40px;'><strong>Preasure</strong>:" + data.main.pressure + " hPa</h3>" +
        "<h3 style='padding-left:40px;'><strong>Humidity</strong>:" + data.main.humidity + "%</h3>" +
        "<h3 style='padding-left:40px;'><strong>Min.Tempreture</strong>:" + data.main.temp_min + "&deg;C</h3>" +
        "<h3 style='padding-left:40px;'><strong>Max.Tempreture</strong>:" + data.main.temp_max + "&deg;C</h3>" +
        "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>:" + data.wind.speed + " m/s</h3>" +
        "<h3 style='padding-left:40px;'><strong>Wind Direction</strong>:" + data.wind.deg + "&deg;</h3>";
}








/*http://api.openweathermap.org/data/2.5/weather?q=London&units=matric&APPID=671d3c32b444c022bd96948afddcdf37*/
/*this is api call ie pasted from open weather map + 
name of city +
unit matric which conerts any temp in to celciusas we want no need to code directly api gives converted as we set units=matric ie cecious  +
then added my key wd appid in it running successfully*/
