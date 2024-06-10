import {FlexBox, Heading, Slide} from "spectacle";
import React from "react";

export const Vue3 = () => {
    return (
        <Slide backgroundColor="#3FB984">
            <FlexBox height="100%" display="flex" flexDirection="column" >
                <Heading fontSize="h2" color="white">Vue 3.x Era (2020-Present)</Heading>
                <img src="./assets/images/vue3.png" alt="" style={{width: '200px', borderRadius: '6px'}}/>
                <h3>Vue 3.0: Released in September 2020, Vue 3 (codename "One Piece") introduced several groundbreaking features and improvements:</h3>
                <ul>
                    <li>Composition API: Provided a more flexible and scalable way to organize and reuse logic in components.</li>
                    <li>Performance Enhancements: Significant improvements in rendering and startup performance.</li>
                    <li>TypeScript Support: Better TypeScript integration, making it easier to build type-safe applications.</li>
                    <li>Fragment, Teleport, and Suspense: New component features for more powerful UI development.</li>
                    <li>Migration and Adoption: Tools like Vue 2.7 (bridge version) and the Vue Migration Build helped developers transition from Vue 2 to Vue 3.</li>
                </ul>

                <h3>Current Status and Future Directions (2023-Present)</h3>

                Ongoing Development: The Vue core team continues to release updates, improvements, and new features based on community feedback and evolving web standards.
                Focus Areas: Enhancements in performance, tooling, and developer experience remain priorities. Ongoing efforts also include better support for server-side rendering (SSR) and improvements in the Vue ecosystem libraries.
                Impact and Community
                Community-Driven: Vue.js has a vibrant and active community contributing to its growth through plugins, libraries, tutorials, and support.
                Adoption: Widely adopted by developers and companies for building web applications, from small startups to large enterprises.
                Vue.js has evolved from a simple library to a comprehensive and powerful framework, influencing the landscape of front-end development and continuing to be a popular choice among developers for building modern web applications.
            </FlexBox>
        </Slide>
    );
};