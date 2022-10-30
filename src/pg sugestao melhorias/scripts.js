class Validator {

    constructor(){
        this.validations = [

        ]
    }

// iniciar a validação de todos os canpos
validate(fomr) {

    // pegar os inputs
    let inputs = form.getElementsByTagName('input');

    // transformo uma HTMLCollection -> array
    let inputArray = [...inputs];
    
    //loop nos inputs e validações mediante ao que for encontrado
    inputsArray.forEach(function(input) {
        console.log(input);
        
    });
        
    ;

}

}




let form = document.getElementById("sugestão");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// evento que dispara as validações
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);


})