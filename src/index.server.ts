/// <reference types="@rbxts/types/plugin" />

export {};

const toolbar = plugin.CreateToolbar("Ribbon");
const button = toolbar.CreateButton("Ribbon Animate", "", "");

button.Click.Connect(() => {
	print("Button clicked!");
});
