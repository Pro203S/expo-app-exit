import { registerWebModule, NativeModule } from 'expo';

import { ExpoAppExitModuleEvents } from './ExpoAppExit.types';

class ExpoAppExitModule extends NativeModule<ExpoAppExitModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoAppExitModule, 'ExpoAppExitModule');
