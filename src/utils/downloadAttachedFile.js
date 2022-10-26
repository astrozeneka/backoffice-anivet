import beta_ajaxGet from "./beta_ajaxGet";

let downloadAttachedFile = async(entity, slug)=>{

    //let file = await beta_ajaxGet("")
    let data = await beta_ajaxGet(`/api/v1/data/${slug}/file/${entity.id}`)

    let downloadLink = document.createElement('a')
    downloadLink.href = data.file.content
    downloadLink.download = data.file.name
    console.log(data.file)
    downloadLink.click()
}
export default downloadAttachedFile
