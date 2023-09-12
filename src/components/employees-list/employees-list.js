import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = ({data}) => {
    const elements  = data.map((item => {
        const {id, ...itemProps} = item;
        return(
            <EmployeesListItem 
                key={id}
                {...itemProps}
            />
        )
    }))
    return (
        <ul className="employees-list">
            <li className="employees-info">
                <span className="employees-info__element">Name</span>
                <span className="employees-info__element">Age</span>
                <span className="employees-info__element">Subcription</span>
                <span className="employees-info__element">Employment</span>
            </li>
            {elements}
        </ul>
    )
}

export default EmployeesList;