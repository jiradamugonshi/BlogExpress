# BlogExpress
A Restful blog website on Node.js paltform where we are performing CRUD operations

## Technologies
Node.js, Express.js framework, Mongoose (ODM), MongoDB and Visual Studio as IDE

## Structure
The project was organised around these main folders:
  * connections: the folder holds the module that performs the connection to the database.
  * routes: they are mapping the endpoints to the actions in the controllers.
  * controllers: they hold the logic of how the app handles the incoming requests.
  * views: they are the UI part consisting essentially on a rendered HTML docuement via a view egine.
  * models: they wrap the data structure of a MongoDB document, thus creating an interface to query, create, update or delete the records.

## Database
The database is hosted on [mLab](https://mlab.com/)
