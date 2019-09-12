import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import { Grid, CssBaseline, Button } from '@material-ui/core';
import moment from 'moment';
import DayCard from '../../components/DayCard/DayCard'
//import 'moment/locale/es';

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

  const prueba = (fecha) => {
    days.forEach(element => {
      if (element.day === fecha) {
        console.log('encontrado' + fecha + ' ' + element.day);
        setDia(element);

      }
    });

  }

  const [days, setDays,] = React.useState([]);
  const [dia, setDia] = React.useState({});
  console.log(dia);

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
            min: Math.round(elem.main.temp_min - 273.15) + '°',
            max: Math.round(elem.main.temp_max - 273.15) + '°',
            humedad: Math.round(elem.main.humidity) + '%',
            mar: Math.round(elem.main.sea_level),
            descri: (elem.weather[0].description),
            vel: (elem.wind.speed) + '  Kms/H',
            deg: (elem.wind.deg) + '°',
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

      <div>
        <Grid container >

          {days && days.map((item) => <Grid item md={2} key={item.day}>
            <WeatherCard
              day={item.day}
              icon={item.icon}
              min={item.min}
              max={item.max}
              dayI={item.dayI}
              action={prueba}
            />
          </Grid>)}
        </Grid>
      </div>
      <div>
        {dia &&
        <DayCard

          dia={dia}
        />}

      </div>


      <CssBaseline />
    </div>

  );
}

export default App;
