var clock;

// Thursday events
var startup_panel = {
    name: "Startup Panel",
    desc: "",
    start_time: "September 29, 2016 12:00 PM",
    end_time: "September 29, 2016 1:00 PM",
    location: "Siebel 2405",
    img_url: ""
};

var startup_fair = {
    name: "Startup Fair",
    desc: "",
    start_time: "September 29, 2016 2:00 PM",
    end_time: "September 29, 2016 5:30 PM",
    location: "Siebel Atrium",
    img_url: ""
};

var speaker_1 = {
    name: "Speaker: Ben Jun",
    desc: "",
    start_time: "September 29, 2016 6:00 PM",
    end_time: "September 29, 2016 6:50 PM",
    location: "Siebel 1404",
    img_url: "../assets/img/speakers/benjun.jpeg"
};

var dinner_1 = {
    name: "Dinner (Sponsored by RetailMeNot)",
    desc: "",
    start_time: "September 29, 2016 7:00 PM",
    end_time: "September 29, 2016 8:00 PM",
    location: "Siebel Atrium",
    img_url: ""
};


// Friday events
var breakfast_1 = {
    name: "Breakfast",
    desc: "",
    start_time: "September 30, 2016 9:00 AM",
    end_time: "September 30, 2016 10:00 AM",
    location: "Siebel Atrium",
    img_url: ""
};

var job_fair = {
    name: "Job Fair",
    desc: "",
    start_time: "September 30, 2016 10:30 AM",
    end_time: "September 30, 2016 4:30 PM",
    location: "Siebel Atrium",
    img_url: ""
};

var speaker_2 = {
    name: "Speaker: Gabrielle Allen",
    desc: "",
    start_time: "September 30, 2016 5:00 PM",
    end_time: "September 30, 2016 5:50 PM",
    location: "Siebel 1404",
    img_url: "../assets/img/speakers/gabrielle.png"
};

var dinner_2 = {
    name: "Dinner",
    desc: "",
    start_time: "September 30, 2016 6:30 PM",
    end_time: "September 30, 2016 7:30 PM",
    location: "Siebel 1404",
    img_url: ""
};

var speaker_3 = {
    name: "Keynote Speaker: Basil Alwan",
    desc: "",
    start_time: "September 30, 2016 7:30 PM",
    end_time: "September 30, 2016 8:20 PM",
    location: "Siebel 1404",
    img_url: "../assets/img/speakers/basil.jpg"
};

var alumni_event = {
    name: "Alumni Event",
    desc: "",
    start_time: "September 30, 2016 9:00 PM",
    end_time: "September 30, 2016 11:00 PM",
    location: "Murphy's Pub",
    img_url: ""
};

//Saturday events
var breakfast_2 = {
    name: "Breakfast",
    desc: "",
    start_time: "October 1, 2016 9:00 AM",
    end_time: "October 1, 2016 10:00 AM",
    location: "Siebel Atrium",
    img_url: ""
};

var speaker_4 = {
    name: "Speaker: Santanu Kolay",
    desc: "",
    start_time: "October 1, 2016 10:00 AM",
    end_time: "October 1, 2016 10:50 AM",
    location: "Siebel 1404",
    img_url: "../assets/img/speakers/santanu.jpg"
};

var speaker_5 = {
    name: "Speaker: Laura Gómez",
    desc: "",
    start_time: "October 1, 2016 11:00 AM",
    end_time: "October 1, 2016 11:50 AM",
    location: "Siebel 1404",
    img_url: "../assets/img/speakers/laura.png"
};

var lunch = {
    name: "Lunch",
    desc: "",
    start_time: "October 1, 2016 12:00 PM",
    end_time: "October 1, 2016 1:00 PM",
    location: "Siebel Atrium",
    img_url: ""
};

var speaker_6 = {
    name: "Speaker: Nicole Hu",
    desc: "",
    start_time: "October 1, 2016 1:00 PM",
    end_time: "October 1, 2016 1:50 PM",
    location: "Siebel 1404",
    img_url: "../assets/img/speakers/nicole.png"
};

