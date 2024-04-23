export const fileUpload = (e, dispatchFunction, type, index) => {
  let file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    dispatchFunction({
      type: type,
      file: file,
      image: e.target.result,
      index: index ? index : null,
    });
  };
  reader.readAsDataURL(file);
};
export const removeFile = (dispatchFunction, type, index) => {
  dispatchFunction({
    type: type,
    file: null,
    image: null,
    index: index ? index : null,
  });
};
