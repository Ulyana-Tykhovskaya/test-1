// HTPP-запросы
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
// async function foo(url) {
//   try {
//     const responce = await fetch(url);
//     if (!responce.ok) {
//       throw new Error(`Ошибка: ${responce.status}`);
//     }
//     const data = await responce.json();
//     console.log("Danniye:", data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// foo("https://jsonplaceholder.typicode.com/todos/1");

// Форма для регистрации
document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  if (!email || !pesswod) {
    message.textContent = "Заполните все поля";
    return;
  }
  try {
    const responce = await fetch("https://connections-api.goit.global/users/login")
  }
});
