
/**
 * 网络请求方法封装
 */
// module.exports ={
// get(url){
//     var opts={
//         method:'GET'
//     }
//     fetch(url,opts)
//     .then((res)=>{
//         return res.text
//     })
//     .then((responseText)=>{

//     })
//     .catch((error)=>{

//     })
// }
// };
/**
 * GET Request
 * @param {*} url 
 */
export const fetchGet=(url)=>{
    let requestFetch = new Promise((resolve,reject)=>{
        var opts={
            method:'GET'
        }
        fetch(url,opts)
        .then((res)=>{
            // console.log('res='+res.text())
            return res.text()
            // console.log('resJJJ='+res.json())
        })
        .then((resText)=>{
            resolve(resText)
        })
        .catch((error)=>{
            reject(error)
        })
    })
    let timeOut = new Promise((resolve,reject)=>{
        setTimeout(()=>reject('request timeout'),30000)
    })
    return Promise.race([requestFetch,timeOut])
}
/**
 * POST Request
 * @param {*} url url
 * @param {*} opts params to post
 */
export const fetchPost=(url,opts)=>{
    let requestFetch = new Promise((resolve,reject)=>{
        fetch(url,opts)
        .then((res)=>{
            res.json()
        })
        .then((resText)=>{
            resolve(resText)
        })
        .catch((error)=>{
            reject(error)
        })
    })
    let timeOut = new Promise((resolve,reject)=>{
        setTimeout(()=>reject('request timeout'),30000)
    })
    return Promise.race([requestFetch,timeOut])
}