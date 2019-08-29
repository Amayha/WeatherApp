import React from 'react';
import {Card, CardContent, makeStyles} from '@material-ui/core';



function WeatherCard(props) {
    const classes = useStyles();

  return ( <Card>
      <CardContent className={classes.content}>
          <h3 className= {classes.title}>{props.day}</h3>
          <img src={props.icon} alt=''/>
          <p className={classes.info}>
             <span>{props.min}</span> {props.max}
          </p>

      </CardContent>
  </Card>

  );
}

const useStyles = makeStyles(theme => ({
    title:{
        fontSize: 25,
        margin: 0,
    },
    img:{

    },
    content:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        margin: 0,
        fontSize: 20,
        color: theme.palette.grey[300],

        '& span': {
            color: theme.palette.grey[500],
        }
    }

}));

export default WeatherCard;
