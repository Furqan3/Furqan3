"use client";
import { useEffect } from "react";

const Chat = () => {
	// Fix: fullpage scroll library captures Space/Arrow keys globally and calls
	// e.preventDefault() with no check for focused inputs. Intercept in capture
	// phase (runs first) and stop propagation when user is typing.
	useEffect(() => {
		const blockScrollKeys = (e) => {
			const tag = document.activeElement?.tagName?.toLowerCase();
			const isEditable =
				tag === "input" ||
				tag === "textarea" ||
				document.activeElement?.isContentEditable;
			if (isEditable) {
				e.stopPropagation();
			}
		};
		window.addEventListener("keydown", blockScrollKeys, true);
		return () => window.removeEventListener("keydown", blockScrollKeys, true);
	}, []);

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
