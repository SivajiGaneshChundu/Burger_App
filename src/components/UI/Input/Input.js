import React  from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses= [classes.inputElement];
  if(props.invalid && props.shouldValidate && props.touched){
     // console.log(props.invalid);
      inputClasses.push(classes.Invalid);
  }
 // console.log(inputClasses.join(''));
  switch(props.elementType){
      case('input'):
              inputElement = <input 
              className={inputClasses.join('')} 
              {...props.elementConfig}
               value={props.value}
               onChange={props.changed}/>;
              break;
       case('textarea'): 
            inputElement = <textarea 
            className={inputClasses.join('')} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}/>;
            break;
       case('select'):
            inputElement = (
                <select onChange={props.changed}>
                className={inputClasses.join('')}
                value={props.value}>
                {props.elementConfig.options.map(opt => (
                <option key={opt.value} value= {opt.value}>{opt.displayValue}</option>
                )   
                )}
                </select>
            );
            break;
       default: 
            inputElement =<input className={inputClasses.join('')} {...props.elementConfig} value={props.value}/>
  }


    return(
        <div className={classes.Input}>
        <label className= {classes.Label}>{props.label}</label>
        {inputElement}
        </div>    
    );
}
   


export default input;