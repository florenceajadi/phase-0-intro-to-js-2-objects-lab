let employee = { 
    name: 'Sam',
    streetAddress: '100 Main St',

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };

  newObj[key] = value;

  return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value;
    console.log(employee)
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    console.log(employee)
    return employee
}
