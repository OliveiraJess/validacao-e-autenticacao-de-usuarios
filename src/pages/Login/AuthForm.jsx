import React from 'react';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';


function AuthForm() {

    return (
        <Form >
            <div className="text-center pb-4">
                <h1>Titulo Form Login</h1>
            </div>

            <FormGroup>
                <Label for="Email">Email</Label>
                <Input/>
            </FormGroup>
            
            <FormGroup>
                <Label for="Senha">Senha</Label>
                <Input required />
            </FormGroup>
            
            <FormGroup >
                <Input type="checkbox" />
                <Label for="Lembrar de mim">Lembrar de mim</Label>
            </FormGroup>
            {/* <hr /> */}
            <Button
                size="lg"
                className="bg-gradient-theme-left border-0"
                block
                >
                
            </Button>
            <div >
                <Link>Esqueceu sua senha?</Link>
                <Link >Não possui uma conta? Cadastre-se</Link>
            </div>
            {/* <hr /> */}
            <span className='copyRight'>Copyright &copy; Jéssica </span>
        </Form>);

}

export default AuthForm;