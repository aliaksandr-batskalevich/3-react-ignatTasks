import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('');
    let [error, setError] = useState<string>('');

    const writeText = (newText: string) => {
        setText(newText);
        setError('');
    };
    const action = () => {
        if (text.trim()) {
            alert(text);
            setText('');
        } else {
            setError('No text!');
        }
    };

    const [checked, setChecked] = useState<boolean>(true);

    return (
        <div className={s.homeworks4Wrapper}>
            <hr/>
            <hr/>
            homeworks 4
            <hr/>
            <div className={s.insideWrapper}>
                <SuperInputText
                    className={s.stylePlus}
                    placeholder={'write text and press Enter...'}
                    value={text}
                    onChangeText={writeText}
                    onEnter={action}
                    error={error}
                    spanClassName={s.spanError}
                />

                <SuperButton
                    red={true}
                    onClick={action}
                >
                    Enter
                </SuperButton>

                <SuperButton
                    disabled={true}
                    onClick={action}
                >
                    Disabled
                </SuperButton>

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                    spanClassName={s.checkBoxSpan}
                >
                    some text
                </SuperCheckbox>

            </div>
        </div>
    )
}

export default HW4
