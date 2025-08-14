document.getElementById("amor").addEventListener("input", function () {
  document.getElementById("valorAmor").textContent = this.value + "%";
});

document.getElementById("btnResponder").addEventListener("click", function () {
  let amor = document.getElementById("amor").value;
  let animacion = document.getElementById("animacion");

  if (amor > 70) {
    // Corazones cayendo
    for (let i = 0; i < 20; i++) {
      let heart = document.createElement("div");
      heart.classList.add("corazon");
      heart.textContent = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
      animacion.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }

    // Mostrar carta cerrada con delay
    setTimeout(() => {
      document.getElementById("pregunta").style.display = "none";
      let carta = document.getElementById("carta");
      carta.style.display = "block";

      // Evento para abrir carta
      carta.addEventListener("click", function () {
        carta.classList.add("abierta");
      });

    }, 1500);

  } else {
    // Carita triste centrada
    animacion.innerHTML = '<div class="triste">😢</div><p>Ohhh... ¿Tan poquito?</p>';
    setTimeout(() => animacion.innerHTML = "", 2000);
  }
});
