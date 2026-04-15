const user = {
  firstName: "Jan",
  lastName: "Kowalski",
  city: "Katowice",
  age: 21,
  fieldOfStudy: "informatyka",
  hobby: "gry komputerowe" // własne pole
};

// 1. Imię i nazwisko
console.log("Użytkownik:", user.firstName, user.lastName);

// 2. Komunikat z template literals
console.log(`${user.firstName} mieszka w mieście ${user.city} i studiuje ${user.fieldOfStudy}.`);

// 3. Komunikat zależny od wieku
if (user.age >= 18) {
  console.log(`${user.firstName} jest pełnoletni.`);
} else {
  console.log(`${user.firstName} nie jest pełnoletni.`);
}

// 4. Komunikat z własnym polem
console.log(`${user.firstName} interesuje się: ${user.hobby}.`);