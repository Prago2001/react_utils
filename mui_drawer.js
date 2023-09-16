import React from "react";
import Drawer from "@material-ui/core/Drawer";

export default function DrawerTest() {
  const [s, ss] = React.useState(false);
  return (
    <div>
      <div style={{ backgroundColor: "pink" }}>
        This should be above the drawer...
        <button onClick={() => ss(!s)}>Click</button>
      </div>
      <div
        id="drawer-container"
        style={{
          position: "relative",
          width: "100%",
          height: "400px"
          // backgroundColor: "green"
        }}
      >
        <span>Text</span>
        <Drawer
          anchor="left"
          open={s}
          onClose={() => {}}
          PaperProps={{ style: { position: "absolute" } }}
          hideBackdrop
          ModalProps={{
            container: document.getElementById("drawer-container"),
            style: { position: "absolute" }
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "blue"
            }}
          >
            Drawer here
          </span>
        </Drawer>
      </div>
    </div>
  );
}
