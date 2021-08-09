import React from 'react';

import './Form.css';
const Form = ({buttons, users}) => {

    
    return ( <form >
        <div className="row">
            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" name="name" value={users.currentUser.name} id="nome" onChange={buttons.updateField} placeholder="Digite o nome.." />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" value={users.currentUser.email} id="email" onChange={buttons.updateField} placeholder="Digite o e-mail.."/>
            </div>
        </div>
        <div className="row">
            <div className="button-group">
                <button className="button btn-save" onClick={buttons.save}>Salvar</button>
                <button className="button btn-cancel" onClick={buttons.clear}>Cancelar</button>
            </div>
        </div>
    </form> );
}
 
export default Form;