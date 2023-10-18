import { B, Y, H, Totp, Vw, Auth, CanvasQRC } from './bookmarkletTotp.js';
class F {
	static async l(p, c = 'application/json', isText) {
		const q = {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'omit',
			redirect: 'follow',
			referrer: 'no-referrer',
			headers: { 'Content-Type': c },
		};
		const r = await fetch(p, q);
		return isText ? await r.text() : await r.blob();
	}
}
const SLASH = '&#47;';
const HTTP_REGXP = /http:\/\//g;
const HTTPS_REGXP = /https:\/\//g;
const A = 'ACCESS_POINT';
const Q = 'QUERY';
export class BookmarkletBuilder {
	static build(src) {
		const rows = src
			.split('\t')
			.join('')
			.replace(/\/\*[^\/]+\*\//g, '')
			.split('\n');
		const f = [];
		for (const r of rows) {
			const n = r.replace(HTTP_REGXP, 'http:' + SLASH + SLASH).replace(HTTPS_REGXP, 'https:' + SLASH + SLASH);
			f.push(
				n
					.split('//')[0]
					.split(SLASH)
					.join('/')
					.replace(/^export /g, '')
			);
		}

		const b = f.join(' ');
		let l = b ? b + '' : '';
		const ks = ':;,-+=*><(){}?/'.split('');
		ks.push('!==');
		ks.push('||');
		ks.push('&&');
		for (const k of ks) {
			l = l
				.split(' ' + k)
				.join(k)
				.split(k + ' ')
				.join(k)
				.split(k + ' ' + k)
				.join(k + k);
		}
		console.log(l);
		return `javascript:let a=(()=>{${l};a()});a()`;
	}
	static async getBookmarklet(jsPath, q, d = '/') {
		const c = location.protocol + '//' + location.host + d;
		const s = await F.l(`${jsPath}`, undefined, true);
		const b = s.split(A).join(c).split(Q).join(q);
		return BookmarkletBuilder.build(b);
	}
}
const TOTPpath = './bookmarkletTotp.js';
export class BK {
	static FirefoxMax = 64 * 1024;
	static async build() {
		const p = Vw.gi('main');
		const frame = Vw.div(p);
		const src = Vw.h2(frame, { text: 'Source of the bookmarklet' }, { margin: 0 });
		const textArea = Vw.div(frame);
		const ta = Vw.add(
			textArea,
			'textarea',
			{ className: 'aaa' },
			{ width: '90vw', height: '60vh', fontSize: '20%' }
		);
		const link = Vw.div(textArea);
		const a = Vw.add(link, 'a', { text: 'bookmarklet Link', href: location.href }, {});
		const s = Vw.add(link, 'span', {}, { display: 'inline-block', padding: '0 10px', fontSize: '80%' });
		Vw.ael(ta, 'input', BK.setLink(a, ta, s));
		const copy = Vw.add(link, 'button', { text: 'copy' });
		Vw.click(copy, () => {
			Vw.copy(ta.value);
			alert('copied!');
		});
		ta.value = await BookmarkletBuilder.getBookmarklet(TOTPpath, '');
		console.log(
			"await BookmarkletBuilder.getBookmarklet(TOTPpath, ''):" +
				(await BookmarkletBuilder.getBookmarklet(TOTPpath, ''))
		);
		BK.init(a, ta, s);
	}
	static init(aElm, inputElm, sElm) {
		Vw.sa(aElm, { href: inputElm.value });
		sElm.textContent =
			inputElm.value.length +
			'byte /FirefoxMax:' +
			BK.FirefoxMax +
			'byte /left size:' +
			(BK.FirefoxMax - inputElm.value.length) +
			'byte';
	}
	static setLink = (aElm, inputElm, sElm) => {
		return () => BK.init(aElm, inputElm, sElm);
	};
}
export class Test {
	static async run() {
		const l = 10;
		for (let i = 0; i < l; i++) {
			const seed = i + '/' + Date.now() + Math.random() * Date.now();
			const text = await H.d(seed, 'SHA-512');
			const u = Y.s2u(text);
			const b32 = Y.b32e(u.buffer);
			const a = Y.b32d(b32);
			const s = Y.a2s(a);
			const isMach = s === text;
			console.log('text:' + text + '/b32:' + b32 + '/s:' + s + '/isMach:' + isMach, u);
		}
		Test.runTotp();
		await Test.showQRCode(Vw.gi('test'));
	}
	static Types = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'];
	static showQRCode = async (elm) => {
		const secret = await Test.mkSecret();
		const f = Vw.div(elm, {}, { padding: '5px', backgroundColor: 'gray' });
		const t = Vw.div(f, { text: 'QRCodeTest' });
		const s = Vw.div(f, { text: 'secret:' + secret }, { fontSize: '50%' }),
			rowSty = { margin: '10px', display: 'flex', justifyContent: 'space-between' },
			form = Vw.div(f, {}, { fontSize: '50%' }),
			bar = Vw.div(
				form,
				{ text: 'QRCodeSeting' },
				{
					padding: '3px',
					backgroundColor: '#eee',
					cursor: 'pointer',
				}
			),
			input = Vw.div(form, {}, {});
		const r1 = Vw.div(input, {}, rowSty);
		Vw.div(r1, { text: 'accountId' });
		const uElm = Vw.ipt(r1, { value: 'test', size: 30 });
		const r3 = Vw.div(input, {}, rowSty);
		Vw.div(r3, { text: 'Secret' });
		const sElm = Vw.ipt(r3, { size: 80 });
		const r4 = Vw.div(input, {}, rowSty);
		Vw.div(r4, { text: 'Period' });
		const pElm = Vw.ipt(r4, { type: 'Number', value: 30 });
		const r5 = Vw.div(input, {}, rowSty);
		Vw.div(r5, { text: 'Type' });
		const select = Vw.add(r5, 'select', { text: 'type' });
		for (const type of Test.Types) {
			Vw.add(select, 'option', { text: type, value: type });
		}
		select.value = Test.Types[0];
		const r6 = Vw.div(input, {}, rowSty);
		Vw.div(r6, { text: 'Digits' });
		const dElm = Vw.ipt(r6, { type: 'Number', value: 6 });
		const r7 = Vw.div(input, {}, rowSty);
		const cElm = Vw.div(r7, {}, Vw.uO(rowSty, { wordBreak: 'break-all' }));
		const r8 = Vw.div(input, {}, rowSty);
		const aBtn = Vw.btn(r8, { text: 'Make' });
		const w = Vw.div(f);
		sElm.value = Y.b32e(B.u8(Y.U2a(secret)));
		cElm.textContent = Test.getMkOtpURIFunc(uElm, sElm, pElm, select, dElm)();
		console.log(cElm.textContent + ' /' + cElm.textContent.length);
		const h = 256;
		await Test.mkQR(uElm, sElm, pElm, select, dElm, cElm, w, h);
		Vw.click(aBtn, () => {
			Test.mkQR(uElm, sElm, pElm, select, dElm, cElm, w, h);
		});
		// const x = Vw.div(f);
		// let text = '';
		// const OK = [];
		// const NG = [];
		// for (let i = 0; i < 1400; i++) {
		// 	text += 'a';
		// 	Vw.rc(x);
		// 	try {
		// 		new CanvasQRCode(x, text, h, h);
		// 		OK.push(i);
		// 	} catch (e) {
		// 		NG.push(i);
		// 		console.log('NG i:' + i, e);
		// 	}
		// }
		// console.log('OK:', OK);
		// console.log('NG:', NG);
		// Vw.rc(x);
		const SALT =
			'メロスは激怒した。必ず、かの邪智暴虐じゃちぼうぎゃくの王を除かなければならぬと決意した。メロスには政治がわからぬ。メロスは、村の牧人である。笛を吹き、羊と遊んで暮して来た。けれども邪悪に対しては、人一倍に敏感であった。';
		console.log(Y.s2u(SALT));
		const af = Vw.div(f, {}, { fontSize: '80%', backgroundColor: '#ddd', padding: '1em', marginTop: '1em' });
		const a0 = Vw.div(af, { text: 'Generat SALT as URL for bookmarklet' }, rowSty);
		const a1 = Vw.div(af, {}, rowSty);
		const k = Vw.div(a1, { text: 'SALT preEncoding:' }, rowSty);
		const v = Vw.div(a1, {}, rowSty);
		const i = Vw.add(v, 'textarea', { text: SALT }, { width: '75vw' });
		const a2 = Vw.div(af, {}, rowSty);
		const t2 = Vw.div(a2, { text: 'SALT postEncoding: base64URI' }, rowSty);
		const r2 = Vw.div(a2, { text: Y.s2U(SALT) }, { fontSize: '50%', wordBreak: 'break-all' });
		const a3 = Vw.div(af, {}, rowSty);
		const r2a = Vw.div(a3, { text: 'length:' + Y.s2U(SALT).length }, { fontSize: '50%', wordBreak: 'break-all' });
		const a4 = Vw.div(af, {}, rowSty);
		const t3 = Vw.div(a4, { text: 'SALT encodeURI(SALT):' }, rowSty);
		const rA = Vw.div(a4, { text: encodeURI(SALT) }, { fontSize: '50%', wordBreak: 'break-all' });
		const a5 = Vw.div(af, {}, rowSty);
		const rA2 = Vw.div(
			a5,
			{ text: 'length:' + encodeURI(SALT).length },
			{ fontSize: '50%', wordBreak: 'break-all' }
		);
		Vw.input(i, () => {
			Vw.sT(r2, Y.s2U(i.valeu));
			Vw.sT(r2a, 'length:' + Y.s2U(SALT).length);
			Vw.sT(rA, encodeURI(SALT));
			Vw.sT(rA2, 'length:' + encodeURI(SALT).length);
		});
	};
	static mkQR = async (uElm, sElm, pElm, select, dElm, cElm, w, h) => {
		let text = Test.getMkOtpURIFunc(uElm, sElm, pElm, select, dElm)();
		let isOK = false;
		while (!isOK) {
			try {
				text = text.split('&a=a').join('&a=aA');
				Vw.rc(w);
				console.log('w:' + w + '/text:' + text + '/h:' + h);
				new CanvasQRC(w, text, h, h);
				cElm.textContent = text;
				const iE = Vw.gT(w, 'img'),
					p = await Auth.gSF(iE.src);
				isOK = p !== null;
				console.log('jsQR read p:' + p, typeof p, !p, isOK, iE.src);
			} catch (e) {
				console.log(e);
			}
			if (text.length > 300) {
				break;
			}
		}
		Vw.rc(w);
		new CanvasQRC(w, text, h, h);
		console.log('OK! text:' + text);
		const iE = Vw.gT(w, 'img'),
			p = await Auth.gSF(iE.src);
		console.log('##########################################################################');
		console.log(p, await H.d(iE.src), iE.src);
		console.log('##########################################################################');
	};
	static getMkOtpURIFunc = (uElm, sElm, pElm, tElm, dElm) => () =>
		`otpauth://totp/${encodeURI(location.domain)}:${encodeURI(uElm.value)}?secret=${
			sElm.value
		}&a=a&issuer=${encodeURI(location.domain)}&algorithm=${tElm.value.split('-').join('')}&digits=${
			dElm.value
		}&period=${pElm.value}`;
	static mkSecret = async () => await H.d(Math.floor(Math.random * 9999) + Date.now() + '', 10, 'SHA-512');
	static async runTotp() {
		// Seed for HMAC-SHA1 - 20 bytes
		const seed = '3132333435363738393031323334353637383930';
		// Seed for HMAC-SHA256 - 32 bytes
		const seed32 = '3132333435363738393031323334353637383930' + '313233343536373839303132';
		// Seed for HMAC-SHA512 - 64 bytes
		const seed64 =
			'3132333435363738393031323334353637383930' +
			'3132333435363738393031323334353637383930' +
			'3132333435363738393031323334353637383930' +
			'31323334';
		const T0 = 0;
		const X = 30;
		const testTime = [59, 1111111109, 1111111111, 1234567890, 2000000000, 20000000000];
		try {
			console.log('+---------------+-----------------------+-----------------+--------+--------+');
			console.log('|  Time(sec)    |   Time (UTC format)   | Value of T(Hex)  |  TOTP  | Mode   |');
			console.log('+---------------+-----------------------+------------------+--------+--------+');
			for (const t of testTime) {
				const T = Math.floor((t - T0) / X);
				let steps = T.toString(16);
				while (steps.length < 16) steps = '0' + steps;
				const fmtTime = t;
				const utcTime = new Date(t * 1000).toISOString();
				console.log(
					`|  ${fmtTime}  |  ${utcTime}  | ${steps} |${await Totp.generate(
						seed,
						steps,
						'8',
						'SHA-1'
					)}| SHA1   |${T.toString(16)}`
				);
				console.log(
					`|  ${fmtTime}  |  ${utcTime}  | ${steps} |${await Totp.generate(
						seed32,
						steps,
						'8',
						'SHA-256'
					)}| SHA256 |`
				);
				console.log(
					`|  ${fmtTime}  |  ${utcTime}  | ${steps} |${await Totp.generate(
						seed64,
						steps,
						'8',
						'SHA-512'
					)}| SHA512 |`
				);
				console.log('+---------------+-----------------------+------------------+--------+--------+');
			}
		} catch (e) {
			console.log('Error : ', e);
		}
		const h = `
		+-------------+--------------+------------------+----------+--------+
		|  Time (sec) |   UTC Time   | Value of T (hex) |   TOTP   |  Mode  |
		+-------------+--------------+------------------+----------+--------+
		|      59     |  1970-01-01  | 0000000000000001 | 94287082 |  SHA1  |
		|             |   00:00:59   |                  |          |        |
		|      59     |  1970-01-01  | 0000000000000001 | 46119246 | SHA256 |
		|             |   00:00:59   |                  |          |        |
		|      59     |  1970-01-01  | 0000000000000001 | 90693936 | SHA512 |
		|             |   00:00:59   |                  |          |        |
		|  1111111109 |  2005-03-18  | 00000000023523EC | 07081804 |  SHA1  |
		|             |   01:58:29   |                  |          |        |
		|  1111111109 |  2005-03-18  | 00000000023523EC | 68084774 | SHA256 |
		|             |   01:58:29   |                  |          |        |
		|  1111111109 |  2005-03-18  | 00000000023523EC | 25091201 | SHA512 |
		|             |   01:58:29   |                  |          |        |
		|  1111111111 |  2005-03-18  | 00000000023523ED | 14050471 |  SHA1  |
		|             |   01:58:31   |                  |          |        |
		|  1111111111 |  2005-03-18  | 00000000023523ED | 67062674 | SHA256 |
		|             |   01:58:31   |                  |          |        |
		|  1111111111 |  2005-03-18  | 00000000023523ED | 99943326 | SHA512 |
		|             |   01:58:31   |                  |          |        |
		|  1234567890 |  2009-02-13  | 000000000273EF07 | 89005924 |  SHA1  |
		|             |   23:31:30   |                  |          |        |
		|  1234567890 |  2009-02-13  | 000000000273EF07 | 91819424 | SHA256 |
		|             |   23:31:30   |                  |          |        |
		|  1234567890 |  2009-02-13  | 000000000273EF07 | 93441116 | SHA512 |
		|             |   23:31:30   |                  |          |        |
		|  2000000000 |  2033-05-18  | 0000000003F940AA | 69279037 |  SHA1  |
		|             |   03:33:20   |                  |          |        |
		|  2000000000 |  2033-05-18  | 0000000003F940AA | 90698825 | SHA256 |
		|             |   03:33:20   |                  |          |        |
		|  2000000000 |  2033-05-18  | 0000000003F940AA | 38618901 | SHA512 |
		|             |   03:33:20   |                  |          |        |
		| 20000000000 |  2603-10-11  | 0000000027BC86AA | 65353130 |  SHA1  |
		|             |   11:33:20   |                  |          |        |
		| 20000000000 |  2603-10-11  | 0000000027BC86AA | 77737706 | SHA256 |
		|             |   11:33:20   |                  |          |        |
		| 20000000000 |  2603-10-11  | 0000000027BC86AA | 47863826 | SHA512 |
		|             |   11:33:20   |                  |          |        |
		+-------------+--------------+------------------+----------+--------+
		`;
		console.log(h);
	}
}
Test.run();
BK.build();
export class VideoTest {
	static videoElem = null;
	static logElem = null;
	static displayMediaOptions = {
		video: {
			cursor: 'always',
		},
		audio: false,
	};
	static build() {
		const main = Vw.gi('main');
		Vw.add(main, 'p', { text: 'Test' });
		const a = Vw.add(main, 'p', {});
		const startElem = Vw.add(a, 'button', { text: 'Start Capture', id: 'start' });
		const stopElem = Vw.add(a, 'button', { text: 'Stop Capture', id: 'stop' });
		VideoTest.videoElem = Vw.add(a, 'video', { autoplay: 'autoplay', id: 'video' });
		Vw.add(a, 'strong', { text: 'Log:' });
		VideoTest.logElem = Vw.add(a, 'pre', { id: 'log' });
		Vw.click(startElem, (evt) => VideoTest.startCapture());
		Vw.click(stopElem, (evt) => VideoTest.stopCapture());
	}

	static async startCapture() {
		VideoTest.logElem.innerHTML = '';
		try {
			VideoTest.videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(VideoTest.displayMediaOptions);
			VideoTest.dumpOptionsInfo();
		} catch (err) {
			console.error('Error: ' + err);
		}
	}
	static stopCapture(evt) {
		const tracks = VideoTest.videoElem.srcObject.getTracks();
		tracks.forEach((track) => track.stop());
		VideoTest.videoElem.srcObject = null;
	}
	static dumpOptionsInfo() {
		const videoTrack = VideoTest.videoElem.srcObject.getVideoTracks()[0];

		console.info('Track settings:');
		console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
		console.info('Track constraints:');
		console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
	}
}
