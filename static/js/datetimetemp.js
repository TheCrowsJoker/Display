function time() {
    var currentTime = new Date ();
    var currentHours = currentTime.getHours ();
    var currentMinutes = currentTime.getMinutes ();
    var currentSeconds = currentTime.getSeconds ();
    // Put a "0" infront of numbers if needed
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    // Change to 12 hour time
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    // Display format
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    $("#time").html(currentTimeString);
}

function date() {
    // Arrays of months and days for easier readability
    var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDate = new Date();
    var weekDay = days[currentDate.getDay()];
    var currentDay = currentDate.getDate();
    var currentMonth = months[currentDate.getMonth()];
    var currentYear = currentDate.getFullYear();
    // Display format
    var currentDateString = weekDay + " " + currentDay + " " + currentMonth + " " + currentYear;
    $("#date").html(currentDateString);
}

$(document).ready(function() {
    date();
    time();
    setInterval('time()', 1000); // Update every second
    setInterval('date()', 3600000 ); // Update every hour
    setInterval('temp()', 3600000 ); // Update every hour
});
