import client from "./client";

const userslistEndpoint = "user/ListUsers";
const userLogin = "/user/login/";
const createUser = "/user/CheckAndCreateNewUser";

var loginEndPoints = userLogin + "alao.adebusy@gmail.com" + "/" + "pizza232";
console.log(loginEndPoints);
const getAllUsers = () => client.get(userslistEndpoint);

const loginUsers = () => client.get(loginEndPoints);

const login =(email, password) =>client.post(userLogin, {email, password});

const loginUser = (loginDetail, onUploadProgress) => {
  var loginEndPoint =
    userLogin +
    loginDetail.email.toLowerCase().trim() +
    "/" +
    loginDetail.password.trim();
  // console.log(loginEndPoint);
  // return client.get(userLogin, {
  //   email: loginDetail.email.toLowerCase().trim(),
  //   password: loginDetail.password.trim(),  /user/login/alao.adebusy@gmail.com/pizza232
  // });

  // console.log(loginEndPoint);
  // return client.get(userLogin, {
  //   email: loginDetail.email.toLowerCase().trim(),
  //   password: loginDetail.password.trim(),
  // });

  return client.get(loginEndPoint);

  //api.get('/api/v4/users/authorize', {"cellphone" : auth.username, "password" : auth.password})

  // return client.get(
  //   userLogin +
  //     loginDetail.email.toLowerCase().trim() +
  //     "/" +
  //     loginDetail.password.trim(),
  //   {
  //     onUploadProgress: (progress) =>
  //       onUploadProgress(progress.loaded / progress.total),
  //   }
  // );
};

const addNewUser = (userOBJ, onUploadProgress) => {
  var usrObj = {
    title: userOBJ.title,
    firstName: userOBJ.firstName,
    lastName: userOBJ.lastName,
    dateOfBirth: userOBJ.dateOfBirth,
    street: userOBJ.street,
    homeNumber: userOBJ.homeNumber,
    city: userOBJ.city,
    postalCode: userOBJ.postalCode,
    email: userOBJ.email,
    phone: userOBJ.phone,
    password: userOBJ.password,
  };
  console.log(usrObj);
  return client.post(createUser, usrObj, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addNewUser,
  getAllUsers,
  loginUser,
  loginUsers,
  login
};
