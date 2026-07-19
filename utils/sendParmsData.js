export default function sendParmsData(data, locationType, locationName) {
    return data.filter(
        (find) => find[locationType].toLowerCase() === locationName.toLowerCase()
    );
}