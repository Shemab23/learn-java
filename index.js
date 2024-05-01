
const username=document.getElementById(`username`).value;
const password=document.getElementById(`password`).value;
const login=document.getElementById(`login`);
const out=document.getElementById(`out`);

out.textContent= "username: "+username +"\t"+ "password: "+password;

for(let i=0; i<5; i++){
    out.textContent= "hello";
    console.log("hello");
}