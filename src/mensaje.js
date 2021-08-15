const Mensaje= (props)=>{
    console.log(props)
    return <h1 style={{color:props.color}}>{props.parametro1}</h1>
}
const Suma = (a,b)=>{
    return <h1> (a+b)</h1> 
    }
//ejemplo de componente 
// const Avatar= ({src, size})=>{
//     <img className={size ? ""} src={src} />
// }

export default Mensaje