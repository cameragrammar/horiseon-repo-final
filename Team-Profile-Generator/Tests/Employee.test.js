const { default: test } = require('node:test');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('../lib/Employee')
const employee = new Employee('Hans', '8658716', 'hshen801@gmail.com');

test('test to get constructor values for employee object', () => {
    expect(employee.name).toBe('Hans');
    expect(employee.id).toBe('8658716');
    expect(employee.email).toBe('hshen801@gmail.com');
});

test('test to get the name from getName() method', () => {
    expect(employee.getName()).toBe('Hans');
});

test('test to get the ID from getID() method', () => {
    expect(employee.getId()).toBe('8658716');
});

test('test to get the Email from getEmail() method', () => {
    expect(employee.getId()).toBe('hshen801@gmail.com');
});

test('test to get the ID from getRole() method', () => {
    expect(employee.getId()).toBe('Employee');
});