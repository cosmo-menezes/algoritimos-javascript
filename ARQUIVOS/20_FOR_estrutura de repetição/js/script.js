for(i = 0; i < 10; i ++){
    console.log('repetição for: ' + i);
        var numero = i % 2;
        if(numero == 0){
            console.log('numero par ' + i);
        } else{
            console.log('numero ímpar ' + i)
        }
}

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j ++){
    console.log(arr);
    console.log([j])
}

console.log(arr.length);


for(x = 5; x < 100; x = x * 3){
    console.log(x);
}