export interface IPomodoro {
	status: 'idle' | 'running' | 'paused' | 'stopped'
	secondsLeft: number
}
