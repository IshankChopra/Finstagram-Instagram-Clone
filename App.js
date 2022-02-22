import React from "react";
import AuthNavigation from "./AuthNavigation";

export default function App() {
  return <AuthNavigation />;
}

import { LogBox } from "react-native";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
