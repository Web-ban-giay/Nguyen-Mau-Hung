import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
function Protect(props) {
    let Cmp = props.Cmp
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push("/resgister")

        }
    }, [])
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            // history.push("/resgister")
            history.push("/login")
        }
    }, [])
    return (
        <div>
            <Cmp />
        </div>
    )

}

export default Protect;