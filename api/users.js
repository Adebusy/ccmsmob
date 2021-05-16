import client from "./client";

const userslistEndpoint = "user/ListUsers";
const userLogin = "/user/login/";
const createUser = "user/create/";

const getAllUsers = () => client.get(userslistEndpoint);

const login =(email, password) =>client.post(userLogin, {email, password});

const addNewUser = (dateOfBirth, email, fullName, homeAddress, password, phone, postalCode, title) =>client.post(createUser, {dateOfBirth, email, fullName, homeAddress, password, phone, postalCode, title});

export default {
  addNewUser,
  getAllUsers,
  login
};
