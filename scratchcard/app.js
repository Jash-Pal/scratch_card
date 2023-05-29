var num = Math.floor(Math.random() * 2) + 1;

// const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
    document.getElementById("container").style.display = "flex"
    $("#card").wScratchPad({
        size: 100, // The size of the brush/scratch.
        bg: `Images/gpay1.png`, // Background (image path or hex color).
        fg: `Images/front.png`, // Foreground (image path or hex color).
        cursor: "pointer", // Set cursor.
    });
    setTimeout(
        document.getElementById("btn").style.display = "none",5000);
}

