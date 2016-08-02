/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/1/16.
 */

import express from 'express';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import {indexRoute} from './src/routes';
import {dbRoute} from './src/routes/api';

//configuration
const app = express();
app.engine('.hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('port', process.env.PORT || '1234');

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
//resources
app.use('/', indexRoute);
app.use('/api/databases', dbRoute);

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' + app.get('port'));
});
