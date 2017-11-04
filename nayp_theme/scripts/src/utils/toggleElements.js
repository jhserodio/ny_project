
function toggleDisplay(btn) {

  // VARIAVEIS DE CONTROLE
  var button = document.getElementById(btn);
  var display = document.querySelectorAll(".display");
  var displayId = document.getElementById(btn.slice(/-/.exec(btn).index + 1));

  // DISPARANDO EVENTO
  if (button) {
    button.addEventListener("click", () => {

      // SE DISPLAY ATIVO DESATIVA
      if (displayId.classList.contains('active')) {
        displayId.classList.remove('active');
      } else {
        // DISPARA FUNÇÃO RESET DISPLAY
        resetDisplay(display);
        // SE DISPLAY DESATIVO ATIVA
        displayId.classList.add('active');
      }
    })
  }
}

// DESABILITA DISPLAYS ATIVOS
function resetDisplay(item) {
  for (let i = 0; i < item.length; i++) {
    if (item[i].classList.contains('active')) {
      item[i].classList.remove('active');
    }
  }
}

export { toggleDisplay };
