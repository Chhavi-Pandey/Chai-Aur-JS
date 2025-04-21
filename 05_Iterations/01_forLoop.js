for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for(let i = 0; i <= 10; i++){
    for(let j = 0; j < i; j++){
        // console.log(j);    
    }
    // console.log('\n');
}

let arr = ["Freya", "Finn", "Elijah", "Klaus", "Kol", "Rebekah"];
// console.log(arr.length);

let size = arr.length;

for(let i = 0; i<size; i++){
    const mikaelsons = arr[i];
    // console.log(`${mikaelsons} Mikaelson`);
}

// break and continue

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("Detected 5");
        // break;
    }
    if(i == 7){
        console.log("Detected 7");
        continue;
    }
    console.log(`Value of i is :${i}`);
    
}