const fecha = /^(\d{2})\/(\d{2})\/(\d{4})$/; 
console.log(fecha.test("1/23/2000"));
console.log(fecha.test("01/01/1001"));
console.log(fecha.test("27/1/2025"));
console.log(fecha.test("16/03/2025"));
