import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Daycard(props) {
    const classes = useStyles();


    return (

        <Card className={classes.card}>
            <Typography className={classes.title}>{props.dia.day}</Typography>
            <img src={props.dia.icon} alt='' />
            <Typography className={classes.temp} ><span>{props.dia.min}</span> {props.dia.max}</Typography>
            <Typography className={classes.info}>{props.dia.humedad}</Typography>
            <Typography className={classes.info}>{props.dia.mar}</Typography>
            <Typography className={classes.info}>{props.dia.descri}</Typography>
            <Typography className={classes.info}>{props.dia.vel}</Typography>
            <Typography className={classes.info}>{props.dia.deg}</Typography>

        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin: 20,
        marginRight: 10,
    },
    title: {
        margin: 15,
        fontSize: 30,
    },
    pos: {
        marginBottom: 12,
    },
    info: {
        margin: 15,
        fontSize: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'right',
    },
    temp:{
        margin: 15,
        fontSize: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'right',
    }
});


export default Daycard;