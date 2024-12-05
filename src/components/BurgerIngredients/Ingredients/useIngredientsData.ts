import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

import { IIngredientItem } from '../../../utils/types'

interface IParams {
  data: IIngredientItem[]
  setCurrentTab: (type: string) => void
}

export const useIngredientsData = ({ data, setCurrentTab }: IParams) => {
  const buns = data.filter(({ type }) => type === 'bun')
  const sauces = data.filter(({ type }) => type === 'sauce')
  const main = data.filter(({ type }) => type === 'main')

  const refRoot = useRef<HTMLDivElement | null>(null)

  const [refBuns, inViewBuns] = useInView({
    threshold: 1,
    root: refRoot.current,
  })

  const [refSauces, inViewSauces] = useInView({
    threshold: 1,
    root: refRoot.current,
  })

  const [refMain, inViewMain] = useInView({
    threshold: 1,
    root: refRoot.current,
  })

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab('buns')
    } else if (inViewSauces) {
      setCurrentTab('sauces')
    } else {
      setCurrentTab('fillings')
    }
  }, [inViewBuns, inViewSauces, inViewMain])

  return {
    refRoot,
    refBuns,
    refSauces,
    refMain,
    buns,
    sauces,
    main,
  }
}
