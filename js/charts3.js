var options_g3 = {
  series: [
    {
      name: "גברים",
      data: [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
        4.5, 3.9, 3.5, 3,
      ],
    },
    {
      name: "נשים",
      data: [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
        -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 400,
    stacked: true,
    // Specify the container where the chart will be rendered
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
  },
  colors: ["rgb(80,203,253)", "rgb(182,202,81)"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "80%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    title: {
      // text: 'Age',
    },
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      },
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      },
    },
  },
  title: {
    text: "",
  },
  xaxis: {
    categories: [
      "85+",
      "80-84",
      "75-79",
      "70-74",
      "65-69",
      "60-64",
      "55-59",
      "50-54",
      "45-49",
      "40-44",
      "35-39",
      "30-34",
      "25-29",
      "20-24",
      "15-19",
      "10-14",
      "5-9",
      "0-4",
    ],
    title: {
      text: "סה״כ %",
    },
    labels: {
      formatter: function (val) {
        return Math.abs(Math.round(val)) + "%";
      },
    },
  },
};

var chart_3 = new ApexCharts(document.querySelector("#g-3"), options_g3);
chart_3.render();