var speaker_7 = {
    name: "Speaker: Don Dini",
    desc: "",
    start_time: "October 1, 2016 2:00 PM",
    end_time: "October 1, 2016 2:50 PM",
    location: "Siebel 1404",
    img_url: "../assets/img/speakers/don.jpg"
};

var social_hour = {
    name: "ACM Social Hour",
    desc: "",
    start_time: "October 1, 2016 3:00 PM",
    end_time: "October 1, 2016 4:00 PM",
    location: "Siebel Atrium",
    img_url: ""
};

var speaker_8 = {
    name: "Speakers: Maesen Churchill & Grace Huang",
    desc: "",
    start_time: "October 1, 2016 4:00 PM",
    end_time: "October 1, 2016 4:50 PM",
    location: "Siebel 1404",
    img_url: ""
};

var speaker_9 = {
    name: "Speaker: Clare Curtis",
    desc: "",
    start_time: "October 1, 2016 5:00 PM",
    end_time: "October 1, 2016 5:50 PM",
    location: "Siebel 1404",
    img_url: "../assets/img/speakers/clare.jpg"
};

var dinner_3 = {
    name: "Dinner",
    desc: "",
    start_time: "October 1, 2016 6:00 PM",
    end_time: "October 1, 2016 7:00 PM",
    location: "Siebel Atrium",
    img_url: ""
};

var speaker_10 = {
    name: "Speaker: Brad Nicholas",
    desc: "",
    start_time: "October 1, 2016 7:00 PM",
    end_time: "October 1, 2016 7:50 PM",
    location: "Siebel 1404",
    img_url: "../assets/img/speakers/brad.jpg"
};

var mechmania_closing = {
    name: "Mechmania Closing Ceremony",
    desc: "",
    start_time: "October 1, 2016 8:00 PM",
    end_time: "October 1, 2016 9:00 PM",
    location: "Siebel 1404",
    img_url: ""
};

var events_list = [startup_panel, startup_fair, speaker_1, dinner_1, breakfast_1, job_fair, speaker_2, dinner_2, speaker_3, alumni_event, breakfast_2, speaker_4, speaker_5, lunch, speaker_6, speaker_7, social_hour,speaker_8, speaker_9, dinner_3, speaker_10, mechmania_closing];

$(document).ready(function() {

    // var now = new Date(); // Now
    var now = new Date(Date.parse("October 1, 2016 7:49 PM"));

    console.log(now);

    var date = new Date(2016, 8, 29, 12, 0, 0, 0); // RP Start Date

    if(now > date) {
        startTime();

        // Date handling
        $('#title').html("<h2>reflections | projections 2016</h2>");
        $('#caption').html("");
        $('#happening-now').show();

        checkEvents(now, events_list);

    } else {

        // Clock handling
        var clock;
        var diff = (date.getTime()/1000) - (now.getTime()/1000);

        clock = $('.clock').FlipClock(diff, {
            clockFace: 'DailyCounter',
            autoStart: false,
            callbacks: {
                stop: function() {
                    $('.message').html('Reflections | Projections 2016 is here!')
                }
            }
        });

        clock.setCountdown(true);
        clock.start();

    }

});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    if(h > 12) h = h-12;
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('.clock').html('<span style="font-size:500%;">' + h + ":" + m + ":" + s + "</span>");
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function checkEvents(now, events_list) {

    for(var i = 0; i < events_list.length; i++) {

        var start_time = new Date(Date.parse(events_list[i].start_time));
        var end_time = new Date(Date.parse(events_list[i].end_time));

        if(now > start_time && now < end_time) {
            // console.log("Found an item");
            $('#happening-now-title').html(events_list[i].name);
            $('#happening-now-desc').html(events_list[i].location);

            if(events_list[i].img_url == "") {
                $('#happening-now-picture-container').hide();
                $('#happening-now').css("text-align", "center");
            } else {
                $('#happening-now-picture-container').show();
                $('#happening-now').css("text-align", "left");
                $('#happening-now-picture').attr("src", events_list[i].img_url);
            }
        }

    }

    // var t_2 = setTimeout(checkEvents, 10000);
}