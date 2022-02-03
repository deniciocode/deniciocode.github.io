const racetracks = [
  {
    title: 'Snetterton',
    length: '4.7',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/938513530737541130/Snetterton.JPG',
  },
  {
    title: 'Zandvoort',
    length: '4.2',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/938513531005968464/Zandvoort.JPG'
  },
  {
    title: 'Hungaroring',
    length: '4.4',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/938513531266007040/Hungaroring.JPG'
  },
  {
    title: 'Oulton Park',
    length: '4.3',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/938513531492519986/Oulton_Park.JPG'
  },
]
const app = Vue.createApp({
  el: '#app',
  beforeMount() {
    this.setTrackOnRandomSpots()
  },
  components: {
    "p-card": primevue.card,
    "p-button": primevue.button,
    'p-image': primevue.image,
    "p-inputnumber": primevue.inputnumber
  },
  data() {
    return {
      title: 'This is a track picker for ACC GT Series',
      randomRunner: 5,
      started: false,
      tracks: [],
    }
  },
  methods: {
    deleteRandomMap: function() {
      const indexToDelete = Math.floor(Math.random() * this.tracks.length);
      this.tracks.splice(indexToDelete, 1)
    },
    setTrackOnRandomSpots: function() {
      const len = racetracks.length
      let copyOfTracks = [...racetracks]
      this.tracks = []
      for (let i = 0; i < len; i++) {
        const indexToDelete = Math.floor(Math.random() * (len - i));
        let track = copyOfTracks.splice(indexToDelete, 1)
        this.tracks.push(track[0])
      }
    },
    repeatRandomSetup: function() {
      for (let i = 0; i < this.randomRunner; i++) {
        this.setTrackOnRandomSpots()
      }
      this.started = true;
    }
  }
})

app.use(primevue.config.default)
app.mount('#app')
