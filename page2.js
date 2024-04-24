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
      data['respondents']= (Number(data['respondents'])+1).toString()



      let waiting_el = $("#waiting");
      let constant = data["constant"];
      let time = constant * Number(queue)
      let waiting = Number(time);
      waiting_el.text(`${waiting} minutes.`);
    }
  }

  console.log('Data count of '+chosen_course+' updated.', courses)
  // updating the new data

  sessionStorage.setItem('data',JSON.stringify(courses))
  // Redirect to index.html after 5 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 10000);
});
