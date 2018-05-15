function validaForm() {
  var textarea = document.getElementById('textarea');
  if (textarea.value.length == 0) {
    alert("O campo deve ser preenchido");
    textarea.style.border = "1px solid #ff0000";
    textarea.focus();
    return false;
  }
}
