const insertNewObj = (index,arr,excludingObjName,obj) => {
    const filteredCart = arr.filter( e => e.name !== excludingObjName)
          filteredCart.splice(index,0,obj);

     return filteredCart

};

export default insertNewObj