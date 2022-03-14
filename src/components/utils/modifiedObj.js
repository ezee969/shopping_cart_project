const modifiedObj = (obj,newPropsObj) => {
    
    for (let prop in newPropsObj) {
        obj[prop] = newPropsObj[prop]
    };
    
    return obj
}   

export default modifiedObj