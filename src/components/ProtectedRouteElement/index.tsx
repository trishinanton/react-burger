import { FC, ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { fetchUser } from '../../store/modules/user/user.reducer'
import { selectHasUser } from '../../store/modules/user/user.selector'

interface Props {
  element: ReactElement
}
export const ProtectedRouteElement: FC<Props> = ({ element }) => {
  const [isUserLoaded, setIsUserLoaded] = useState(false)
  const dispatch = useDispatch()

  const hasUser = useSelector(selectHasUser)

  const { pathname } = useLocation()

  useEffect(() => {
    //todo - типизировать стор
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
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
