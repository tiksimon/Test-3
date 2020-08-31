import { getShips } from './source'

export const brodovi = (ships) => {

    const shipsContainer = document.createElement('div')
    shipsContainer.className = 'ships'

    const div0 = document.createElement('div')
    div0.className = 'inner-div0'
        const shipName = document.createElement('span')
        shipName.textContent = ships.ships.ship_name
    div0.appendChild(shipName)

   
    const div1 = document.createElement('div')
    div1.className = 'inner-div1'
        const shipType = document.createElement('span')
        shipType.textContent = ships.ships.ship_model
    div0.appendChild(shipType)

    const div2 = document.createElement('div')
    div2.className = 'inner-div2'
        const active = document.createElement('span')
        active.textContent = ships.ships.active
    div0.appendChild(active)

    const div3 = document.createElement('div')
    div3.className = 'inner-div3'
      export  const img = document.createElement('img')
        img.src = ships.ships.image
}
