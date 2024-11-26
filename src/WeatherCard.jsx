import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PropTypes from 'prop-types';
import "./WeatherCard.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function WeatherCard({report}){

  let Rainy="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRpSm4I3d_YPTRKhwOm8Ro_Di2o3PQYViYg&s";
  let Hot="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo12pHoOgD5krbTYivP_zldlfK_rnU795Lhg&s";
  let Cold="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
      <>
        <div className='WeatherCard'>
            <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={report.Humidity >80 ? Rainy:report.Temp>20?Hot:Cold}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <center>{report.Location} &nbsp; {report.Humidity >80 ?<ThunderstormIcon/> :report.Temp>20?<WbSunnyIcon/>:<AcUnitIcon/>}</center>
          </Typography>
          <Typography variant="body2"  className='Paragraph'>
            <p>Temperature : {report.Temp} &deg; C</p>
            <p>Temperature-Minimum : {report.Temp_min} &deg; C</p>
            <p>Temperature-Maximum : {report.Temp_max} &deg; C</p>
            <p>Feels_Like : {report.Feels_like} &deg; C</p>
            <p>Humidity : {report.Humidity} &deg; C</p>
            <p>Pressure : {report.Pressure} Bars</p>
            <p>Weather is <i>{report.Weather}y</i> and Max temperature is {report.Temp_max}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
      </>
    );
}

WeatherCard.propTypes={
  report:PropTypes.string.isRequired,
}