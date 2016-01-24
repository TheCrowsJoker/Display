function updateTime() {
    var currentTime = new Date ();
    var currentHours = currentTime.getHours ();
    var currentMinutes = currentTime.getMinutes ();
    var currentSeconds = currentTime.getSeconds ();
    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    $("#time").html(currentTimeString);
}

function updateDate() {
    // Arrays of months and days for easier readability
    var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDate = new Date();
    var weekDay = days[currentDate.getDay()];
    var currentDay = currentDate.getDate();
    var currentMonth = months[currentDate.getMonth()];
    var currentYear = currentDate.getFullYear();

    var currentDateString = weekDay + " " + currentDay + " " + currentMonth + " " + currentYear;
    $("#date").html(currentDateString);
}

$(document).ready(function() {
   setInterval('updateTime()', 1000);
   setInterval('updateDate()', 1000);
});
