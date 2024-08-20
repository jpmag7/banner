document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const scrollingText = document.getElementById('scrollingText');
    const scrollingTextContainer = document.getElementById('scrollingTextContainer');
    const okButton = document.getElementById('okButton');
    const textInput = document.getElementById('textInput');
    const textColorInput = document.getElementById('textColor');
    const bgColorInput = document.getElementById('bgColor');
    const textSizeInput = document.getElementById('textSize');
    const textSpeedInput = document.getElementById('textSpeed');

    // Function to update the max value of the text size slider
    function updateSliderMax() {
        textSizeInput.max = window.innerHeight;
    }

    // Initialize slider max value
    updateSliderMax();

    // Show menu on double tap/click
    document.addEventListener('dblclick', function() {
        menu.style.display = 'block';
    });

    // Hide menu and show scrolling text on OK button click
    okButton.addEventListener('click', function() {
        const text = textInput.value;
        const textColor = textColorInput.value;
        const bgColor = bgColorInput.value;
        const textSize = textSizeInput.value + 'px';
        const textSpeed = 100 / textSpeedInput.value;

        // Set text, text color, background color, and text size
        scrollingText.textContent = text;
        scrollingText.style.color = textColor;
        scrollingText.style.fontSize = textSize;
        scrollingText.style.animation = `scroll-text ${textSpeed}s linear infinite`;
        scrollingTextContainer.style.backgroundColor = bgColor;

        // Hide menu and start scrolling text
        menu.style.display = 'none';
    });

    // Adjust the slider max value on window resize
    window.addEventListener('resize', updateSliderMax);
});
