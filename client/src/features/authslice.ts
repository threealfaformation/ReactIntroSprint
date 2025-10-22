import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instanceapiprovide } from "../services/apiprovider";


export const login = createAsyncThunk("/user/login", async (data) => {
  const result = await instanceapiprovide.signin(data);
  localStorage.setItem("token", JSON.stringify(result.token));
  localStorage.setItem("user", JSON.stringify(result.user));
  return result;
});


export const register = createAsyncThunk("/user/register", async (data) => {
  const result = await instanceapiprovide.signup(data);
  localStorage.setItem("token", JSON.stringify(result.token));
  localStorage.setItem("user", JSON.stringify(result.user));
  return result;
});




const authslice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    }) 
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
    })
  },
});

export default authslice;

// login de user (interface) (comp) =>
// createAsyncThunk (envoiede request (apiprovider function )) =>
//  backend enoie le reponse (datauser, token ) =>
//  createAsyncThunk(token , user => localstorage) =>
//   redux mets a jour le state initial de notre data
