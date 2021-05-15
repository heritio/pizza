export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "NOK",
  });
}

const foodItems = [
  {
    name: "Biff Pizza",
    img: "/img/biff.jpg",
    section: "Pizza",
    price: 20,
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken.jpg",
    section: "Pizza",
    price: 10,
  },
  {
    name: "Margarita Pizza",
    img: "/img/margarita.jpg",
    section: "Pizza",
    price: 5,
  },
  {
    name: "Peperoni Pizza",
    img: "/img/peperoni.jpeg",
    section: "Pizza",
    price: 10,
  },
  {
    name: "Onion Burger",
    img: "/img/onionburger.jpg",
    section: "Hamburger",
    price: 10,
  },
  {
    name: "Creamy Burger",
    img: "/img/creamyburger.jpg",
    section: "Hamburger",
    price: 20,
  },
  {
    name: "Cheese Burger",
    img: "/img/cheeseburger.jpeg",
    section: "Hamburger",
    price: 20,
  },
  {
    price: 1,
    name: "Soda",
    section: "Drinker",
    choices: ["Coka Cola", "Sprite", "Fanta", "Vann"],
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
