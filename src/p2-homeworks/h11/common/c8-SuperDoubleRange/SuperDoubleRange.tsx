import React, {useState} from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, value}) => {

    let [minValue, setMinValue] = useState<number>(value[0]);
    let [maxValue, setMaxValue] = useState<number>(value[1]);

    const noUiSliderChangeHandler = (event: Array<any>) => {
        onChangeRange([+event[0], +event[1]]);
    };
    const noUiSliderUpdateHandler = (event: Array<any>) => {
        setMinValue(+event[0]);
        setMaxValue(+event[1]);
    };

    return (
        <div className={s.superDoubleRangeWrapper}>
            <div className={s.valueWrapper}>
                <div className={s.value}>{minValue}</div>
                <div className={s.value}>{maxValue}</div>
            </div>
            <Nouislider
                range={{min: 0, max: 100}}
                start={value}
                connect
                onUpdate={noUiSliderUpdateHandler}
                onChange={noUiSliderChangeHandler}
                step={1}
            />
        </div>
    )
}

export default SuperDoubleRange
