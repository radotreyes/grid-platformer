export default function Entity({ trackName, shape }) {
  this.trackName = trackName
  this.shape = shape
    .split(`\n`)
    .filter(track => track)
    .map(track => track.trim())
    .filter(track => track)
}
