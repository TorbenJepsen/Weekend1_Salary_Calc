console.log('js is ready');
let totalMonthly = 0
// variable declared for updating monthly expenses
const employeeList = [];
// const for creating employee class and array


$(document).ready(onReady);

function onReady() {
    console.log('jquery is ready');
    $('#addEmployeeButton').on('click', clickHandler);
    updateTotalSalary();
    $('#employeeList').on('click', '.btn-delete', deleteEmployee);
}

function clickHandler() {
    console.log('Submit Button was clicked!')
    updateTotalSalary();
    addNewEmployee();
}

function Employee (first, last, id, title, salary) {
    this.firstName = first;
    this.lastName = last;
    this.employeeId = id;
    this.title = title;
    this.annualSalary = parseInt(salary);
}
// above for employee class and array

function addNewEmployee() {
    const employee = new Employee(
        $('#firstNameInput').val(),
        $('#lastNameInput').val(),
        $('#idInput').val(),
        $('#titleInput').val(),
        $('#salaryInput').val()
    );
    // above for employee class and array
    $('#employeeList').append(
        '<tr>' +  
            '<td>' + $('#firstNameInput').val() + '</td>' +  
            '<td>' + $('#lastNameInput').val() + '</td>' +
            '<td>' + $('#idInput').val() + '</td>' +
            '<td>' + $('#titleInput').val() + '</td>' +
            '<td>' + $('#salaryInput').val() + '</td>' +
            '<td>' + '<button class="btn-delete">Delete</button>' + '</td>' +
        '</tr>'
    );
    // for clearing input fields I could've called the html tag and done: $('input').val('');
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
    // below for employee class and array
    employeeList.push(employee);

}

function updateTotalSalary() {
    let totalSalary= $('#salaryInput').val();
    let monthlySalary= (totalSalary)/12;
    totalMonthly += monthlySalary;
    $('#monthlyCost').text('Total Monthly: $' + totalMonthly.toFixed(2));
    console.log(totalMonthly);
    if( totalMonthly > 20000){
        $('#monthlyCost').css('color', 'red');
    }
    
}

function deleteEmployee() {
    const rowToDelete = $(this).closest('tr');
    rowToDelete.remove();

}