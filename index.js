
const employee = {
    name: "nameValue",
    streetAddress: "streetAddressValue",
}

function updateEmployeeWithKeyAndValue(object, key, value){
   const newEmployee = { ...object }

   newEmployee[key] = value

   return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
  
    return object;
}

function deleteFromEmployeeByKey(object, key){
    const newEmployee = { ...object }
    
    delete newEmployee[key]

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]

    return object
}

/*
const employees = {
    employee: {
        name: "nameValue",
        streetAddress: "streetAddressValue",
    }
}

*/