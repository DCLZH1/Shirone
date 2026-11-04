/**
 * 技能页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/skillsConfig.ts 控制。
 */
import type { SkillItem } from "@/types/skillsConfig";

export const skillsData: SkillItem[] = [
	{
		name: "LUAU",
		description:
			"Everyday and in my life",
		icon: "catppuccin:luau",
		category: "frontend",
		level: "advanced",
	},

];

/** 获取所有技能数据列表 */
export function getSkillsList(): SkillItem[] {
	return skillsData;
}
