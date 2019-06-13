document.addEventListener('DOMContentLoaded', () => {

    let form = document.querySelector('#signup')
    let first = document.querySelector('#first')
    let last = document.querySelector('#last')
    let change = document.querySelector('#change')
    let val1
    let val2
    
 
    form.addEventListener('submit', function (event){
        console.log('Welcome to our Page, Veteran!')
        event.preventDefault()
        val1 = first.value
        val2 = last.value
        if (select === change.innerHTML) = val1 + val2;
        //else if (select ===        )
    })
 //   let branch = document.querySelector('branch')
 //   let changeMe = document.querySelector('#changeMe')
 //   let val 
 
 //   typeHere.addEventListener('input',function (e){
 
 //     changeMe.innerHTML = typerHere.value
 //   })
  //form.addEventListener('submit', function (event){
 //   event.preventDefault()
 //   val = typeHere.value
 //   changeME.innerHTML = val
 // })
   
 // })
 
 
 
 
 // function sayHelloToUser(something){
 // return "Hello" + Veteran
 
 // }
 // sayHelloToUser('Veteran')
 
 // document.addEventListener('DOMContentLoaded', () => {
 //     console.log('hello')
 //     let form = document.querySelector('#hemp-form')
 //     let appendHere = document.querySelector('#card-append')
 //     let card
 //     let data
 //     let shell
   
 
     
 //     data = results.data
 //     for (let i = 0; i < data.length; i++) {
 //         beer = data[i]
 //         shell = document.createElement('div')
 //         shell.classList.add('card')
 //         shell.innerHTML = ${beer.beer_name}
 //         appendHere.appendChild(shell)
 //     }
 //   })
    })
 
 
 
 