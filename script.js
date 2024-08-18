document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('status');
    const playersElement = document.getElementById('players');

    // API endpoint for checking Minecraft server status
    const apiUrl = 'https://api.mcsrvstat.us/2/mc.voidish.xyz';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.online) {
                statusElement.textContent = 'Online';
                statusElement.classList.add('has-text-success'); // Bulma class for green text
                playersElement.textContent = `${data.players.online}/${data.players.max}`;
            } else {
                statusElement.textContent = 'Offline';
                statusElement.classList.add('has-text-danger'); // Bulma class for red text
                playersElement.textContent = 'N/A';
            }
        })
        .catch(error => {
            console.error('Error fetching server status:', error);
            statusElement.textContent = 'Error';
            statusElement.classList.add('has-text-danger'); // Bulma class for red text
            playersElement.textContent = 'N/A';
        });
});
