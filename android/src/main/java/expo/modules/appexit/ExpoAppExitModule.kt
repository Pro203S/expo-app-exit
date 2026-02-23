package expo.modules.appexit

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAppExitModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("ExpoAppExit")

        Function("AppExit") {
            val a = appContext.currentActivity
            a?.finishAffinity()
            Runtime.getRuntime().exit(0);
        }
    }
}
