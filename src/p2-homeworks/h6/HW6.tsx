import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState, ValueType} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<ValueType>('');

    const save = () => {
        saveState<ValueType>('editable-span-value', value);
    };
    const restore = () => {
        setValue(restoreState('editable-span-value', value));
    };

    return (
        <div className={s.HW6Wrapper}>
            <hr/>
            <h2>SuperEditableSpan</h2>
            <div className={s.alignWrapper}>
                <div className={s.superEditableSpanWrapper}>
                    <div>
                        <SuperEditableSpan
                            value={value}
                            onChangeText={setValue}
                            spanProps={{children: value ? undefined : 'enter text...'}}
                        />
                    </div>
                    <div className={s.buttonWrapper}>
                        <SuperButton className={s.button} onClick={save}>save</SuperButton>
                        <SuperButton className={s.button} onClick={restore}>restore</SuperButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW6
