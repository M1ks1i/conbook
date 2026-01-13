document.addEventListener("DOMContentLoaded", function() {
    let selectedRow = null;
    let selectedContactId = null;
    const rows = document.querySelectorAll(".contact-row");

    rows.forEach(row => {

        row.addEventListener("click", function() {
            selectedRow = this;
            selectedContactId = this.dataset.contactId;
            let dtrow = document.getElementById("details - " + selectedContactId);
            if (selectedRow) {
//                if (dtrow.style.display === 'none') {
                    selectedRow.classList.remove("table-active");
//                    dtrow.style.display === 'table-row';
    //                alert('1');
//                } else {
                    selectedRow.classList.add("table-active");
//                    dtrow.style.display === 'none';
//                }
            }
            if (dtrow.style.display === 'none') {
                dtrow.style.display === 'table-row';
            } else {
                dtrow.style.display === 'none';
            }



//            alert(selectedContactId);
        })
    })
})

//document.addEventListener("DOMContentLoaded", function() {
//    window.toggleDetails = function(row){
//        const selectedContactId = row.dataset.contactId;
//        const dtrow = document.getElementById("details - " + selectedContactId);
//        if (dtrow.style.display === 'none') {
//            dtrow.style.display === 'table-row';
//        } else {
//            dtrow.style.display === 'none';
//        }
//    }
//})