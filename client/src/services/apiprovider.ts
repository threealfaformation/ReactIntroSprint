import type { signup, reponse, signin } from "../Types";
import axios from "axios";
const APIurl = "http://localhost:3000/api";

class Apiprovider {
  async signup(data: signup) {
    try {
      await axios.post(`${APIurl}/user/register`, data);
      return this.signin(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  } 
  async signin(data: signin): Promise<reponse> {
    try {
      const respnse = await axios.post(`${APIurl}/user/login`, data);
      return {
        token: respnse.data.token,
        user: { _id: respnse.data._id, username: data.username },
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const instanceapiprovide = new Apiprovider();
