import { Input } from './components/Input';
import React from 'react';



function App() {
  const properties: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap"
  }
  const [colors,setcolors] = React.useState<string[]>([])
function creatingDivs(value:string): string {
    const colors: string[] = value.split("#") ;// red#green => ['red,'green']
    setcolors(colors.slice());
    return '';
}
function getDivs(colors: string[]): JSX.Element[]{
  return colors.map(color => <div style={{width:"5vw" , height:"5vh",
backgroundColor:color}}></div>)
}

return <section style={{display: "flex",flexDirection:"column"}}>
   <Input placeHolder={'enter color separated by #'} inputProcess={creatingDivs}/> 
    <section style={properties}>
   {getDivs(colors)}
    </section>

  </section>

}
export default App;