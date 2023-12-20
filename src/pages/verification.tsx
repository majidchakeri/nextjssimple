'use client'
import { useState, useRef, useEffect } from 'react'


const Counter: React.FC = () => {

  const [code , setCode] = useState<string>('');

  const inputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null]);
	const pattern = "[0-9]{1}";

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);


  const handleChange = (e:any) => {
    
		const {
			target: { value, nextElementSibling },
		} = e;

		if (value.length > 1) {
			e.target.value = value.charAt(0);

			if (nextElementSibling !== null) nextElementSibling.focus();
		} else {
			if (value.match(pattern)) {
				if (nextElementSibling !== null) nextElementSibling.focus();
			} else {
				e.target.value = "";
			}
		}

	};

  const handleKeyDown = (e:any) => {
		const {
			key,
			target: { value, previousElementSibling },
		} = e;

		if (key === "Backspace") {
			if (value === "") {
				if (previousElementSibling !== null) {
					const t = previousElementSibling;
					t.value = "";
					t.focus();
					e.preventDefault();
				}
			} else {
				e.target.value = "";
			}
		}
	};
  
  const handleClear = () => {
    inputRefs.current.forEach((ref) => {
      if (ref) {
        ref.value = '';
      }
    });
    setCode('')
  };

  const handleResult = () => {
		const res = inputRefs.current.map((ref) => (ref ? ref.value : '')).join('');

		setCode(res);
	};

  return (
    <>
      <div >
        <input
          type="tel"
          autoComplete="off"
          onChange={handleChange}
          onKeyDown={handleKeyDown}

          ref={(el) => (inputRefs.current[0] = el)}
        />
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={(el) => (inputRefs.current[1] = el)}
        />
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={(el) => (inputRefs.current[2] = el)}
        />
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={(el) => (inputRefs.current[3] = el)}
        />
      </div>
      <button onClick={handleResult}>Verify Code</button>
      <button onClick={handleClear}>Clear</button>
      <p>Result code is : {code}</p>
    </>

  )
}


export default Counter;
