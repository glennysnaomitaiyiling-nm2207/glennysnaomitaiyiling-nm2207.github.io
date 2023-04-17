//global chart settings
let textColor = "#e0ddee";
Chart.defaults.global.defaultFontColor = textColor;
Chart.defaults.global.title.fontColor = textColor;
Chart.defaults.global.legend.labels.fontColor = textColor;
Chart.defaults.global.elements.line.borderWidth = 2;



//array to store colours for easy access
let hslaFill = [
  "hsla(214,56%,86%,0.3)",
  "hsla(183, 78%, 53%, 0.3)",
  "hsla(20,100%,80%,0.3)",
  "hsla(347, 100%, 69%, 0.3)",
  "hsla(335,100%,80%,0.3)",
  "hsla(35,98%,72%,0.3)",
  "hsla(248, 80%, 53%, 0.3)",
  "hsla(49,98%,72%,0.3)",
  "hsla(200, 86%, 52%, 0.3)"
]

let hslaBorder = [
  "hsla(214,100%,70%,0.8)",
  "hsla(183, 78%, 53%, 0.8)",
  "hsla(0,100%,50%,0.8)",
  "hsla(347, 100%, 69%, 0.8)",
  "hsla(340,100%,50%,0.8)",
  "hsla(30,100%,50%,0.8)",
  "hsla(248, 80%, 53%, 0.8)",
  "hsla(40,100%,50%,0.8)",
  "hsla(200, 86%, 52%, 0.8)"
]

////////race boxplot

// income change over time
new Chart("income-change",
  {
    type:'line',
    data: { datasets: [{
        borderColor: hslaBorder[3]
      },
      {
        borderColor: hslaBorder[1]
      },
    ]},
    plugins: [ChartDataSource], // chart data source plugin is needed to use sheetjs
    options: { 
      scales: {
        xAxes: [{
          ticks: {
          },
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }]
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        datasource: {
          url:'https://nm2207-glennys-data.s3.ap-southeast-2.amazonaws.com/avgmedincome-2000-2022.xlsx',
          datasetLabels: '17792!B2:C2',
          rowMapping: 'index',
          indexLabels: '17792!A3:A25',
          data: '17792!B3:C25'
        }
      },
      maintainAspectRatio: false,
      legend: {
          display: true
      },
      title: {
          display: true,
          text: ["Monthly income from Work per Household Member, 2000-2022"],
          
          fontSize: 16,
        },
      subtitle: {
          display: true,
          text: 'source',
          
          fontSize: 16,
        }
    }  
  });



new Chart("avgExpenditure-incomegroup-barchart",
  {
    type:'bar',
    plugins: [ChartDataSource], 
    data: {datasets: [
      {
        backgroundColor: hslaFill[3],
        borderColor: hslaBorder[3],
        borderWidth: 2
      }
    ]},
    options: { 
      plugins: {
        datasource: {
          url:'https://nm2207-glennys-data.s3.ap-southeast-2.amazonaws.com/expenditure_by_incomegroup.xlsx',
          datasetLabels: 'Sheet1!A15',
          indexLabels: 'Sheet1!C2:N2',
          data: 'Sheet1!C15:N15'
        }
      },
      maintainAspectRatio: false,
      legend: {
          display: true
      },
      title: {
          display: true,
          text: ["average monthly expenditure by monthly income group"],
          
          fontSize: 16
        }
    }
  });

 
 //////////////////////////from chatgpt ext 
 /*  function processExcelData(chart, args, data) {
    // Get the X values from row 2
    let xValues = data[0];

    // Get the Y values from row 15
    let yValues = data[13];

    // Get the R values from row 17
    let rValues = data[15];

    // Create an array of 12 objects with X, Y, and R properties
    let dataset = [];
    for (let i = 0; i < 12; i++) {
        dataset.push({
            x: xValues[i],
            y: yValues[i],
            r: rValues[i]
        });
    }

    // Update the chart data with the new dataset
    chart.data.datasets[0].data = dataset;
    chart.update();
}

let config = {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'My Bubble Chart',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            //data: []
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X Values'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Values'
                }
            }
        },
        plugins: {
            datasource: {
                url: 'https://nm2207-glennys-data.s3.ap-southeast-2.amazonaws.com/expenditure_by_incomegroup.xlsx',
                datasetLabels: 'Sheet1!A15',
                indexLabels: 'Sheet1!C2:N2',
                data: 'Sheet1!C15:N15',
                afterUpdate: processExcelData
            }
        }
    }
};

new Chart('avgExpenditure-incomegroup-barchart', config);
 */
