const employee = {
    name: 'sam',
    streetAddress: '12 Broadway'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee[key];
    return employee;
}