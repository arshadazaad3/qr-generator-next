import type { NextPage } from 'next';
import Head from 'next/head';

function TextInput(props: any) {
  const { setInputValue, inputValue } = props;
  return (
    <div
      className="w-full rounded-3xl h-full p-3 justify-center flex content-center items-center flex-col space-y-4"
      style={{
        minHeight: 500,
      }}
    >
      <div>
        {/* <div className="text-6xl font-bold" style={{ color: '#00248b' }}>
          Enter your text
        </div>

         */}

        <div>
          <textarea
            id="message"
            rows={1}
            className="text-6xl font-bold block p-2.5 w-full border-none bg-transparent active:border-none placeholder:text-dark-blue"
            placeholder="Enter your text"
            style={{ color: '#00248b' }}
            onChange={(e) => {
              setInputValue(e?.target?.value);
            }}
          />
        </div>
        {inputValue === 'www.tasa.com.my' && (
          <div className="text-gray-600 font-medium text-left mt-1 ml-3">
            Your QR code will be generated automatically
          </div>
        )}
      </div>
    </div>
  );
}

export default TextInput;
