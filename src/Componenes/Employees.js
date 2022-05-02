import React from 'react';

const Employees = ({firstName, lastName, designation, age}) => {
    return (
        <div>
            Name: {firstName + " " + lastName}
            Work as: {designation}
            Age: {age} 
        </div>
    );
};

export default Employees;