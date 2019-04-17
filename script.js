function Search(querySelectorInput, querySelectorOutput) {
    
    var input, 
        output,
        value;

    function updateOutput(event) {
        value = input.value;
        console.log(value);
        output.innerHTML = value;
    }

    function init() {
        input = document.querySelector(querySelectorInput);
        output = document.querySelector(querySelectorOutput);
        console.log('running init', input, output);
        input.addEventListener('keyup', updateOutput);
    }

}

new Search('.input', '.message');