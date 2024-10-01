import PropTypes from "prop-types";

export const IngredientItemType = PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
})

export const IngredientItemDefault = {
    name:"",
    price: 0,
    image: "",
    calories: 0,
    proteins: 0,
    fat: 0,
    carbohydrates: 0
}
