export type ConfigItem = {
	type: string
	icon: JSX.Element
	label: string
	defaultAdditionalConfig: string
	additionalConfig: AdditionalConfig[]
}

export type AdditionalConfig = {
	label: string
	value: string | number
}
