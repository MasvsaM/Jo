document.getElementById("amor").addEventListener("input", function () {
  document.getElementById("valorAmor").textContent = this.value + "%";
});

document.getElementById("btnResponder").addEventListener("click", function () {
  let amor = document.getElementById("amor").value;
  let animacion = document.getElementById("animacion");

  if (amor > 70) {
    // Corazones
    for (let i = 0; i < 20; i++) {
      let heart = document.createElement("div");
      heart.classList.add("corazon");
      heart.textContent = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 1 + 1) + "s";
      animacion.appendChild(heart);

      setTimeout(() => heart.remove(), 2000);
    }
    // Mostrar carta
    document.getElementById("pregunta").style.display = "none";
    document.getElementById("carta").style.display = "block";
  } else {
    // Carita triste
    animacion.innerHTML = '<div class="triste">😢</div><p>Ohhh... ¿Tan poquito?</p>';
    setTimeout(() => animacion.innerHTML = "", 2000);
  }
});
