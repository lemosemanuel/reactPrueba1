import './App.css';

// creo dos componentes
// uno esta en mensaje.js
// asi que lo importo
import Mensaje from './mensaje';
import Suma from './mensaje';

const Description=()=>{
  return <strong> estamos trabajando en </strong>
}


function App() {
  const mensaje= "hola mundo"
  const a= 2
  const b= 4
  return (
    <div className="App">
      {mensaje + " sumo esto"}
      <Mensaje parametro1="estamos trabajando" color="red"></Mensaje>
      <Description />
      <div>
        <p> El rsultado es:</p>
        {Suma(a,b)}
      </div>
      {+new Date()}
    </div>
  );
}
// es lo mismo que 
// const App=()=> {
//   return (
//     <div className="App">
//       hola mundo
//     </div>
//   );
// }

export default App;
