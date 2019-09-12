import React from 'react';
import { Card, CardContent, makeStyles, Button } from '@material-ui/core';




function WeatherCard(props) {
    const classes = useStyles();
    //var today;
    /* switch (props.dayI) {
 
         case 1:
             today = 'Mon'
             break;
 
         case 2:
             today = 'Tue'
             break;
 
         case 3:
             today = 'Wed'
             break;
 
         case 4:
             today = 'Tru'
             break;
 
         case 5:
             today = 'Fri'
             break;
 
         case 6:
             today = 'Sat'
             break;
 
         case 7:
             today = 'Sun'
             break;
 
 
 
 
     }*/


    const handleClick = () => {
        props.action(props.day);
    }



    /*
    if (today === props.day)
        return (<Card>
            <CardContent className={classes.content}>
                <h3 className={classes.titleB}>{props.day}</h3>
                <img src={props.icon} alt='' />
                <p className={classes.info}>
                    <span>{props.min}</span> {props.max}
                </p>
            </CardContent>
        </Card>
        );
    else*/


    return (<Card>
        <CardContent className={classes.content}>
            <h3 className={classes.title}>{props.day}</h3>
            <img src={props.icon} alt='' />
            <p className={classes.info}>
                <span>{props.min}</span> {props.max}
            </p>
            <Button className={classes.button} onClick={handleClick} >Ver mas</Button>
        </CardContent>
    </Card>
    );


}

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: 25,
        margin: 0,
    },
    titleB: {
        fontSize: 25,
        margin: 0,
        color: 'red',

    },
    img: {

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentB: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 20,
    },
    info: {
        margin: 0,
        fontSize: 20,
        color: theme.palette.grey[300],

        '& span': {
            color: theme.palette.grey[500],
        }
    },

    button: {
        margin: theme.spacing(1),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },


}));

export default WeatherCard;
