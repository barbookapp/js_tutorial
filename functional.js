let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string 
// ex: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        // splitting by whitespace is much more robust than single space
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    // single argument allows shorter version of elements.map( (element) => { return element.toLowercase().split(/\s+/).join("-")});
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function formedUrl(states) {
    let url = "https://example.com/";
    return states.map(state => url + urlify(state));
};
console.log(formedUrl(states));

// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1)
}
console.log(functionalSingles(states));

function containsDakota(state) {
    return state.filter(state => state.includes("Dakota"));
}
console.log(containsDakota(states));

function twoWordStates(state) {
    return state.filter(state => state.split(/\s+/).length === 2);
}
console.log(twoWordStates(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution:
function imperativeLengths(elements) {
    let lengths = [];
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));

// function functionalProduct(elements) {
//     return elements.reduce((total, n) => total *=n);
// }
// console.log(functionalProduct(numbers));