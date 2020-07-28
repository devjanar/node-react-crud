export const deleteBeforeConfirm=()=> {
  var getConfirm;
  if (confirm("Are you sure, You want to Delete ?") == true) {
    getConfirm = true;
  } else {
    getConfirm = false;
  }
  return getConfirm;
};