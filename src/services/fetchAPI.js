const getBreedFromURL = (message) => {
    const dogBreed = message.split('/')[4];
    const [ firstName, lastName = ''] = dogBreed.split('-');
    const nameWithCapitalLetter = firstName[0].toUpperCase() + firstName.substr(1);
    const breedFormated = `${nameWithCapitalLetter} ${lastName}`;
    return breedFormated;
}

export const fetchAPI = async () => {
    const result = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await result.json();
    const { message } = data;
    const breedFormated = getBreedFromURL(message);
    
    return {
        message: data.message,
        breedFormated
    };
}

export const fetchAPIBreed = async (breed) => {
    const result = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await result.json();
    const { message } = data;
    const breedFormated = getBreedFromURL(message);
    
    return {
        message: data.message,
        breedFormated
    }
}