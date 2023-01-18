const Engineer = require('../lib/Engineer')
const engineer = new engineer('Hans', '8658716', 'hshen801@gmail.com', 'cameragrammar');

test('test to get constructor values for Engineer object', () => {
    expect(engineer.name).toBe('Hans');
    expect(engineer.id).toBe('8658716');
    expect(engineer.email).toBe('hshen801@gmail.com');
    expect(engineer.gitHub).toBe('cameragrammar')
});

test('test to get the name from getName() method', () => {
    expect(engineer.getName()).toBe('Hans');
});

test('test to get the ID from getID() method', () => {
    expect(engineer.getId()).toBe('8658716');
});

test('test to get the Email from getEmail() method', () => {
    expect(engineer.getId()).toBe('hshen801@gmail.com');
});

test('test to get the Email from getgitHub() method', () => {
    expect(engineer.getId()).toBe('cameragrammar');
});

test('test to get the ID from getRole() method', () => {
    expect(engineer.getId()).toBe('Engineer');
});