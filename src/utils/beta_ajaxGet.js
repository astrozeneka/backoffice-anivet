import sessionstorage from "sessionstorage";
import vars from "./vars";
import * as $ from "jquery";

let beta_ajaxGet = (uri)=>{
    return new Promise((resolve)=>{
        let token = sessionstorage.getItem("accessToken")
        let url = vars.getAPIURL(uri)
        $.ajax(url, {
            type: "GET",
            beforeSend: (xhr)=>{
                xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            },
            success: (res)=>{
                console.debug(`Receive JSON ${res}`)
                resolve(res)
            },
            error: (err)=>{
                console.error(err)
                resolve(null)
            }
        })
    })
}
export default beta_ajaxGet
