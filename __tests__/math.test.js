let {sum,mul}=require("../mat.js");

describe("probar las funciones",()=>{
   
    test("probar suma de dos numeros",()=>{
expect (sum(1,1)).toBe(2);

    });
    test("probar multiplicar 2 numeros",()=>{
        expect (mul(5,2)).toBe(10);
    });

});