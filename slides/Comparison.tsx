import {Box, FlexBox, Heading, Slide} from "spectacle";
import React from "react";

export function Comparison() {
    return (
        <Slide backgroundColor="#3FB984">
            <FlexBox height="100%" display="flex" flexDirection="column" >
                <Heading fontSize="h2" color="white">Comparison summary</Heading>
                <Box>
                    <ul>
                        <li>
                            Vue.js: Easiest to learn with a flexible and efficient architecture. Ideal for developers
                            looking for a progressive framework with a gentle learning curve.
                        </li>
                        <li>
                            React: Balances ease of learning with flexibility and performance. Suitable for developers
                            who prefer a more flexible approach with a strong ecosystem.
                        </li>
                        <li>
                            Angular: Provides a comprehensive solution with a steeper learning curve. Best for large-scale applications where a complete framework is beneficial.
                        </li>
                    </ul>
                </Box>
            </FlexBox>
        </Slide>
    );
}