import './employees-list-item.scss';

const EmployeesListItem = ({name, age, status, work}) => {
    return (
        <li className="employees-item">
            <span className="employees-item__element">{name}</span>
            <span className="employees-item__element">{age}</span>
            <span className="employees-item__element">{status}</span>
            <span className="employees-item__element">{work}</span>
        </li>
    )
}

export default EmployeesListItem;