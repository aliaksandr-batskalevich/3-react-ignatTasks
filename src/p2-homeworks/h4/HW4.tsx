import React, {useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('');
    let [error, setError] = useState<string>('');

    const writeText = (newText: string) => {
        setText(newText.trim());
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
            <h2>Using Super Components<br/>(props inheritance) (4)</h2>
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
                    className={s.enterButton}
                    red={true}
                    onClick={action}
                >
                    Enter
                </SuperButton>

                <SuperButton
                    className={s.enterButton}
                    disabled={text.trim().length === 0}
                    onClick={action}
                >
                    {text.trim().length === 0 ? 'Disabled' : 'Enter'}
                </SuperButton>

                {/*<SuperCheckbox*/}
                {/*    checked={checked}*/}
                {/*    onChangeChecked={setChecked}*/}
                {/*    spanClassName={s.checkBoxSpan}*/}
                {/*>*/}
                {/*    some text*/}
                {/*</SuperCheckbox>*/}

            </div>
        </div>
    )
}

export default HW4
