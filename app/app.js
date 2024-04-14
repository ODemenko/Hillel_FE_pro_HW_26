document.addEventListener('DOMContentLoaded', function () {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});

document.getElementById('modalButton').addEventListener('click', function () {
    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
    myModal.show();
});

let alertVisible = false;
function toggleAlert() {
    let alertMessage = document.getElementById('alertMessage');
    if (alertVisible) {
        alertMessage.style.display = 'none';
     } else {
        alertMessage.style.display = 'block';
    }
      alertVisible = !alertVisible;
}

function closeAlert() {
    document.getElementById('alertMessage').style.display = 'none';
    alertVisible = false;
}