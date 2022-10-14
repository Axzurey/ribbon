import Roact from "@rbxts/roact";
import { getWithPalette } from "./palettes";

export function main() {
    return (
        getWithPalette('frame', {
            Size: UDim2.fromScale(1, 1)
        }, 'blue', 'dark', [
            <>
                {/** etc */}
            </>
        ])
    )
}