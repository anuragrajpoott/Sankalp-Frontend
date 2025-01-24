import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courseData :  [],
    courseImage : null,
    myCourses : [],
    enrolledCourses : []
}

const courseSlice = createSlice({
    name:"course",
    initialState:initialState,
    reducers:{
        setCourseData(state,value){
             state.courseData = value.payload
        },
        setCourseImage(state,value){
            state.courseImage=value.payload
        },
        setMyCourses(state,value){
            state.myCourses = value.payload
       },
       setEnrolledCourses(state,value){
           state.enrolledCourses=value.payload
       }
    }

})

export const {setMyCourses, setEnrolledCourses,setCourseImage,setCourseData} = courseSlice.actions;
export default courseSlice.reducer 