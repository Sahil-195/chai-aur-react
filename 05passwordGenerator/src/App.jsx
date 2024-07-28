import { useCallback, useRef } from "react";
import { useState } from "react"
import { useEffect } from "react"; 


function App() {

  let [length, Setlength] = useState(8);
  let [NumberAllowed, SetNumberAllowed] = useState(false);
  let [CharAllowed, SetCharAllowed] = useState(false);
  let [password, SetPassword] = useState("");

  let passwordref = useRef(null);

  let passwordGenerator = useCallback(() => {
    let pass = '';
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(NumberAllowed) charset += '0123456789';
    if(CharAllowed) charset += '`~!@#$%^&*()-_=+{}[]|:;<,>.?/"';

    for(let i = 0; i < length; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    SetPassword(pass);
  }, [length, NumberAllowed, CharAllowed, SetPassword]);

  let CopyPasswordToClipboard = useCallback(() => {
    passwordref?.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, NumberAllowed, CharAllowed, passwordGenerator])

  return (
    <>
      <h1 className='text-4xl text-center text-white my-4 '>Password Generator</h1>
      <div className="flex justify-center items-center">

        <div className="w-screen max-w-xl h-36 bg-slate-700 my-6 flex flex-col rounded-2xl">
          <div className="w-screen max-w-xl h-full flex justify-center rounded-2xl">

          <input type="text" 
          className="w-3/5 h-3/5 px-4 py-2 my-3 text-teal-700 placeholder-gray-4 border-2 border-black-500 rounded-2xl" 
          value={password}
          placeholder="password" 
          ref={passwordref}
          readOnly
          />
          <button
          className="w-1/5 h-3/5 px-4 py-2 mx-4 my-3 bg-slate-900 hover:bg-stone-950 border-2 border-black rounded-2xl text-white"
          onClick={CopyPasswordToClipboard}
          >
            Copy
          </button>
          </div>
          <div className="w-screen max-w-xl h-2/3 flex justify-center items-center gap-4 text-orange-600">
            <div className="flex justify-center items-center gap-2">

              <input type="range"
              // id="range-length"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => Setlength(e.target.value)}
              />
              <label
              // htmlFor="range-length"
              >Length : {length}</label>
            </div>
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" id="NumbersAllowed" 
              defaultChecked = {NumberAllowed}
              onChange={() => SetNumberAllowed((prev) => !prev)}
              />
              <label
              htmlFor="numbersAllowed">Numbers</label>
            </div>
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" id="CharactersAllowed" 
              defaultChecked = {CharAllowed}
              onChange={() => { SetCharAllowed((prev) => !prev) }}
              />
              <label
              htmlFor="CharactersAllowed">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default App


