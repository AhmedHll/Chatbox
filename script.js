const charCounter = document.getElementById('char-counter');
const countDisplay = document.getElementById('count');

charCounter.addEventListener('input', updateCharacterCount);

function updateCharacterCount() {
    const text = charCounter.value;
    const charCount = text.length;

    countDisplay.textContent = `${charCount} characters`;

    if (charCount > 100) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = '#333';
    }
}

// Initial character count update
updateCharacterCount();
