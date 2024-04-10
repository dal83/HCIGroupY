// Define the WebSocket host
const host = "cpsc484-01.stdusr.yale.internal:8888";

// Variables to track demand for different courses
let course_1_demand = 0;
let course_2_demand = 0;

// Function to initialize WebSocket connections and start listening for messages
$(document).ready(function () {

    // Initialize WebSocket connections
    frames.init();
    twod.init();

});

// Object for handling frame information
const frames = {
    socket: null,

    // Initialize WebSocket connection for frames
    init: function () {
        // Print initial message [in future, this should be displayed on screen, not console]
        console.log("Hello. Please stand to the left or right of the screen.");

        const url = "ws://" + host + "/frames";
        this.socket = new WebSocket(url);
        const that = this; // Store reference to 'this' to use inside setTimeout

        setTimeout(function () {
            that.socket.onmessage = function (event) {
                frames.show(JSON.parse(event.data));
                console.log("Course 1 demand:", course_1_demand);
                console.log("Course 2 demand:", course_1_demand);
            };

        }, 5000); // Delay execution for 5 seconds
    },

    // Function to handle frame data
    show: function (frame) {
        //console.log('Frame:', frame);

        // Check if the person is detected in the frame
        if (frame.people[0]) {
            //console.log('Body ID:', frame.people[0]['body_id']);

            // Determine if the person is on the left or right side of the screen
            const userPos = frame.people[0]['x_pos'];
            if (userPos < 0) {
                console.log("Person is on the LEFT side of the screen.");
                course_1_demand++;
            } else {
                console.log("Person is on the RIGHT side of the screen.");
                course_2_demand++;
            }
        }
    },
};


// Object for handling two-dimensional images and video updates
const twod = {
    socket: null,

    // Initialize WebSocket connection for two-dimensional data
    init: function () {
        const url = "ws://" + host + "/twod";
        this.socket = new WebSocket(url);
        this.socket.onmessage = function (event) {
            twod.show(JSON.parse(event.data));
        };
    },

    // Function to display two-dimensional data
    show: function (twod) {
        $("img.twod").attr("src", "data:image/pnjpegg;base64," + twod.src);

    },


};
