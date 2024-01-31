'use client'
import { Shimmer } from "react-shimmer";
function Loading() {
    return (
        <Shimmer
            width={500}
            height={300}
            title={false}
            image={false}
        >
            Your placeholder content goes here
        </Shimmer>
    );
}

export default Loading
