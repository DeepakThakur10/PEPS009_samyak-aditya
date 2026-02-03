function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
const counter2 = outer();


counter();
counter2(); 
counter();
counter2(); 