import React, { FC } from 'react';
import { CounterBloc } from './CounterBloc'
import { CounterList } from './CounterList'

const App: FC = () => {
  return (
    <div>
      <CounterList bloc={CounterBloc(0)} />
    </div>
  );
};

export default App;