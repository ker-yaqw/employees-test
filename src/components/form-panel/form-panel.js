import Checkbox from '../checkbox/checkbox';
import CounterInput from '../counter-input/counter-input';
import DropdownInput from '../dropdown-input/dropdown-input';
import Switch from '../switch/switch';
import './form-panel.scss';

const FormPanel = () => {
    return (
        <form className="form-panel" action="#" method="#">
            <fieldset className="form-panel__fieldset">
                <legend className='form-panel__legend'>Insert Row</legend>
                <input className='form-panel__input-name' 
                       type="text"
                       name="name"
                       placeholder="Name"
                       maxLength={14}></input>
                <CounterInput/>           
                <DropdownInput/>
                <Checkbox/>
                <button className='form-panel__submit'
                         type="submit">
                        Insert
                </button>
                <Switch/> 
                <button className='form-panel__delete'
                        type="submit">
                        Delete
               </button>
            </fieldset>
        </form>
    )
}

export default FormPanel;