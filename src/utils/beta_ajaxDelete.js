import sessionstorage from "sessionstorage";
import vars from "./vars";
import * as $ from "jquery";

let beta_ajaxDelete = (uri)=>{
    return new Promise((resolve)=>{
        let token = sessionstorage.getItem("accessToken")
        let url = vars.getAPIURL(uri)
        $.ajax(url, {
            type: "DELETE",
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
                resolve(null)
            }
        })
    })
}
export default beta_ajaxDelete
