const num1Elem=document.getElementById("num1") as HTMLInputElement;
const num2Elem=document.getElementById("num2") as HTMLInputElement;
const buttonelem=document.querySelector('button');

const numresult:number[]=[];
const stresult:string[]=[];

type NumOrString=string|number;
type Result={val:number;timestamp:Date};

interface Result1{val:number;timestamp:Date};



function add(num1: NumOrString, num2: NumOrString){
   if(typeof num1=='number'&&typeof num2=='number'){
    return num1+num2;
   }else if(typeof num1=='string'&&typeof num2=='string'){
    return num1+num2;
   }
    return +num1 + +num2;
}

function printresult(resultObj:Result){
    console.log(resultObj.val);
}

buttonelem?.addEventListener('click',()=>{
 const num1=num1Elem.value;
 const num2=num2Elem.value;
 const nuresult=add(+num1,+num2);
 numresult.push(+nuresult);
 const sresult=add(num1,num2);
 stresult.push(sresult as string);
  printresult({val:+nuresult,timestamp:new Date()});
 console.log(numresult,stresult);
})

const myPromise= new Promise<string>((resolve,reject)=>{
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});

myPromise.then((res)=>{
  console.log(res.split(' '));
})