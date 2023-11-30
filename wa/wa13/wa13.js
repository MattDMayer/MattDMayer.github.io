let staff = {
    "employees":[{
        "name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raise-eligble": true
    },
    {
        "name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raise-eligble": true
    },
    {
        "name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raise-eligble": false
    }]
}
//Q1
console.log(staff["employees"]);

let buisness = {
    "company": [{
        "companyName": "Tech Stars",
        "website": "www.techstars.site",
        "employees": staff["employees"]
    }
    ]
}
//Q2
console.log(buisness["company"]);

//Q3
staff["employees"].push({"name": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise-eligible": false});
console.log(buisness["company"][0]["employees"][staff["employees"].length -1]);

//Q4
let totalSalary = 0;
for(let i = 0;i < staff["employees"].length; i++)
{
    totalSalary += staff["employees"][i].salary;
}
console.log("The total salary of all of the comapny employees is: " + totalSalary);

//Q5
//This is actually raising their wages despite the total not changing since it comes after us calculating the total
//The browser is just doing some annyoing stuff and trying to fix stuff that's not broken lol
//This is also messing up the initial values for q1 since it makes everyone false for raise-eligible
for(let i = 0;i < staff["employees"].length; i++)
{
    if(staff["employees"][i]["raise-eligble"] == true)
    {
        staff["employees"][i]["salary"] += (.1 * staff["employees"][i]["salary"] );
        staff["employees"][i]["raise-eligble"] = false;
    }
}

//Q6
const wfh = ["Anna", "Sam"];
for(let i =0; i < staff["employees"].length; i++)
{
    if(wfh.includes(staff["employees"][i].name))
    {
        staff["employees"][i]["wfh"] = true;
    }
    else{
        staff["employees"][i]["wfh"] = false;
    }
}
