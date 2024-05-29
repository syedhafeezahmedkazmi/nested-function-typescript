"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arrowfunction = () => {
    let data = "bilal";
    return data;
};
console.log(arrowfunction());
let newfunc = () => {
    console.log("arrow func");
};
let anotherfunc = () => {
    newfunc();
};
let sum = () => {
    return 2 + 2;
};
let total = sum();
console.log(total);
// anotherfunc()
// newfunc()
// newfunc()
// newfunc()
// newfunc()
