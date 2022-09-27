import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

function AuthFormRegist() {


    return (
        <Form >
            <div className="text-center pb-4">
                <h1>Titulo Form Register</h1>
            </div>

            <FormGroup>
                <Label for="name">Nome</Label>
                <Input />
            </FormGroup>
            
            <FormGroup>
                <Label for="sobrenome">Sobrenome</Label>
                <Input />
            </FormGroup>
            
            <FormGroup >
                <Label for="phone">Telefone</Label>
                <Input/>
            </FormGroup>
            
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input required />
            </FormGroup>
           
            <FormGroup>
                <Label for="Senha">Senha</Label>
                <Input  required />
            </FormGroup>
           
            <FormGroup>
                <Label for="confirmeSenha">Confirmação de senha</Label>
                <Input  required />
            </FormGroup>
        
            <FormGroup className='lembrarSenha'>
                <Input type="checkbox" required name="termos"  />
                <Label for="termoDeclaracao">
                    Declaro que li e concordo com os <Link>termos e políticas de privacidade</Link>
                </Label>
           
               
            </FormGroup>


            <Button
                size="lg"
                className="bg-gradient-theme-left border-0"
                block
            >
            </Button>
            <Link>Já possui conta</Link>
            {/* <hr /> */}
            <span>Copyright &copy; Jéssica </span>
        </Form>)

};

export default AuthFormRegist;