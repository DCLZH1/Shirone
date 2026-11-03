import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/demo-avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "L_Dxezd",
	bio: "雨は空が言い忘れた言葉を覚えている",
	links: [
		{
		name: "Bilibili",                     // 显示名称
		icon: "fa6-brands:bilibili",          // iconify 图标编码
		url: "https://space.bilibili.com/349504899",  // 跳转地址
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/DCLZH1/Shirone",
		},
	],
});
