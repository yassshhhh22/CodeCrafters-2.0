import { AxiosInstance } from "../Utils/AxiosInstance.js";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : {},
    loading : false,
    error : null
}

export const RegisterUser = createAsyncThunk(
    "user/registerUser",
    async (data) => {
        try {
            const response = await AxiosInstance.post("/v1/users/register", data);
            console.log(response.data)
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
   },
   extraReducers:(reducer)=> {
    reducer.addCase(RegisterUser.pending, (state, action) => {
        state.loading = true;
        
    });
    reducer.addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;

    });
    reducer.addCase(RegisterUser.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload.error;

    });
   }

})



export default userSlice.reducer