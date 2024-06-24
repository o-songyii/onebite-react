import {useState} from 'react';

const Register = () => {
    const [input, setInput] = useState({
            name: "",
            birth: "",
            country: "",
            bio: ""
        }
    )

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    return <div>
        <div>
            <input value="name" onChange={onChange} placeholder={"이름"}/>
        </div>
        <div>
            <input value="birth" onChange={onChange} type={"date"}/>
        </div>
        <div>
            <select value=country onChange={onChange}>
                <option></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
        </div>

        <div>
            <textarea value="bio" onChange={onChange}/>
        </div>
    </div>
}

export default Register;