
"use client"
import {Cookie} from '../utils/types/helpersType'

export const DelCookie = ({name, domain}: Cookie) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
};

export const GetCookie = (name : string) => {
	const cookieString : string = decodeURIComponent(document.cookie);
	
	const cookies : string[] = cookieString.split(";");
	console.log('log decoded cookie', cookieString);

	let cookieName : string = `${name}=`;

	for (let cookie of cookies) {
		let selectedCookie = cookie.trim();

		while (selectedCookie.charAt(0) == " ") {
			selectedCookie = selectedCookie.substring(1);
            console.log('log c in get cookie ', selectedCookie);
            
		}

		if (selectedCookie.indexOf(cookieName) == 0) {
            console.log('log c in get cookie ', selectedCookie);

			return selectedCookie.substring(cookieName.length, selectedCookie.length);
		}
	}

	return "";
};

export const SetCookie = ({name, value, domain, days}: Cookie) => {
    const day: Date = new Date();
    day.setTime(day.getTime() + days * 24 * 60 * 60 * 1000)
    
    const expireDate = day.toUTCString();
    
    document.cookie = `${name}=${value} expires=${expireDate} domain=${domain}; path=/`
};		