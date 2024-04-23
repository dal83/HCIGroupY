const data = {
  //will get data from backend after
  labels: ["CPSC 223", "CPSC 201", "CPSC 323", "CPSC 484"],
  datasets: [
    {
      label: "Number of Students",
      data: [18, 15, 9, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      x: {
        ticks: {
          font: {
            size: 36,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 36,
          },
          precision: 0,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        bodyFont: {
          size: 44,
        },
        titleFont: {
          size: 36,
        },
      },
    },
  },
});
