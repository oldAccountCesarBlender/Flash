import Appbar from "../src/components/Appbar";
import Main from "../src/layouts/Main";
import Typography from "@material-ui/core/Typography";
import { Box, Container, TextField } from "@material-ui/core";
import Link from "next/link";
import Button from "../src/components/Button";
import { useContext, useState } from "react";
import { GlobalContext } from "../src/provider/context";

export default function Index() {
  const [userName, setUserName] = useState("");
  const context = useContext(GlobalContext);

  return (
    <Main>
      <Appbar />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          color="initial"
          style={{ marginTop: 20, textAlign: "center" }}
        >
          Search your favorite GitHub account
        </Typography>
        <Box
          style={{
            boxShadow: context.darkTheme
              ? ""
              : "5px 5px 5px rgba(21, 21, 21, .3), -5px -5px 5px rgba(255, 255, 255, .5)",
            background: "rgb(225, 225, 225)",
            color: "#3D00EA",
            borderRadius: 20,
            padding: 20,
            marginTop: 40,
            minWidth: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="initial">
            Enter here the <b>user name</b>
          </Typography>
          <br />
          <TextField
            label="User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            variant="outlined"
          />
          <br />
          <Link href={"/user/" + userName}>
            <a style={{ textDecoration: "none", width: "100%" }}>
              <Button block>SEARCH USER</Button>
            </a>
          </Link>
        </Box>
      </Container>
    </Main>
  );
}
