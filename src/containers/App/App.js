import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import { Grid, CssBaseline} from '@material-ui/core';

const days= [
  {
    day : 'Wed',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
  },
  {
    day : 'Tru',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
  },
  {
    day : 'Fri',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
  },
  {
    day : 'Sat',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
  },
  {
    day : 'Sun',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
  },
  {
    day : 'Mon',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
  },
  {
    day : 'Tue',
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: '70°',
    max:'90°',
  },
]

function App() {
  return (
    <div>
      
      <Grid container >

        {days.map((item)=>  <Grid item md={1}>
          <WeatherCard
          day = {item.day}
          icon= {item.icon}
          min= {item.min}
          max= {item.max}
          />
          </Grid>)}

         

      </Grid>

      <CssBaseline/>
    </div>
   
  );
}

export default App;
