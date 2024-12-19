import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { selectIngredientsList } from '../store/modules/ingredients/ingredients.selector'
import { IIngredientItem, IOrder } from '../utils/types'

export const useFeedOrderData = (orderItem: IOrder) => {
  const { ingredients } = orderItem
  const ingredientItems = useSelector(selectIngredientsList)

  const ingredientsCount: Record<string, number> = {}
  const ingredientsPrice: Record<string, number> = {}

  const ingredientsEntity: Record<string, IIngredientItem> = useMemo(
    () =>
      ingredientItems.length > 0
        ? ingredients.reduce(
            (acc: Record<string, IIngredientItem>, id: string) => {
              if (id in acc) {
                ingredientsCount[id] = ingredientsCount[id] + 1
              } else {
                ingredientsCount[id] = 1
                acc[id] = ingredientItems.find(
                  item => id === item._id,
                ) as IIngredientItem
                ingredientsPrice[id] = acc[id]?.price
              }
              return acc
            },
            {},
          )
        : {},
    [ingredients, ingredientsCount, ingredientItems, ingredientsPrice],
  )

  const resultPrice = useMemo(
    () =>
      Object.keys(ingredientsPrice).reduce(
        (acc, id) => acc + ingredientsCount[id] * ingredientsPrice[id],
        0,
      ),
    [ingredientsPrice, ingredientsCount],
  )

  return {
    ingredientsEntity,
    resultPrice,
    ingredientsCount,
  }
}
