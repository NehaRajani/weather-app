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
                    console.log(data);
                    
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
    console.log(data);
    
    var temp = data.main.temp;
    var weather=data.weather[0].main;
    var weatherdesc=data.weather[0].description;
    var pressure=data.main.pressure;
    var humidity= data.main.humidity;
    var min_temp=data.main.temp_min;
    var max_temp=data.main.temp_max;
    var wind_speed=data.wind.speed;
    var wind_dir=data.wind.deg;
    $(".c").html(`${temp} &deg;C`);
    $(".d").text(`${data.name}, ${data.sys.country} Built by Neha Rajani`);
    switch(weather){
        case "Clouds":$("#weatherstat").attr('src','http://yowindow.com/img/promo/spring_sunrize_800.jpg');
                        
                break;
        case "Haze":$("#weatherstat").attr('src','https://i.cbc.ca/1.4780582.1533911330!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/hazy-skyline.jpg');
                break;
        case "Clear":$("#weatherstat").attr('src','https://i.imgur.com/TG2U2f1.jpg');
                break;
        case "Rain":$("#weatherstat").attr('src','https://i.stack.imgur.com/goBR5.jpg');
                break;

        case "Drizzle":$("#weatherstat").attr('src','https://3.bp.blogspot.com/-FtQf0dA9jt8/Vw7Lf9emr6I/AAAAAAAAA_g/7K93RG8ks-QzWRbPfJYumTyvyH_N_R02gCLcB/s1600/IMG_9146.JPG');
                break;
        case "Fog":$("#weatherstat").attr('src','https://www.pakistankakhudahafiz.com/pkkhnew/wp-content/uploads/2016/01/fog-2.jpg');
                    break;
    }
    $("#show").html(`<ul class="list-group">
                    <li class="list-group-item">Current Weather for :<strong>${data.name} <br>       ${ data.sys.country}</strong></li>
                </ul>`);
    $("#show2").html(`
                <ul class="list-group">
                    <li class="list-group-item"><strong>Weather: </strong> ${weather}</li>
                    <li class="list-group-item"><strong>Weather Description: </strong> ${weatherdesc}</li>
                </ul>
                `);
    $("#show3").html(`
                <ul class="list-group">
                    <li class="list-group-item"><strong>Pressure: </strong> ${pressure}</li>
                    <li class="list-group-item"><strong>Humidity: </strong> ${humidity}</li>
                </ul>
                `);
    $("#show4").html(`
                <ul class="list-group">
                    <li class="list-group-item"><strong>Min-Temp: </strong> ${min_temp} &deg;C</li>
                    <li class="list-group-item"><strong>Max-Temp: </strong> ${max_temp} &deg;C</li>
                </ul>
                `);
    $("#show5").html(`
                <ul class="list-group">
                    <li class="list-group-item"><strong>Wind-Speed: </strong> ${wind_speed}</li>
                    <li class="list-group-item"><strong>Wind-Direction: </strong> ${wind_dir}</li>
                </ul>
                `);
    

}

     









/*http://api.openweathermap.org/data/2.5/weather?q=London&units=matric&APPID=671d3c32b444c022bd96948afddcdf37*/
/*this is api call ie pasted from open weather map + 
name of city +
unit matric which conerts any temp in to celciusas we want no need to code directly api gives converted as we set units=matric ie cecious  +
then added my key wd appid in it running successfully*/
