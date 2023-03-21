

const labelIncomeGroup = ["Below 1,000",
"1,000 - 1,999",
"2,000 - 2,999",
"3,000 - 3,999",
"4,000 - 4,999",
"5,000 - 5,999",
"6,000 - 7,999",
"8,000 - 9,999",
"10,000 - 11,999",
"12,000 - 14,999",
"15,000 - 19,999",
"20,000 & Over"];

const AverageExpenditure = [
  1929,	1958,	2047,	2537,	2904, 3257,	3851,	4535,	5115,	5809,	6832,	10047
];

const dataObj = {
  labels: labelIncomeGroup,
  datasets: [
    {   label: "Average Expenditure",
        data: AverageExpenditure,
        //label: ,// uncomment this line and set this to "Age"
        //data: ,// uncomment this line and set this to beingOld
        borderWidth: 2,
        backgroundColor: "hsla(49,98%,72%,0.8)",
        borderColor: "hsla(30,100%,50%,1)"
    },
  ]
}

new Chart("avgExpenditure-incomegroup-barchart",
{
  type: "bar",
  data: dataObj,
  options: { 
      maintainAspectRatio: false,
      legend: {
          display: false
      },
      title: {
          display: true,
          text: ["average monthly expenditure by monthly income group"],//set this to 'Predicting likelihood of deepfake sharing','for Older People'
          fontFamily: "TrebuchetMS",
          fontSize: 16,
          fontColor: "white",
      }
  }
});