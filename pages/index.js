import { Grid, Slide, Tooltip, Typography } from "@mui/material";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import Zoom from "@mui/material/Zoom";

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
          <Tooltip TransitionComponent={Zoom} title="LinkedIn">
            <LinkedInIcon fontSize="large" />
          </Tooltip>
        </a>
      </Link>
    </Grid>

    <Grid item>
      <Link href="/CV.pdf">
        <a>
          <Tooltip TransitionComponent={Zoom} title="CV">
            <DescriptionIcon fontSize="large" />
          </Tooltip>
        </a>
      </Link>
    </Grid>

    <Grid item>
      <Link href="mailto:guolin.yang13@gmail.com">
        <a>
          <Tooltip TransitionComponent={Zoom} title="Email">
            <EmailIcon fontSize="large" />
          </Tooltip>
        </a>
      </Link>
    </Grid>
    <Grid item>
      <Link href="https://github.com/GuolinY">
        <a>
          <Tooltip TransitionComponent={Zoom} title="GitHub">
            <GitHubIcon fontSize="large" />
          </Tooltip>
        </a>
      </Link>
    </Grid>
  </Grid>
);

export default function Home() {
  // States for each components transition
  const [transitionName, setTransitionName] = useState(false);
  const [transitionIntro, setTransitionIntro] = useState(false);
  const [transitionLinks, setTransitionLinks] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransitionName((prev) => !prev);
    }, 500);
    setTimeout(() => {
      setTransitionIntro((prev) => !prev);
    }, 1000);
    setTimeout(() => {
      setTransitionLinks((prev) => !prev);
    }, 1500);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <Slide direction="down" in={transitionName}>
          <Typography variant="h1">Guolin Yang</Typography>
        </Slide>
        <Slide direction="right" in={transitionIntro}>
          <Typography variant="h6" mb={3}>
            I&apos;m a third year computing student at{" "}
            <Link href="https://www.imperial.ac.uk/">
              <a>Imperial College London.</a>
            </Link>
          </Typography>
        </Slide>

        <Slide direction="up" in={transitionLinks}>
          {links}
        </Slide>
      </Layout>
    </div>
  );
}
