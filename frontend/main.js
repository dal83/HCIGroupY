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

            this.socket.onmessage = function (event) {
                frame = JSON.parse(event.data);

                console.log(frame.people)
                if (frame.people[0]) {
                    // Determine if the person is on the left or right side of the screen
                    window.location.href = "page1.html";
                }

            };
    },

    // Stop running WebSocket connection
    stop: function () {
        this.socket.close();
    }
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
    }
};
