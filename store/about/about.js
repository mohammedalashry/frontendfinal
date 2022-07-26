import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
export const getLandingData = createAsyncThunk(
    "landingPage/getLandingData",
    async (dispatch, getState) => {
     
      return await axios(dispatch.url,requestOptions).then(
        (res) => res.data
      );
    }
  );
   
const landingPage = createSlice({
    name:"landingPage",
    initialState:{data:[],status:null},
    reducers:{},
    extraReducers: {
        [getLandingData.pending]: (state, action) => {
          state.status = "loading";
        },
        [getLandingData.fulfilled]: (state, action) => {
          state.status = "success";
          state.data = action.payload.data;
        },
        [getLandingData.rejected]: (state, action) => {
          state.status = "failed";
        },
    },
});
// export const {bar,postApp,postCampain,createAccount,getToken,editCampain,updateApp,setToken,updateProfile} = analysisSlice.actions
export default landingPage.reducer;