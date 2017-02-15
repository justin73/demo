module.exports = {
  showPhotos: (photoList) => {
    const targetimage = photoList.shift();
    console.log(targetimage.id);
  },
};
