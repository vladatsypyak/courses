import "./Input.css"
import {useForm} from "react-hook-form";

function Input({onChange, classname, labelText, register, required, placeholderText, inputType}) {

    if (!inputType) {
        inputType = "text"
    }
    return (
        <div className={classname}>
            <p className={"label"}>{labelText}</p>
            {
                register ?
                    <input className={"input"} placeholder={placeholderText}
                           type={inputType}
                           {...register(labelText, {required,})}
                           onChange={onChange}
                    />
                    :
                    <input onChange={onChange} className={"input"} placeholder={placeholderText} type={inputType}/>

            }
        </div>
    )
}

export default Input