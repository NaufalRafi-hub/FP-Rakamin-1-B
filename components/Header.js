import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "grey" }}>
      <Appbar.Content
        title="Batu Gunting Kertas"
        style={{
          alignItems: "center",
          transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        }}
      />
    </Appbar.Header>
  );
};

export default Header;
