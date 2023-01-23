import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Izjava {
  title: string;
  pathToAudio: string;
}

const izjave: Izjava[] = [
  {
    title: 'Pitagora',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674326766/Tribaninjo/Filip/pitagora_xufovh.mp3',
  },
  {
    title: 'Sta si reko??',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674326764/Tribaninjo/Filip/stasireko_eaawk8.mp3',
  },
  {
    title: 'Biologija',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/biologija_kphksc.mp3',
  },
  {
    title: 'Filipov poucak',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/nemozes_se_razvest_ako_hcbufy.mp3',
  },
  {
    title: 'Nevolim jesti banane',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/nevolim_jesti_banane_mdcxsz.mp3',
  },
  {
    title: 'Golubovi',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/golubovi_eftjqq.mp3',
  },
  {
    title: 'Nemam kapacitete',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/nemam_kapacitete_cly9vo.mp3',
  },

  {
    title: 'Nije istina',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/nije_istina_wpqxxj.mp3',
  },
];

const Filip = () => {
  const navigate = useNavigate();

  const [playing, setPlaying] = useState<any>();

  const stopSound = useCallback(() => {
    if (playing) {
      playing.pause();
      setPlaying(null);
    }
  }, [playing]);
  useEffect(() => {
    const loadedMetadataListener = (e: any) => {
      setTimeout(() => {
        setPlaying(null);
      }, e.path[0].duration * 1000);
    };
    if (playing) {
      playing.play();
      playing.addEventListener('loadedmetadata', loadedMetadataListener);
    }

    return () =>
      document.removeEventListener('loadedmetadata', loadedMetadataListener);
  }, [playing, stopSound]);

  const playSound = async (pathToAudio?: string) => {
    const ding: any = await window.electron.convertSong(
      'assets/audio/ding.mp3'
    );
    if (playing) playing.pause();
    const audio = new Audio(pathToAudio);
    audio.setAttribute('preload', 'metadata');
    setPlaying(audio);
  };

  return (
    <div className="buttons">
      <button onClick={() => navigate('/')} className="home" type="button">
        <span role="img" aria-label="filip">
          🏠
        </span>
        Kući
      </button>
      {playing && (
        <button onClick={stopSound} className="stop" type="button">
          <span role="img" aria-label="home">
            ⛔
          </span>
          Prekini
        </button>
      )}
      {izjave.map((izjava) => {
        return (
          <button
            key={izjava.title}
            onClick={() => playSound(izjava.pathToAudio)}
            type="button"
          >
            <span role="img" aria-label="folded hands">
              🐴
            </span>
            {izjava.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filip;
