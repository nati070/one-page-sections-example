import React from 'react';
import { Sections,Section } from '@nati070/one-page-sections-library';

import FirstComp from './FirstComp';
import SecondComp from './SecondComp';

const Main = () => {
    return (
      <Sections>
        <Section backgroundColor='#D4D4AA' name='first' component={<FirstComp/>}/>
        <Section backgroundColor='#E8871E' name='second'  component={<SecondComp/>}/>
      </Sections>
    );
};
export default Main;