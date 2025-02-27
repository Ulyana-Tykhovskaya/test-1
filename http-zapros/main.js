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

  if (!email || !password) {
    message.textContent = "Заполните все поля";
    return;
  }

  try {
    let response = await fetch(
      "https://connections-api.goit.global/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      response = await fetch(
        "https://connections-api.goit.global/users/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    message.style.color = "green";
    message.textContent = "Успешный вход!";
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";
  }
});

document.getElementById("contact-btn").addEventListener("click", async () => {
  const token = localStorage.getItem("token");
  const message = document.getElementById("message");

  if (!token) {
    message.textContent = "Ошибка: пользователь не авторизован!";
    message.style.color = "red";
    return;
  }

  try {
    const response = await fetch(
      "https://connections-api.goit.global/contacts",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const contacts = await response.json();
    console.log("Контакты:", contacts);

    message.textContent = "Контакты успешно загружены! Смотри в консоли.";
    message.style.color = "green";
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";
  }
});
