const racetracks = [
  {
    title: 'Monza',
    length: '5.7',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/932722406286585917/Monza.JPG',
  },
  {
    title: 'Misano',
    length: '4.2',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/932722406022336532/Misano.JPG'
  },
  {
    title: 'Kyalami',
    length: '4.5',
    img: 'https://cdn.discordapp.com/attachments/826345100031819787/932722405707767918/Kyalami.JPG'
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
