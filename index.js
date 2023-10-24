const employee = {
    name: "Samido",
    streetAddress: "Kanairo"
  }
  
  const updateEmployeeWithKeyAndValue = function(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    }
  }
  
  const destructivelyUpdateEmployeeWithKeyAndValue = function(obj, key, value){
    obj[key] = value;
    return obj;
  }
  
  function deleteFromEmployeeByKey(obj, key){
     const newObj = {...obj};
        delete newObj[key];
        return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
  }