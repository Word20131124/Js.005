
   function updateClock() {
    const now = new Date(); 
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0'); 

    const timeString = `${hours}`;
    const timeeString = `${minutes}`;
    const timeeeString = `${seconds}`;

    document.getElementById('hour').textContent = timeString;
    document.getElementById('min').textContent = timeeString;
    document.getElementById('sec').textContent = timeeeString;
}

setInterval(updateClock, 1000);

updateClock();