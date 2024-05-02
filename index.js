
const username=document.getElementById(`username`).value;
const password=document.getElementById(`password`).value;
const login=document.getElementById(`login`);
const out=document.getElementById(`out`);
let word="hello";

out.textContent= "username: "+username +"\t"+ "password: "+password;

for(let i=0; i<5; i++){
    out.textContent= word.charAt(i);
    console.log(word.charAt(i));
}
