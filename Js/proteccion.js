 document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Bloquear evento de copiar
  document.addEventListener("copy", function (e) {
    e.preventDefault();
  });

  // Bloquear Ctrl+C y Ctrl+U
  document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase();
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const ctrlOrCmd = isMac ? e.metaKey : e.ctrlKey;

    if (ctrlOrCmd && (key === 'c' || key === 'u')) {
      e.preventDefault();
    }
  });