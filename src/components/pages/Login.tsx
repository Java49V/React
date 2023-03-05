import { authActions } from "../../redux/authSlice";
import {useDispatch} from 'react-redux'
import { Input } from "../Input";
import React from "react";
import {AuthService} from '../../service/AuthService';
import { LoginForm } from "../forms/LoginForm";
export const Login: React.FC = ()=>{
    const dispatch = useDispatch();
    //TODO 
    return <div>
        {/* TODO */}
        <LoginForm></LoginForm>
        </div>
}