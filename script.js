// Background music play/pause
document.getElementById("music-btn").addEventListener("click", function () {
    let music = document.getElementById("bg-music");
    let nowPlayingText = document.getElementById("now-playing");

    if (music.paused) {
        music.play();
        this.textContent = "🔇 Stop Music";
        nowPlayingText.classList.remove("hidden"); // Show "Now Playing..."
    } else {
        music.pause();
        this.textContent = "🎶 Play Our Song";
        nowPlayingText.classList.add("hidden"); // Hide "Now Playing..."
    }
});




// Enlarging image functionality
function enlargeImage(img) {
    document.getElementById("overlay-img").src = img.src;
    document.getElementById("overlay").classList.remove("hidden");
}

function closeImage() {
    document.getElementById("overlay").classList.add("hidden");
}



document.addEventListener("click", (e) => {
    createHeartFirework(e.clientX, e.clientY);
});

function createHeartFirework(x, y) {
    const heartCoordinates = [
        { x: 0, y: -30 },
        { x: -20, y: -20 },
        { x: 20, y: -20 },
        { x: -30, y: 0 },
        { x: 30, y: 0 },
        { x: -20, y: 20 },
        { x: 20, y: 20 },
        { x: 0, y: 30 },
    ]; // Coordinates forming a heart shape

    heartCoordinates.forEach((point, index) => {
        setTimeout(() => {
            let heartParticle = document.createElement("div");
            heartParticle.classList.add("heart-particle");
            heartParticle.innerHTML = "❤️";
            document.body.appendChild(heartParticle);

            heartParticle.style.left = `${x}px`;
            heartParticle.style.top = `${y}px`;

            heartParticle.animate(
                [
                    { transform: `translate(0, 0) scale(1)`, opacity: 1 },
                    { transform: `translate(${point.x}px, ${point.y}px) scale(1.5)`, opacity: 0 }
                ],
                {
                    duration: 800,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

            setTimeout(() => heartParticle.remove(), 800);
        }, index * 50); // Slight delay for each particle
    });
}


let lovePoints = 0;

document.getElementById("love-points-btn").addEventListener("click", function() {
    lovePoints++;
    document.getElementById("love-points-display").innerText = `Love Points: ${lovePoints}`;

    if (lovePoints === 7) {
        document.getElementById("secret-message").classList.remove("hidden");
        alert("🎉 You clicked too much baby. Now suck my dick.");
    }

    if (lovePoints === 13) {
        document.getElementById("secret-message").classList.remove("hidden");
        alert("Sayez khallas (continue).");
    }

    if (lovePoints === 17) {
        document.getElementById("secret-message").classList.remove("hidden");
        alert("You love me so much babyy!❤️");
    }

    if (lovePoints === 24) {
        document.getElementById("secret-message").classList.remove("hidden");
        alert("I love you too g!❤️");
    }
});


setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    
    // Increase animation duration to slow down movement
    heart.style.animationDuration = Math.random() * 5 + 6 + "s"; // 5s to 11s

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000); // Remove hearts after 12 seconds
}, 650); // Frequency of new hearts appearing



let index = 0;
const images = document.querySelectorAll(".gallery-item");
const totalImages = images.length;
const container = document.querySelector(".gallery-container");

function nextImage() {
    index = (index + 1) % totalImages;
    updateGallery();
}

function prevImage() {
    index = (index - 1 + totalImages) % totalImages;
    updateGallery();
}

function updateGallery() {
    container.style.transform = `translateX(-${index * 300}px)`;
}





window.addEventListener("scroll", function() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});


// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup-overlay");
    let enterBtn = document.getElementById("enter-btn");
    let leaveBtn = document.getElementById("leave-btn");

    // Hide the website content until the user confirms
    document.body.style.overflow = "hidden";

    // Enter button: Hide pop-up and show the website
    enterBtn.addEventListener("click", function () {
        popup.style.display = "none";
        document.body.style.overflow = "auto"; // Allow scrolling
    });

    
});



function updateLoveTimer() {
    let startDate = new Date("2022-09-01T00:00:00"); // Start date
    let now = new Date(); // Current date

    let diff = now - startDate; // Time difference in milliseconds

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Update every second
setInterval(updateLoveTimer, 1000);

// Initialize timer on page load
updateLoveTimer();


document.getElementById("loveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    let email = "jabirkael.fr@gmail.com"; // Replace with YOUR email
    let subject = encodeURIComponent("Love Message from " + name);
    let body = encodeURIComponent(message + "\n\nFrom: " + name);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    // Show confirmation message
    document.getElementById("confirmation").classList.remove("hidden");
    this.reset();
});
