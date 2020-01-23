const key = 'fd14d3909c79a1a61f2c35af27cad8b53209dcfea9f8e641908b102bc35dcdd9';

export const unsplash = (queries) => {
  const queriesString = queries.join('%20');
  
  return `https://api.unsplash.com/photos/random?orientation=landscape&query=${queriesString}&client_id=${key}`;
}
