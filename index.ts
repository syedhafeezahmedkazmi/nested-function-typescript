

let arrowfunction:()=>string = ():string=>{
    let data:string = "bilal"
    return data;

}

console.log(arrowfunction());

let newfunc = ():void=>{
    console.log("arrow func")
}

let anotherfunc = ()=>{
    newfunc()
}

let sum = ()=>{
   return  2+2
}

let total = sum()
console.log(total);

// anotherfunc()

// newfunc()
// newfunc()
// newfunc()
// newfunc()