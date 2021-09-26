function peek_a_boo(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block') {
      e.style.display = 'none';
    } else {
      e.style.display = 'block';
    }
  }