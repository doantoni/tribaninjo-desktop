import { electron } from 'process';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Izjava {
  title: string;
  pathToAudio: string;
}

const izjave: Izjava[] = [
  {
    title: 'Blago tebi',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674324774/Tribaninjo/blagotebii_cau0ax.mp3',
  },
  {
    title: 'Fala napokon neko??',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674324894/Tribaninjo/falanapokonneko_e2n8lp.mp3',
  },
  {
    title: 'Glediju me kak da sam luda',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674324923/Tribaninjo/gledijumekakdasamluda_hkmfit.mp3',
  },
  {
    title: 'Ja nikat nebum imala decu',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674324986/Tribaninjo/janikadnebumimaladecu_jn80ae.mp3',
  },
  {
    title: 'Nisam ja Sabina',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674325011/Tribaninjo/nisamjasabina_o3xibn.mp3',
  },
  {
    title: 'Nočna mora',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674325083/Tribaninjo/senjamdasamdobiladete_ojl0c7.mp3',
  },
  {
    title: 'Svadba bez muža',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674325113/Tribaninjo/svadbabezmuz%CC%8Ca_k9na1h.mp3',
  },
  {
    title: 'To nema veze s godinama',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674325136/Tribaninjo/tonemavezesgodinama_g4gycw.mp3',
  },
  {
    title: 'Zakaj se to nebi smelo?',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674325154/Tribaninjo/zakajsetonebismelo_e15n6a.mp3',
  },
  {
    title: 'Život.',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674325173/Tribaninjo/Z%CC%8Civot._rjjbzn.mp3',
  },
];

const playSound = async (pathToAudio?: string) => {
  const audio = new Audio(pathToAudio);
  audio.play();
};

const Patricija = () => {
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
              💍🙅🏻‍♀️
            </span>
            {izjava.title}
          </button>
        );
      })}
    </div>
  );
};

export default Patricija;
