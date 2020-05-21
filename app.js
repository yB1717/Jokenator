document.querySelector('.get-jokes'),addEventListener('click',getJokes)

function getJokes(e){
    
    const numberOfJokes = document.getElementById('number').value

    const xhr = new XMLHttpRequest();

    xhr.open('GET' , `http://api.icndb.com/jokes/random/${numberOfJokes}`,true)
    
    xhr.onload = function(){
        const response = JSON.parse(this.responseText)
        console.log(response)
        const output = document.querySelector('.jokes')

        if(response.type === 'success'){
            response.value.forEach(function(joke){
                output.innerHTML += `
                <li>${joke.joke}</li>
                `
            })
        }else{
            console.log("fail")
        }
    }
    
    xhr.send()
    e.preventDefault();
}