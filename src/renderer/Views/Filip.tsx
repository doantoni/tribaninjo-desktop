import React from 'react';
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

const playSound = async (pathToAudio?: string) => {
  const audio = new Audio(pathToAudio);
  audio.play();
};

const Filip = () => {
  const navigate = useNavigate();
  return (
    <div className="buttons">
      <button onClick={() => navigate('/')} className="home" type="button">
        <span role="img" aria-label="filip">
          🏠
        </span>
        Kući
      </button>

      {izjave.map((izjava) => {
        return (
          <button onClick={() => playSound(izjava.pathToAudio)} type="button">
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
