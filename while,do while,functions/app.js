console.log("Js is started");
while (false) {
  console.log("Welcome");
}

function declaration(name,familiya) {
    console.log(`Welcome to our country ${name} ${familiya}`);
}
declaration("Okhunjon","Mahmudov");
let arrow = (name) => {
    console.log(`Welcome to our country ${name}`);
};
arrow("Okhunjon")
let expression =function(name){
    console.log(`Welcome to our country ${name}`);
};
expression("Okhunjon")


let name = "Ali"


function telegram(name="",surname="") {
    console.log(name,surname);
}
telegram("okhunjon")
