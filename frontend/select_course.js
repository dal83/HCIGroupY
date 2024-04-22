// Define the WebSocket host
const host = "cpsc484-01.stdusr.yale.internal:8888";

// Variables to track demand for different courses
let course_1_demand = 0;
let course_2_demand = 0;

let chosen_course = "";

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
                frame = JSON.parse(event.data);
                if (frame.people[0]) {
                    // Determine if the person is on the left or right side of the screen
                    const userPos = frame.people[0]['x_pos'];
                    if (userPos < 0) {
                        console.log("Person is on the LEFT side of the screen.");
                        course_1_demand++;
                        chosen_course = "CPSC 223";
                        // will later use real data from backend to set the selection state
                        //  sessionStorage.setItem("selection", {'oh_id':chosen_course,'queue':20, 'constant':3});
                        that.redirectToPage2();
                    } else {
                        console.log("Person is on the RIGHT side of the screen.");
                        course_2_demand++;
                        chosen_course = "CPSC 484";

                        that.redirectToPage2();
                    }
                }
                // Return to home page if no choice selected (i.e. no motion detected on either side of screen)
                else {
                    that.redirectToPage2();

                    // window.location.href = "index.html";
                }
                console.log("Course 1 demand:", course_1_demand);
                console.log("Course 2 demand:", course_2_demand);
                // Stop running after processing the message
            };

        }, 5000); // Delay execution for 5 seconds
    },

    // Stop running WebSocket connection
    stop: function () {
        this.socket.close();
    },

    redirectToPage2: function () {
        // Redirect to page2.html with chosen_course as a query parameter
        this.stop();
        window.location.href = "page2.html?course=" + encodeURIComponent(chosen_course);
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
    }
};
