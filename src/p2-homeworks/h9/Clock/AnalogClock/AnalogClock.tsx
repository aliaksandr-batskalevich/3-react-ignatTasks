import React from "react";
import s from './AnalogClock.module.css';

type AnalogClockPropsType = {
    seconds: number
    minutes: number
    hours: number
}
export const AnalogClock: React.FC<AnalogClockPropsType> = ({seconds, minutes, hours}) => {

    return (
        <div className={s.analogClockWrapper}>
            <CanvasComponent
                clockColor={'white'}
                clockRadius={100}
                markColor={'black'}
                markRadius={5}

                arrowColor={'gold'}

                seconds={seconds}
                minutes={minutes}
                hours={hours}
            />
        </div>
    )
}

type CanvasComponentPropsType = {
    clockRadius: number
    markRadius: number
    clockColor: string
    markColor: string

    arrowColor: string

    seconds: number
    minutes: number
    hours: number
}
class CanvasComponent extends React.Component<CanvasComponentPropsType, any> {

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate(prevProps: Readonly<CanvasComponentPropsType>, prevState: Readonly<any>, snapshot?: any) {
        this.updateCanvas();
    }

    updateCanvas() {
        let clockCenterX = this.props.clockRadius + this.props.markRadius;
        let clockCenterY = this.props.clockRadius + this.props.markRadius;
        let clockRadius = this.props.clockRadius + this.props.markRadius;

        // @ts-ignore
        const ctx = this.refs.canvas.getContext('2d');

        // clear canvas
        ctx.clearRect(0, 0, 210, 210);

        // clock wrapper
        ctx.strokeStyle = this.props.clockColor;
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(clockCenterX, clockCenterY, clockRadius, 0, 2 * Math.PI, false);
        ctx.stroke();

        // mark 12
        ctx.fillStyle = this.props.markColor;
        ctx.beginPath();
        ctx.arc(clockCenterX, this.props.markRadius, this.props.markRadius, 0, 2 * Math.PI, false);
        ctx.fill();

        // hoursArrow
        let hours = this.props.hours >= 12 ? this.props.hours - 12 : this.props.hours;
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.strokeStyle = this.props.arrowColor;
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius * 3 / 4, 0, Math.PI / 6 * hours + Math.PI / 6 * this.props.minutes / 60 - Math.PI / 2, false);
        ctx.lineTo(clockCenterX, clockCenterY);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#010136';
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius * 3 / 4, 0, 2 * Math.PI, false);
        ctx.stroke();

        // minutesArrow
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = this.props.arrowColor;
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius, 0, Math.PI / 30 * this.props.minutes - Math.PI / 2, false);
        ctx.lineTo(clockCenterX, clockCenterY);
        ctx.stroke();

        // secondsArrow
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius, 0, Math.PI / 30 * this.props.seconds - Math.PI / 2, false);
        ctx.lineTo(clockCenterX, clockCenterY);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#010136';
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius, 0, 2 * Math.PI, false);
        ctx.stroke();
    }

    // its Ok

    render() {
        let canvasWidth = (this.props.clockRadius + this.props.markRadius) * 2;
        let canvasHeight = (this.props.clockRadius + this.props.markRadius) * 2;

        return (
            <canvas
                ref={'canvas'}
                width={canvasWidth}
                height={canvasHeight}
            />
        )
    }
}

