window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 350);
});

// aggiungo un evento di ascolto allo scroll della finestra, targhetto la nav e con il metodo toogle gli assegno la
// classe "scrolled" se l'asse dello scroll della finestra è maggiore di 350px. con vari tentativi è il più vicino alla
// fine dell'header

const letters = document.querySelectorAll(".letters");

const toggleRandomly = () => {
  letters.forEach((letter) => {
    const delay = Math.random() * 2000;
    setTimeout(() => {
      letter.classList.toggle("hidden");
    }, delay);
  });
};

setInterval(toggleRandomly, 1500);
// pensavo di targhettare in maniera corretta
// ma sono solo riuscito a targhettare tutto l'svg non riesco a targhettare le singole m
