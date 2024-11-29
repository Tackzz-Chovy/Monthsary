function showLetter() {
    const letterRoll = document.getElementById('letterRoll');
    const hearts = document.getElementById('hearts');
    const letter = document.getElementById('letter');
    const heartBtn = document.querySelector('.heart-btn');
    
    // Make the letter roll appear
    letterRoll.style.width = '80%';  // Roll the paper to a full width
    letterRoll.style.opacity = '1';  // Make it visible
    hearts.style.opacity = '1';      // Make hearts appear

    // Create flying hearts animation
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // Add heart emoji
        heart.style.left = `${heartBtn.offsetLeft + heartBtn.offsetWidth / 2}px`;
        heart.style.top = `${heartBtn.offsetTop + heartBtn.offsetHeight / 2}px`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        hearts.appendChild(heart);

        // Animate the heart
        heart.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${(Math.random() - 0.5) * 200}px, ${-(Math.random() * 150 + 50)}px)`, opacity: 0 }
        ], {
            duration: 2000,
            easing: 'ease-in-out',
            fill: 'forwards'
        });
    }

    // After the letter roll animation, show the letter
    setTimeout(() => {
        letter.style.display = 'block';
        letter.style.opacity = '1';
    }, 3500);  // Delay to make sure the paper fully unrolls

    // Make the hearts disappear after a short time
    setTimeout(() => {
        hearts.style.opacity = '0';
    }, 5000); // 5 seconds for hearts to fade
}