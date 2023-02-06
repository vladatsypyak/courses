import "./Input.css"
import {useForm} from "react-hook-form";

function Input({value, onChange, classname, labelText, register, required, placeholderText, inputType}) {

    if (!inputType) {
        inputType = "text"
    }

    return (
        <div className={classname}>
            <p className={"label"}>{labelText}</p>
            {
                register ?
                    <input className={`${classname}_input input`} placeholder={placeholderText}
                           type={inputType}
                           {...register(labelText, {required,})}
                           onChange={onChange}
                           value={"" || value}

                    />
                    :
                    <input  value={"" || value} onChange={onChange} className={"input"} placeholder={placeholderText} type={inputType}/>

            }
        </div>
    )
}

export default Input