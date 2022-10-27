import React, {useState} from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import s from './SuperDoubleRange.module.css'
import {ValueVision} from "./ValueVision/ValueVision";

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

    const minValueInc = () => {
        value[0] + 1 <= value[1]
        && onChangeRange([value[0] + 1, value[1]]);
    };
    const minValueDec = () => {
        onChangeRange([value[0] - 1, value[1]]);
    };
    const maxValueInc = () => {
        onChangeRange([value[0], value[1] + 1]);
    };
    const maxValueDec = () => {
        value[1] - 1 >= value[0]
        && onChangeRange([value[0], value[1] - 1]);
    };

    return (
        <div className={s.superDoubleRangeWrapper}>
            <div className={s.valueWrapper}>
                <ValueVision value={minValue} inc={minValueInc} dec={minValueDec}/>
                <ValueVision value={maxValue} inc={maxValueInc} dec={maxValueDec}/>
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
