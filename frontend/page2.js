$(document).ready(function () {
  const searchParams = new URLSearchParams(window.location.search);

  let chosen_course = searchParams.get("course");


  axios
    .get(`http://127.0.0.1:5000/page2?course=${chosen_course}`)
    .then((response) => {
      course = response.data;
      //   data in the form of {'oh_id':course_name,'queue':0, 'constant':0}
      console.log(`Response data`, course);
      let course_name = course["oh_id"];
      document.title = `${course_name} Selected`;

      let header = $("#course-header");
      header.text(`You have selected ${course_name}`);

      let students_el = $("#students");
      let queue = course["queue"];
    
      students_el.text(queue);

      let waiting_el = $("#waiting");
      let constant = course["constant"];
      let waiting = Number(queue) * Number(constant);
      waiting_el.text(`${waiting} minutes.`);
    })
    .catch((error) => {
      console.error(`Error from fetch`, error);
    });
});
