import Sky from "./Sky";
import Ground from "./Ground";
import CannonPipe from "./CannonPipe";
import CannonBase from "./CannonBase";

function Canvas(props) {
    const viewBox = [
        window.innerWidth / -2,
        100 - window.innerHeight,
        window.innerWidth,
        window.innerHeight];
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >
            <Sky/>
            <Ground/>
            <CannonPipe rotation={45}/>
            <CannonBase/>
        </svg>
    );
}

export default Canvas;