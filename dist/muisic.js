const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [
	{
        name: 'The truth that you leave',      #歌名
        artist: 'piano boy',  #歌手
        url: 'https://music.163.com/#/song?id=410518453',    #mp3的url地址
        cover: 'http://p1.music.126.net/y_m2FXuYNBxITD4D80Aq2w==/1372190524437978.jpg' #歌的封面
    }
	]
});