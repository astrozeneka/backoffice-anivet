import sessionstorage from "sessionstorage";
import vars from "./vars";
import * as $ from "jquery";

let beta_ajaxGet2 = (uri)=>{
    return new Promise((resolve)=>{
        let token = sessionstorage.getItem("accessToken")
        let url = vars.getAPIURL(uri)
        $.ajax(url, {
            type: "GET",
            beforeSend: (xhr)=>{
                if(token != null)
                    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
                xhr.setRequestHeader('Access-Control-Expose-Headers', 'X-Total-Count')
            },
            success: (res, textStatus, request, resp)=>{
                console.debug(`Receive JSON ${res}`)
                resolve({
                    data: res,
                    request: request,
                    resp: resp
                })
            },
            error: (res)=>{
                console.error(res)
                resolve(null, null, null)
            }
        })
    })
}
export default beta_ajaxGet2
