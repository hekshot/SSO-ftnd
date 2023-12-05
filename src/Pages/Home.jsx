import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import Register from "./Register";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              SkillBucks
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          width: "70rem",
          margin: "auto",
          marginTop: "1rem",
          fontFamily: "monospace",
          fontSize: "20px",
          textAlign: "justify",
        }}
      >
        Welcome to SkillBucks, the groundbreaking platform designed exclusively
        for college students, revolutionizing the collegiate experience. Our
        comprehensive website seamlessly integrates Academics, Fitness, and
        Events to empower students on their educational journey.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "3rem",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="study.jpg"
              alt="Study"
              style={{ height: "350px" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "monospace" }}
              >
                Academics
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "monospace" }}
              >
                At the heart of our platform is a dynamic rewards program that
                transforms academic excellence into tangible rewards. Through a
                gamified experience, students earn tokens for their outstanding
                achievements, fostering a culture of continuous learning and
                excellence. Our robust verification process ensures the
                credibility of academic accomplishments, reinforcing the
                fairness and transparency of our rewards system.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="fitness.jpg"
              alt="Fitness"
              style={{ height: "350px" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "monospace" }}
              >
                Fitness
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "monospace" }}
              >
                We believe in nurturing not just the mind but the body. Our
                platform goes beyond academics, promoting holistic well-being.
                Users can input their health data, allowing the app to calculate
                their BMI and set personalized health goals. Achieving these
                targets not only contributes to a healthier lifestyle but also
                unlocks greater token rewards, inspiring positive lifestyle
                changes.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="event.jpg"
              alt="Event"
              style={{ height: "350px" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "monospace" }}
              >
                Events
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "monospace" }}
              >
                Celebrate the vibrant college community by actively
                participating in events. Whether it's academic competitions or
                campus-wide festivities, our platform recognizes and rewards
                students for their engagement. Tokens earned through event
                participation can be redeemed for a variety of items, creating a
                sense of achievement and
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div
        style={{
          width: "70rem",
          margin: "auto",
          marginTop: "1rem",
          fontFamily: "monospace",
          fontSize: "20px",
          textAlign: "justify",
        }}
      >
        Embark on a transformative college experience with SkillBucks, where
        academic success, fitness goals, and active participation in events
        converge to create a thriving and supportive environment for every
        student.
        {/* <Link
          href="/register"
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontFamily: "monospace",
          }}
        >
          Register Now!!
        </Link> */}
        <Button
          onClick={handleOpen}
          style={{
            textDecoration: "underline",
            fontFamily: "monospace",
          }}
        >
          Register Now!!
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registration Form</DialogTitle>
        <DialogContent>
          {/* Include the RegistrationForm component */}
          <Register handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
}
