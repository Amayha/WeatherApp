import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import { Grid, CssBaseline, Button } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

var myDate = new Date(),
  dayI = myDate.getDay();
console.log(myDate);
console.log(dayI);



/*
const days= [
  {
    day : 'Wed',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
    dayI,
  },
  {
    day : 'Tru',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
    dayI,
  },
  {
    day : 'Fri',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
    dayI,
  },
  {
    day : 'Sat',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
    dayI,
  },
  {
    day : 'Sun',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
    dayI,
  },
  {
    day : 'Mon',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
    dayI,
  },
  {
    day : 'Tue',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
    dayI,
  },
]*/


function App() {

  const [days, setDays,] = React.useState([]);

  const handleGetWeather = () => {
    console.log('get weather');
    var promise = fetch('http://api.openweathermap.org/data/2.5/forecast?q=Cali,co&APPID=79596a3b0efba5c91d3af2f7826d7a07');

    promise.then((info) => {
      console.log(info);
      return info.json();
    })
      .then((info) => {
        var list = info.list.filter((elem, index) => {
          return index % 8 === 0; // filtramos por multiplos de 8 porque cada 8 items de la lista cambia de dia
        });

        list = list.map((elem, index, array) => {
          return {
            day: moment.unix(elem.dt).format('ddd [/] D [/] MM [/]YYYY'),
            icon: `https://openweathermap.org/img/wn/${elem.weather[0].icon}.png`,
            min: Math.round( elem.main.temp_min -273.15) + '°',
            max:  Math.round( elem.main.temp_max -273.15) + '°',
          }

        });

        

        setDays(list);
        console.log(days);
      });
  }
  // un if, cuando days sea true se acciona 'days &&'
  return (
    <div>

      <Button onClick={handleGetWeather} variant="contained" color="primary">
        Get weather Info
      </Button>

      <Grid container >

        {days && days.map((item) => <Grid item md={3} key={item.day}>
          <WeatherCard
            day={item.day}
            icon={item.icon}
            min={item.min}
            max={item.max}
            dayI={item.dayI}
          />
        </Grid>)}



      </Grid>

      <CssBaseline />
    </div>

  );
}

export default App;
