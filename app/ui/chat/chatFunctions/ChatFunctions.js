export const handleDeleteItems = (
  allItems,
  selecteditems,
  setAllItems,
  setSelectedItems
) => {
  const resultArray = allItems.filter((item) => !selecteditems.includes(item));
  setAllItems(resultArray);
  setSelectedItems([]);
};
export const handleSelectItem = (item, selectedItems, setSelectedItems) => {
  let exist = selectedItems.find((selectedRule) => selectedRule === item);
  if (exist) {
    setSelectedItems((prevVal) => {
      return prevVal.filter((selected) => selected !== item);
    });
  } else {
    setSelectedItems((prevVal) => {
      return [...prevVal, item];
    });
    console.log("item", item);
  }
};
export const handleAddItem = (setItems, prevVal, newRuleVal, togglePopup) => {
  setItems((prevVal) => {
    return [...prevVal, newRuleVal];
  });
  togglePopup();
};