new Chart("income-distribution-overtime",
  {
    type:'line',
    data: { datasets: [{
        backgroundColor: hslaFill[3],
        borderColor: hslaBorder[3]
      },
      {
        backgroundColor: hslaFill[1],
        borderColor: hslaBorder[1]
      },
      {
        backgroundColor: hslaFill[6],
        borderColor: hslaBorder[6]
      }
    ]},
    plugins: [ChartDataSource], 
    options: { 
      tooltips: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        datasource: {
          url:'https://nm2207-glennys-data.s3.ap-southeast-2.amazonaws.com/avgIncome-1-10-50.xlsx',
          datasetLabels: 'Sheet1!B1:D1',
          rowMapping: 'index',
          indexLabels: 'Sheet1!A2:A52',
          data: 'Sheet1!B2:D52'
        }
      },
      maintainAspectRatio: false,
      legend: {
          display: true
      },
      title: {
          display: true,
          text: ["Average Pre-tax Income, 50th, 90th and 99th Percentiles"],
          align: 'start',
          fontSize: 16
        },
      subtitle: {
          display: true,
          text: 'source',
          fontSize: 16,
        }
    }  
  });

  // gini coefficient map
  // Load CSV data
d3.csv("https://nm2207-glennys-data.s3.ap-southeast-2.amazonaws.com/gini_world.csv", function (err, rows) {

// Define a function to get the top n items from an array of objects
function getTopNItems(data, n) {
  // Sort the data array in descending order by value
  const sortedData = data.sort((a, b) => b.value - a.value);

  // Return the first n items from the sorted array
  return sortedData.slice(0, n);
}

//  defines a function that takes one argument, "region", which is a string.
function getDataByRegion(region) {
  // Filter the rows based on the region
  const filteredRows = rows.filter(row => row.region === region);
  // Get the top 5 countries with the highest Gini coefficient
  const top5Countries = getTopNItems(
    filteredRows.map((row) => ({
      name: row.name,
      value: parseFloat(row.value),
    })),
    5
  );
  
  // Return the filtered rows and top 5 countries
  return {
    locations: filteredRows.map((row) => row.code),
    z: filteredRows.map((row) => parseFloat(row.value)),
    text: filteredRows.map((row) => row.name),
    zmin: Math.min(...filteredRows.map(row => parseFloat(row.value))),
    zmax: Math.max(...filteredRows.map(row => parseFloat(row.value))),
    top5: top5Countries,
  };
}

// Get the top 5 countries from the Asia region
const regionData = getDataByRegion("Asia");
const top5Countries = getTopNItems(
  regionData.z.map((value, index) => ({
    name: regionData.text[index],
    value: value,
  })),
  5
);

const regions = [
  "Asia",
  "Africa",
  "Australia and Oceania",
  "Europe",
  "Middle East",
  "North America",
  "South America",
];

// Create a button for each region and add an event listener to update the bar chart
regions.forEach((region) => {
  const button = document.createElement("button");
  button.textContent = region;
  button.addEventListener("click", () => {
    const regionData = getDataByRegion(region);
    const dataBar = {
      labels: regionData.top5.map((country) => country.name),
      datasets: [
        {
          label: "Gini Coefficient",
          data: regionData.top5.map((country) => country.value),
          backgroundColor: hslaFill[1],
          borderColor: hslaBorder[1],
          borderWidth: 2,
        },
      ],
    };
    myChart.data = dataBar;
    myChart.options.title.text = `Top 5 Countries with the Highest Gini Coefficient in ${region}`;
    myChart.update();
  });
  document.getElementById("buttons").appendChild(button);
});

// Define the data for the choropleth map
const data = [{
  type: "choropleth",
  locationmode: "ISO-3",
  ...getDataByRegion("Asia"),
  zauto: false,
  colorscale: 'Bluered',
  showlegend: true,
  
}];


// Define the layout for the map
const layout = {
  title: {
    text: 'Gini coefficient around the world',
    font: {
      family: 'Trebuchet MS', 
      size: 16, 
    },
  },
  
  geo: {
    scope: 'asia',
    showland: true,
    //landcolor: 'rgb(217, 217, 217)',
    //countrycolor: 'rgb(255, 255, 255)',
    showlakes: true,
    //lakecolor: 'rgb(255, 255, 255)',
    //subunitcolor: 'rgb(255, 255, 255)',
    resolution: 50,
    lataxis: {
      range: [1, 2]
    }, 
    lonaxis: {
      range: [102.5, 104.5]
    },
  }
};

// Create the chloropleth map with the data and layout
Plotly.newPlot('giniMap', data, layout);

// Define the data for the bar chart
const dataBar = {
  labels: top5Countries.map(country => country.name),
  datasets: [{
    label: 'Gini Coefficient',
    data: regionData.top5.map(country => country.value),
    backgroundColor: hslaFill[1],
    borderColor: hslaBorder[1],
    borderWidth: 2
  }]
};

// Define the options for the bar chart
const optionsBar = {
  title: {
    display: true,
    text: 'Top 5 Countries with the Highest Gini Coefficient in Asia',
    fontSize: 16,
    fontFamily: 'Trebuchet MS',
  },
  scales: {
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Country Name',
        fontSize: 14,
        fontFamily: 'Trebuchet MS',
      },
      ticks: {
        fontSize: 12,
      },
    }],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Gini Coefficient',
        fontSize: 14,
        fontFamily: 'Trebuchet MS',
      },
      ticks: {
        fontSize: 14,
      },
    }]
  },
};

