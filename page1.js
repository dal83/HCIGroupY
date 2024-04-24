$(document).ready(function () {




  // the document.ready runs when the page is loaded
  //the courses container
  let container = $("#container");

    let response = JSON.parse(sessionStorage.getItem('data'))
    console.log('data is ',response)

      courses_colors = ["#ffc0cb", "#87ceeb", "#ffe4b5", "#98fb98"];
      let index = 0;
      // Update UI with received data (example)
      // console.log(response.data)
      console.log(response)
      for (const data of response) {

        const course = $("<div>")
          .text(data['oh_id'])
          .addClass("course")
          .css("background-color", `${courses_colors[index]}`);

        container.append(course)
        index += 1;
      }
    



    frames.init();
    twod.init();
})