import { Button, Switch } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import { GlobalContext } from "../provider/context";
import Link from "next/link";

function Appbar() {
  const context = useContext(GlobalContext);

  return (
    <div>
      <AppBar
        position="fixed"
        color="default"
        style={{
          background: context.darkTheme ? "#212121" : "white",
          boxShadow: "0 3px 3px rgb(21, 21, 21, .1)",
        }}
      >
        <Toolbar>
          <Link href="/">
            <a
              style={{
                display: "flex",
                textDecoration: "none",
                alignItems: "center",
              }}
            >
              <img src="/favicon.png" width={50} style={{ marginRight: 20 }} />
              <Typography
                variant="h6"
                style={{ color: context.darkTheme ? "#fff" : "#3D00EA" }}
              >
                Flash
              </Typography>
            </a>
          </Link>
          <div
            style={{
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography
              variant="h6"
              style={{ color: context.darkTheme ? "#fff" : "#3D00EA" }}
            >
              Dark Theme
            </Typography>
            <Switch
              checked={context.darkTheme}
              onChange={() => {
                console.log(JSON.stringify(context));
                context.toggleTheme(!context.darkTheme);
              }}
              inputProps={{ "aria-label": "" }}
              color="primary"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Appbar;
