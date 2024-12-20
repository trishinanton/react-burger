import { FC, ReactElement, useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../hooks/appHooks'
import { fetchUser } from '../../store/modules/user/user.reducer'
import { selectHasUser } from '../../store/modules/user/user.selector'

interface Props {
  element: ReactElement
}
export const ProtectedRouteElement: FC<Props> = ({ element }) => {
  const [isUserLoaded, setIsUserLoaded] = useState(false)
  const dispatch = useAppDispatch()

  const hasUser = useAppSelector(selectHasUser)

  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(fetchUser())
      .unwrap()
      .then(() => {})
      .catch(() => null)
      .finally(() => setIsUserLoaded(true))
  }, [])

  if (!isUserLoaded) {
    return null
  }

  return hasUser ? element : <Navigate state={{ pathname }} to="/login" />
}
