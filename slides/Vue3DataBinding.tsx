import {Box, FlexBox, Heading, Slide} from "spectacle";
import React from "react";

export const Vue3DataBinding = () => {
    return (
        <Slide backgroundColor="#3FB984">
            <FlexBox height="100%" display="flex" flexDirection="column" >
                <Heading fontSize="h2" color="white">Vue 3 Data Binding</Heading>
                <Box>
                    <b>Interpolation</b>
                    <p>Interpolation is the simplest form of one-way data binding. It involves using double curly
                        braces {"{{ }}"} to insert the value of a data p roperty into the HTML.</p>
                    <hr/>
                    <b>One-Way Data Binding</b>
                    <p>One-way data binding is a unidirectional flow of data from the component’s data to the DOM.
                        Changes in the data are reflected in the DOM, but changes in the DOM do not affect the data.</p>
                    <b>Two-Way Data Binding</b>
                    <p>Two-way data binding allows changes in the DOM to automatically update the data and vice versa.
                        It’s achieved using the `v-model` directive, commonly used with form elements.</p>
                    <b>Vue 3 Multiple v-model bindings</b>
                    <p>By leveraging the ability to target a particular prop and event as we learned before with v-model
                        arguments, we can now create multiple v-model bindings on a single component instance.</p>
                    <b>V-model modifiers</b>
                    <p>By default, v-model syncs the input with the data after each input event (with the exception of IME composition as stated above).</p>
                    <p>v-model has built-in modifiers - <b>.trim</b>, <b>.number</b> and <b>.lazy</b>. In some cases, you might also want the v-model on your custom input component to support custom modifiers.</p>
                </Box>
            </FlexBox>
        </Slide>
    );
};