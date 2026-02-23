import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoAppExitModule extends NativeModule {
    AppExit(): void;
}

export default requireNativeModule<ExpoAppExitModule>('ExpoAppExit').AppExit;
