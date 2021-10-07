// Code your solution here

function findMatching(drivers, name) {
    let match = drivers.filter(x => x.toLowerCase().includes(name.toLowerCase()))

    // let match = drivers.filter(n => {
    //     n.toLowerCase();
    //     return n === name;
    // });
    return match
}

function fuzzyMatch(drivers, letter) {
    let match = drivers.filter(f => f.startsWith(letter))
    return match
}

function matchName(drivers, searchTerm) {
    let match = drivers.filter(f => f.name === searchTerm)
    return match
}