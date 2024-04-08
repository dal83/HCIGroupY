// var socket = new WebSocket("ws://cpsc484-01.stdusr.yale.internal:8888/frames");

var host = "cpsc484-01.stdusr.yale.internal:8888";

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
  },
};