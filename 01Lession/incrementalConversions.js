//进制转换，将10进制浮点数转换成64进制
function Decimal10to64(num){
    if(typeof num != 'number'){
        console.log(`${num} input value must been number type`);
        return null;
    }
    let arr = [0,1,2,3,4,5,6,7,8,9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        '~','!'
    ];
    let arr2 = []
    let integer = num;
    let fractional = num - parseInt(num);
    if(fractional !== 0 ){
        integer = parseInt(num)
    } 
    while(true){
        let remainder = integer % 64;
        integer = parseInt(integer/64);
        arr2.push(arr[remainder]);
        if(integer === 0){
            break;
        }
        if(integer < 64){
            arr2.push(arr[integer]);
            break;
        }
    }
    let result1 = arr2.reverse().join('');
    if(fractional === 0){
        console.log(num,result1)
        return result1;
    }
    let arr3 = [];
    let i = 0;
    let temp = fractional;
    //小数为保留10位精度
    while(true){
        let temp1 =  temp * 64;
        let temp2 = parseInt(temp1);
        arr3.push(arr[temp2]);
        if(temp2 > 0){
            temp = temp1 - temp2;
        }
        i++
        if(i>10){
            break;
        }
    }
    let result2 = arr3.join('');
    console.log(`${num} ${result1}.${result2}`)
    return `${result1}.${result2}`;
}

Decimal10to64(0);
Decimal10to64(9);
Decimal10to64(10);
Decimal10to64(36);
Decimal10to64(61);
Decimal10to64(62);
Decimal10to64(63);
Decimal10to64(64);
Decimal10to64(100);
Decimal10to64(1000);
Decimal10to64(10000);

Decimal10to64(0.0);
Decimal10to64(9.1);
Decimal10to64(10.22);
Decimal10to64(36.333);

Decimal10to64('abcd');


