// Очікуємо, поки весь HTML буде повністю завантажено 
document.addEventListener("DOMContentLoaded", function() { 
    // Змінні для зберігання вибраного рядка та ID контакту 
    let selectedRow = null; 
    let selectedContactId = null; 
    
    // Отримуємо всі рядки з класом "contact-row" 
    const rows = document.querySelectorAll(".contact-row"); 
    
    // Отримуємо кнопку редагування за її ID 
//    const editButton = document.getElementById("editButton");
    
    // Додаємо обробник події кліку для кожного рядка 
    rows.forEach(row => { 
        row.addEventListener("click", function() {
            // Якщо вже був вибраний рядок — знімаємо з нього підсвітку
            if (selectedRow) {
                selectedRow.classList.remove("table-active");
            }

            // Встановлюємо новий вибраний рядок і додаємо йому клас підсвітки
            selectedRow = this;
            selectedRow.classList.add("table-active");

            // Зчитуємо ID контакту з data-атрибуту обраного рядка
            selectedContactId = this.dataset.contactId;

            // Формуємо посилання для кнопки редагування з урахуванням вибраного

//            editButton.href = `edit/${selectedContactId}/`;
        });

        row.addEventListener("dblclick", function() {
            const contactId = row.dataset.contactId;
            const detailsRow = document.getElementById('details - ' + contactId);

            if (detailsRow.style.display === 'none') {
                detailsRow.style.display = 'table-row';
            } else {
                detailsRow.style.display = 'none';
            }



        });

    }); 
});
