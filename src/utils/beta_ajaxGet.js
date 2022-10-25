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
                if(token != null)
                    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            },
            success: (res)=>{
                console.debug(`Receive JSON ${res}`)
                resolve(res)
            },
            error: (res)=>{
                console.error(res)
                resolve(res)
            }
        })
    })
}
export default beta_ajaxGet
