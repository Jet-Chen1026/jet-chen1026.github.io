
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'The truth that you leave',
        	artist: 'piano boy',
        	url: 'http://bd.kuwo.cn/play_detail/57755407',
        	cover: 'http://p1.music.126.net/y_m2FXuYNBxITD4D80Aq2w==/1372190524437978.jpg'
        }
    ]
});