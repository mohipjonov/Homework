let email = prompt("Emailingizni kiriting!");

let parol = prompt("Parolingizni kiriting!");

let div = document.createElement("div");

let h1 = document.querySelector("h1")
if (email == "admin@gmail.com" && parol == 12345) {

    div.setAttribute("id", "admin");

    div.classList.add("red");

    div.innerHTML = "<h2>Admin oynasi ochildi!</h2><br><p>Admin hush kelibsiz sizga kerakli ma'lumotlar shu yerda joylashgan.</p><br><button>batafsil...</button>";

    document.body.append(div);

} else if (email == "cilent@gmail.com" && parol == 1234) {

    div.setAttribute("id", "cilent");

    div.classList.add("black");

    div.innerHTML = "<h2>Cilent oynasi ochildi!</h2><br><p>Cilent hush kelibsiz siz sotib olmoqchi bolgan narsalar barchasi bu yerda...</p><br><button>batafsil...</button>";

    document.body.append(div)

} else if (email == "maderator@gmail.com" && parol == 123) {

    div.setAttribute("id", "admin");

    div.classList.add("green");

    div.innerHTML = "<h2>Maderator oynasi ochildi!</h2><br><p>Maderator hush kelibsiz sizga kerekli malumotlar barchasini shu yerdan topishingiz mumkin...</p><br><button>batafsil...</button>";


    document.body.append(div)

} else {

    h1.innerHTML = "Parol yoki Emailingizda xatolik bor!!!<br>Warning!!!!"
}