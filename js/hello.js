const hello = function (messsage) {
    console.log("Hello JavaScript");
}

const printGugudan = (dan = 2) => {
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${i * dan}`);
        // document.write(`<td>${dan} * ${i} = ${i * dan}<td>`);
    }
    
}