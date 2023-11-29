// VirtualKeyboard.jsx
import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const VirtualKeyboard = ({ onProductDetails }) => {
  const [input, setInput] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const onChangeInput = (input) => {
    setInput(input);
  };

  const onKeyPress = (button) => {
    console.log('Button pressed:', button);

    // 한글 입력을 마치면 가상 키보드를 숨깁니다.
    if (button === '{enter}') {
      setKeyboardVisible(false);
    }
  };

  const onShowMap = () => {
    // 가상 키보드가 보이도록 설정합니다.
    setKeyboardVisible(true);
    // 선택된 상품 정보를 전달합니다.
    onProductDetails({ name: '상품명', price: '가격' });
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setKeyboardVisible(true)}
        onBlur={() => setKeyboardVisible(false)}
      />
      {keyboardVisible && (
        <Keyboard
          layout={{
            default: [
              '1 2 3 4 5 6 7 8 9 0 {bksp}',
              'ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ -',
              'ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ {enter}',
              '{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {shift}',
              '{space}',
            ],
          }}
          display={{
            '{bksp}': '⌫',
            '{enter}': 'Enter ↵',
            '{shift}': '⇧',
            '{space}': 'Space',
          }}
          onChange={onChangeInput}
          onKeyPress={onKeyPress}
        />
      )}
      <button onClick={onShowMap}>Show Map</button>
    </div>
  );
};

export default VirtualKeyboard;
