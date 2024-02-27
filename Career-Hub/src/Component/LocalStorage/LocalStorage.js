

const getStoredApplications = () => {
    const storedApplications = localStorage.getItem("job-Applications");
    if (storedApplications) {
        return JSON.parse(storedApplications);
    }
    return [];
}
const saveJobApplication = id => {
    let storedApplications = getStoredApplications();
    const exists = storedApplications.includes(id);

    if (!exists) {
        storedApplications.push(id);
        localStorage.setItem('job-Applications', JSON.stringify(storedApplications))
    }
}

export { getStoredApplications, saveJobApplication };
