//The user will enter a cocktail. Get a cocktail name, photo, and
// instructions and place them in the DOM

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
    choice
  )}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks);

      const drinksArr = data.drinks.map((eachDrink) => ({
        name: eachDrink.strDrink,
        image: eachDrink.strDrinkThumb,
        instructions: eachDrink.strInstructions,
      }));

      const drinkList = document.querySelector("#drinkList");
      drinkList.innerHTML = "";

      drinksArr.forEach((drink) => {
        const li = document.createElement("li");
        const drinkName = document.createElement("h2");
        drinkName.innerText = drink.name;

        const drinkImage = document.createElement("img");
        drinkImage.src = drink.image;

        const drinkInstructions = document.createElement("h3");
        drinkInstructions.innerText = drink.instructions;
        li.appendChild(drinkName);
        li.appendChild(drinkImage);
        li.appendChild(drinkInstructions);

        drinkList.appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// document.querySelector("h2").innerText =
//   data.drinks[data.drinks.length - 1].strDrink;
// document.querySelector("img").src =
//   data.drinks[data.drinks.length - 1].strDrinkThumb;
// document.querySelector("h3").innerText =
//   data.drinks[data.drinks.length - 1].strInstructions;
