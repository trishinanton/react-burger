import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './NutritionalValueItem.module.css'

export const NutritionalValueItem = ({ title, value }) => {
  return (
    <div className={cn(styles.container, 'mr-5')}>
      <span className={'text text_type_main-small'}>{title}</span>
      <span className={'text text_type_digits-default'}>{value}</span>
    </div>
  )
}

NutritionalValueItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}
