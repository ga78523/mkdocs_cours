window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Attendre que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function() {
  // Typeset initial
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
  
  // Pour Material theme (si document$ est disponible)
  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => {
      if (MathJax.typesetPromise) {
        MathJax.typesetPromise();
      }
    });
  }
});
