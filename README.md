# Astro Factory

### API REST creada con express a través de una base de datos gestionada con MongoDB.

<br>

### La api tendrá los siguientes endpoints:

<br>

- POST /user/register -> recibe en el body las credenciales name, username y password.

- POST /user/login -> recibe en el body las credenciales username y password.

- GET /astro -> responde con una lista de los astros que se encuentran en esa colección.

- GET /astro/:idAstro -> responde con un objeto con todas las propiedades del que corresponda con esta id.

- DELETE /astro/:idAstro -> responde con el objeto que corresponda con esta id y lo borra de la base de datos.

- POST /astro/create -> responde con el objeto que el usuario ha creado y lo genera en la base de datos.

- PUT /astro/edit/:idAstro -> responde con el objeto que el usuario ha editado y lo reescribe en la base de datos.

<br>

### Scripts en el package.json:

<br>

- "start": "node src",
- "start-dev": "nodemon src -q",
- "prepare": "husky install",
- "test": "jest --watchAll=false",
- "test-coverage": "npm run test -- --coverage --watchAll=false"
