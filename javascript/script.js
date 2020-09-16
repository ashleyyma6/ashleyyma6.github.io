let trigger = false;
if (trigger === true) {
  console.log("trigger is true");
} else {
  console.log("trigger is false");
}

function authentication() {
  var input = document.getElementById("password").value; //document.forms["transcriptForm"]["password"].value;
  if (input == '') {
    alert("Please enter Password");
  } else if (input != 'frankbutt') {
    alert("\nPassword did not match: Please try again...");
    return false;
  } else {
    //alert("Password Match");
    //document.getElementById('transcript').style.visibility = "visible";
    showAllTable();
    return true;
  }
}

function hideAuth() {
  document.getElementById('authentication').style.visibility = "hidden";
}

function showAllTable() {
  document.getElementById("school").innerHTML = "San Jose State University";
  document.getElementById("name").innerHTML = "STUDENT NAME: Ma, Yuehongxiao";
  document.getElementById("stu_id").innerHTML = "STUDENT NUMBER: 013493480";
  externalCreditTable();
  externalCreditTotalTable();
  fall2018Table();
  winter2019Table();
  spring2019Table();
  fall2019Table();
  spring2020Table();
  summer2020Table();
  fall2020Table();
  hideAuth();
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function externalCreditTable() {
  let externalCredit = [{
    "EXTERNAL CREDIT": "San Francisco State University",
    UE: "73.0",
    TERM: "FALL 2018",
    SCORE: " "
  }];

  let table = document.getElementById("externalCredit");
  let data = Object.keys(externalCredit[0]);
  generateTableHead(table, data);
  generateTable(table, externalCredit);
}

function externalCreditTotalTable() {
  let externalCreditTotal = [{
    "EXTERNAL CREDIT TOTALS": " ",
    UG: 67.00,
    UE: 73.0,
    GP: 254.10,
    GPA: 3.792
  }, ];
  let table = document.getElementById("externalCreditTotal");
  let data = Object.keys(externalCreditTotal[0]);
  generateTableHead(table, data);
  generateTable(table, externalCreditTotal);
}

function fall2018Table() {
  let fall2018 = [{
      "": "CS 146",
      " ": "Comp Architecture",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 11.1,
      GPA: ""
    },
    {
      Course: "CS 147",
      Name: "Data Struct & Alg",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A-",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "CS 151",
      Name: "Object Orntd Dsgn",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "CS 154",
      Name: "Formal Lang & Comput",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A-",
      GP: 11.1,
      GPA: ""
    },
    {
      Course: "MUSC 10A",
      Name: "Music Appreciation",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "",
      Name: "SEMESTER TOTAL:",
      UA: 15.0,
      UG: 15.0,
      UE: 15.0,
      GR: "",
      GP: 58.2,
      GPA: "3.880"
    },
    {
      Course: "",
      Name: "SJSU CUM:",
      UA: 15.0,
      UG: 15.0,
      UE: 15.0,
      GR: "",
      GP: 58.2,
      GPA: "3.880"
    },
    {
      Course: "",
      Name: "EXTERNAL CREDIT:",
      UA: "",
      UG: 67.0,
      UE: 73.0,
      GR: "",
      GP: 254.1,
      GPA: "3.792"
    },
    {
      Course: "",
      Name: "ALL COLLEGE:",
      UA: 88.0,
      UG: 82.0,
      UE: 88.0,
      GR: "",
      GP: 312.3,
      GPA: "3.808"
    }
  ];

  document.getElementById("fall2018s").innerHTML = "2018 FALL SEMESTER ";
  document.getElementById("degree").innerHTML = "UGD - Undergraduate Degree";
  document.getElementById("major").innerHTML = "MAJOR: BS Computer Science";
  let table = document.getElementById("fall2018");
  let data = Object.keys(fall2018[0]);
  generateTableHead(table, data);
  generateTable(table, fall2018);
}

function winter2019Table() {
  let winter2019 = [{
      "": "POLS 15",
      " ": "US & CA Government",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "D",
      GP: 3.0,
      GPA: ""
    },
    {
      Course: "",
      Name: "SEMESTER TOTAL:",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "",
      GP: 3.0,
      GPA: "1.000"
    },
    {
      Course: "",
      Name: "SJSU CUM:",
      UA: 18.0,
      UG: 18.0,
      UE: 18.0,
      GR: "",
      GP: 61.2,
      GPA: "3.400"
    },
    {
      Course: "",
      Name: "ALL COLLEGE:",
      UA: 91.0,
      UG: 85.0,
      UE: 91.0,
      GR: "",
      GP: 315.3,
      GPA: "3.709"
    }
  ];
  document.getElementById("winter2019s").innerHTML = "WINTER SEMESTER 2019";
  let table = document.getElementById("winter2019");
  let data = Object.keys(winter2019[0]);
  generateTableHead(table, data);
  generateTable(table, winter2019);
}

function spring2019Table() {
  let spring2019s = [{
      "": "CS 149",
      " ": "Operating Systems",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "B",
      GP: 9.0,
      GPA: ""
    },
    {
      Course: "CS 156",
      Name: "Intro to Art Intel",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "B",
      GP: 9.0,
      GPA: ""
    },
    {
      Course: "CS 158A",
      Name: "Computer Networks",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "B",
      GP: 9.0,
      GPA: ""
    },
    {
      Course: "JPN 1A",
      Name: "Elem Japanese",
      UA: 4.0,
      UG: 4.0,
      UE: 4.0,
      GR: "A",
      GP: 16.0,
      GPA: ""
    },
    {
      Course: "LLD 100A",
      Name: "Writing Competency",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A+",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "",
      Name: "SEMESTER TOTAL:",
      UA: 16.0,
      UG: 16.0,
      UE: 16.0,
      GR: "",
      GP: 55.0,
      GPA: "3.437"
    },
    {
      Course: "",
      Name: "SJSU CUM:",
      UA: 34.0,
      UG: 34.0,
      UE: 34.0,
      GR: "",
      GP: 116.2,
      GPA: "3.417"
    },
    {
      Course: "",
      Name: "ALL COLLEGE:",
      UA: 107.0,
      UG: 101.0,
      UE: 107.0,
      GR: "",
      GP: 370.3,
      GPA: "3.666"
    }
  ];
  document.getElementById("spring2019s").innerHTML = "SPRING SEMESTER 2019";
  let table = document.getElementById("spring2019");
  let data = Object.keys(spring2019s[0]);
  generateTableHead(table, data);
  generateTable(table, spring2019s);
}

function fall2019Table() {
  let fall2019 = [{
      "": "CS 158B",
      " ": "Network Management",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A-",
      GP: 11.0,
      GPA: ""
    },
    {
      Course: "CS 166",
      Name: "Information Security",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "CS 174",
      Name: "Server Web Prog",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "JPN 1B",
      Name: "Elem Japanese",
      UA: 4.0,
      UG: 4.0,
      UE: 4.0,
      GR: "A+",
      GP: 16.0,
      GPA: ""
    },
    {
      Course: "KIN 55A",
      Name: "Begin Self-Defense",
      UA: 1.0,
      UG: 1.0,
      UE: 1.0,
      GR: "A",
      GP: 4.0,
      GPA: ""
    },
    {
      Course: "",
      Name: "SEMESTER TOTAL:",
      UA: 14.0,
      UG: 14.0,
      UE: 14.0,
      GR: "",
      GP: 55.1,
      GPA: "3.935"
    },
    {
      Course: "",
      Name: "SJSU CUM:",
      UA: 48.0,
      UG: 48.0,
      UE: 48.0,
      GR: "",
      GP: 171.3,
      GPA: "3.568"
    },
    {
      Course: "",
      Name: "ALL COLLEGE:",
      UA: 121.0,
      UG: 115.0,
      UE: 121.0,
      GR: "",
      GP: 425.4,
      GPA: "3.699"
    }
  ];
  document.getElementById("fall2019s").innerHTML = "FALL SEMESTER 2019";
  let table = document.getElementById("fall2019");
  let data = Object.keys(fall2019[0]);
  generateTableHead(table, data);
  generateTable(table, fall2019);
}

function spring2020Table() {
  let spring2020 = [{
      "": "CS 100W",
      " ": "Writing Workshop",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "CS 152",
      Name: "Progrmng Paradigms",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "CS 185C",
      Name: "Adv Prac Comp Topics",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "KIN 50",
      Name: "Tai Chi",
      UA: 1.0,
      UG: 2.0,
      UE: 1.0,
      GR: "CR",
      GP: 0.0,
      GPA: ""
    },
    {
      Course: "PHIL 134",
      Name: "Computers, Ethics, S",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "",
      Name: "SEMESTER TOTAL:",
      UA: 13.0,
      UG: 12.0,
      UE: 13.0,
      GR: "",
      GP: 48.0,
      GPA: "4.000"
    },
    {
      Course: "",
      Name: "SJSU CUM:",
      UA: 61.0,
      UG: 60.0,
      UE: 61.0,
      GR: "",
      GP: 219.3,
      GPA: "3.655"
    },
    {
      Course: "",
      Name: "ALL COLLEGE:",
      UA: 134.0,
      UG: 127.0,
      UE: 134.0,
      GR: "",
      GP: 437.4,
      GPA: "3.727"
    }
  ];
  document.getElementById("spring2020s").innerHTML = "SPRING SEMESTER 2020";
  let table = document.getElementById("spring2020");
  let data = Object.keys(spring2020[0]);
  generateTableHead(table, data);
  generateTable(table, spring2020);

}

function summer2020Table() {
  let summer2020 = [{
      "": "COMM 174",
      " ": "Intercult & Inequal",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "A",
      GP: 12.0,
      GPA: ""
    },
    {
      Course: "",
      Name: "SEMESTER TOTAL:",
      UA: 3.0,
      UG: 3.0,
      UE: 3.0,
      GR: "",
      GP: 12.0,
      GPA: "4.000"
    },
    {
      Course: "",
      Name: "SJSU CUM:",
      UA: 64.0,
      UG: 63.0,
      UE: 64.0,
      GR: "",
      GP: 231.3,
      GPA: "3.671"
    },
    {
      Course: "",
      Name: "ALL COLLEGE:",
      UA: 137.0,
      UG: 130.0,
      UE: 137.0,
      GR: "",
      GP: 485.4,
      GPA: "3.733"
    }
  ];
  document.getElementById("summer2020s").innerHTML = "SUMMER SEMESTER 2020";
  let table = document.getElementById("summer2020");
  let data = Object.keys(summer2020[0]);
  generateTableHead(table, data);
  generateTable(table, summer2020);

}

function fall2020Table() {
  document.getElementById("fall2020s").innerHTML = "FALL SEMESTER 2020";
  document.getElementById("fall2020sd").innerHTML = "IN PROGRESS";
}
