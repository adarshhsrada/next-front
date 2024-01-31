'use client'
const Clock = () => {

    (function updateWatch() {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        let hourHand = window.document.getElementById('hourHand');
        let minuteHand = window.document.getElementById('minuteHand');
        let secondHand = window.document.getElementById('secondHand');

        let hourRotation = (360 / 12) * (hours + minutes / 60);
        let minuteRotation = (360 / 60) * (minutes + seconds / 60);
        let secondRotation = (360 / 60) * seconds;

        hourHand?.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
        minuteHand?.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
        secondHand?.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
    })()

    setInterval(updateWatch, 1000);
    // updateWatch(); // Initial update
    return (
        <>
            <div id="watch">
                <div id="hourHand" class="hand"></div>
                <div id="minuteHand" class="hand"></div>
                <div id="secondHand" class="hand"></div>
                <div class="centerDot"></div>
            </div>

        </>
    )
}

export default Clock