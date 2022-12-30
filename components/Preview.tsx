import { Timestamp } from "firebase/firestore";
import Link from "next/link";
import { Message } from "../types";

export const Preview = ({
	data,
	hideCreate,
}: {
	data: Message;
	hideCreate?: boolean;
}) => {
	const isAfter = Timestamp.now() > data?.date;
	console.log("^_^ Log \n file: Preview.tsx:16 \n isAfter", isAfter);
	const pic = isAfter ? data?.afterPic : data?.beforePic;
	return (
		<div>
			{data ? (
				<div>
					<p className="text-lg text-center font-bold mt-4">
						{data.from}さんからあなたへのメッセージ
					</p>
					<p className="whitespace-pre-wrap p-3 border rounded m-2">
						{isAfter ? data.afterMessage : data.beforeMessage}
					</p>
					{pic && <img src={pic} className="w-full h-full" alt="" />}
				</div>
			) : (
				<div className="text-center my-10">メッセージは存在しません</div>
			)}
			{!hideCreate && (
				<div className="mt-10">
					<Link className="" href="/" target="_blank">
						<p className="hover:underline text-blue-400 text-center m-4">
							新しいメッセージを作成する
						</p>
					</Link>
				</div>
			)}
		</div>
	);
};
