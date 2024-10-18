//The user will enter a cocktail. Get a cocktail name, photo, and
// instructions and place them in the DOM
document.querySelector("button").addEventListener("click", fetchData);

function fetchData() {
  const choice = document.querySelector("input").value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
    choice
  )}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks);

      const drinksList = document.querySelector("#drinkList");
      drinksList.innerText = "";

      const drinksArr = data.drinks.map((drink) => ({
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        instructions: drink.strInstructions,
      }));

      drinksArr.forEach((drink) => {
        const li = document.createElement("li");

        const drinkName = document.createElement("h2");
        drinkName.innerText = drink.name;
        const drinkImg = document.createElement("img");
        drinkImg.src = drink.image;
        const drinkInstr = document.createElement("h3");
        drinkInstr.innerText = drink.instructions;

        li.appendChild(drinkName);
        li.appendChild(drinkImg);
        li.appendChild(drinkInstr);

        drinksList.appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
