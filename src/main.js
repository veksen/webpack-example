// chart.js is imported from npm/node_modules
import chart from "chart.js";

// datasets is a local import, notice the relative path
import datasets from "./datasets";

// using style-loader, webpack will also bundle any css file
import "./main.css";

const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
