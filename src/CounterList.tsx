import React, { FC } from 'react';
import StreamBuilder from './StreamBuilder';
import { ImplCounterBloc } from './CounterBloc';

interface CounterListProps<T> {
    bloc: ImplCounterBloc<T>;
}

export const CounterList: FC<CounterListProps<number>> = ({ bloc}) => (
  <>
    <button onClick={() => bloc.increase(1)}>+</button>
    <button onClick={() => bloc.decrease(-1)}>-</button>
    <label>
      Count: <span>
      <StreamBuilder
        initialData={0}
        stream={bloc.counter}
        builder={(snapshot) => <>{snapshot}</>}
      /></span>
    </label>
  </>
);
