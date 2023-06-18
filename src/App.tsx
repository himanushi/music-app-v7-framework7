import { App as Framework7App, View } from "framework7-react";
import { routes } from "./routes";

const App = () => {
  return (
    <Framework7App name="My App" theme="ios" dark routes={routes}>
      <View main url="/" />
    </Framework7App>
  );
};

export default App;
