import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckAuthentication } from "../firebase/firebaseMethod";

function ProtectRoutes({ Component }) {


    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        CheckAuthentication()
        // setLoader(true)
            .then((uid) => {
                console.log(uid, 'User Logged in')
                // setLoader(false)

            })
            .catch((err) => {
                // setLoader(false)
                console.log(err)
                navigate('/login')
            })

    }, [])

    return<>{loader ? <h1>Loading..</h1>:<Component />}</>
}

export default ProtectRoutes;





