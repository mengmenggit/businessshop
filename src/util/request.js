import {post,get} from "./service"

export const loginApi=data=>{
    return post({
        url:"/eduucenter/member/login",
        data
    })
}

export const searchList=data=>{
    return post({
        url:"/eduservice/course/pageCourseCondition/1/2",
        data
    })
}