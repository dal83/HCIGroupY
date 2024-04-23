// Define the WebSocket host
const host = "cpsc484-01.stdusr.yale.internal:8888";

// Variables to track demand for different courses
let course_1_demand = 0;
let course_2_demand = 0;

// Function to initialize WebSocket connections and start listening for messages
$(document).ready(function () {
  // axios
  //   .get("http://localhost:5001/")
  //   .then((response) => {
  //     // Handle successful response
  //     console.log("Received data:", response.data);
  //       sessionStorage.setItem('oh_info',response.data)

  //   })
  //   .catch((error) => {
  //     // Handle error
  //     console.error("Error fetching data:", error);
  //   });

  let data = [
    { oh_id: "cs223", queue: "10", constant: "2.4" },
    { oh_id: "cs323", queue: "5", constant: "3.4" },
  ];

  sessionStorage.setItem("data",JSON.stringify(data));
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

      console.log(frame.people);
      if (frame.people[0]) {
        // Determine if the person is on the left or right side of the screen
        window.location.href = "page1.html";
        this.socket.stop();
      }
    };

    setTimeout(() => {
      window.location.href = "page1.html";
      this.socket.stop();
    }, 10000);
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
