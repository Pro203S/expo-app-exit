import ExpoModulesCore

public class ExpoAppExitModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ExpoAppExit")

        Function("AppExit") {
            DispatchQueue.main.asyncAfter(deadline: .now()) {
                UIApplication.shared.perform(#selector(NSXPCConnection.suspend))
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                    exit(0)
                }
            }
        }
    }
}
