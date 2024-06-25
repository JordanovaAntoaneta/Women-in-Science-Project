import * as React from 'react';
import Gallery from './Gallery';
import InfoBox from './InfoBox';
import Toolbar from './Toolbar';
import PersonInfo from './PersonInfo';
import SayHello from './SayHello';
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import MovingDot from './MovingDot';
import Accordeon from './Accordeon';
import SuggestScientists from './SuggestScientists';

export function App() {

  return (
    <div>
      <h1 className='title'><BsChevronDoubleLeft />Famous women in science<BsChevronDoubleRight /></h1>
      <SayHello />
      <Gallery />
      <InfoBox />
      <PersonInfo />
      <img src='https://wwd.com/wp-content/uploads/2018/03/fwis_00002.jpg?w=1000&h=563&crop=1'
        style={{
          margin: 10,
          width: 1200,
          textAlign: 'center',
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Accordeon />
      <SuggestScientists />
      <div className='fact'>
        <Toolbar />
      </div>
    </div>
  );

}
