const tappingButton = document.querySelector('.tapping-button');
const balanceDisplay = document.querySelector('.balance-display');
const earningNotification = document.querySelector('.earning-notification');
const cooldownOverlay = document.querySelector('.cooldown-overlay');

let currentBalance = 0;
let canTap = true;
const earnAmount = 0.0001;
const cooldownTime = 10000; // 10 seconds

tappingButton.addEventListener('click', () => {
    if (canTap) {
        canTap = false;
        triggerAdsterraDirectLink(); // Function to trigger the direct link
        startCooldown();
    }
});

function triggerAdsterraDirectLink() {
    // For a direct link, you might simply try to navigate to it in a hidden iframe
    // or using window.open with a small, hidden window.
    // However, be cautious about Adsterra's policies on forced clicks/impressions.
    // A simple approach might be to just log that it's triggered for now.
    console.log('Adsterra Direct Link Triggered');
    // In a real implementation, you would likely use a method recommended by Adsterra.
}

function startCooldown() {
    cooldownOverlay.style.opacity = 0.7;
    setTimeout(() => {
        cooldownOverlay.style.opacity = 0;
        currentBalance += earnAmount;
        balanceDisplay.textContent = `$${currentBalance.toFixed(4)}`;
        showEarningNotification();
        canTap = true;
    }, cooldownTime);
}

function showEarningNotification() {
    earningNotification.textContent = `You earned $${earnAmount.toFixed(4)}`;
    earningNotification.style.opacity = 1;
    setTimeout(() => {
        earningNotification.style.opacity = 0;
        earningNotification.textContent = '';
    }, 3000);
}

// Navigation button event listeners (basic example)
document.getElementById('main-menu-btn').addEventListener('click', () => {
    alert('Main Menu clicked');
    // Implement navigation logic here
});

document.getElementById('task-menu-btn').addEventListener('click', () => {
    alert('Task Menu clicked');
    // Implement navigation logic here
});

document.getElementById('withdraw-menu-btn').addEventListener('click', () => {
    alert('Withdraw Menu clicked');
    // Implement navigation logic here
});