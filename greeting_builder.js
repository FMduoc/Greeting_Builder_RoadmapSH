function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
};

function getGreeting(timeOfDay) {
    return `Good ${timeOfDay},`;
};

function createGreeting(firstName, lastName, timeNow) {
    const name = formatName(firstName, lastName);
    const time = getGreeting(timeNow);
    return `${time} ${name}`;
};

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));