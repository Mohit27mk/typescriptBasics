var num1Elem = document.getElementById("num1");
var num2Elem = document.getElementById("num2");
var buttonelem = document.querySelector('button');
var numresult = [];
var stresult = [];
;
function add(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        return num1 + num2;
    }
    else if (typeof num1 == 'string' && typeof num2 == 'string') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
function printresult(resultObj) {
    console.log(resultObj.val);
}
buttonelem === null || buttonelem === void 0 ? void 0 : buttonelem.addEventListener('click', function () {
    var num1 = num1Elem.value;
    var num2 = num2Elem.value;
    var nuresult = add(+num1, +num2);
    numresult.push(+nuresult);
    var sresult = add(num1, num2);
    stresult.push(sresult);
    printresult({ val: +nuresult, timestamp: new Date() });
    console.log(numresult, stresult);
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It worked');
    }, 1000);
});
myPromise.then(function (res) {
    console.log(res.split(' '));
});
