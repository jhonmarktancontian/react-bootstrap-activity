import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const styles = {
    
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

const Main = () => {

    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [operation, setOperation] = useState();
    const [result, setResult] = useState();
    
    const calculate = () => {

        let num1 = parseFloat(input1);
        let num2 = parseFloat(input2);

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Invalid input')
        } else if (operation === 'add') {
            setResult(`The result is: ${num1 + num2}`)
        } else if (operation === 'substract') {
            setResult(`The result is: ${num1 - num2}`)
        } else if (operation === 'multiply') {
            setResult(`The result is: ${num1 * num2}`)
        } else if (operation === 'divide') {
            if(num1 === 0) {
            setResult('Undefined')
            } else {
                setResult(`The result is: ${num1 / num2}`)
            }
        } else{setResult('Select an operation')}
    }

    const reset = () => {
      setInput1('');
      setInput2('');
      setOperation('');
      setResult('');
    };

    return (
        <div style={styles.container}>
          <row>
            <Form.Control
                className='mb-2'
                type='text'               
                placeholder='Enter number'
                onChange={ (e) => setInput1(e.target.value)}
            />

            <Form.Control
                className='mb-2'
                type='text'
                placeholder='Enter number'
                onChange={ (e) => setInput2(e.target.value)}
            />

            <Form.Select className='mb-2' value={operation} onChange={ (e) => setOperation(e.target.value)}>
                <option>Select menu</option>
                <option value='add'>Add</option>
                <option value='substract'>Subtract</option>
                <option value='multiply'>Multiply</option>
                <option value='divide'>Divide</option>
            </Form.Select>

            <Button onClick={calculate}>Calculate</Button>
            <Button className="ms-2" variant="secondary" onClick={reset}>
              Reset
            </Button>

            <p className="mt-2">{result}</p>    
            </row>  
          
        </div>
    )
}

export default Main;