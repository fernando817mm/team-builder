import React, { useState } from 'react';
import Member from './Member';

const initialFormValues = {
    name: '',
    email: '',
    role: ''
}

const Form = (props) => {

    const [ teamMember, setTeamMember ] = useState([]);

    const [ formValue, setFormValue ] = useState(initialFormValues);

    const updateForm = (inputName, inputValue) => {
        setFormValue({ ...formValue, [inputName]: inputValue });
    }

    const change = e => {
        const { name, value } = e.target;
        updateForm(name, value);
    }

    const submitForm = e => {
        e.preventDefault();
        const newMember = {
            name: formValue.name.trim(),
            email: formValue.email.trim(),
            role: formValue.role
        }

        if(!newMember.name || !newMember.email || !newMember.role) return

        setTeamMember([...teamMember, newMember]);
        setFormValue(initialFormValues);
    }

    return (
        <div>
            <form onSubmit = {submitForm}>
                <div>
                    <label htmlFor = 'name'>Name: </label>
                    <input
                        type = 'text'
                        id = 'name'
                        name = 'name'
                        onChange = {change}
                        value = {formValue.name}
                    />
                </div>
                <div>
                    <label htmlFor = 'email'>Email: </label>
                    <input
                        type = 'email'
                        id = 'email'
                        name = 'email'
                        onChange = {change}
                        value = {formValue.email}
                    />
                </div>
                <div>
                    <label htmlFor = 'role'>Role: </label>
                    <select
                        id = 'role'
                        name = 'role'
                        onChange = {change}
                        value = {formValue.role}
                    >
                        <option value = ''>--Select--</option>
                        <option value = 'Backend Engineer'>Backend Engineer</option>
                        <option value = 'Frontend Engineer'>Frontend Engineer</option>
                        <option value = 'Designer'>Designer</option>
                    </select>
                </div>
                <button type = 'submit'>Submit</button>
            </form>

            {
                teamMember.map((e, idx) => {
                    return <Member key = {idx} name = {e.name} email = {e.email} role ={e.role}/>
                })
            }

        </div>
    )
}

export default Form;