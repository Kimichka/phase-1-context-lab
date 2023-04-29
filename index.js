/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

////////////////////////////////////////////////////////////////
function createEmployeeRecord(data) {
const [firstName, familyName, title, payPerHour] = data;
return {
firstName,
familyName,
title,
payPerHour,
timeInEvents: [],
timeOutEvents: []};}

function createEmployeeRecords(data) {return data.map(Data => createEmployeeRecord(Data));}
  
function createTimeInEvent(dateTime) {
const [date, time] = dateTime.split(' ');
const [hours, minutes] = time.split(':');
const timeInEvent = {
type: 'TimeIn',
date,
hour: parseInt(hours),};
this.timeInEvents.push(timeInEvent);
return this;}
 
function createTimeOutEvent(dateTime) {
const [date, hour] = dateTime.split(' ');
const timeOutEvent = {
type: "TimeOut",
hour: parseInt(hour),
date: date,};
this.timeOutEvents.push(timeOutEvent);
return this;}

function hoursWorkedOnDate(date) {
const timeInEvent = this.timeInEvents.find((event) => event.date === date);
const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
return hoursWorked;}

function wagesEarnedOnDate(date) {
const hoursWorked = hoursWorkedOnDate.call(this, date);
const payRate = this.payPerHour;
const wagesEarned = hoursWorked * payRate;
return wagesEarned;}

function findEmployeeByFirstName(srcArray, firstName) {
return srcArray.find((record) => record.firstName === firstName);}

function calculatePayroll(employeeRecords) {
return employeeRecords.reduce((totalAmountPay, record) => {
return totalAmountPay + allWagesFor.call(record);
}, 0);}