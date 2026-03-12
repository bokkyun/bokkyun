const generateBtn = document.getElementById('generate-btn');
const lottoNumbers = document.querySelectorAll('.lotto-number');

function getRangeClass(number) {
    if (number <= 10) return 'range-1';
    if (number <= 20) return 'range-2';
    if (number <= 30) return 'range-3';
    if (number <= 40) return 'range-4';
    return 'range-5';
}

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    lottoNumbers.forEach((element, index) => {
        // Reset styles and animation
        element.classList.remove('active', 'range-1', 'range-2', 'range-3', 'range-4', 'range-5');
        
        // Use setTimeout to trigger re-flow for animation
        setTimeout(() => {
            const num = sortedNumbers[index];
            element.textContent = num;
            element.classList.add('active', getRangeClass(num));
        }, index * 100); // Staggered animation
    });
});
