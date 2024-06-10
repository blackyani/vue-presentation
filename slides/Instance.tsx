import {Box, FlexBox, Heading, Slide} from "spectacle";
import React from "react";

export function Instance() {
    return (
        <Slide backgroundColor="#3FB984">
            <FlexBox height="100%" display="flex" flexDirection="column" >
                <Heading fontSize="h2" color="white">Vue 3 Instance</Heading>
                <Box>
                    <img src="./assets/images/instance.png" alt="" style={{width: '35vw', borderRadius: '6px'}}/>
                </Box>
            </FlexBox>
        </Slide>
    );
}