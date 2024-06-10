import {Box, FlexBox, Heading, Slide} from "spectacle";
import React from "react";

export const History = () => {
    return (
        <Slide backgroundColor="#3FB984">
            <FlexBox height="100%" display="flex" flexDirection="column" >
                <Heading fontSize="h2" color="white">History and Evolution of Vue.js</Heading>
                <img src="./assets/images/0_xkJgg-6HskYrQ3N7.jpg" alt="" style={{width: '200px', borderRadius: '6px'}}/>
                <Box>
                    <h3>Origins and Initial Release (2014)</h3>
                    <ul>
                        <li>
                            Evan You: Vue.js was created by Evan You, who was inspired by working with AngularJS at Google. He wanted to create a more flexible and lightweight framework.
                            Version 0.6: The initial release of Vue.js was in February 2014. This version introduced the core features such as data binding, directives, and components, which set the foundation for the framework.
                            **2. Early Development and Adoption (2015-2016)
                        </li>
                        <li>
                            Vue 1.0: In October 2015, Vue.js 1.0 (codename "Evangelion") was released. This version solidified the framework with a stable API and added significant features like transition effects, event handling, and more robust component management.
                            Growing Popularity: Vue.js started gaining traction in the developer community due to its simplicity, flexibility, and ease of integration with other projects.
                            **3. Vue 2.x Era (2016-2020)
                        </li>
                    </ul>

                    <h3>Vue 2.0: Released in September 2016, Vue 2.0 (codename "Ghost in the Shell") brought significant improvements:</h3>
                    <ul>
                        <li>Virtual DOM: Enhanced rendering performance and efficiency.</li>
                        <li>Render Functions & JSX: Allowed more control over rendering logic.</li>
                        <li>Improved Reactivity System: More robust and performant data binding.</li>
                        <li>Single-File Components: Facilitated better organization and maintainability of component code.</li>
                        <li>Ecosystem Growth: Alongside Vue 2, the ecosystem expanded with official libraries and tools such as Vue Router, Vuex (state management), and Vue CLI (project scaffolding).</li>
                    </ul>
                </Box>
            </FlexBox>
        </Slide>
    );
};