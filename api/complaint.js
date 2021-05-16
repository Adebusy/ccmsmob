import client from "./client";

const userslistEndpoint = "/user/ListUsers/";
const getAllComplains = "/complaint/getAllComplains/";
const logComplaint = "complaint/logComplaint";
const getTitle = "/complaint/getTitle";
const getTitles = () => client.get(getTitle);
const getAllUsers = () => client.get(userslistEndpoint);
const getComplaints = () => client.get(getAllComplains);

const addComplain = (complaintdescription, totalAmount, amountRecovered, transactionDate, complainCategory, complaintSubCat, complaintSubject, prayer, mylocation) =>{
 console.log(mylocation);
 console.log("mylocation");
  var complaintType = 0;
  var complaintImplication = "";
  if (totalAmount > 0) {
    complaintImplication = "Financial";
    complaintType = "Financial";
  } else {
    complaintImplication = "Non-Financial";
    complaintType = "Non-Financial";
  }
  let emailAddress = "Testing@gmail.com"
  let accountNumber = "00332217";
  let disputeAmount = totalAmount;
  let amountRefunded = amountRecovered;
  let complaintDescription = complaintdescription;
  let complaintCategory = complainCategory.label;
  let complaintSubCategory = complaintSubCat.label;
  let complaintPrayer = prayer;
  console.log(complaintSubCat);
  console.log(complainCategory);
  return client.post(logComplaint, {accountNumber, amountRefunded, complaintCategory, complaintDescription, complaintImplication, complaintPrayer, complaintSubCategory, complaintSubject,complaintType,disputeAmount,emailAddress,transactionDate, mylocation});
};

export default {
  getAllUsers,
  getComplaints,
  addComplain,
  getTitles,
};
