// Define the WebSocket host
const host = "cpsc484-01.stdusr.yale.internal:8888";

// Variables to track demand for different courses
let course_1_demand = 0;
let course_2_demand = 0;

// Function to initialize WebSocket connections and start listening for messages
$(document).ready(function () {

  let data = [
    { oh_id: "cs223", respondents: "10", time: "47" },
    { oh_id: "cs201", respondents: "12", time: "23" },
    { oh_id: "cs323", respondents: "14", time: "82" },
    { oh_id: "cs484", respondents: "11", time: "8" }
  ];

  sessionStorage.setItem("data", JSON.stringify(data));
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

      if (frame.people.length >= 1) {
        if (frame.people[0]["joints"][2]["position"]['z'] < 1200 || frame.people[0]["joints"][26]["position"]['z'] < 1200) {
          if (frame.people[0]) {
            // Determine if the person is on the left or right side of the screen
            setTimeout(() => {
              window.location.href = "page1.html";
              this.socket.stop();
            }, 2500);
          }
        }
      }
    };


  },

  // Stop running WebSocket connection
  stop: function () {
    console.log(`Closed socket at main.js, redirected to page1.html`);
    this.socket.close();
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

