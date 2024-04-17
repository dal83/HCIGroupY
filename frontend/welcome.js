const host = "cpsc484-01.stdusr.yale.internal:8888";

$(document).ready(function () {
    // Initialize WebSocket connections
    frames.init();
});

// Object for handling frame information
const frames = {
    socket: null,

    // Initialize WebSocket connection for frames
    init: function () {
        // Print initial message [in future, this should be displayed on screen, not console]

        const url = "ws://" + host + "/frames";
        this.socket = new WebSocket(url);

        // Store reference to 'this' to use inside event listener
        const that = this;

        this.socket.onmessage = function (event) {
            const frame = JSON.parse(event.data);
            if (frame.people.length > 0) {
                // Check in a person is right in front of the camera, using spine_chest as reference joint
                const z = frame.people[0]['joints'][2]['position']['z'];
                if (z <= 1500) {
                    console.log("Person is within 3 feet of the camera.");
                    that.redirectToPage1();
                    // Stop running after processing the message
                    that.stop();
                } else {
                    console.log(z);
                }
            }
        };
    },

    // Stop running WebSocket connection
    stop: function () {
        this.socket.close();
    },

    // Function to redirect to the first page
    redirectToPage1: function () {
        window.location.href = "page1.html";
    }
};

