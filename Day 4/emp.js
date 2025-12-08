function clickHandler() {
  let name = document.getElementById("txt-name").value;
  let dept = document.getElementById("txt-dept").value;
  let num = Number(document.getElementById("txt-num").value);
  alert("Hi " + name );
  let hra=num*0.10;
    let pf=num*0.05;
    let salary=num+hra-pf;
  document.getElementById("display").innerHTML=
  "name : "+name+"<br>"+"department : "+dept+"<br>"+"basic salary : "+num+"<br>"+"hra : "+hra+"<br>"+"pf : "+pf+"<br>"+"Net Salary : "+salary;

  
}