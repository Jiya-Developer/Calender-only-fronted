const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysContainer = document.getElementById('daysContainer');
const monthYear = document.getElementById('monthYear');
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    // Set the month and year in the header
    monthYear.textContent = `${monthNames[month]} ${year}`;
    
    // Clear previous days
    daysContainer.innerHTML = '';

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Add empty cells for the days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += '<div class="col"></div>';
    }

    // Add cells for each day in the month
    for (let day = 1; day <= daysInMonth; day++) {
        daysContainer.innerHTML += `<div class="col day">${day}</div>`;
    }
}

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) currentYear++;
    renderCalendar(currentMonth, currentYear);
});

document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) currentYear--;
    renderCalendar(currentMonth, currentYear);
});

// Initial render
renderCalendar(currentMonth, currentYear);
