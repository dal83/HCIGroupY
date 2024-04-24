let countdown = 10;
$(document).ready(function () {
  const searchParams = new URLSearchParams(window.location.search);
  let chosen_course = searchParams.get("course");

  let response = JSON.parse(sessionStorage.getItem("data"));
  console.log(response);

  let courses = response;
  console.log(`Response data`, courses);

  for (const data of courses) {
    console.log(data)
    if (data["oh_id"] == chosen_course) {
      let course_name = data["oh_id"];
      document.title = `${course_name} Selected`;

      let header = $("#course-header");
      header.text(`You have selected ${course_name}`);

      let students_el = $("#students");
      let queue = data["respondents"];
      students_el.text(`${Number(queue)}`);

      let waiting_el = $("#waiting");
      let time = data["time"];
      let waiting = Number(time);
      waiting_el.text(`${waiting} minutes.`);
    }
  }

  // Redirect to index.html after 5 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 10000);
});
