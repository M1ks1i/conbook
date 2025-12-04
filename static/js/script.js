document.addEventListener("DOMContentLoaded", function() {
    let selectedRow = null;
    let selectedContactId = null;
    const rows = document.querySelector(".contact-row");

    rows.forEach(row => {
        row.addEventListener("click", function() {
            if (selectedRow) {
                selectedRow.classList.remove("table-active");
            }
            selectedRow = this;
            selectedRow.classList.add("table-active");
            selectedContactId = this.dataset.contactId;
        })
    })
})