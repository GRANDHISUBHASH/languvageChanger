import {DivCard, ImagCard} from './StyledComponents'

const DisplayItem = props => {
  const {DisplyValue} = props

  const {imageUrl, imageAltText} = DisplyValue

  return (
    <DivCard>
      <ImagCard src={imageUrl} alt={imageAltText} />
    </DivCard>
  )
}

export default DisplayItem
