import { Box, Link, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  articleImge: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ArticleMiniature = ({ title, img, resume, category, link }) => {
  const classes = useStyles();

  return (
    <Paper sx={{ borderRadius: "0px", boxShadow: "0px 0px 0px" }}>
      <a
        href={link}
        style={{
          textDecoration: "none",
        }}
      >
        <Box>
          <img src={img} alt="" className={classes.articleImge} />
        </Box>

        <Typography
          sx={{
            "&:hover": { color: "#f97316" },
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
        >
          {title}
        </Typography>
      </a>
      <Link href="/" sx={{textDecoration: "none"}}>
        <Typography variant="h7" color="secondary">{category}</Typography>
      </Link>
      <Typography sx={{ fontSize: "0.875rem" }}>{resume}</Typography>
    </Paper>
  );
};

export default ArticleMiniature;
