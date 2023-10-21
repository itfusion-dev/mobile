import TopBar from "./navigation/TopBar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <TopBar/>
    </SafeAreaProvider>
  );
}
