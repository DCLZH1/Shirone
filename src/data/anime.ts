/**
 * 番剧收藏数据（本地数据源）。
 * 用于番剧页：src/pages/anime.astro → organisms/AnimeSection → molecules/AnimeCard。
 *
 * 添加条目：在 animeData 中追加一项即可，状态筛选 chips 与计数自动生成。
 * - cover 省略时卡片显示主题色渐变占位（补图前不破版）；
 * - link 省略时封面不可点；rating 为 0-10 个人评分；
 * - progress 是结构化追番进度，watching 状态在卡片上渲染进度条。
 * JSON 数据源（外部收藏服务拉取）见 utils/anime-data.ts 的 AnimeSource 分发。
 */

import type { AnimeIdentity } from "../types/animeConfig.ts";

/** 收藏状态（Bangumi 领域通行五态） */
export type AnimeStatus =
	| "watching"
	| "completed"
	| "planned"
	| "onHold"
	| "dropped";

export interface AnimeItem {
	title: string;
	/** 封面图地址（相对 /public 或绝对 URL）；省略 = 渐变占位 */
	cover?: string;
	/** 条目外链（Bangumi/官方站等）；省略则封面不可点 */
	link?: string;
	status: AnimeStatus;
	/** 个人评分 0-10 */
	rating: number;
	/** 追番进度：已看 / 总集数（未知时可选省略） */
	progress?: { watched: number; total: number };
	/** 一句话感想 */
	description?: string;
	/** 放送年份（展示用） */
	year: string;
	/** 制作公司 */
	studio?: string;
	/** 题材标签 */
	genres: string[];
	/** 观看时间段（年-月） */
	period?: { start: string; end: string };
	/** 条目来源身份标识（可选，用于跨源去重与归档） */
	identity?: AnimeIdentity;
}

export const animeData: AnimeItem[] = [
	{
		title: "Ｄｒ．ＳＴＯＮＥ 石纪元",
		cover: "/assets/anime/covers/bili_27993.webp",
		link: "https://www.bilibili.com/bangumi/media/md28221387",
		status: "completed",
		rating: 9.7,
		progress: { watched: 1, total: 1 },
		description: "全人类因神秘现象瞬间被石化后，过了数千年——。拥有超人头脑的科学少年千空苏醒了。面对文明灭绝的石之世界，千空决心用科学的力量夺回这个世界。让体力过人的青梅竹马·大木大树苏醒，要从零开始创造文明——从石器时代到现代文明，追上200万年的科学史！前所未闻的创世冒险故事，就此展开！",
		year: "2019",
		studio: "A-1 Pictures",
		genres: ["Action", "Science"],
		period: { start: "2025-07", end: "2025-07" },
	},
	{
		title: "Ｄｒ．ＳＴＯＮＥ 石纪元2",
		cover: "/assets/anime/covers/bili_36175.webp",
		link: "https://www.bilibili.com/bangumi/media/md28231817",
		status: "completed",
		rating: 9.7,
		progress: { watched: 1, total: 1 },
		description: "全人类因谜般的现象而在一瞬间石化，之后过了数千年——拥有超越人类的头脑，天生的科学少年·千空苏醒了。面对文明毁灭的石之世界（STONE WORLD），千空决定依靠科学的力量取回原本的世界。他召集新的伙伴，创立了『科学王国』。火、铁、电气、玻璃、手机……千空等人开始跨越从石器时代到现代文明的200万年科学史。但号称灵长类最强的高中生·狮子王司所统率的『武力帝国』却阻挡在他们面前。以净化人类为目标的司，企图利用强大的武力来阻止科学的发展——STONE WARS，就此开战！",
		year: "2021",
		studio: "Nexus",
		genres: ["Action", "Science"],
		period: { start: "2025-07", end: "2025-07" },
	},
	{
		title: "Ｄｒ．ＳＴＯＮＥ 石纪元3",
		cover: "/assets/anime/covers/bili_44865.webp",
		link: "https://www.bilibili.com/bangumi/media/md20140807",
		status: "completed",
		rating: 9.8,
		progress: { watched: 1, total: 1 },
		description: "自全人类被神秘现象瞬间石化之后，已过去了几千年——千空，一个有着超越常人的头脑，彻头彻尾的科学少年醒来了。面对着文明已经灭绝的石之世界，千空决心以科学的力量重建地球，他找来了同伴，建立起了“科学王国”。但是，他们碰上了由灵长类最强高中生狮子王司统领的“武力帝国”。司为了净化人类，决心以强大的武力，阻止科学的发展。经过科学与武力的大战，千空等人的科学王国取得优势，两国最终和解。司因为背叛而陷入了冷冻睡眠状态，而千空为了复活全人类，决心率领科学王国前往石化光线的产生地——地球另一头的新世界。迈向全世界，解开石化之谜！石世界的大航海时代终于拉开了序幕！",
		year: "2023",
		studio: "Doga Kobo",
		genres: ["Action", "Science"],
		period: { start: "2025-08", end: "2025-08" },
	},
	{
		title: "Ｄｒ．ＳＴＯＮＥ 石纪元4",
		cover: "/assets/anime/covers/bili_80512.webp",
		link: "https://www.bilibili.com/bangumi/media/md24449643",
		status: "planned",
		rating: 9.9,
		progress: { watched: 1, total: 1 },
		description: "从石器时代到现代文明，疾驰过200万年的科学史！前所未有的冒险传记，于此开幕！在宝岛的激战结束后，千空等人平安回到了科学王国。他们用得到的石化装置，成功复活了陷入冷冻睡眠的司。司成为了科学王国的同伴！而在确定将人类石化的幕后黑手“怀曼”就在月球的千空等人，准备奔向月球！在这个石纪元，提出了从零制造宇宙飞船的宏伟工程。为了从全世界收集飞船的材料，千空等人迅速乘上珀耳修斯号驶向大海。要制造复活液，他们需要大量的玉米，于是第一个目的地就被设为了美洲大陆。而在结束了考验勇气、团结以及科学力量的大航海后，等待着的，是能动摇他们的威胁。千空等人的冒险，终于开始迈向世界，甚至迈向太空。为了拯救人类的未来，千空和同伴们一起，全力开拓科学的道路。",
		year: "2025",
		studio: "White Fox",
		genres: ["Action", "Science"],
		period: { start: "2025-08", end: "2025-10" },
	},
	{
		title: "咔嗒咔嗒",
		cover: "/assets/anime/covers/bili_102255.webp",
		link: "https://www.bilibili.com/bangumi/media/md26649570",
		status: "watching",
		rating: 9.2,
		progress: { watched: 8, total: 12 },
		description: "KATA KATA",
		year: "2025",
		studio: "C2C",
		genres: ["Action","Magic"],
		period: { start: "2025-08", end: "2025-10" },
	},
];
