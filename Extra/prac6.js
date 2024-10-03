let arr = ['a','b','c','d'] //pass by reference and can be changes even if its stored inside constant variable
//arrays are mutable

arr[4] = 'e'
arr[6] = 'g'
console.log(arr) //[ 'a', 'b', 'c', 'd', 'e', <1 empty item>, 'g' ]

console.log(arr[5])//undefined

console.log(typeof arr) //object

for (item of arr){
  console.log(item)
}



