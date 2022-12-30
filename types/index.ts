import { Timestamp } from "firebase/firestore";

export type Message = {
	beforeMessage: string;
	beforePic: string;
	afterMessage: string;
	afterPic: string;
	from: string;
	date: Timestamp;
	url?: string;
};