// Create the bar chart with the data and options
const ctx = document.getElementById('giniBarChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: dataBar,
  options: optionsBar,
});
});


//sunburst map, each item in labels array should correspond with the one in values array
let data = [
  {
    "type": "sunburst",
    "labels": ["All", "Top 10%", "Top 1%", "Next 9%", "Bottom 90%", "Middle 40%", "Bottom 50%"],
    "parents": ["", "All","Top 10%","Top 10%", "All","Bottom 90%", "Bottom 90%"],
    "values": [1, 0.6276, 0.3147, 0.3129, 0.37238, 0.3298, 0.0425],
    "leaf": {"opacity": 0.4},
    textfont: {
      color: textColor,
      family: 'Trebuchet MS'
  },
    "branchvalues": 'total',
  }];
  
  let sunburstLayout = {
    sunburstcolorway: [hslaFill[1], hslaFill[2]],
    plot_bgcolor:"#1c2031",
    paper_bgcolor:"#1c2031",
    title: {
      text: 'Proportion of national wealth owned by each percentile group',
      font: {
        family: 'Trebuchet MS', 
        size: 16, 
        color: textColor,
      },
    },
  };
  
Plotly.newPlot('wealthshareSunburst', data, sunburstLayout, {showSendToCloud: true})
  
