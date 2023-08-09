import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs/internal/Observable';

interface StreamBuilderProps<T> {
  initialData: T;
  stream: Observable<T>;
  builder: (snapshot: T) => React.ReactElement;
}

const StreamBuilder = <T, >({
  initialData,
  stream,
  builder,
}: StreamBuilderProps<T>): React.ReactElement => {
  const [snapshot, setSnapshot] = useState<T>(initialData);

  useEffect(() => {
    const subscription = stream.subscribe(
      (data: T) => {
        console.log(`subscribe`, data);
        setSnapshot(data);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [stream]);

  return builder(snapshot);
};

export default StreamBuilder;
