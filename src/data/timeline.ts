/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "My First blog",
		date: "2026.11 – Present",
		category: "career",
		subtitle: "",
		location: "Guangzhou, China",
		description:
			"",
		highlights: [
			"I Created my first blog in 2026.11",
		],
		tags: ["LUAU"],
		icon: "material-symbols:work-rounded",
		featured: true,
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
