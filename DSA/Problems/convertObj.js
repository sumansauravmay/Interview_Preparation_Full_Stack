// Convert it in Object that is id is key and name is value

let arr = [
  {
    id: 1,
    info: {
      name: "s"
    }
  },
  {
    id: 2,
    info: {
      name: "sa"
    }
  },
  {
    id: 3,
    info: {
      name: "sau"
    }
  }
];

let obj = arr.reduce((acc, item) => {
  acc[item.id] = item.info.name;
  return acc;
}, {});
console.log(obj);
