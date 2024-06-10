import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, Slide, FlexBox, Heading, Box } from 'spectacle'
import { History, Vue3, Comparison, CoreConcepts, Instance, Vue3DataBinding } from "./slides";

const Presentation = () => (
  <Deck template={() => <DefaultTemplate color="white"  />}>
    <Slide backgroundColor="white">
      <FlexBox height="100%" display="flex" flexDirection="column">
          <img src="./assets/images/Vue.js_Logo_2.svg.png" alt="" style={{ width: '200px' }}/>
          <Heading color="#3FB984">Vue.js</Heading>
      </FlexBox>
    </Slide>
    <History/>
    <Vue3/>
    <Comparison/>
    <CoreConcepts/>
    <Instance/>
    <Vue3DataBinding/>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);