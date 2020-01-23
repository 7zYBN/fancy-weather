const iconsPath = 'src/assets/icons/';

export const source = (icon) => {
  const image = new Image();

  image.src = `${iconsPath}${icon}.png`;
  
  return image;
}
