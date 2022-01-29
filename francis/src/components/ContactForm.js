import React from 'react'
import './ContactForm.css'

export default class ContactForm extends React.Component {
    state = {
        name: "",
        lastname: "",
        email: "",
        status: ""
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        if(this.state.name !== "" && this.state.lastname !== "" && this.state.email !== "" ){

            const request = new XMLHttpRequest();
            
            request.onreadystatechange = function(){
                if(this.readyState === 4 && this.status === 200){
                    document.getElementById("form-messages").innerHTML  = this.response;
                }
            }
            request.open('POST', 'contacto.php');
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send("name=" + this.state.name + "&lastname=" + this.state.lastname + "&email=" + this.state.email + "&from=" + this.props.id );
            
        }else{
            document.getElementById("form-messages").innerHTML  = "Porfavor, completa todos los campos.";
        }
        
    };

    /*submitHandler = () => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            console.log(request, request.readyState);
        });
        request.open('GET', 'contacto.php');
        request.send();
    }*/

    render(){
        return (
            <>
                <form id={ this.props.id } className={ this.props.class }>
                    <div id="form-messages"></div>
                    <div className="input-row">
                        <label for="name">Nombre</label>
                        <input 
                        name="name"
                        id="name"
                        type="text"
                        value={ this.state.name }
                        onChange={e => this.change(e)} />
                    </div>
                    <div className="input-row">
                        <label for="lastname">Apellido</label>
                        <input 
                        name="lastname"
                        id="lastname"
                        type="text"
                        value={ this.state.lastname }
                        onChange={e => this.change(e)} />
                    </div>
                    <div className="input-row">
                        <label for="email">Email</label>
                        <input 
                        name="email" 
                        id="email" 
                        type="text" 
                        value={this.state.email}
                        onChange={e => this.change(e)} />
                    </div>
                    <button onClick={e => this.onSubmit(e)}>ENVIAR</button>
                </form>
            </>
        )
    }
}
