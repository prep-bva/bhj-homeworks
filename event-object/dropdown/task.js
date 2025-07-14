 document.querySelectorAll('.dropdown').forEach(dropdown => {
     const valueEl = dropdown.querySelector('.dropdown__value');
     const listEl = dropdown.querySelector('.dropdown__list');
     const items = dropdown.querySelectorAll('.dropdown__item');
     valueEl.addEventListener('click', e => {
         listEl.classList.toggle('dropdown__list_active');
     });
     items.forEach(item => {
         item.addEventListener('click', e => {
             e.preventDefault();
             valueEl.textContent = item.textContent;
             listEl.classList.remove('dropdown__list_active');
         });
     });
 });