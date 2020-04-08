const add = (a,b) => a + b;
const generateGreeting = (name = "Anonymous") => {
    return `HI ${name}!`
}

test('should add two numers',() => {
    const results = add(4,4);
    expect(results).toBe(8);
})

//should generate greeting from name
// test('should generate greeting(',() => {
//     const results = generateGreeting('Collins')
//     expect(results).toBe('HI Collins!');
// })

test('should generate greeting(',() => {
    const results = generateGreeting();
    expect(results).toBe('HI Anonymous!');
})