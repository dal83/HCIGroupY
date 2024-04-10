
var host = "cpsc484-01.stdusr.yale.internal:8888";
var course_1 = 0; // this will keep track of first course OH demand
var course_1 = 0; // this will keep track of second course OH demand

$(document).ready(function () {
    frames.start();
    twod.start()
});

//frame information
var frames = {
    socket: null,

    start: function () {
        var url = "ws://" + host + "/frames";
        frames.socket = new WebSocket(url);
        frames.socket.onmessage = function (event) {
            frames.show(JSON.parse(event.data));
        };
    },

    show: function (frame) {
        console.log('Frame', frame);
    },
};

//this part creates the two dimensional images, and updates it continuously, bringing the effect of a video 
var twod = {
    socket: null,

    start: function () {
        var url = "ws://" + host + "/twod";
        twod.socket = new WebSocket(url);
        twod.socket.onmessage = function (event) {
            twod.show(JSON.parse(event.data));
        };

        setInterval(twod.show, 5000);
    },

    show: function (frame) {
        $("img.twod").attr("src", "data:image/pnjpegg;base64," + frame.src);

        // Check if frame and frame.people are defined
        if (frame && frame.people && frame.people.length > 0) {
            let person = frame.people[0]; // Get the first person in the array
            if (person.joints) {
                person.joints.forEach(joint => {
                    // Check if the joint is SPINE_CHEST
                    if (joint.name === "SPINE_CHEST") {
                        let xPixel = joint.pixel.x;
                        let screenWidth = 1920; // Example screen width, replace with actual value
                        let screenCenter = screenWidth / 2;

                        if (xPixel < screenCenter) { // If person's chest is on left side of screen
                            console.log("left");
                            course_1++;
                        } else {
                            console.log("right"); // If person's chest is on right side of screen
                            course_2++;
                        }
                    }
                });
            }
        }
    },
};
