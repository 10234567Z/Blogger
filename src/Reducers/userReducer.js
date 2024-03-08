import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    username: null,
    blogs: [],
    comments: [],
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (token) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/user`, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        localStorage.setItem('username', JSON.stringify(res.data.user.userName));
        return res.data;
    })
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.user.userName;
            state.blogs = action.payload.user.blogs;
            state.comments = action.payload.user.comments;
        },
        removeUser: (state) => {
            state.username = null;
            state.blogs = [];
            state.comments = [];
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.username = action.payload.user.userName;
            state.blogs = action.payload.user.blogs;
            state.comments = action.payload.user.comments;
        }),
        builder.addCase(fetchUser.rejected, (state) => {
            state.username = null;
            state.blogs = [];
            state.comments = [];
        })
    }
})

export default userSlice.reducer;
export const { setUser , removeUser} = userSlice.actions;