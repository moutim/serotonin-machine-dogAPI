const getListBreeds = async () => {
    const result = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await result.json();
    const arrBreed = Object.keys(data.message);
    return arrBreed;
}

export default getListBreeds;