$(document).ready(function () {
  const searchParams = new URLSearchParams(window.location.search);

  let chosen_course = searchParams.get("course");



  // axios
  //   .get(`http://localhost:5001/page2?course=${chosen_course}`)
  //   .then((response) => {

  //   })
  //   .catch((error) => {
  //     console.error(`Error from fetch`, error);
  //   });
  let response = JSON.parse(sessionStorage.getItem("data"));

  console.log(response);

  let courses = response;
  //   data in the form of {'oh_id':course_name,'queue':0, 'constant':0}
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
});


