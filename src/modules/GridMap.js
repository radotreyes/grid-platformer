/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export default function GridMap(
  id,
  {
    aspectWidth, aspectHeight, density, defaultTrackName = `x`,
  },
) {
  this.aspectWidth = aspectWidth
  this.aspectHeight = aspectHeight
  this.defaultTrackName = defaultTrackName
  this.resolution = density
  this.id = id

  this.areaMap = Array.from(Array(aspectHeight)).map(() => `${defaultTrackName} `.repeat(aspectWidth).trim())

  this.placeEntity = function placeEntity(
    { x = 0, y = 0 },
    { shape, trackName },
  ) {
    let currentEntityRow = 0

    this.areaMap = this.areaMap.map((row, i) => {
      if (currentEntityRow < shape.length) {
        if (i >= y) {
          row = row.split(` `)
          row.splice(
            x,
            shape[currentEntityRow].split(` `).length,
            ...shape[currentEntityRow].split(` `).map(() => trackName),
          )

          row = row.join(` `)
          currentEntityRow += 1
        }
      }

      return row
    })

    this.update()
  }

  this.initialize = function initialize() {
    const target = document.getElementById(`${this.id}`)
    target.style.display = `grid`
    target.style.placeContent = `center`
    this.update()
  }

  this.update = function update() {
    const { aspectHeight, aspectWidth, resolution } = this
    const target = document.getElementById(`${this.id}`)
    console.log(target)
    const cellSize = Math.floor(target.clientWidth / (aspectWidth * resolution))

    target.style.display = `grid`

    target.style.gridTemplateRows = `repeat(${Math.floor(
      aspectHeight * resolution,
    )}, ${cellSize}px)`

    target.style.gridTemplateColumns = `repeat(${Math.floor(
      aspectWidth * resolution,
    )}, ${cellSize}px)`

    console.log(this.areaMap.map(row => `"${row}"`).join(` `))
    target.style.gridTemplateAreas = this.areaMap
      .map(row => `"${row}"`)
      .join(` `)
  }
}
