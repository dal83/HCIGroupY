// Define the WebSocket host
const host = "cpsc484-01.stdusr.yale.internal:8888";

// Variables to track demand for different courses
let course_1_demand = 0;
let course_2_demand = 0;

// Function to initialize WebSocket connections and start listening for messages
$(document).ready(function () {
    frames.init();
    twod.init();
});

// Object for handling frame information
const frames = {
    socket: null,

    // Initialize WebSocket connection for frames
    init: function () {
        const url = "ws://" + host + "/frames";
        this.socket = new WebSocket(url);
        this.socket.onmessage = function (event) {
            frames.show(JSON.parse(event.data));
        };
    },

    // Function to handle frame data
    show: function (frame) {
        console.log('Frame:', frame);
        if (frame.people[0]) {
            console.log('Body ID:', frame.people[0]['x_pos']);

            user_pos = frame.people[0]['x_pos'];
            if (user_pos < 0) {
                console.log("LEFT");
            } else {
                console.log("RIGHT");
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
