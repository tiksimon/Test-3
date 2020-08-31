export const getCompanyInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}

export const getShips = () => {
    return axios.get('https://api.spacexdata.com/v3/ships')
}

