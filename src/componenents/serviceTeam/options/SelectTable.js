import React, {useState} from 'react'

const DropMenu = () => {

        const [values, setValues] = useState('');
        const [loading, setLoading] = useState(false);
      
        const handleChange = (event) => {
          const auxValues = { ...values };
          auxValues[event.target.name] = event.target.value;

          setValues(auxValues);
        };
      
        const handleSubmit = event => {
            event.preventDefault();
            setLoading(true);
            alert('A mesa selecionada foi: ' + values.mesa);     
            console.log(values)
            setLoading(false);
            
        
        };


 return (
        <form className ='menu-mesas'onSubmit={handleSubmit}>
          <label>
            SELECIONE A MESA:
            <br/><select name= 'mesa' onChange={handleChange}>
              <option value="mesa 1" name= 'mesa' >mesa 1</option>
              <option value="mesa 2" name= 'mesa' >mesa 2</option>
              <option value="mesa 3" name= 'mesa' >mesa 3</option>
              <option value="mesa 4" name= 'mesa' >mesa 4</option>
            </select>
          </label>
          <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>       
           </form>
 )

}



export default DropMenu; 