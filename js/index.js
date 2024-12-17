let a = 1;
a = 'Coding Tecniks'
console.log(a);


















// random token

const rand = function(){
  return Math.random().toString(36).substr(10)};
  const token = function(){
    return rand() + rand() + "-"+ rand()+ rand()+ rand();
  }

  console.log(token());
  