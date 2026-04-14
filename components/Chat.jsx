"use client";
import { useEffect } from "react";

const Chat = () => {
	useEffect(() => {
		const loadChat = () => {
			if (window.$crisp) return;
			window.$crisp = [];
			window.CRISP_WEBSITE_ID = "6b77ccd3-310f-48d2-8697-f6f8eaef3b33";

			// Match site color theme: dark charcoal
			window.$crisp.push(["config", "color:theme", "black"]);
			window.$crisp.push(["config", "position:reverse", false]);

			var d = document;
			var s = d.createElement("script");
			s.src = "https://client.crisp.chat/l.js";
			s.async = true;
			d.getElementsByTagName("head")[0].appendChild(s);
		};

		if (typeof requestIdleCallback !== "undefined") {
			const id = requestIdleCallback(loadChat, { timeout: 5000 });
			return () => cancelIdleCallback(id);
		} else {
			const timer = setTimeout(loadChat, 3000);
			return () => clearTimeout(timer);
		}
	}, []);

	return null;
};

export default Chat;
