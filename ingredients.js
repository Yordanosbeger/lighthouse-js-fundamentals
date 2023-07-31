const ingredients = ["eggs","milk","flour","sugar","baking soda","baking powder","chocolate chips","bananas"];
//while loop to print out each item of ingredients:
let i =0;
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}
//for loop to print out each item of ingredients:
for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
//loop(for or while)to print out each item of ingredients backwards:
for(let i = ingredients.length - 1; i >=0; i--){
  console.log(ingredients[i]);
}