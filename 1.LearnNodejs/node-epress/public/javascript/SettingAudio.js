
let playlist = document.querySelector('.playlist');
let options = document.querySelector('.options');


// // sự kiện mở tab bên phải 
function open_p() {
  playlist.classList.toggle('active'); // thêm class active vào
}


// sự kiện tab bên trái
function sidebar() {
  options.classList.toggle('active2');
}





const playlists = document.querySelector('.listAudio')
const audio = document.querySelector('#audio');

//adsa
const songApi = 'http://localhost:3000/listsong'

// lấy dữ liệu từ API
function getSong(callback) {
  fetch(songApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback)
}
getSong((songs) => {
  const appAudio = {
    currentIndex: 0,
    isPlaying: false,


    // hàm render
    render: function () {
      const htmls = songs.map(song => {
        return `
           <div class="p_song ">
                      <p id="p_title">${song.nameBook}</p>
                      <p id="p_artist">${song.author}</p>
                       <button><i onclick="" class='bx bx-play'></i></button>
                    </div>
  
        `
      })
      playlists.innerHTML = htmls.join('')

    },



    // Hàm định nghĩa thuộc tính cho object
    defineProperties: function () {
      Object.defineProperty(this, 'currentSong', {
        get: function () {
          return songs[this.currentIndex]
        }
      })
    },


    // Xàm xử lý xự kiện
    handleEvents: function () {
      const _this = this

      // Xử lý khi bấm play
      const playBtn = document.querySelector('.bx-play');
      playBtn.onclick = function () {
        if (_this.isPlaying) {
          _this.isPlaying = false
          audio.pause()
          cdThumbAnimate.pause()
        } else {
          _this.isPlaying = true
          audio.play()
          cdThumbAnimate.play()
        }

      }


      // Xử lý thanh thay đổi bài hát
      const progress = document.querySelector('#slider');
      audio.ontimeupdate = function () {

        if (audio.duration) { // floor : làm tròn
          const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)    // currentTime: thời gian hiện tại // duration: thời lường bài hát    // tính ra giá trị phần trăm 
          progress.value = progressPercent
        }
      }


      // Xử lý tua
      // 41.25
      progress.onchange = function (e) {
        const seekTime = audio.duration / 100 * e.target.value
        audio.currentTime = seekTime
      }


      // Xử lý quay đĩa
      const imgCD = document.querySelector('.imgCD');
      const cdThumbAnimate = imgCD.animate([
        { transform: 'rotate(360deg)' }
      ], {
        duration: 100, // quay trong 10s
        iterations: Infinity,
      })
      cdThumbAnimate.pause()
    },


    // hàm load bài hát đầu vào UI
    loadCurrentSong: function () {
      const headingMusic = document.querySelector('.titleMusicAudio');
      // const artist = document.querySelector('.artist');
      const imageTitleAudio = document.querySelector('.imageAudio');

      // console.log(headingMusic, artist, imageTitleAudio);

      // sửa nội dung
      headingMusic.textContent = this.currentSong.nameBook
      // artist.style.backgroundImage = `url('${this.currentSong.image}')`
      imageTitleAudio.style.backgroundImage = `url('${this.currentSong.image}')`
      const audioSong = '/public/audio/sachhay.mp3'
      audio.src = this.currentSong.audioSong

      // 53.25
    },



    // Hàm chạy app
    start: function () {
      this.defineProperties()
      this.handleEvents()
      // this.getCurrenSong()
      this.loadCurrentSong()
      this.render()
    }

  }

  appAudio.start()





})

//dasdas







  // // lấy bài hát đàu tiên
  // getCurrenSong: function(){
  //   console.log(songs[this.currentIndex])
  // },
