import { NativeModule, requireNativeModule } from 'expo';

import { ExpoAppExitModuleEvents } from './ExpoAppExit.types';

declare class ExpoAppExitModule extends NativeModule<ExpoAppExitModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAppExitModule>('ExpoAppExit');
