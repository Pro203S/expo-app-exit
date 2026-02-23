import * as React from 'react';

import { ExpoAppExitViewProps } from './ExpoAppExit.types';

export default function ExpoAppExitView(props: ExpoAppExitViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
