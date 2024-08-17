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
                playersElement.textContent = `${data.players.online}/${data.players.max}`;
            } else {
                statusElement.textContent = 'Offline';
                playersElement.textContent = 'N/A';
            }
        })
        .catch(error => {
            console.error('Error fetching server status:', error);
            statusElement.textContent = 'Error';
            playersElement.textContent = 'N/A';
        });
});
