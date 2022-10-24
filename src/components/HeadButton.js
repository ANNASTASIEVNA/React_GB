
import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const HeadButton = styled(Button)((props) => {
    console.log(props);
    return `
    border-radius: 10px;
    `
})


export const ButtonHead = (props) => {

    return (
        <Link to={props.Link}>
            <HeadButton type="submit" variant="contained" size="large" >{props.children ? props.children : 'default'}</HeadButton>
        </Link>
    )
}
export default ButtonHead;