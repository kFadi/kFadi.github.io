import "./FrameShot.css";

interface FrameShotProps {
	children: any;
}

function FrameShot(props: FrameShotProps): JSX.Element {
    return (
        <div className="FrameShot">
			{props.children}
        </div>
    );
}

export default FrameShot;
