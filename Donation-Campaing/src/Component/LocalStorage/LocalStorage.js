
const getStoreDonations = () => {
    const storeDonation = localStorage.getItem("Donation-Cart");
    if (storeDonation) {
        return JSON.parse(storeDonation);
    }
    return [];
}

const saveDonation = id => {
    let storeDonation = getStoreDonations();
    const exists = storeDonation.includes(id); // Corrected typo
    if (!exists) { // Check if id doesn't exist
        storeDonation.push(id);
        localStorage.setItem("Donation-Cart", JSON.stringify(storeDonation));
    }
}

export { getStoreDonations, saveDonation };
