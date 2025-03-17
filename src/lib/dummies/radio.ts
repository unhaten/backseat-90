export const radio = {
	station: {
		id: 1,
		name: 'Main Station',
		shortcode: 'main_station',
		description: 'main station test',
		frontend: 'icecast',
		backend: 'liquidsoap',
		timezone: 'Europe/Moscow',
		listen_url: 'http://localhost/listen/main_station/radio.mp3',
		url: '',
		public_player_url: 'http://localhost/public/main_station',
		playlist_pls_url: 'http://localhost/public/main_station/playlist.pls',
		playlist_m3u_url: 'http://localhost/public/main_station/playlist.m3u',
		is_public: true,
		mounts: [[Object]],
		remotes: [],
		hls_enabled: false,
		hls_is_default: false,
		hls_url: null,
		hls_listeners: 0
	},
	listeners: { total: 1, unique: 1, current: 1 },
	live: {
		is_live: false,
		streamer_name: '',
		broadcast_start: null,
		art: null
	},
	now_playing: {
		sh_id: 637,
		played_at: 1741884565,
		duration: 45,
		playlist: 'jingle',
		streamer: '',
		is_request: false,
		song: {
			id: '2a5d6ef3f674d560be33d71a48f582c8',
			art: 'http://localhost/api/station/main_station/art/ea7a2424974803ab4f3a4cf3-1741212148.jpg',
			custom_fields: [],
			text: 'Oliver Franics ~ - 100.1 Oli FM :)',
			artist: 'Oliver Franics ~',
			title: '100.1 Oli FM :)',
			album: '',
			genre: '',
			isrc: '',
			lyrics: ''
		},
		elapsed: 33,
		remaining: 12
	},
	playing_next: {
		cued_at: 1741884349,
		played_at: 1741884602,
		duration: 109.7664375,
		playlist: 'default',
		is_request: false,
		song: {
			id: 'b369181aee65db941617be2c8b2957fa',
			art: 'http://localhost/api/station/main_station/art/03c66a02d0c6ed933fb3b95a-1741210580.jpg',
			custom_fields: [],
			text: 'Oliver Franics ~ - cloud 2',
			artist: 'Oliver Franics ~',
			title: 'cloud 2',
			album: '',
			genre: '',
			isrc: '',
			lyrics: ''
		}
	},
	song_history: [
		{
			sh_id: 636,
			played_at: 1741884354,
			duration: 213,
			playlist: 'default',
			streamer: '',
			is_request: false,
			song: [Object]
		},
		{
			sh_id: 635,
			played_at: 1741884271,
			duration: 45,
			playlist: 'jingle',
			streamer: '',
			is_request: false,
			song: [Object]
		},
		{
			sh_id: 634,
			played_at: 1741707004,
			duration: 213,
			playlist: 'default',
			streamer: '',
			is_request: false,
			song: [Object]
		},
		{
			sh_id: 633,
			played_at: 1741706963,
			duration: 45,
			playlist: 'jingle',
			streamer: '',
			is_request: false,
			song: [Object]
		},
		{
			sh_id: 632,
			played_at: 1741706856,
			duration: 109,
			playlist: 'default',
			streamer: '',
			is_request: false,
			song: [Object]
		}
	],
	is_online: true,
	cache: null
}
