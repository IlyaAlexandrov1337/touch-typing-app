import React from 'react';
import { css } from 'aphrodite-to-jss';
import { useRecoilValue } from 'recoil';
import { style } from './style';
import pos from './static/pos.png';
import hand from './static/main_keys.png';
import keyboard from './static/keyboard.png';
import man from './static/man.png';
import { themeLabelState } from '../../state/selectors';

export function AboutComponent() {
  const themeLabel = useRecoilValue(themeLabelState);

  return (
    <div className={css(style(themeLabel).Main)}>
      <div className={css(style(themeLabel).Row)}>
        <span style={{ fontSize: '1.3rem' }}>Описание проекта</span>
        <div className={css(style(themeLabel).Column)}>
          <p>
            Это моя первая робкая попытка реализовать тренажёр слепой печати.
            Есть ещё очень много того, что я хотел бы сделать.
          </p>
          <p>
            На данный момент Recoil здесь используются только для смены цветовой темы,
            т.е. он лишь замена useContext.
          </p>
          <p>
            Есть ещё довольно много вещей, которые я бы хотел сделать.
            Ближайшие идеи для реализации:
          </p>
          <ul>
            <li>
              использовать вызовы к какому-нибудь API для ещё одного вида этого тренажёра
              (пока что есть только прямая генерация слов через @faker-js/faker).
            </li>
            <li>добавить более сложные глобальные состояния.</li>
          </ul>
        </div>
      </div>
      <hr className={css(style(themeLabel).Line)} />
      <div className={css(style(themeLabel).Row)}>
        <span style={{ fontSize: '1.3rem' }}>Поза при печати текста</span>
        <ul style={{ maxWidth: '60%' }}>
          <li>Сиди ровно и держи спину прямой.</li>
          <li>Локти держи согнутыми под прямым углом.</li>
          <li>Голова должна быть немного наклонена вперед.</li>
          <li>Расстояние от глаз до экрана должно быть 45-70 см.</li>
          <li>
            Расслабь мышцы плеч, рук и кистей. Кисти могут немного касаться стола
            в нижней части клавиатуры, но не переноси вес тела на руки,
            чтобы не перенапрягать кисти.
          </li>
        </ul>
        <img className={css(style(themeLabel).PictureShort)} src={pos} alt="pos" />
      </div>
      <hr className={css(style(themeLabel).Line)} />
      <div className={css(style(themeLabel).Row)}>
        <span style={{ fontSize: '1.3rem' }}>Исходная позиция</span>
        <div className={css(style(themeLabel).Column)}>
          <img className={css(style(themeLabel).PictureLong)} src={hand} alt="hands" />
          <p>
            Немного согни пальцы и положи их на клавиши
            ФЫВА и ОЛДЖ, которые находятся в среднем ряду. Эта строка называется ОСНОВНОЙ СТРОКОЙ,
            потому что ты всегда будешь начинать с этих клавиш и возвращаться к ним.
          </p>

          <p>
            На клавишах А и О, под указательными пальцами, находятся небольшие выступы.
            Они позволяют ориентироваться на клавиатуре вслепую.
          </p>
        </div>
      </div>
      <hr className={css(style(themeLabel).Line)} />
      <div className={css(style(themeLabel).Row)}>
        <span style={{ fontSize: '1.3rem' }}>Схема клавиатуры</span>
        <div className={css(style(themeLabel).Column)}>
          <img className={css(style(themeLabel).PictureLong)} src={keyboard} alt="keyboard" />
          <p>
            Цвет клавиш на этой клавиатуре поможет тебе понять и запомнить,
            каким пальцем на какую клавишу нужно нажимать.
          </p>
          <ul>
            <li>Нажимай клавиши только тем пальцем, который для них предназначен.</li>
            <li>Всегда возвращай пальцы в исходную позицию «ФЫВА – ОЛДЖ».</li>
            <li>Когда набираешь текст, представляй расположение клавиш.</li>
            <li>
              Установи ритм и соблюдай его, пока печатаешь. Нажимай на клавиши
              с одинаковым интервалом.
            </li>
            <li>
              Клавишу SHIFT всегда нажимает мизинец с противоположной стороны от нужной буквы.
            </li>
            <li>Пробел отбивай большим пальцем левой или правой руки, как тебе удобнее.</li>
          </ul>
          <p>
            Сначала такой метод печати может показаться неудобным.
            Но не останавливайся. Со временем все будет получаться быстро, легко и удобно.
          </p>
        </div>
      </div>
      <hr className={css(style(themeLabel).Line)} />
      <div className={css(style(themeLabel).Row)}>
        <span style={{ fontSize: '1.3rem' }}>Движение пальцев</span>
        <div className={css(style(themeLabel).Column)}>
          <p>
            Не подглядывай на клавиатуру во время печати.
            Просто скользи пальцами по клавишам, пока не найдешь основную строку.
          </p>
          <p>
            Ограничь движение кистей и пальцев до минимума, только чтобы нажимать нужные клавиши.
            Держи руки и пальцы как можно ближе к исходной позиции.
            Это увеличит скорость набора текста и снизит нагрузку на кисти.
          </p>
          <p>
            Следи за безымянными пальцами и мизинцами,
            так как они часто остаются незадействованными.
          </p>
        </div>
        <img className={css(style(themeLabel).PictureShort)} src={man} alt="man" />
      </div>
      <hr className={css(style(themeLabel).Line)} />
      <div className={css(style(themeLabel).Row)}>
        <span style={{ fontSize: '1.3rem' }}>Скорость печати</span>
        <ul>
          <li>
            Не пытайся сразу печатать со скоростью света.
            Начинай ускоряться, только когда все 10 пальцев
            привыкнут нажимать правильные клавиши.
          </li>
          <li>Не торопись когда печатаешь, чтобы избежать ошибок.</li>
          <li>Всегда просматривай текст на одно-два слова вперед.</li>
        </ul>
      </div>
    </div>
  );
}
