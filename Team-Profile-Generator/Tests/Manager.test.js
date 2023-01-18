const Manager = require('../lib/Manager')
const manager = new Manager('Hans', '8658716', 'hshen801@gmail.com', '801');

test('test to get constructor values for manager object', () => {
    expect(manager.name).toBe('Hans');
    expect(manager.id).toBe('8658716');
    expect(manager.email).toBe('hshen801@gmail.com');
    expect(manager.officeNumber).toBe('801')
});

test('test to get the name from getName() method', () => {
    expect(manager.getName()).toBe('Hans');
});

test('test to get the ID from getID() method', () => {
    expect(manager.getId()).toBe('8658716');
});

test('test to get the Email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('hshen801@gmail.com');
});

test('test to get the Office Number from getofficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('801');
});

test('test to get the ID from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});