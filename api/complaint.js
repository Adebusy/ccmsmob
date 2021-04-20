import client from "./client";

const userslistEndpoint = "/user/ListUsers/";
const getAllComplains = "/complaint/getAllComplains/";
const logComplaint = "/complaint/logComplaint";
const getTitle = "/complaint/getTitle";
const getTitles = () => client.get(getTitle);
const getAllUsers = () => client.get(userslistEndpoint);
const getComplaints = () => client.get(getAllComplains);

const addComplain = (complain, onUploadProgress) => {
  var complainType = 0;
  var complaintImplication = "";

  if (complain.totalAmount > 0) {
    complaintImplication = "Financial";
    complainType = "Financial";
  } else {
    complaintImplication = "Non-Financial";
    complainType = "Non-Financial";
  }

  var requestBody = {
    emailAddress: "yomii.adebusy@gmail.com",
    branchName: "Virtual",
    accountNumber: "00332217",
    complaintImplication: complaintImplication,
    complaintCategory: complain.complainCategory.value,
    complaintSubCategory: complain.complaintSubCat.value,
    complaintSubject: complain.complaintSubject,
    complaintDescription: complain.complaintdescription,
    transactionDate: complain.transactionDate,
    complaintPrayer: "testing prayer",
    dateReceived: "03-14-2021",
    disputeAmount: complain.totalAmount,
    amountRefunded: complain.amountRecovered,
    remark: "complaint received",
    status: "00",
    actionTaken: "complaint received",
    addedBy: "alaonr",
    updatedBy: "non",
    complaintType: complainType,
    complaintPrayer: complain.prayer,
  };
  return client.post(logComplaint, requestBody, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
export default {
  getAllUsers,
  getComplaints,
  addComplain,
  getTitles,
};
