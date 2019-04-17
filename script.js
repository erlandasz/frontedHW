function Search(querySelectorInput, querySelectorOutput) {
    
    var input, 
        output,
        self = this;

    this.updateOutput = function(event) {
        console.log(input.value);
        output.innerHTML = input.value
    }

    this.init = function() {
        input = document.querySelector(querySelectorInput);
        output = document.querySelector(querySelectorOutput);
        console.log('running init', input, output);
        input.addEventListener('keyup', self.updateOutput);
    }

}

new Search('.input', '.message');