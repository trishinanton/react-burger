import PropTypes from "prop-types";

import { IngredientItemDefault, IngredientItemType } from "../../utils/types";
import { IngredientDetailsContent } from "../IngredientDetailsContent";
import { Modal } from "../Modal";

export const IngredientDetailsModal = ({ onClose, ingredientItem }) => {
    return <Modal isOpen onClose={onClose}>
        <IngredientDetailsContent ingredientItem={ingredientItem} />
    </Modal>
}

IngredientDetailsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    ingredientItem: IngredientItemType
};

IngredientDetailsModal.defaultProps = {
    ingredientItem: IngredientItemDefault
}
