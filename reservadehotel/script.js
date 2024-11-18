
const reservationForm = document.getElementById('reservation-form');
const confirmationDiv = document.getElementById('confirmation');
const confirmationDetails = document.getElementById('confirmation-details');

reservationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const roomType = document.getElementById('room-type').value;
    if (!name || !checkIn || !checkOut || !roomType) {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    const stayDuration = calculateStayDuration(checkIn, checkOut);
    confirmationDetails.innerHTML = `
        <strong>Nome:</strong> ${name} <br>
        <strong>Data de Check-in:</strong> ${checkIn} <br>
        <strong>Data de Check-out:</strong> ${checkOut} <br>
        <strong>Tipo de Quarto:</strong> ${roomType.charAt(0).toUpperCase() + roomType.slice(1)} <br>
        <strong>Duração da estadia:</strong> ${stayDuration} noites
    `;
    reservationForm.classList.add('hidden');
    confirmationDiv.classList.remove('hidden');
});

function calculateStayDuration(checkIn, checkOut) {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const timeDifference = checkOutDate - checkInDate;
    const days = timeDifference / (1000 * 3600 * 24);
    return days;
}
function resetForm() {
    reservationForm.classList.remove('hidden');
    confirmationDiv.classList.add('hidden');
    reservationForm.reset();
}
