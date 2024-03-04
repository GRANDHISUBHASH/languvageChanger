import {ListItem, TabButton} from './StyledComponent'

const TabItem = ({eachItem, isActive, changeColor}) => {
  const handleTabClick = () => {
    isActive(eachItem.id)
  }

  return (
    <ListItem>
      <TabButton
        type="button"
        onClick={handleTabClick}
        changeColor={changeColor}
      >
        {eachItem.buttonText}
      </TabButton>
    </ListItem>
  )
}
export default TabItem
