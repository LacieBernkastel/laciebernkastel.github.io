const scheduleDisplay = document.querySelector('.scheduleDisplay');

fetch('INFO2_G1_TP1.ics')
    .then(response => response.text())
    .then(createCalendar);


function createCalendar(raw){

    // Get the basic data out
    var jCalData = ICAL.parse(raw);
    var comp = new ICAL.Component(jCalData);

    // Fetch the VEVENT part
    var vevent = comp.getFirstSubcomponent('vevent');
    var event = new ICAL.Event(vevent); 

    scheduleDisplay.textContent = event.summary + ' ' + event.description + ' ' + event.startDate.toJSDate() + ' ' + event.endDate.toJSDate();

    console.log(event.summary, event.uid, event.description);

    // Get start and end dates as local time on current machine

    console.log(event.startDate.toJSDate(), event.endDate.toJSDate());

}