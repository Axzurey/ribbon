import Roact, { Element } from "@rbxts/roact";

type paletteMode = 'dark' | 'light';
type palette = 'blue' //| 'purple' | 'green' | 'red'

interface paletteInformation {
    textColor: Color3,
    backgroundColor: Color3,
    placeholderColor: Color3
}

const palettes: Record<palette, Record<paletteMode, paletteInformation>> = {
    blue: {
        dark: {
            textColor: Color3.fromRGB(0, 122, 255),
            backgroundColor: new Color3(.2, .2, .2),
            placeholderColor: Color3.fromRGB(133, 186, 245)
        },
        light: {
            textColor: Color3.fromRGB(5, 89, 179),
            backgroundColor: new Color3(.2, .2, .2),
            placeholderColor: Color3.fromRGB(48, 128, 212),
        }
    }
}

const instanceMap: {[key in keyof palettableInstances]: (p: paletteInformation, props: Record<string, any>, c?: Element | Element[]) => Element} = {
    textLabel: (p, props, e) => <textlabel
        TextColor3={p.textColor}
        BackgroundColor3={p.backgroundColor}
        {...props}
    ></textlabel>,
    frame: (p, props, e) => <frame
        BackgroundColor3={p.backgroundColor}
        {...props}
    ></frame>,
    scrollingFrame: (p, props) => <scrollingframe
        BackgroundColor3={p.backgroundColor}
        {...props}
    ></scrollingframe>,
    textButton: (p, props) => <textbutton
        TextColor3={p.textColor}
        BackgroundColor3={p.backgroundColor}
        {...props}
    ></textbutton>,
    textBox: (p, props) => <textbox
        TextColor3={p.textColor}
        BackgroundColor3={p.backgroundColor}
        PlaceholderColor3={p.placeholderColor}
        {...props}
    ></textbox>,
}

interface palettableInstances {
    "textLabel": TextLabel,
    "frame": Frame,
    "textButton": TextButton,
    "textBox": TextBox,
    "scrollingFrame": ScrollingFrame
}

export function getWithPalette<T extends keyof palettableInstances>(t: T, props: Partial<InstanceProperties<palettableInstances[T]>>, palette: palette, mode: paletteMode, children?: Element | Element[]) {
    let p = palettes[palette][mode];
    
    return instanceMap[t](p, props, children);
}