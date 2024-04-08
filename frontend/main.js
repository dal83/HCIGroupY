// var socket = new WebSocket("ws://cpsc484-01.stdusr.yale.internal:8888/frames");

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
     console.log('Frame',frame);
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
  },

  show: function (twod) {
    $("img.twod").attr("src", "data:image/pnjpegg;base64," + twod.src);
    frame.people.forEach(person => {
            if (person.x_pos < 0) {
                console.log("left");
                course_1++; // increment course_1 counter if motion detected on the left side
            } else {
                console.log("right");
                course_2++; // increment course_2 counter if motion detected on the right side
            }
        });
  },
};
