 const rotators = document.querySelectorAll('.rotator');
 rotators.forEach(rotator => {
     startRotating(rotator);
 });

 function startRotating(rotator) {
     setInterval(() => rotateCases(rotator), 1000);
 }

 function rotateCases(rotator) {
     const cases = Array.from(rotator.children);
     const activeCaseIndex = cases.findIndex(c => c.classList.contains('rotator__case_active'));
     cases.forEach(caseItem => caseItem.classList.remove('rotator__case_active'));
     const nextActiveIndex = (activeCaseIndex + 1) % cases.length;
     cases[nextActiveIndex].classList.add('rotator__case_active');
 }