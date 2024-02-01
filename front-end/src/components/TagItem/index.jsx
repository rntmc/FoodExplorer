import {FiPlus, FiX} from 'react-icons/fi';

import {Container} from './styles'

export function TagItem({isNew = false, value, onClick, ...rest}) {
  return(
    <Container isnew={isNew}>
      <input 
        type='text'
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        onClick={onClick}
        type='button'
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew? <FiPlus /> : <FiX/>}
      </button>
    </Container>
  )
}