// use arrow function syntax and async/await for better readability
window.onload = async () => {
  try {
    // use await to fetch data and parse as text in one line
    const csvData = await (await fetch('https://nm2207-glennys-data.s3.ap-southeast-2.amazonaws.com/income_deciles.csv')).text();

    // split the CSV data into rows, remove header row from array, and extract deciles and averages in one line using array destructuring
    const [headerRow, ...rows] = csvData.split('\n');
    const [deciles, averages] = rows.reduce(([deciles, averages], row) => {
      const [decile, average] = row.split(',');
      return [[...deciles, decile], [...averages, parseInt(average, 10)]];
    }, [[], []]);
    const overallAverage = [];
    const startingPoint = [];

    // Remove the first item from both deciles and averages arrays
    deciles.shift();
    averages.shift()

    for (let i = 0; i < deciles.length; i++) {
      overallAverage.push(4063);
      startingPoint.push(1600);
    }
    
    // print deciles and averages to console
    console.log('deciles:', deciles);
    console.log('averages:', averages);

    // create a chart using Chart.js library
    const ctx = document.getElementById("avgIncomeByDecile");
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: deciles,
        datasets: [{
          label: 'Average Monthly Household income per household member',
          data: averages,
          backgroundColor: hslaFill[6],
          borderColor: hslaBorder[6],
          borderWidth: 2,
        },
        {
          label: 'Overall Average',
          data: overallAverage,
          type: 'line',
          fill: false,
          borderColor: hslaBorder[7],
          
        },
        {
          label: 'Estimated Living Wage (LKYSPP)',
          data: startingPoint,
          type: 'line',
          fill: false,
          borderColor: hslaBorder[4],
          
        }
      ]
      },
      options: {
        title: {
          display: true,
          text: 'Average Income in each Income Decile (2022)',
          fontSize: 16,
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Income Decile',
              fontSize: 16
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Average household income per household member ($)',
              fontSize: 16
            }
          }]
        }
      }
    });
  } catch (error) {
    // handle any errors that occur during fetch operation
    console.log('There has been a problem with your fetch operation:', error);
  }
};

// need to make sure numbers in the csv dont use comma as 1000 separator
// barcharts for distribution of income within each ethnic group

d3.csv("https://nm2207-glennys-data.s3.ap-southeast-2.amazonaws.com/race_2020_filtered.csv", function(data) {
  // Filter the data to only include the "malay" column
  let malayColumn = [];
  for (let i = 1; i < data.length; i++) {
  malayColumn.push(data[i].Malays);
  }
  console.log(data)
  console.log(malayColumn)
  
  // Extract the income categories and the number of households for each category
  let incomeCategories = data.slice(1).map(function(d) {
    return d["Monthly Household Income from Work Per Household Member"];
  });
  let householdCounts = data.slice(1).map(function(d) {
    return parseInt([malayColumn]);
  });
  console.log(householdCounts)
  
  // Create a bar chart using Chart.js
  let ctx = document.getElementById("ethnicgroups-changingcharts").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: incomeCategories,
      datasets: [{
        label: "Number of Households",
        data: malayColumn,
        backgroundColor: hslaFill[8],
        borderColor: hslaBorder[8],
        borderWidth: 2
      }]
    },
    options: {
      title: {
        text: "Income Distribution among Malays",
        display: true,
        fontSize: 16,
        fontFamily: 'Trebuchet MS'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  // Add click event listeners to buttons with race names
  const ethnicGroups = [
    "Chinese", "Malays", "Indians", "Others", "Total"
  ];
  ethnicGroups.forEach((ethnicGroup) => {
    const button = document.createElement("button");
    button.textContent = ethnicGroup;
    button.addEventListener("click", () => {
      // Extract data for the selected race
      let raceData = [];
      for (let i = 1; i < data.length; i++) {
        raceData.push(data[i][ethnicGroup]);
        console.log(data)
        console.log(raceData)
        }
      // Update the chart with new data and title
      const dataBar = {
        labels: incomeCategories,
        datasets: [
          {
            label: `Number of (Households)`,
            data: raceData,
            backgroundColor: hslaFill[8],
            borderColor: hslaBorder[8],
            borderWidth: 2
          },
        ],
      };
      myChart.data = dataBar;
      myChart.options.title.text = `Income Distribution among ${ethnicGroup}`;
      myChart.update();
    });
    document.getElementById("racebuttons").appendChild(button);
  });
});

