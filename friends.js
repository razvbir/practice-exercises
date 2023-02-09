// press F12 and use "people" or "comments" in console
const friends = [{
    name: "Wes",
    year: 1988
}, {
    name: "Kait",
    year: 1986
}, {
    name: "Irv",
    year: 1970
}, {
    name: "Lux",
    year: 2015
}];

const comments = [{
    text: "Love this!",
    id: 523423
}, {
    text: "Super good",
    id: 823423
}, {
    text: "You are the best",
    id: 2039842
}, {
    text: "Ramen is my fav food ever",
    id: 123523
}, {
    text: "Nice Nice Nice!",
    id: 542328
}];

const currentYear = new Date().getFullYear();

const isOne = friends.some(f => currentYear - f.year >= 19);

const isEvery = friends.every(f => currentYear - f.year >= 19);

const yourComment = comments.find(c => c.id === 823423);

const commentIndex = comments.findIndex(c => c.id === 823423);
