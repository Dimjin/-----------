document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    if (amount > 0) {
        showMessage(`Thank you for your donation of $${amount}!`);
    } else {
        showMessage('Please enter a valid amount.');
    }
});

function showMessage(message) {
    document.getElementById('message').innerText = message;
}
