import { getCompanyInfo } from './source.js'

export const header = () => {

    const headerContainer = document.createElement('header')

    getCompanyInfo().then(res => {

        const companyName = document.createElement('h1')
        companyName.textContent = res.data.companyName

        const info = document.createElement('p')
        info.innerHTML = `Founder ${res.data.founder}<br>
                            Founded ${res.data.founded}`
        
        headerContainer.append(companyName,info)
    })
    return headerContainer
}