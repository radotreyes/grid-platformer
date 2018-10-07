/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import GridMap from '../../modules/GridMap.js'
import Entity from '../../modules/Entity.js'

const grid = new GridMap(`root`, {
  aspectWidth: 16,
  aspectHeight: 9,
  density: 4,
})

/* target element */
grid.initialize()

/* listeners */
window.addEventListener(`resize`, grid.update)
const testEntity = new Entity({
  trackName: `entity`,
  shape: `
    o o
    o
  `,
})

grid.placeEntity({ x: 1, y: 1 }, testEntity)
// grid.target.appendChild(test)
