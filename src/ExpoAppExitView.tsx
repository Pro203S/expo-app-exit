import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoAppExitViewProps } from './ExpoAppExit.types';

const NativeView: React.ComponentType<ExpoAppExitViewProps> =
  requireNativeView('ExpoAppExit');

export default function ExpoAppExitView(props: ExpoAppExitViewProps) {
  return <NativeView {...props} />;
}
