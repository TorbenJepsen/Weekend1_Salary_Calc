console.log('js is ready');
let totalMonthly = 0

$(document).ready(onReady);

function onReady() {
    console.log('jquery is ready');
    $('#addEmployeeButton').on('click', clickHandler);
    updateTotalSalary();
}

function clickHandler() {
    console.log('Submit Button was clicked!')
    updateTotalSalary();
    addNewEmployee();
}

function addNewEmployee() {
    $('#employeeList').append(
        '<tr>' +  
            '<td>' + $('#firstNameInput').val() + '</td>' +  
            '<td>' + $('#lastNameInput').val() + '</td>' +
            '<td>' + $('#idInput').val() + '</td>' +
            '<td>' + $('#titleInput').val() + '</td>' +
            '<td>' + $('#salaryInput').val() + '</td>' +
        '</tr>'
    );
}

function updateTotalSalary() {
    let totalSalary= $('#salaryInput').val();
    let monthlySalary= (totalSalary)/12;
    totalMonthly += monthlySalary;
    $('#monthlyCost').text('Total Monthly: $' + totalMonthly.toFixed(2));
    console.log(totalMonthly);
    
}