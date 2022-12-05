import {
	FaAt,
	FaHashtag,
	FaClock,
	FaFont,
	FaQuoteLeft,
	FaWrench,
} from "react-icons/fa"
import { ConfigItem } from "../models/config"

export const testConfig: ConfigItem[] = [
	{
		type: "icon",
		icon: <FaClock />,
		label: "time",
		defaultAdditionalConfig: "60",
		additionalConfig: [
			{ label: "10", value: 10 },
			{ label: "30", value: 30 },
			{ label: "60", value: 60 },
			{ label: "120", value: 120 },
		],
	},
	{
		type: "icon",
		icon: <FaFont />,
		label: "word",
		defaultAdditionalConfig: "50",
		additionalConfig: [
			{ label: "10", value: 10 },
			{ label: "25", value: 25 },
			{ label: "50", value: 50 },
			{ label: "100", value: 100 },
		],
	},
	{
		type: "icon",
		icon: <FaQuoteLeft />,
		label: "quote",
		defaultAdditionalConfig: "medium",
		additionalConfig: [
			{ label: "all", value: 1 },
			{ label: "short", value: 2 },
			{ label: "medium", value: 3 },
			{ label: "long", value: 4 },
			{ label: "thicc", value: 5 },
		],
	},
	{
		type: "icon",
		icon: <FaWrench />,
		label: "custom",
		defaultAdditionalConfig: "",
		additionalConfig: [],
	},
]
