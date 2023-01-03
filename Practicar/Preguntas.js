/* Cuáles son los métodos de sequelize?
    - El método Model.create() es una forma abreviada de crear una instancia.
    - El método Model.findAll() es para leer la tabla completa de la base de datos.
    - El método Model.findOne obtiene la primera entrada que encuentra.
    - El método Model.bulkCreate para permitir la creación de varios registros a la vez.
    - El método Model.findOrCreate creará una entrada en la tabla a menos que pueda encontrar una que cumpla las opciones de consulta.
*/

/* Como se busca un ID con sequelize?
    - El método Model.findById() sirve para buscar la entrada con ese id.
*/

/* Que es primary key?
    - La primary key es la forma en la que las entrada del modelo pueden relacionarse con otras entradas de otros modelos.
*/

/* Que es una ORM?
    - Una ORM  es la que permite convertir los datos de objectos en un formato correcto para poder guardar la información en una base de datos. El ejemplo de esto seria Sequelize.
*/

/* Que es Express?
    - Express es un framework de backend para Node.js.
*/

/* Que diferencia hay entre promesas y async await?
    - Más que nada la diferencia en a la hora de la sintaxis ya que ambas cumplen el mismo funcionamiento, las promesas se declaran como una nueva instancia de la clase Promise y en async await este paso se saltea y solo se le agrega a la funcion las dos palabras clave (async y await). y la otra diferencia es en la forma de tomar errores, en promesas se usan los metodos .then() y .catch() y en async await se utiliza trycatch. 
*/

/* Que son los Middleware?
    - Un Middleware tiene como propósito tomar dos piezas de la aplicación y conectarlas, la información la obtiene de otra función de código para luego enviársela a una función distinta más. Un ejemplo en el que haya aplicado esto seria en el store, donde se utiliza Redux-Thunk como middleware.
*/

/* Que es Redux?
    - Redux es una librería de JavaScript que te permite manejar el estado de una aplicación. Un ejemplo seria en el reducer con los estados globales.
*/

/* Que es Redux Thunk?
    - Redux Thunk es un middleware que nos permite retornar funciones, en lugar de solo acciones en Redux. Esto nos permite trabajar con acciones retrasadas y promesas.
*/

/* Donde se conectan el Backend y el Frontend?
    - Se conectan en las actions del Frontend, mas especificamente en la funcion getPokemons y lo hace mediante un axios.
*/

/* Que es axios y fetch?
    - Son librerías que nos permiten hacer sencillas las operaciones como cliente HTTP, por lo que podremos configurar y realizar solicitudes a un servidor y recibiremos respuestas fáciles de procesar.
*/

/* Cual es la diferencia entre los componentes de clase y los funcionales?
    - Un componente de clase es una clase que extiende la clase Component de React. Este nos permite guardar su estado y controlar lo que ocurre durante su ciclo de vida, exponiéndonos métodos como componentDidMount o componentWillUnmount.
    - Un componente funcional es una función que recibe el objeto Props y retorna. Por eso tienen que utilizar React Hooks (useState para el estado, useEffect para los ciclos de vida) para imitar las cualidades de un componente de clase.
*/

/* Que son los Hooks?
    Son los que permiten usar el estado y otras características de React sin necesidad de un componente de clase.
        - useState: Es el que nos permite agregar un estado local a un componente funcional y cambiar ese estado.
        - useEffect: Es el que nos permite ejecutar funciones después de hacer render.
        - useSelector: Es el que nos permite extraer datos del store.
        - useDispatch: Es el que nos permite acceder a los datos del store para actualizar algo.
*/

/* Ciclo de vida de un componente:
    El ciclo de vida se puede dividir en 3 fases, el montado, actualización y desmontado del componente. 
    - Montado
        La primera fase ocurre solo una vez por componente cuando este se crea y monta en la UI.
            . constructor(props): Este método se ejecuta cuando se instancia un componente. Nos permite definir el estado, métodos, propiedades del componente.
            . componentWillMount(): Este método se ejecuta cuando el componente se está por renderizar. Nos permite modificar el estado del componente sin causar que renderice dos veces el componente.
            . render(): En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente.
            . componentDidMount(): Este último método de la fase de montado se ejecuta una vez el componente se renderizó en el navegador, nos permite interactuar con el DOM o las otras APIs del navegador.
    - Actualización
        Sucede cuando algún dato del componente se modifica, por lo que requiere que la UI se vuelva a generar para representar ese cambio de datos.
            . componentWillReceiveProps(nextProps): Este método se ejecuta inmediatamente después que el componente reciba nuevas propiedades y permite actualizar el estado para que refleje el cambio.
            . shouldComponentUpdate(nextProps, nextState): Este método se ejecuta antes de empezar a actualizar un componente, cuando llegan las nuevas propiedades y el nuevo estado. Nos permite validar que estos datos sean diferentes de los anteriores dependiendo de si queremos volver a renderizar.
            . componentWillUpdate(nextProps, nextState): Una vez el método anterior devolvió true se ejecuta este método, acá es posible realizar cualquier tipo de preparación antes de que se actualice la UI.
            . render(): Al igual que en el montado acá se va a generar la UI, esta vez con los datos que hayan cambiado.
            . componentDidUpdate(prevProps, prevState): Esta última parte de la actualización de un componente ocurre justo después de que se renderiza en el DOM nuestro componente. acá es posible interactuar con el DOM y cualquier API de los navegadores.
    - Desmontado
        Esta última fase consiste en un solo método que se ejecuta antes de que un componente se desmonte de la UI de nuestra aplicación.
            . componentWillUnmount(): Este único método de la fase de desmontado nos permite realizar cualquier tipo de limpieza antes de remover el componente.
*/

/* Recorrido del get:
    - Inicia en los controllers donde busca todos los pokemons de la api y de la db.
    - Esa funcion es importada a las routes donde genera una ruta en el back para poder enviar la data de todos los pokemons.
    - De ahi, desde las actions en el front se conecta la ruta generada en el back y trae la data de todos los pokemons.
    - En el reducer se el dato de las actions y se guarda todo en el estado global.
    - Para que se importe al home y mediante el useSelector traer ese estado para luego pasarle la data necesaria al componente Card como props.
    - Para que este componente tome los datos y pueda renderizarse en la ruta home del front.
*/