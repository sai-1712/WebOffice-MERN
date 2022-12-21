import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "project",
    initialState: {
        loading: false,
        error:null,
        project: [],
    },
    reducers:{
        addProjectRequest(state,action){
            state.loading = true;
            state.error = null;
        },
        addProjectRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.project = action.payload;
        },
        addProjectRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        getProjectRequest(state,action){
            state.loading = true;
            state.error = null;
            state.project = null;
        },
        getProjectRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.project = action.payload;
        },
        getProjectRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const projectActions = projectSlice.actions;
export default projectSlice;