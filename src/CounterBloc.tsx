import { BehaviorSubject, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

interface ImplBloc {
    dispose: () => void
}

export interface ImplCounterBloc<T> extends ImplBloc {
    counter: Observable<T>,
    increase: (num: T) => void,
    decrease: (num: T) => void,
}

export const CounterBloc = <T, >(initialValue: T) : ImplCounterBloc<T> => {
  const subject = new BehaviorSubject<T>(initialValue);

  const counter = subject.pipe(scan((acc, num) => num, initialValue));

  const increase = (num: T) => {
    subject.next(num);
  };

  const decrease = (num: T) => {
    subject.next(num);
  };

  const dispose = () => {
    subject.complete();
  };

  return {
    counter,
    increase,
    decrease,
    dispose,
  };
};