"use client";
import { useEffect } from "react";

const Chat = () => {
	useEffect(() => {
		const loadChat = () => {
			if (window.Tawk_API) return;
			var Tawk_API = Tawk_API || {},
				Tawk_LoadStart = new Date();
			var s1 = document.createElement("script"),
				s0 = document.getElementsByTagName("script")[0];
			s1.async = true;
			s1.src = "https://embed.tawk.to/69de17b085fb211c366d7221/1jm5op304";
			s1.charset = "UTF-8";
			s1.setAttribute("crossorigin", "*");
			s0.parentNode.insertBefore(s1, s0);
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
