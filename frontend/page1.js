$(document).ready(function () {
  // the document.ready runs when the page is loaded
  //the courses container
  let container = $("#container");

  var leftRectangleText = "Left Rectangle Text"; // **NEED TO SET VALUE OF LEFT RECTANGLE HERE**
  var rightRectangleText = "Right Rectangle Text"; // **NEED TO SET VALUE OF RIGHT RECTANGLE HERE**

  document.getElementById('leftRectangle').innerText = leftRectangleText;
  document.getElementById('rightRectangle').innerText = rightRectangleText;

  //fetch the classes from the backend
  axios
    .get("http://localhost:5001/page1")
    .then((response) => {
      // Handle successful response
      //   console.log("Received data:", response.data);

      courses_colors = ["#ffc0cb", "#87ceeb", "#ffe4b5", "#98fb98"];
      let index = 0;
      // Update UI with received data (example)
      console.log(response.data)
      console.log(response)
      for (const { name } of response.data) {

        const course = $("<div>")
          .text(name)
          .addClass("course")
          .css("background-color", `${courses_colors[index]}`);

        container.append(course)
        index += 1;
      }
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching data:", error);
    });
});
