function clickHandler() {
  let name = document.getElementById("txt-name").value;
  alert("Hi " + name + " Button was clicked!");
  // document.write("Welcome " + name);
  document.getElementById("display").innerText = name;
}