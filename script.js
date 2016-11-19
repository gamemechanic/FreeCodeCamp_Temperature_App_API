$(document).ready(function() {
  var lat;
  var long;
  var api_link;
  if (navigator.geolocation) {
   /*fetching coordinates and displaaying them*/  navigator.geolocation.getCurrentPosition(function(position) {
      $("#location").html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
     //feeding the location to the API as variables
      lat = position.coords.latitude;
      long = position.coords.longitude;
      api_link = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric&appid=0ba63d8267657bd9a0b518277b89fec9";
     //The replace remove the quotes from the country's name.
     $.getJSON(api_link, function(json) {
        $("#country").html("Country: " + (JSON.stringify(json.sys.country)).replace(/\"/g,""));
        $("#temperature").html("Temperature: " + JSON.stringify(json.main.temp) + " C");
      });
    });
  }
});