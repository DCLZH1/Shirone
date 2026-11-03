/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "Mob",
		name: 'One Plus ACE6 Supreme Edition"',
		brand: "One Plus",
		category: "mobile",
		status: "active",
		specs: "12GB / 512GB",
		description:
			"Daily use.",
		icon: "material-symbols:laptop-mac-rounded",
		featured: true,
		year: "2026",
		link: "https://www.oneplus.com/cn/ace-6-ultra/specs",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
