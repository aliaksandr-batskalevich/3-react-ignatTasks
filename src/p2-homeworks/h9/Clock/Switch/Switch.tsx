import {ClockStyleType} from "../Clock";
import s from './Switch.module.css';

type SwitchPropsType = {
    clockStyle: ClockStyleType
    setClockStyleCallback: (newStyle: ClockStyleType) => void
}
export const Switch = (props: SwitchPropsType) => {
    const onClickSwitchHandler = (newStyle: ClockStyleType) => {
        props.setClockStyleCallback(newStyle);
    }
    return (
        <div className={s.switchWrapper}>
            <div className={props.clockStyle === 'digital' ? s.activeSwitch : ''}
                 onClick={() => onClickSwitchHandler("digital")}>digital
            </div>
            <div className={props.clockStyle === 'analog' ? s.activeSwitch : ''}
                 onClick={() => onClickSwitchHandler("analog")}>analog
            </div>
        </div>
    )
};