import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import React from "react";
import { Input } from "./Input";

type Props = {
    loginName: (userName: string) => boolean,
}

export const Login: React.FC<Props> = ({ loginName }) => {
    const [userName, setUname] = React.useState('');
    const dispatch = useDispatch();

    function getUname(valueName: string) {
        let result = ''
        if (loginName(valueName)) {
            setUname(valueName);
        } else {
            result = `${valueName} is bad name. Name must contain "admin"`;
        }
        return result;
    }

    return <div>
        <Input placeHolder={"Enter valid username"} inputProcess={getUname} ></Input>
        <button onClick={() => dispatch(authActions.login(userName))}>Login</button>

    </div>
} 