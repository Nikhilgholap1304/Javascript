// CallBack
// cons -
// while passing the entire the function as an argument you are also passing the entire control of it to other 
//where in he/she could do anything with that function or pass any irrelevent argument to that callback which in cases where the arguments or calling positions are important might lead to unexpected negative response and so a downfall

//so this is one of the reasons we use promises bcuz it first takes whetever response that HOF is giving via callback which has performed by the other person, examining/storing it and assigning it to the original person could move further or direct the actions

//A(harry) -> B(chintu) //giving other person to handle the callback function and do whatever you want
//A(harry) <- B(chintu) //without directly getting the action performed globally by chintu, he first handovers the result/resolve/outcome/response back to the A(harry) and nowharry will decide what to do 


//IMP
//Callback Hell or Pyramid of Doom
//when we have callbacks inside the callback and code expands horizontally then we call it callback hell or pyramid of doom
//e.g


const HOF = (callback, anime) => {
  console.log(callback(anime))
}


HOF((anime) => {

  HOF((anime) => {

    HOF((anime) => {

      HOF((anime) => {
        return `${anime} is the best`
      }, 'Attack On Titan')

      return `${anime} is the best`
    }, 'Jujutsu Kaisen')

    return `${anime} is the best`
  }, 'Naruto')

  return `${anime} is the best`

}, "One Piece")

// Attack On Titan is the best
// Jujutsu Kaisen is the best
// Naruto is the best
// One Piece is the best



