import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { fetchUser } from "../../store/modules/user/user.reducer";
import { selectHasUser } from "../../store/modules/user/user.selector";

export const ProtectedRouteElement = ({ element }) => {
    const [isUserLoaded, setIsUserLoaded] = useState(false)
    const dispatch = useDispatch()

    const hasUser = useSelector(selectHasUser)

    const { pathname } = useLocation()

    useEffect( () => {
        dispatch(fetchUser()).unwrap()
            .then(() => {})
            .catch(() => null)
            .finally(() => setIsUserLoaded(true))
    }, [])

    if(!isUserLoaded) {
        return null
    }

    return hasUser ? element : <Navigate state={{ pathname }} to="/login" />
}

ProtectedRouteElement.propTypes = {
    element: PropTypes.node.isRequired,
}