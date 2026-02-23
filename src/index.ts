// Reexport the native module. On web, it will be resolved to ExpoAppExitModule.web.ts
// and on native platforms to ExpoAppExitModule.ts
export { default } from './ExpoAppExitModule';
export { default as ExpoAppExitView } from './ExpoAppExitView';
export * from  './ExpoAppExit.types';
