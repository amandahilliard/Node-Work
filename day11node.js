let moment = require("moment");
let input = process.argv[2];

let date = moment(new Date(input));

if(!date.isValid()){
    console.log("Invalid Date. Date must be provided in YYYY-MM-DD format i.e. 2020-01-01");
}
else{
    let ourDate = moment("2000-01-01")
    console.log(date.format("MMM Do YYYY"));
    console.log("Your date was a",date.format("dddd"));
    console.log(date.diff(ourDate, "days"));
   
}


