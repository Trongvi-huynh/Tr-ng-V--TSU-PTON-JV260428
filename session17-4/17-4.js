let item = document.querySelectorAll('.item');
item.forEach((el) => {
  el.onmouseover = function () {
    let bgClor = this.getAttribute('id');
    document.body.style.backgroundColor = bgClor;
  };
});
