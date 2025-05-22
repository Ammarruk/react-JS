import { useState } from "react";

const NameInput = () => {

    const [name, setName] = useState<string>("");

    return (
        <>
            <h1 className="text-danger">Name Input Component</h1>
            <h3>Your Name: <span className="text-warning">{name}</span></h3>
            <input type="text"
                placeholder="Enter your name"
                className="form-control"
                onChange={(event) => setName(event.target.value)}
            />
        </>

    );

}
export default NameInput;