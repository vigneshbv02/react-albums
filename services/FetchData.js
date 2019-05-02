class FetchData {
  async fetchAlbumData() {
    fetch("https://rallycoding.herokuapp.com/api/music_albums").then(
      response => response.json()
    )
  }
}