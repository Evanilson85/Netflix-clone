const user = {
  id: 1,
  name: "Evanilson",
  username: "evanilson85",
  password: "cruzeiro2000",
  key: "olá",
};

/* Manual
console.log(user["id"]);
console.log(user["name"]);
console.log(user["password"]);
*/

// console.log(user.id);
// console.log(user.username);
// return false;

/* Dinâmico

for (key in user) {
  console.log(key + ": " + user[key]);
}
 */

Object.keys(user).forEach((identifier) => {
  console.log(identifier + ": " + user[identifier]);
});
