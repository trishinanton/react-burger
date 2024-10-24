import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUser } from "../store/modules/user/user.reducer";

export const useAppData = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    },[])
}
