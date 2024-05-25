let data;

try {
  const response = await fetch('data.json');

  if (!response.ok) throw new Error('Error with fetching data');

  data = await response.json();
} catch (err) {
  console.log('Something went wrong in fetching data');
  console.error(err);
}

export default data;
