import React from 'react'


const getRenderMessages = () => {
    const messages = [
        "Loading the sauce for you!",
        "Hold on tight , its coming",
        "Good things take time",
        "You know ? Hippos sweat pink",
        "Almost there... !",
    ]

    const randomNumber = Math.random();

    // Scale the random number to be between 0 and N (inclusive)
    const scaledNumber = Math.floor(randomNumber * (messages.length + 1));

    return scaledNumber
}

function Loading() {
    return (
        <div>{getRenderMessages()}</div>
    )
}

export default Loading