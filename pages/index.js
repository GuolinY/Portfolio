import { Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <Layout>
      <Typography variant="h1">Guolin Yang</Typography>

      <Typography variant="h6">
        I'm a third year computing student at{" "}
        <Link href="https://www.imperial.ac.uk/">
          <a>Imperial College London.</a>
        </Link>
      </Typography>

      <Box mt={2}>
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
              <LinkedInIcon fontSize="large" />
            </Link>
          </Grid>

          <Grid item>
            <Link href="/CV.pdf">
              <DescriptionIcon fontSize="large" />
            </Link>
          </Grid>

          <Grid item>
            <Link href="mailto:guolin.yang13@gmail.com">
              <EmailIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://github.com/GuolinY">
              <GitHubIcon fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
