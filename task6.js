let arr = ["17", "18", "19", "17", "21"];
for (let i = 0; i < arr.length; i++) {
  for (let n = 0; n < arr.length; n++)
    if (arr.at(i) == arr.at(n) && i != n) {
      console.log("true");
      console.log("Одинаковые " + i + " и " + n + " элементы");
    }
  console.log("false");
}