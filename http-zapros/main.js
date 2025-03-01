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
// document.getElementById("login-btn").addEventListener("click", async () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const message = document.getElementById("message");

//   if (!email || !password) {
//     message.textContent = "Заполните все поля";
//     return;
//   }

//   try {
//     let response = await fetch(
//       "https://connections-api.goit.global/users/login",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       }
//     );

//     if (!response.ok) {
//       const errorData = await response.json();
//       if (errorData.message === "Email or password is wrong") {
//         throw new Error("Ошибка: неверный email или пароль!");
//       }

//
//       response = await fetch(
//         "https://connections-api.goit.global/users/signup",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Ошибка регистрации: ${response.status}`);
//       }
//     }

//     const data = await response.json();
//     localStorage.setItem("token", data.token);
//     message.style.color = "green";
//     message.textContent = "Успешный вход!";
//   } catch (error) {
//     message.textContent = error.message;
//     message.style.color = "red";
//   }
// });

// document.getElementById("contact-btn").addEventListener("click", async () => {
//   const token = localStorage.getItem("token");
//   const message = document.getElementById("message");

//   if (!token) {
//     message.textContent = "Ошибка: пользователь не авторизован!";
//     message.style.color = "red";
//     return;
//   }

//   try {
//     const response = await fetch(
//       "https://connections-api.goit.global/contacts",
//       {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Ошибка: ${response.status}`);
//     }

//     const contacts = await response.json();
//     console.log("Контакты:", contacts);

//     message.textContent = "Контакты успешно загружены! Смотри в консоли.";
//     message.style.color = "green";
//   } catch (error) {
//     message.textContent = error.message;
//     message.style.color = "red";
//   }
// });

// Для рандомного пользователя
document.getElementById("contact-btn").addEventListener("click", async () => {
  const message = document.getElementById("message");

  try {
    const response = await fetch("https://randomuser.me/api/");

    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }

    const data = await response.json();
    const user = data.results[0];

    document.getElementById("name").value = user.name.first;
    document.getElementById("lastname").value = user.name.last;
    document.getElementById("country").value = user.location.country;
    document.getElementById("email").value = user.email;

    document.getElementById(
      "display-name"
    ).textContent = `Имя: ${user.name.first}`;
    document.getElementById(
      "display-lastname"
    ).textContent = `Фамилия: ${user.name.last}`;
    document.getElementById(
      "display-country"
    ).textContent = `Страна: ${user.location.country}`;
    document.getElementById(
      "display-email"
    ).textContent = `Email: ${user.email}`;

    document.getElementById("user-photo").src = user.picture.large;

    message.textContent = "Данные успешно загружены!";
  } catch (error) {
    console.error(error);
    message.textContent = "Ошибка при получении данных!";
  }
});
