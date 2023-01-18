const Intern = require('../lib/Intern')
const intern = new Intern('Hans', '8658716', 'hshen801@gmail.com', 'USC');

test('test to get constructor values for intern object', () => {
    expect(intern.name).toBe('Hans');
    expect(intern.id).toBe('8658716');
    expect(intern.email).toBe('hshen801@gmail.com');
    expect(intern.school).toBe('USC');
});

test('test to get the name from getName() method', () => {
    expect(intern.getName()).toBe('Hans');
});

test('test to get the ID from getID() method', () => {
    expect(intern.getId()).toBe('8658716');
});

test('test to get the Email from getEmail() method', () => {
    expect(intern.getId()).toBe('hshen801@gmail.com');
});

test('test to get the School from getSchool() method', () => {
    expect(intern.getId()).toBe('USC');
});

test('test to get the ID from getRole() method', () => {
    expect(intern.getId()).toBe('intern');
});