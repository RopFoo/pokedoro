import { Mode } from '../App';

export async function playAudio(mode: Mode) {
    const pomodoroAudio = new Audio(
        'https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/ueldaopg/126-pokemon%20whistle.mp3'
    );
    const pauseAudio = new Audio(
        'https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/znqhqixi/111-pokemon%20recovery.mp3'
    );

    if (mode.name === 'pause') return await pauseAudio.play();
    if (mode.name === 'work') return await pomodoroAudio.play();
}
