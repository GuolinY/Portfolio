import { Grid, Slide, Typography } from "@mui/material";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";

const links = (
  <Grid
    item
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={8}
  >
    <Grid item>
      <Link href="https://www.linkedin.com/in/guolinyang13/">
        <a>
          <LinkedInIcon fontSize="large" />
        </a>
      </Link>
    </Grid>

    <Grid item>
      <Link href="/CV.pdf">
        <a>
          <DescriptionIcon fontSize="large" />
        </a>
      </Link>
    </Grid>

    <Grid item>
      <Link href="mailto:guolin.yang13@gmail.com">
        <a>
          <EmailIcon fontSize="large" />
        </a>
      </Link>
    </Grid>
    <Grid item>
      <Link href="https://github.com/GuolinY">
        <a>
          <GitHubIcon fontSize="large" />
        </a>
      </Link>
    </Grid>
  </Grid>
);

export default function Home() {
  const [checked, setChecked] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("This will run after 1 second!");
    }, 5000);
    setChecked((prev) => !prev);
  }, []);

  return (
    <Layout>
      <Typography variant="h1">Guolin Yang</Typography>

      <Typography variant="h6">
        I'm a third year computing student at{" "}
        <Link href="https://www.imperial.ac.uk/">
          <a>Imperial College London.</a>
        </Link>
      </Typography>

      <Box mt={2} ref={containerRef}>
        <Slide
          direction="right"
          in={checked}
          transitionDuration={9000}
          container={containerRef.current}
        >
          {links}
        </Slide>
      </Box>
    </Layout>
  );
}
