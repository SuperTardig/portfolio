
import * as React from "react";
import Paper from '@mui/material/Paper';
import { Grid } from "@material-ui/core";
import theme from "../Theme.tsx";
import { Typography } from "@mui/material";

function Project() {
	return (
    <Grid container spacing={2} direction="column">
      <div className="mb-16">
        <Paper sx={{p: 1,margin: 'auto',maxWidth: 1000,flexGrow: 5,backgroundColor: ({ }) =>  theme.palette.primary.main}}>
          <Grid item>
              <img alt="complex" src="/static/images/grid/complex.jpg" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Ft_IRC
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
              The goal of this 42 school project is to create a simple and barebone IRC (Internet Relay Chat) server. This project teaches us a lot about socket programming and also deepens our knowledge of C++. This is another team project of the 42 school main cursus. I mainly worked on the channels and the commands that are related to the channels. We used the RFC 1459 standard to base our IRC server on.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className="mb-16">
        <Paper sx={{p: 1,margin: 'auto',maxWidth: 1000,flexGrow: 5,backgroundColor: ({ }) =>  theme.palette.primary.main}}>
          <Grid item>
              <img alt="complex" src="/static/images/grid/complex.jpg" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className="mb-16">
        <Paper sx={{p: 1,margin: 'auto',maxWidth: 1000,flexGrow: 5,backgroundColor: ({ }) =>  theme.palette.primary.main}}>
          <Grid item>
              <img alt="complex" src="/static/images/grid/complex.jpg" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>

    </Grid>  
	);	
}

export default Project;