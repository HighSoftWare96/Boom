import { TNSPlayer } from 'nativescript-audio';
import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {
    private _player: TNSPlayer;

    constructor() {
        this._player = new TNSPlayer();
    }

    public playBoom(): void {
        if (this._player.isAudioPlaying()) {
            this._player.pause();
        }

        this._player.playFromFile({
            audioFile: '~/audio/exp.mp3', // ~ = app directory
            loop: false,
        }).then(() => {
            this._player.getAudioTrackDuration().then((duration) => {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                console.log(`song duration:`, duration);
            });
        });

    }

    public playTick(): void {
        if (this._player.isAudioPlaying()) {
            this._player.pause();
        }

        this._player.playFromFile({
            audioFile: '~/audio/tick.mp3', // ~ = app directory
            loop: true,
        }).then(() => {
            this._player.getAudioTrackDuration().then((duration) => {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                console.log(`song duration:`, duration);
            });
        });

    }
}