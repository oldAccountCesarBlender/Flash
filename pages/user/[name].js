import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Main from "../../src/layouts/Main";
import Appbar from "../../src/components/Appbar";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { LocationOn, Share, GitHub, Twitter } from "@material-ui/icons";
import Link from "next/link";
import { GlobalContext } from "../../src/provider/context";

function User() {
  const router = useRouter();
  const { name } = router.query;
  const [user, setUser] = useState("");
  const context = useContext(GlobalContext);

  const fetchName = async () => {
    try {
      let request = await fetch("https://api.github.com/users/" + name);
      request = await request.json();
      setUser(request);
      if (request.message) {
        alert(request.message);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchName();
  }, [name]);

  return (
    <Main>
      <Appbar />

      <div
        style={{
          width: "100%",
          minHeight: "89vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            minHeight: 400,
            width: 400,
            marginTop: 60,
            marginBottom: 20,
            boxShadow: context.darkTheme
              ? ""
              : "5px 5px 5px rgba(21, 21, 21, .3), -5px -5px 5px rgba(255, 255, 255, .5)",
            borderRadius: 20,
            background: "rgb(225, 225, 225)",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={user.avatar_url}
              width={100}
              height={100}
              style={{
                position: "absolute",
                marginTop: -50,
                borderRadius: "50%",
                border: "rgb(235, 235, 235) solid 4px",
                background: "rgb(235, 235, 235)",
              }}
            />
            <div style={{ marginBottom: 50 }} />
            <Typography variant="h4">{user.login}</Typography>
            <Typography
              variant="body1"
              style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}
            >
              {user.bio}
            </Typography>

            <List style={{ width: "100%" }}>
              <ListItem>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText>
                  {user.location || "No location added"}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Share />
                </ListItemIcon>
                <ListItemText>{user.followers + " Followers"}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GitHub />
                </ListItemIcon>
                <ListItemText>{user.public_repos + " Repos"}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Twitter />
                </ListItemIcon>
                <ListItemText>
                  {user.twitter_username || "No twitter account added"}
                </ListItemText>
              </ListItem>
            </List>
            <CardActions>
              <ButtonGroup style={{ display: "flex" }}>
                <Link href="/">
                  <a style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="primary">
                      Go back
                    </Button>
                  </a>
                </Link>
                <Link href={user.html_url || "#"}>
                  <a style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ marginLeft: 10 }}
                    >
                      Go to github profile
                    </Button>
                  </a>
                </Link>
              </ButtonGroup>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </Main>
  );
}

export default User;
