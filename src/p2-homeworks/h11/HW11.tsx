import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);

    const onChangeRange1Handler = (value: number) => {
        if (value <= value2) {
            setValue1(value);
        }
    };
    const onChangeRange2Handler = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    };

    return (
        <div className={s.mainWrapper}>
            <h2>Set range and go... (11)</h2>
            <div className={s.range1Wrapper}>
                <div className={s.valueVisualisation}>{value1}</div>
                <SuperRange
                    onChangeRange={onChangeRange1Handler}
                    value={value1}
                />
            </div>

            <div className={s.range2Wrapper}>
                <SuperDoubleRange
                    onChangeRange={onChangeRange2Handler}
                    value={[value1, value2]}
                />
            </div>
        </div>
    )
}

export default HW11
