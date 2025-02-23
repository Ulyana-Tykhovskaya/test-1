// console.log("Before");
// async function foo() {
//   try {
//     const responce = await fetch(
//       "https://jsonplaceholder.typicode.com/invalid"
//     );
//     if (!responce.ok) {
//       throw new Error(`Ошибка HTTP: ${responce.status}`);
//     }
//     const data = await responce.json();
//     console.log("Полученные данные:", data);
//   } catch (error) {
//     console.error(error.message);
//   }
//   console.log("After");
// }
// foo();
async function foo(url) {
  try {
    const responce = await fetch(url);
    if (!responce.ok) {
      throw new Error(`Ошибка: ${responce.status}`);
    }
    const data = await responce.json();
    console.log("Danniye:", data);
  } catch (error) {
    console.log(error.message);
  }
}
foo("https://jsonplaceholder.typicode.com/todos/1");
