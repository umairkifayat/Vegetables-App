const div = document.querySelector("div");
const p = document.querySelector("p");

let arrayvegetables = ["carrot", "spinach", "broccolli", "tomatoes", "bell pepers", "onions"];

let vegetableslines = [" Carrots are rich in beta-carotene, which can be converted into vitamin A in the body.", "spinach It's great for strengthening bones and promoting heart health.", " It's known for its potential to support immune health and promote healthy digestion.", " Tomatoes are a good source of lycopene, a powerful antioxidant that may reduce the risk of certain diseases, including prostate cancer", "Bell peppers are high in vitamin C and antioxidants, which can help boost the immune system and protect cells from damage.", " Onions are rich in antioxidants and contain compounds that may help reduce inflammation and lower the risk of chronic diseases."]

for (let i = 0; i < arrayvegetables.length; i++) {
    // console.log(arrayvegetables[i]);
    div.innerHTML += `<button class = "btn" onclick= "vegetable(${i})">${arrayvegetables[i]}</button>&nbsp;&nbsp;&nbsp;`
}
function vegetable(i) {
    // console.log(`${arrayvegetables[i]}${vegetableslines[i]}`);
    p.innerHTML += `<li> ${vegetableslines[i]}</li></br>`
}