function calculate() {
  const modules = [
    { id: 'info', name: 'Informatique', coef: 2, examW: 0.6, caW: 0.4 },
    { id: 'lang', name: 'Langue', coef: 2, examW: 1, caW: 0 },
    { id: 'metier', name: 'Métiers', coef: 1, examW: 1, caW: 0 },
    { id: 'math', name: 'Maths', coef: 3, examW: 0.6, caW: 0.4 },
    { id: 'meth', name: 'Méthodologie', coef: 1, examW: 1, caW: 0 },
    { id: 'phy', name: 'Physique', coef: 3, examW: 0.6, caW: 0.4 },
    { id: 'thermo', name: 'Thermodynamique', coef: 3, examW: 0.6, caW: 0.4 }
  ];

  let totalWeightedSum = 0;
  let totalCoefs = 0;

  modules.forEach(mod => {
    const exam = Number(document.getElementById(`${mod.id}_exam`)?.value || 0);
    const ca = mod.caW > 0 ? Number(document.getElementById(`${mod.id}_ca`)?.value || 0) : 0;

    const moyenne = (exam * mod.examW) + (ca * mod.caW);
    const isValidated = moyenne >= 10;
    const actualCoef = mod.coef; // Include all modules in final average

    // Show per-module moyenne with validation icon
    const moyenneField = document.getElementById(`${mod.id}_moy`);
    if (moyenneField) {
      moyenneField.textContent = `Moyenne: ${moyenne.toFixed(2)} ${isValidated ? "✔️" : "❌"}`;
      moyenneField.style.color = isValidated ? "#2e7d32" : "#c62828";
    }

    totalWeightedSum += moyenne * actualCoef;
    totalCoefs += actualCoef;
  });

  const generalAverage = (totalCoefs > 0) ? (totalWeightedSum / totalCoefs).toFixed(2) : "0.00";
  document.getElementById('result').textContent = `Moyenne Générale: ${generalAverage}`;
}

// Attach input event listeners for automatic update
document.querySelectorAll('#gradeForm input[type="number"]').forEach(input => {
  input.addEventListener('input', calculate);
});

// Run once on page load
calculate();
