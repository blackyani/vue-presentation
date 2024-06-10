import {FlexBox, Heading, Slide} from "spectacle";
import React from "react";

export const CoreConcepts = () => {
    return  (
        <Slide backgroundColor="white">
            <FlexBox height="100%" display="flex" flexDirection="column">
                <img src="./assets/images/finally-key-concepts.jpg" alt="" style={{ width: '200px', borderRadius: '7px' }}/>
                <Heading color="#3FB984">Core concepts</Heading>
            </FlexBox>
        </Slide>
    )
};