const te = new TextEncoder('utf-8'),
	td = new TextDecoder('utf-8'),
	SlpMs = 100;
const rnd = (a = 1) => Math.random() * a;
const NullArr = [null];
const cType = 'application/x-www-form-urlencoded';
const J = JSON,
	Jp = (a) => J.parse(a),
	Js = (a) => J.stringify(a),
	SALT =
		'メロスは激怒した。必ず、かの邪智暴虐じゃちぼうぎゃくの王を除かなければならぬと決意した。メロスには政治がわからぬ。メロスは、村の牧人である。笛を吹き、羊と遊んで暮して来た。けれども邪悪に対しては、人一倍に敏感であった。',
	w = (...a) => console.warn(a),
	io = (...a) => console.info(a),
	err = (...a) => console.error(a),
	now = () => Date.now(),
	crv = (t) => crypto.getRandomValues(t),
	isS = (s) => typeof s === 'string',
	isN = (s) => typeof s === 'number',
	isArr = (a) => Array.isArray(a),
	isFn = (s) => typeof s === 'function',
	pr = (f) => new Promise(f),
	ct = (t) => clearTimeout(t),
	st = (f, w) => setTimeout(f, w),
	eu = (u) => encodeURI(u),
	gBl = (b) => b.byteLength,
	pv = (a) => (a && isS(a) ? Jp(a) : a),
	ov = (a) => (typeof a === 'object' ? Jp(a) : a),
	cb = (a) => a,
	rsm = () => Math.floor(rnd(SlpMs)) + SlpMs,
	ef = (e, id = '', l = null) => {
		cb(w(`${id} ${e.message}`), w(e.stack));
		if (l && isFn(l)) cb(l(`${id} ${e.message}`), l(e.stack));
		return null;
	};
function getEF(i, l) {
	return (e) => ef(e, i, l);
}
function slp(s = rsm()) {
	return pr((r) => st(() => r(), s));
}
class U {
	static u8ca = (s) => new Uint8ClampedArray(s);
	static u8cf = (s) => Uint8ClampedArray.from(s);
	static e(m) {
		throw new Error(m);
	}
	static cat = (b, a) => Array.prototype.push.apply(b, a);
	static A = (s) => new Array(s);
	static n = (m, n, l) => (console.log(m, n, l) ? null : null);
	static T = true;
}
//// jsQR //Apache License Version 2.0/// http://www.apache.org/licenses/ /////jsQR.es.min.nosjis.js/////////////////////////////////////////////////////////////////////////////////////////////////
/* 10 */
class W {
	static dc4DURI(dURI) {
		return pr((r) => {
			const i = I.i();
			i.onload = () => {
				const c = I.c(),
					s = (c.width = c.height = i.width),
					l = s * s * 4,
					x = c.getContext('2d');
				x.drawImage(i, 0, 0);
				const d = x.getImageData(0, 0, s, s),
					n = d.data,
					b = (n[l - 2] << 8) + n[l - 3],
					u = B.u8(b);
				for (let j = 0, k = 0; k < b; j++) if (j % 4 !== 3) u[k++] = n[j];
				r(u);
			};
			i.src = dURI;
		});
	}
	static v =
		'{"a":"infoBits","b":"versionNumber","c":"alignmentPatternCenters","d":"errorCorrectionLevels","e":"ecCodewordsPerBlock","f":"ecBlocks","g":"numBlocks","h":"dataCodewordsPerBlock"}';
	static D =
		'<a@,b1/^7.1,h19!e10.1,h16!e13.1,h13!e17.1,h9#a@,b2/6,18^10.1,h34!e16.1,h28!e22.1,h22!e28.1,h16#a@,b3/6,22^15.1,h55!e26.1,h44!e18.2,h17!e22.2,h13#a@,b4/6,26^20.1,h80!e18.2,h32!e26.2,h24!e16.4,h9#a@,b5/6,30^26.1,h108!e24.2,h43!e18.2,h15=g2,h16!e22.2,h11=g2,h12#a@,b6/6,34^18.2,h68!e16.4,h27!e24.4,h19!e28.4,h15#a31892,b7/6,22,38^20.2,h78!e18.4,h31!e18.2,h14=g4,h15!e26.4,h13=g1,h14#a34236,b8/6,24,42^24.2,h97!e22.2,h38=g2,h39!e22.4,h18=g2,h19!e26.4,h14=g2,h15#a39577,b9/6,26,46^30.2,h116!e22.3,h36=g2,h37!e20.4,h16=g4,h17!e24.4,h12=g4,h13#a42195,b10/6,28,50^18.2,h68=g2,h69!e26.4,h43=g1,h44!e24.6,h19=g2,h20!e28.6,h15=g2,h16#a48118,b11/6,30,54^20.4,h81!e30.1,h50=g4,h51!e28.4,h22=g4,h23!e24.3,h12=g8,h13#a51042,b12/6,32,58^24.2,h92=g2,h93!e22.6,h36=g2,h37!e26.4,h20=g6,h21!e28.7,h14=g4,h15#a55367,b13/6,34,62^26.4,h107!e22.8,h37=g1,h38!e24.8,h20=g4,h21!e22.12,h11=g4,h12#a58893,b14/6,26,46,66^30.3,h115=g1,h116!e24.4,h40=g5,h41!e20.11,h16=g5,h17!e24.11,h12=g5,h13#a63784,b15/6,26,48,70^22.5,h87=g1,h88!e24.5,h41=g5,h42!e30.5,h24=g7,h25!e24.11,h12=g7,h13#a68472,b16/6,26,50,74^24.5,h98=g1,h99!e28.7,h45=g3,h46!e24.15,h19=g2,h20!e30.3,h15=g13,h16#a70749,b17/6,30,54,78^28.1,h107=g5,h108!e28.10,h46=g1,h47!e28.1,h22=g15,h23!e28.2,h14=g17,h15#a76311,b18/6,30,56,82^30.5,h120=g1,h121!e26.9,h43=g4,h44!e28.17,h22=g1,h23!e28.2,h14=g19,h15#a79154,b19/6,30,58,86^28.3,h113=g4,h114!e26.3,h44=g11,h45!e26.17,h21=g4,h22!e26.9,h13=g16,h14#a84390,b20/6,34,62,90^28.3,h107=g5,h108!e26.3,h41=g13,h42!e30.15,h24=g5,h25!e28.15,h15=g10,h16#a87683,b21/6,28,50,72,94^28.4,h116=g4,h117!e26.17,h42!e28.17,h22=g6,h23!e30.19,h16=g6,h17#a92361,b22/6,26,50,74,98^28.2,h111=g7,h112!e28.17,h46!e30.7,h24=g16,h25!e24.34,h13#a96236,b23/6,30,54,74,102^30.4,h121=g5,h122!e28.4,h47=g14,h48!e30.11,h24=g14,h25!e30.16,h15=g14,h16#a102084,b24/6,28,54,80,106^30.6,h117=g4,h118!e28.6,h45=g14,h46!e30.11,h24=g16,h25!e30.30,h16=g2,h17#a102881,b25/6,32,58,84,110^26.8,h106=g4,h107!e28.8,h47=g13,h48!e30.7,h24=g22,h25!e30.22,h15=g13,h16#a110507,b26/6,30,58,86,114^28.10,h114=g2,h115!e28.19,h46=g4,h47!e28.28,h22=g6,h23!e30.33,h16=g4,h17#a110734,b27/6,34,62,90,118^30.8,h122=g4,h123!e28.22,h45=g3,h46!e30.8,h23=g26,h24!e30.12,h15=g28,h16#a117786,b28/6,26,50,74,98,122^30.3,h117=g10,h118!e28.3,h45=g23,h46!e30.4,h24=g31,h25!e30.11,h15=g31,h16#a119615,b29/6,30,54,78,102,126^30.7,h116=g7,h117!e28.21,h45=g7,h46!e30.1,h23=g37,h24!e30.19,h15=g26,h16#a126325,b30/6,26,52,78,104,130^30.5,h115=g10,h116!e28.19,h47=g10,h48!e30.15,h24=g25,h25!e30.23,h15=g25,h16#a127568,b31/6,30,56,82,108,134^30.13,h115=g3,h116!e28.2,h46=g29,h47!e30.42,h24=g1,h25!e30.23,h15=g28,h16#a133589,b32/6,34,60,86,112,138^30.17,h115!e28.10,h46=g23,h47!e30.10,h24=g35,h25!e30.19,h15=g35,h16#a136944,b33/6,30,58,86,114,142^30.17,h115=g1,h116!e28.14,h46=g21,h47!e30.29,h24=g19,h25!e30.11,h15=g46,h16#a141498,b34/6,34,62,90,118,146^30.13,h115=g6,h116!e28.14,h46=g23,h47!e30.44,h24=g7,h25!e30.59,h16=g1,h17#a145311,b35/6,30,54,78,102,126,150^30.12,h121=g7,h122!e28.12,h47=g26,h48!e30.39,h24=g14,h25!e30.22,h15=g41,h16#a150283,b36/6,24,50,76,102,128,154^30.6,h121=g14,h122!e28.6,h47=g34,h48!e30.46,h24=g10,h25!e30.2,h15=g64,h16#a152622,b37/6,28,54,80,106,132,158^30.17,h122=g4,h123!e28.29,h46=g14,h47!e30.49,h24=g10,h25!e30.24,h15=g46,h16#a158308,b38/6,32,58,84,110,136,162^30.4,h122=g18,h123!e28.13,h46=g32,h47!e30.48,h24=g14,h25!e30.42,h15=g32,h16#a161089,b39/6,26,54,82,110,138,166^30.20,h117=g4,h118!e28.40,h47=g7,h48!e30.43,h24=g22,h25!e30.10,h15=g67,h16#a167017,b40/6,30,58,86,114,142,170^30.19,h118=g6,h119!e28.18,h47=g31,h48!e30.34,h24=g34,h25!e30.20,h15=g61,h16>>>';

	static gK = (k, m, s) => (m[k] ? m[k] : (m[k] = s[Object.keys(m).length]));
	static p = [
		['"', ''],
		[':', ''],
		['},{', '='],
		['[{', '<'],
		['}]', '>'],
		['>>=', '#'],
		['>=', '!'],
		['null', '@'],
		[',f<g', '.'],
		[',c[', '/'],
		['],d<e', '^'],
	];
	static ej(j, p = W.p) {
		let a = j;
		for (const q of p) a = q[0] ? a.split(q[0]).join(q[1]) : a;
		return a;
	}
	static dj(j, vm) {
		let p = Jp(Js(W.p));
		for (const r of p) r.reverse();
		p.reverse();
		let a = W.ej(j, p);
		for (const k in vm) a = a.split(k).join(`"${k}":`);
		return a;
	}
	static vd(o, m) {
		if (isArr(o)) for (const r of o) W.vd(r, m);
		else if (typeof o === 'object') {
			for (const k in o) {
				const v = o[k];
				delete o[k];
				o[m[k]] = v;
				W.vd(v, m);
			}
		}
	}
	static gV() {
		const v = Jp(W.v),
			m = Jp(W.dj(W.D, v));
		W.vd(m, v);
		return m;
	}
	static dp(a) {
		const m = {},
			l = a.length;
		for (let c = 0; c < l; c += 4) m[((a[c + 0] << 8) | a[c + 1]) + ''] = (a[c + 2] << 8) | a[c + 3];
		return m;
	}
	static V = null;
	static init = () => (W.V ? '' : (W.V = W.gV()));
}
/*0 BitMatrix*/
class BM {
	constructor(d, w) {
		this.w = w;
		this.h = d.length / w;
		this.d = d;
	}
	static c = (w, h) => new BM(U.u8ca(w * h), w);
	g(x, y) {
		return x < 0 || x >= this.w || y < 0 || y >= this.h ? false : !!this.d[y * this.w + x];
	}
	s(x, y, v) {
		this.d[y * this.w + x] = v ? 1 : 0;
	}
	r(l, t, w, h, v) {
		for (let y = t; y < t + h; y++) for (let x = l; x < l + w; x++) this.s(x, y, !!v);
	}
}
/* 1 GenericGF*/
class GF {
	static a = (a, b) => a ^ b;
	constructor(p, s, g) {
		const z = this;
		z.p = p;
		z.s = s;
		z.g = g;
		z.E = U.A(z.s);
		z.L = U.A(z.s);
		let x = 1;
		for (let i = 0; i < z.s; i++) {
			z.E[i] = x;
			x = x * 2;
			if (x >= z.s) x = (x ^ z.p) & (z.s - 1);
		}
		for (let i = 0; i < z.s - 1; i++) z.L[z.E[i]] = i;
		z.zero = new GP(z, U.u8cf([0]));
		z.one = new GP(z, U.u8cf([1]));
	}
	m(a, b) {
		return a === 0 || b === 0 ? 0 : this.E[(this.L[a] + this.L[b]) % (this.s - 1)];
	}
	i(a) {
		return a === 0 ? U.e("Can't invert 0") : this.E[this.s - this.L[a] - 1];
	}
	b(d, c) {
		if (d < 0) U.e('Invalid monomial degree less than 0');
		if (c === 0) return this.zero;
		const e = U.u8ca(d + 1);
		e[0] = c;
		return new GP(this, e);
	}
	l(a) {
		return a === 0 ? U.e("Can't take log(0)") : this.L[a];
	}
	e(a) {
		return this.E[a];
	}
}
/* 2 GenericGFPoly*/
class GP {
	constructor(f, c) {
		if (c.length === 0) U.e('No coefficients.');
		const z = this,
			l = c.length;
		z.F = f;
		if (l > 1 && c[0] === 0) {
			let f = 1;
			while (f < l && c[f] === 0) f++;
			if (f === l) z.C = f.zero.C;
			else {
				z.C = U.u8ca(l - f);
				for (let i = 0; i < z.C.length; i++) z.C[i] = c[f + i];
			}
		} else z.C = c;
	}
	d() {
		return this.C.length - 1;
	}
	z() {
		return this.C[0] === 0;
	}
	c(d) {
		return this.C[this.C.length - 1 - d];
	}
	a(o) {
		const z = this;
		if (z.z()) return o;
		if (o.z()) return z;
		let a = z.C,
			b = o.C;
		const j = [b, a];
		if (a.length > b.length) (a = j[0]), (b = j[1]);
		const c = U.u8ca(b.length),
			d = b.length - a.length;
		for (let i = 0; i < d; i++) c[i] = b[i];
		for (let i = d; i < b.length; i++) c[i] = GF.a(a[i - d], b[i]);
		return new GP(z.F, c);
	}
	m(s) {
		const z = this;
		if (s === 0) return z.F.zero;
		if (s === 1) return z;
		const e = z.C.length,
			p = U.u8ca(e);
		for (let i = 0; i < e; i++) p[i] = z.F.m(z.C[i], s);
		return new GP(z.F, p);
	}
	p(o) {
		const z = this,
			b = z.C,
			c = b.length,
			d = o.C,
			e = d.length,
			p = U.u8ca(c + e - 1);
		if (z.z() || o.z()) return z.F.zero;
		for (let i = 0; i < c; i++) {
			const a = b[i];
			for (let j = 0; j < e; j++) p[i + j] = GF.a(p[i + j], z.F.m(a, d[j]));
		}
		return new GP(z.F, p);
	}
	b(d, c) {
		if (d < 0) U.e('Invalid degree less than 0');
		if (c === 0) return this.F.zero;
		const s = this.C.length,
			p = U.u8ca(s + d);
		for (let i = 0; i < s; i++) p[i] = this.F.m(this.C[i], c);
		return new GP(this.F, p);
	}
	e(a) {
		const z = this,
			s = z.C.length;
		if (a === 0) return z.c(0);
		let r = 0;
		if (a === 1) {
			z.C.forEach((c) => {
				r = GF.a(r, c);
			});
			return r;
		}
		r = z.C[0];
		for (let i = 1; i < s; i++) r = GF.a(z.F.m(a, r), z.C[i]);
		return r;
	}
}
/* 9 Reedsolomon*/
class RS {
	static E(f, a, b, R) {
		const i = [b, a];
		if (a.d() < b.d()) (a = i[0]), (b = i[1]);
		let e = a,
			r = b,
			g = f.zero,
			t = f.one;
		while (r.d() >= R / 2) {
			const h = e,
				j = g;
			e = r;
			g = t;
			if (e.z()) return U.n('RS fEA rL.z():' + e.z(), f, a);
			r = h;
			let q = f.zero;
			const k = e.c(e.d()),
				m = f.i(k);
			while (r.d() >= e.d() && !r.z()) {
				const n = r.d() - e.d(),
					s = f.m(r.c(r.d()), m);
				q = q.a(f.b(n, s));
				r = r.a(e.b(n, s));
			}
			t = q.p(g).a(j);
			if (r.d() >= e.d()) return U.n('RS fEA r.d():' + r.d() + '">=rL.d():' + e.d(), f, a);
		}
		const s = t.c(0);
		if (s === 0) return U.n('RS fEA s', s, R);
		const o = f.i(s);
		return [t.m(o), r.m(o)];
	}
	static L(f, l) {
		const n = l.d();
		if (n === 1) return [l.c(1)];
		const r = U.A(n);
		let c = 0;
		for (let i = 1; i < f.s && c < n; i++)
			if (l.e(i) === 0) {
				r[c] = f.i(i);
				c++;
			}
		return c !== n ? U.n('RS fEL eC', c, n) : r;
	}
	static M(f, e, l) {
		const s = l.length;
		const r = U.A(s);
		for (let i = 0; i < s; i++) {
			const xi = f.i(l[i]);
			let d = 1;
			for (let j = 0; j < s; j++) if (i !== j) d = f.m(d, GF.a(1, f.m(l[j], xi)));
			r[i] = f.m(e.e(xi), f.i(d));
			if (f.g !== 0) r[i] = f.m(r[i], xi);
		}
		return r;
	}
	static dec(b, s2) {
		const u = U.u8ca(b.length);
		u.set(b);
		const f = new GF(0x011d, 256, 0),
			p = new GP(f, u),
			q = U.u8ca(s2);
		let e = false;
		for (let s = 0; s < s2; s++) {
			const t = f.e(s + f.g);
			const z = p.e(t);
			q[q.length - 1 - s] = z;
			if (z !== 0) e = U.T;
		}
		if (!e) return u;
		const y = new GP(f, q),
			o = RS.E(f, f.b(s2, 1), y, s2);
		if (o === null) return U.n('RS dec o', o, y);
		const l = RS.L(f, o[0]);
		if (l == null) return U.n('RS dec l', l, f);
		const t = RS.M(f, o[1], l);
		for (let i = 0; i < l.length; i++) {
			const r = u.length - 1 - f.l(l[i]);
			if (r < 0) return U.n('RS dec r', r, t);
			u[r] = GF.a(u[r], t[i]);
		}
		return u;
	}
}
/* 4 Matrix Like BitMatrix but accepts arbitry Uint8 values*/
class Mx {
	constructor(w, h) {
		this.w = w;
		this.d = U.u8ca(w * h);
	}
	g(x, y) {
		return this.d[y * this.w + x];
	}
	s(x, y, v) {
		this.d[y * this.w + x] = v;
	}
}
class BZ {
	static R = 8;
	static M = 24;
	static n = (v, i, x) => (v < i ? i : v > x ? x : v);
	static b(d, w, h, r) {
		if (d.length !== w * h * 4) U.e('Malformed data passed to binarizer.');
		const a = new Mx(w, h);
		for (let x = 0; x < w; x++)
			for (let y = 0; y < h; y++) {
				const p = (y * w + x) * 4;
				a.s(x, y, 0.2126 * d[p + 0] + 0.7152 * d[p + 1] + 0.0722 * d[p + 2]);
			}
		const R = BZ.R,
			M = Math,
			c = M.ceil(w / R),
			e = M.ceil(h / R),
			f = new Mx(c, e);
		for (let i = 0; i < e; i++) {
			for (let j = 0; j < c; j++) {
				let m = 0,
					k = Infinity,
					n = 0;
				for (let y = 0; y < R; y++)
					for (let x = 0; x < R; x++) {
						let l = a.g(j * R + x, i * R + y);
						m += l;
						k = M.min(k, l);
						n = M.max(n, l);
					}
				let v = m / M.pow(R, 2);
				if (n - k <= BZ.M) {
					v = k / 2;
					if (i > 0 && j > 0) {
						const o = (f.g(j, i - 1) + 2 * f.g(j - 1, i) + f.g(j - 1, i - 1)) / 4;
						if (k < o) v = o;
					}
				}
				f.s(j, i, v);
			}
		}
		const z = BM.c(w, h),
			v = r ? BM.c(w, h) : null;
		for (let i = 0; i < e; i++)
			for (let j = 0; j < c; j++) {
				const l = BZ.n(j, 2, c - 3),
					t = BZ.n(i, 2, e - 3);
				let m = 0;
				for (let k = -2; k <= 2; k++) for (let n = -2; n <= 2; n++) m += f.g(l + k, t + n);
				const s = m / 25;
				for (let k = 0; k < R; k++)
					for (let n = 0; n < R; n++) {
						const x = j * R + k,
							y = i * R + n,
							l = a.g(x, y);
						z.s(x, y, l <= s);
						if (r) v.s(x, y, !(l <= s));
					}
			}
		return r ? { z, v } : { z };
	}
}
/* 7 BitStream*/
class BS {
	constructor(b) {
		this.bO = 0;
		this.bio = 0;
		this.b = b;
	}
	r(a) {
		const z = this;
		if (a < 1 || a > 32 || a > z.a()) U.e(`Cannot read ${a.toString()} bits`);
		let r = 0;
		if (z.bio > 0) {
			const c = 8 - z.bio,
				d = a < c ? a : c,
				e = c - d,
				m = (0xff >> (8 - d)) << e;
			r = (z.b[z.bO] & m) >> e;
			a -= d;
			z.bio += d;
			if (z.bio === 8) {
				z.bio = 0;
				z.bO++;
			}
		}
		if (a > 0) {
			while (a >= 8) {
				r = (r << 8) | (z.b[z.bO] & 0xff);
				z.bO++;
				a -= 8;
			}
			if (a > 0) {
				const f = 8 - a,
					m = (0xff >> f) << f;
				r = (r << a) | ((z.b[z.bO] & m) >> f);
				z.bio += a;
			}
		}
		return r;
	}
	a() {
		return 8 * (this.b.length - this.bO) - this.bio;
	}
}
/* 6 DecodeData*/
class DD {
	static M = { Numeric: 'numeric', Alphanumeric: 'alphanumeric', Byte: 'byte', Kanji: 'kanji', ECI: 'eci' };
	static B = {
		Terminator: 0,
		0: 'Terminator',
		Numeric: 1,
		1: 'Numeric',
		Alphanumeric: 2,
		2: 'Alphanumeric',
		Byte: 4,
		4: 'Byte',
		Kanji: 8,
		8: 'Kanji',
		ECI: 7,
		7: 'ECI',
	};
	static dN(m, z) {
		const b = [],
			h = [10, 12, 14][z];
		let t = '',
			l = m.r(h);
		while (l >= 3) {
			const n = m.r(10),
				a = Math.floor(n / 100),
				d = Math.floor(n / 10) % 10,
				c = n % 10;
			if (n >= 1000) U.e('Invalid numeric value above 999');
			b.push(48 + a, 48 + d, 48 + c);
			t += a.toString() + d.toString() + c.toString();
			l -= 3;
		}
		if (l === 2) {
			const n = m.r(7),
				a = Math.floor(n / 10),
				d = n % 10;
			if (n >= 100) U.e('Invalid numeric value above 99');
			b.push(48 + a, 48 + d);
			t += a.toString() + d.toString();
		} else if (l === 1) {
			const n = m.r(4);
			if (n >= 10) U.e('Invalid numeric value above 9');
			b.push(48 + n);
			t += n.toString();
		}
		return { b, t };
	}
	static A = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'.split('');
	static dA(m, z) {
		const b = [],
			h = [9, 11, 13][z],
			A = DD.A;
		let t = '',
			l = m.r(h);
		while (l >= 2) {
			const v = m.r(11),
				a = Math.floor(v / 45),
				b = v % 45;
			b.push(A[a].charCodeAt(0), A[b].charCodeAt(0));
			t += A[a] + A[b];
			l -= 2;
		}
		if (l === 1) {
			const a = m.r(6);
			b.push(A[a].charCodeAt(0));
			t += A[a];
		}
		return { b, t };
	}
	static dB(m, z) {
		const b = [],
			h = [8, 16, 16][z];
		let t = '',
			l = m.r(h);
		for (let i = 0; i < l; i++) b.push(m.r(8));
		const a = b.map((b) => '%' + ('0' + b.toString(16)).substr(-2)).join('');
		try {
			t += decodeURIComponent(a);
		} catch (e) {
			console.log('decodeByte e:', e, b, a, m, z);
		}
		return { b, t };
	}
	static dK(m, z) {
		const b = [],
			h = [8, 10, 12][z];
		let t = '',
			l = m.r(h);
		for (let i = 0; i < l; i++) {
			const k = m.r(13);
			let c = (Math.floor(k / 0xc0) << 8) | k % 0xc0;
			c += c < 0x1f00 ? 0x8140 : 0xc140;
			b.push(c >> 8, c & 0xff);
			t += '';
		}
		return { b, t };
	}
	static dec(d, v) {
		const s = new BS(d),
			z = v <= 9 ? 0 : v <= 26 ? 1 : 2,
			c = [],
			b = [],
			r = {
				t: '',
				b,
				c,
				v,
			},
			M = DD.M,
			B = DD.B;
		while (s.a() >= 4) {
			const m = s.r(4);
			if (m === B.Terminator) return r;
			else if (m === B.ECI) {
				if (s.r(1) === 0)
					c.push({
						type: M.ECI,
						assignmentNumber: s.r(7),
					});
				else if (s.r(1) === 0)
					c.push({
						type: M.ECI,
						assignmentNumber: s.r(14),
					});
				else if (s.r(1) === 0)
					c.push({
						type: M.ECI,
						assignmentNumber: s.r(21),
					});
				else
					c.push({
						type: M.ECI,
						assignmentNumber: -1,
					});
			} else if (m === B.Numeric) {
				const N = DD.dN(s, z);
				r.t += N.t;
				U.cat(b, N.b);
				c.push({
					type: M.Numeric,
					text: N.t,
				});
			} else if (m === B.Alphanumeric) {
				const A = DD.dA(s, z);
				r.t += A.t;
				U.cat(b, A.b);
				c.push({
					type: M.Alphanumeric,
					text: A.t,
				});
			} else if (m === B.Byte) {
				const B = DD.dB(s, z);
				r.t += B.t;
				U.cat(b, B.b);
				c.push({
					type: M.Byte,
					bytes: B.b,
					text: B.t,
				});
			} else if (m === B.Kanji) {
				const K = DD.dK(s, z);
				r.t += K.t;
				U.cat(b, K.b);
				c.push({
					type: M.Kanji,
					bytes: K.b,
					text: K.t,
				});
			}
		}
		if (s.a() === 0 || s.r(s.a()) === 0) return r;
	}
}
/* 5 Decoder*/
class DC {
	static n(x, y) {
		let z = x ^ y;
		let c = 0;
		while (z) {
			c++;
			z &= z - 1;
		}
		return c;
	}
	static p = (t, y) => (y << 1) | t;
	static F = [
		{ b: 0x5412, f: { e: 1, d: 0 } },
		{ b: 0x5125, f: { e: 1, d: 1 } },
		{ b: 0x5e7c, f: { e: 1, d: 2 } },
		{ b: 0x5b4b, f: { e: 1, d: 3 } },
		{ b: 0x45f9, f: { e: 1, d: 4 } },
		{ b: 0x40ce, f: { e: 1, d: 5 } },
		{ b: 0x4f97, f: { e: 1, d: 6 } },
		{ b: 0x4aa0, f: { e: 1, d: 7 } },
		{ b: 0x77c4, f: { e: 0, d: 0 } },
		{ b: 0x72f3, f: { e: 0, d: 1 } },
		{ b: 0x7daa, f: { e: 0, d: 2 } },
		{ b: 0x789d, f: { e: 0, d: 3 } },
		{ b: 0x662f, f: { e: 0, d: 4 } },
		{ b: 0x6318, f: { e: 0, d: 5 } },
		{ b: 0x6c41, f: { e: 0, d: 6 } },
		{ b: 0x6976, f: { e: 0, d: 7 } },
		{ b: 0x1689, f: { e: 3, d: 0 } },
		{ b: 0x13be, f: { e: 3, d: 1 } },
		{ b: 0x1ce7, f: { e: 3, d: 2 } },
		{ b: 0x19d0, f: { e: 3, d: 3 } },
		{ b: 0x0762, f: { e: 3, d: 4 } },
		{ b: 0x0255, f: { e: 3, d: 5 } },
		{ b: 0x0d0c, f: { e: 3, d: 6 } },
		{ b: 0x083b, f: { e: 3, d: 7 } },
		{ b: 0x355f, f: { e: 2, d: 0 } },
		{ b: 0x3068, f: { e: 2, d: 1 } },
		{ b: 0x3f31, f: { e: 2, d: 2 } },
		{ b: 0x3a06, f: { e: 2, d: 3 } },
		{ b: 0x24b4, f: { e: 2, d: 4 } },
		{ b: 0x2183, f: { e: 2, d: 5 } },
		{ b: 0x2eda, f: { e: 2, d: 6 } },
		{ b: 0x2bed, f: { e: 2, d: 7 } },
	];
	static M = [
		(p) => (p.y + p.x) % 2 === 0,
		(p) => p.y % 2 === 0,
		(p) => p.x % 3 === 0,
		(p) => (p.y + p.x) % 3 === 0,
		(p) => (Math.floor(p.y / 2) + Math.floor(p.x / 3)) % 2 === 0,
		(p) => ((p.x * p.y) % 2) + ((p.x * p.y) % 3) === 0,
		(p) => (((p.y * p.x) % 2) + ((p.y * p.x) % 3)) % 2 === 0,
		(p) => (((p.y + p.x) % 2) + ((p.y * p.x) % 3)) % 2 === 0,
	];
	static m(v) {
		const d = 17 + 4 * v.versionNumber,
			m = BM.c(d, d);
		m.r(0, 0, 9, 9, U.T);
		m.r(d - 8, 0, 8, 9, U.T);
		m.r(0, d - 8, 9, 8, U.T);
		for (const x of v.alignmentPatternCenters)
			for (const y of v.alignmentPatternCenters)
				if (!((x === 6 && y === 6) || (x === 6 && y === d - 7) || (x === d - 7 && y === 6)))
					m.r(x - 2, y - 2, 5, 5, U.T);
		m.r(6, 9, 1, d - 17, U.T);
		m.r(9, 6, d - 17, 1, U.T);
		if (v.versionNumber > 6) {
			m.r(d - 11, 0, 3, 6, U.T);
			m.r(0, d - 11, 6, 3, U.T);
		}
		return m;
	}
	static c(m, v, f) {
		const M = DC.M[f.d],
			d = m.h,
			g = DC.m(v),
			c = [];
		let n = 0,
			b = 0,
			h = U.T;
		for (let j = d - 1; j > 0; j -= 2) {
			if (j === 6) j--;
			for (let i = 0; i < d; i++) {
				const y = h ? d - 1 - i : i;
				for (let k = 0; k < 2; k++) {
					const x = j - k;
					if (!g.g(x, y)) {
						b++;
						let t = m.g(x, y);
						if (M({ y: y, x: x })) t = !t;
						n = DC.p(t, n);
						if (b === 8) {
							c.push(n);
							b = 0;
							n = 0;
						}
					}
				}
			}
			h = !h;
		}
		return c;
	}
	static v(m) {
		const d = m.h,
			a = Math.floor((d - 17) / 4);
		if (a <= 6) return W.V[a - 1];
		let b = 0,
			c = 0;
		for (let y = 5; y >= 0; y--) for (let x = d - 9; x >= d - 11; x--) b = DC.p(m.g(x, y), b);
		for (let x = 5; x >= 0; x--) for (let y = d - 9; y >= d - 11; y--) c = DC.p(m.g(x, y), c);
		let e = Infinity,
			f = null;
		for (const v of W.V) {
			if (v.infoBits === b || v.infoBits === c) return v;
			const g = DC.n(b, v.infoBits),
				h = DC.n(c, v.infoBits);
			if (g < e) {
				f = v;
				e = g;
			}
			if (h < e) {
				f = v;
				e = h;
			}
		}
		return e <= 3 ? f : U.n(`readVersion bD:${e}`);
	}
	static f(m) {
		let e = 0,
			f = 0;
		for (let x = 0; x <= 8; x++) if (x !== 6) e = DC.p(m.g(x, 8), e);
		for (let y = 7; y >= 0; y--) if (y !== 6) e = DC.p(m.g(8, y), e);
		const d = m.h;
		for (let y = d - 1; y >= d - 7; y--) f = DC.p(m.g(8, y), f);
		for (let x = d - 8; x < d; x++) f = DC.p(m.g(x, 8), f);
		let g = Infinity,
			h = null;
		for (const a of DC.F) {
			const b = a.b,
				i = a.f;
			if (b === e || b === f) return i;
			const j = DC.n(e, b);
			if (j < g) {
				h = i;
				g = j;
			}
			if (e !== f) {
				const k = DC.n(f, b);
				if (k < g) {
					h = i;
					g = k;
				}
			}
		}
		return g <= 3 ? h : U.n('readFormatInformation bD:' + g);
	}
	static b(c, v, e) {
		const z = v.errorCorrectionLevels[e],
			x = [],
			f = z.ecBlocks,
			s = f[0].dataCodewordsPerBlock;
		let y = 0;
		for (const b of f)
			for (let i = 0; i < b.numBlocks; i++) {
				const nD = b.dataCodewordsPerBlock;
				x.push({ nD, cw: [] });
				y += nD + z.ecCodewordsPerBlock;
			}
		if (c.length < y) return U.n(`getDataBlocks codeWs.length < tc:${y}/codeWs:${c.length}`);
		c = c.slice(0, y);
		for (let i = 0; i < s; i++) for (const d of x) d.cw.push(c.shift());
		if (f.length > 1) {
			const w = f[0].numBlocks,
				u = f[1].numBlocks;
			for (let i = 0; i < u; i++) x[w + i].cw.push(c.shift());
		}
		while (c.length > 0) for (const d of x) d.cw.push(c.shift());
		return x;
	}
	static x(m) {
		const v = DC.v(m);
		if (!v) return U.n('decodeMatrix v', v, m);
		const f = DC.f(m);
		if (!f) return U.n('decodeMatrix fI', f, m);
		const c = DC.c(m, v, f),
			d = DC.b(c, v, f.e);
		if (!d) return U.n('decodeMatrix d', d, m);
		const t = d.reduce((a, b) => a + b.nD, 0),
			r = U.u8ca(t);
		let j = 0;
		for (const b of d) {
			const a = RS.dec(b.cw, b.cw.length - b.nD);
			if (!a) return U.n('decodeMatrix cb c2:' + (b.cw.length - b.nD), a, m, b.cw);
			for (let i = 0; i < b.nD; i++) r[j++] = a[i];
		}
		try {
			return DD.dec(r, v.versionNumber);
		} catch (e) {
			return U.n('decodeMatrix e', e);
		}
	}
	static dec(m) {
		if (m == null) return U.n('decode mtx:' + m);
		const r = DC.x(m);
		if (r) return r;
		for (let x = 0; x < m.w; x++)
			for (let y = x + 1; y < m.h; y++)
				if (m.g(x, y) !== m.g(y, x)) {
					m.s(x, y, !m.g(x, y));
					m.s(y, x, !m.g(y, x));
				}
		return DC.x(m);
	}
}
/* 11 Extractor*/
class EX {
	static S(a, b, c, e) {
		const f = a.x - b.x + c.x - e.x,
			i = a.y - b.y + c.y - e.y;
		if (f === 0 && i === 0)
			return {
				a11: b.x - a.x,
				a12: b.y - a.y,
				a13: 0,
				a21: c.x - b.x,
				a22: c.y - b.y,
				a23: 0,
				a31: a.x,
				a32: a.y,
				a33: 1,
			};
		else {
			const j = b.x - c.x,
				k = e.x - c.x,
				l = b.y - c.y,
				m = e.y - c.y,
				d = j * m - k * l,
				n = (f * m - k * i) / d,
				o = (j * i - f * l) / d;
			return {
				a11: b.x - a.x + n * b.x,
				a12: b.y - a.y + n * b.y,
				a13: n,
				a21: e.x - a.x + o * e.x,
				a22: e.y - a.y + o * e.y,
				a23: o,
				a31: a.x,
				a32: a.y,
				a33: 1,
			};
		}
	}
	static Q(a, b, c, e) {
		const s = EX.S(a, b, c, e);
		return {
			a11: s.a22 * s.a33 - s.a23 * s.a32,
			a12: s.a13 * s.a32 - s.a12 * s.a33,
			a13: s.a12 * s.a23 - s.a13 * s.a22,
			a21: s.a23 * s.a31 - s.a21 * s.a33,
			a22: s.a11 * s.a33 - s.a13 * s.a31,
			a23: s.a13 * s.a21 - s.a11 * s.a23,
			a31: s.a21 * s.a32 - s.a22 * s.a31,
			a32: s.a12 * s.a31 - s.a11 * s.a32,
			a33: s.a11 * s.a22 - s.a12 * s.a21,
		};
	}
	static t(a, b) {
		return {
			a11: a.a11 * b.a11 + a.a21 * b.a12 + a.a31 * b.a13,
			a12: a.a12 * b.a11 + a.a22 * b.a12 + a.a32 * b.a13,
			a13: a.a13 * b.a11 + a.a23 * b.a12 + a.a33 * b.a13,
			a21: a.a11 * b.a21 + a.a21 * b.a22 + a.a31 * b.a23,
			a22: a.a12 * b.a21 + a.a22 * b.a22 + a.a32 * b.a23,
			a23: a.a13 * b.a21 + a.a23 * b.a22 + a.a33 * b.a23,
			a31: a.a11 * b.a31 + a.a21 * b.a32 + a.a31 * b.a33,
			a32: a.a12 * b.a31 + a.a22 * b.a32 + a.a32 * b.a33,
			a33: a.a13 * b.a31 + a.a23 * b.a32 + a.a33 * b.a33,
		};
	}
	static e(i, l) {
		const q = EX.Q(
				{ x: 3.5, y: 3.5 },
				{ x: l.dim - 3.5, y: 3.5 },
				{ x: l.dim - 6.5, y: l.dim - 6.5 },
				{ x: 3.5, y: l.dim - 3.5 }
			),
			s = EX.S(l.tL, l.tR, l.aP, l.bL),
			t = EX.t(s, q),
			m = BM.c(l.dim, l.dim),
			mF = (x, y) => {
				const d = t.a13 * x + t.a23 * y + t.a33;
				return {
					x: (t.a11 * x + t.a21 * y + t.a31) / d,
					y: (t.a12 * x + t.a22 * y + t.a32) / d,
				};
			};
		for (let y = 0; y < l.dim; y++)
			for (let x = 0; x < l.dim; x++) {
				const p = mF(x + 0.5, y + 0.5);
				m.s(x, y, i.g(Math.floor(p.x), Math.floor(p.y)));
			}
		return {
			m,
			mF,
		};
	}
}
/* 12 Locator*/
class LC {
	static MF = 4;
	static IQ = 0.5;
	static XQ = 1.5;
	static d = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
	static s = (v) => v.reduce((a, b) => a + b);
	static P(a, b, c) {
		const d = LC.d(a, b),
			e = LC.d(b, c),
			f = LC.d(a, c),
			i = e >= d && e >= f ? [b, a, c] : f >= e && f >= d ? [a, b, c] : [a, c, b],
			l = i[1];
		let m = i[0],
			n = i[2];
		if ((n.x - l.x) * (m.y - l.y) - (n.y - l.y) * (m.x - l.x) < 0) {
			const j = [n, m];
			m = j[0];
			n = j[1];
		}
		return { bL: m, tL: l, tR: n };
	}
	static D(a, b, c, m) {
		const e =
			(LC.s(LC.B(a, c, m, 5)) / 7 +
				LC.s(LC.B(a, b, m, 5)) / 7 +
				LC.s(LC.B(c, a, m, 5)) / 7 +
				LC.s(LC.B(b, a, m, 5)) / 7) /
			4;
		if (e < 1) U.e('Invalid module size');
		const f = Math.round(LC.d(a, b) / e),
			g = Math.round(LC.d(a, c) / e),
			d = Math.floor((f + g) / 2) + 7;
		return { dim: d + (!(d % 4) ? 1 : d % 4 === 2 ? -1 : 0), mS: e };
	}
	static T(o, e, m, l) {
		const M = Math,
			a = [{ x: M.floor(o.x), y: M.floor(o.y) }],
			b = M.abs(e.y - o.y) > M.abs(e.x - o.x),
			c = M.floor(b ? o.y : o.x),
			d = M.floor(b ? o.x : o.y),
			f = M.floor(b ? e.y : e.x),
			g = M.floor(b ? e.x : e.y),
			h = M.abs(f - c),
			j = M.abs(g - d),
			k = c < f ? 1 : -1,
			n = d < g ? 1 : -1,
			t = [];
		let r = M.floor(-h / 2),
			p = U.T;
		for (let x = c, y = d; x !== f + k; x += k) {
			const q = b ? y : x,
				s = b ? x : y;
			if (m.g(q, s) !== p) {
				p = !p;
				a.push({ x: q, y: s });
				if (a.length === l + 1) break;
			}
			r += j;
			if (r > 0) {
				if (y === g) break;
				y += n;
				r -= h;
			}
		}
		for (let i = 0; i < l; i++) t.push(a[i] && a[i + 1] ? LC.d(a[i], a[i + 1]) : 0);
		return t;
	}
	static B(o, e, m, l) {
		const r = e.y - o.y,
			u = e.x - o.x,
			t = LC.T(o, e, m, Math.ceil(l / 2)),
			a = LC.T(o, { x: o.x - u, y: o.y - r }, m, Math.ceil(l / 2)),
			v = t.shift() + a.shift() - 1;
		let i;
		return (i = a.concat(v)).concat.apply(i, t);
	}
	static S(s, r) {
		const a = LC.s(s) / LC.s(r);
		let e = 0;
		r.forEach((ratio, i) => {
			e += Math.pow(s[i] - ratio * a, 2);
		});
		return { a, e };
	}
	static Q(p, r, m) {
		try {
			const a = LC.B(p, { x: -1, y: p.y }, m, r.length),
				b = LC.B(p, { x: p.x, y: -1 }, m, r.length),
				M = Math,
				c = {
					x: M.max(0, p.x - p.y) - 1,
					y: M.max(0, p.y - p.x) - 1,
				},
				d = LC.B(p, c, m, r.length),
				f = {
					x: M.min(m.w, p.x + p.y) + 1,
					y: M.min(m.h, p.y + p.x) + 1,
				},
				g = LC.B(p, f, m, r.length),
				h = LC.S(a, r),
				i = LC.S(b, r),
				j = LC.S(d, r),
				k = LC.S(g, r),
				l = M.sqrt(h.e * h.e + i.e * i.e + j.e * j.e + k.e * k.e),
				n = (h.a + i.a + j.a + k.a) / 4,
				o = (M.pow(h.a - n, 2) + M.pow(i.a - n, 2) + M.pow(j.a - n, 2) + M.pow(k.a - n, 2)) / n;
			return l + o;
		} catch (e) {
			console.log('scorePattern', e);
			return Infinity;
		}
	}
	static R(m, p) {
		const M = Math;
		let l = M.round(p.x);
		while (m.g(l, M.round(p.y))) l--;
		let r = M.round(p.x);
		while (m.g(r, M.round(p.y))) r++;
		const x = (l + r) / 2;
		let t = M.round(p.y);
		while (m.g(M.round(x), t)) t--;
		let b = M.round(p.y);
		while (m.g(M.round(x), b)) b++;
		const y = (t + b) / 2;
		return { x, y };
	}
	static l(m) {
		let F = [],
			A = [];
		const P = [],
			Q = [],
			M = Math,
			f1 = (y) => {
				let c = 0,
					d = false,
					e = [0, 0, 0, 0, 0],
					f2 = (x) => {
						const v = m.g(x, y);
						if (v === d) c++;
						else {
							e = [e[1], e[2], e[3], e[4], c];
							c = 1;
							d = v;
							const f = LC.s(e) / 7,
								g =
									M.abs(e[0] - f) < f &&
									M.abs(e[1] - f) < f &&
									M.abs(e[2] - 3 * f) < 3 * f &&
									M.abs(e[3] - f) < f &&
									M.abs(e[4] - f) < f &&
									!v,
								h = LC.s(e.slice(-3)) / 3,
								k = M.abs(e[2] - h) < h && M.abs(e[3] - h) < h && M.abs(e[4] - h) < h && v;
							if (g) {
								const n = x - e[3] - e[4],
									o = n - e[2],
									l = { s: o, e: n, y: y },
									s = F.filter(
										(q) =>
											(o >= q.B.s && o <= q.B.e) ||
											(n >= q.B.s && o <= q.B.e) ||
											(o <= q.B.s &&
												n >= q.B.e &&
												e[2] / (q.B.e - q.B.s) < LC.XQ &&
												e[2] / (q.B.e - q.B.s) > LC.IQ)
									);
								if (s.length > 0) s[0].B = l;
								else F.push({ T: l, B: l });
							}
							if (k) {
								const n = x - e[4],
									o = n - e[3],
									l = { s: o, y, e: n },
									s = A.filter(
										(q) =>
											(o >= q.B.s && o <= q.B.e) ||
											(n >= q.B.s && o <= q.B.e) ||
											(o <= q.B.s &&
												n >= q.B.e &&
												e[2] / (q.B.e - q.B.s) < LC.XQ &&
												e[2] / (q.B.e - q.B.s) > LC.IQ)
									);
								if (s.length > 0) s[0].B = l;
								else A.push({ T: l, B: l });
							}
						}
					};
				for (let x = -1; x <= m.w; x++) f2(x);
				U.cat(
					P,
					F.filter((q) => q.B.y !== y && q.B.y - q.T.y >= 2)
				);
				F = F.filter((q) => q.B.y === y);
				U.cat(
					Q,
					A.filter((q) => q.B.y !== y)
				);
				A = A.filter((q) => q.B.y === y);
			};
		for (let y = 0; y <= m.h; y++) f1(y);
		U.cat(
			P,
			F.filter((q) => q.B.y - q.T.y >= 2)
		);
		U.cat(Q, A);
		const G = P.filter((q) => q.B.y - q.T.y >= 2)
			.map((q) => {
				const x = (q.T.s + q.T.e + q.B.s + q.B.e) / 4,
					y = (q.T.y + q.B.y + 1) / 2;
				return m.g(M.round(x), M.round(y))
					? {
							C: LC.Q({ x: M.round(x), y: M.round(y) }, [1, 1, 3, 1, 1], m),
							x,
							y,
							S: LC.s([(q.T.e - q.T.s, q.B.e - q.B.s, q.B.y - q.T.y + 1)]) / 3,
					  }
					: 0;
			})
			.filter((q) => !!q)
			.sort((a, b) => a.C - b.C)
			.map((t, i, f) => {
				if (i > LC.MF) return null;
				const o = f
					.filter((p, ii) => i !== ii)
					.map((p) => {
						return {
							x: p.x,
							y: p.y,
							C: p.C + M.pow(p.S - t.S, 2) / t.S,
							S: p.S,
						};
					})
					.sort((a, b) => a.C - b.C);
				return o.length < 2 ? 0 : { p: [t].concat(o.slice(0, 2)), C: t.C + o[0].C + o[1].C };
			})
			.filter((q) => !!q)
			.sort((a, b) => a.C - b.C);
		if (G.length === 0) return null;
		const i = LC.P(G[0].p[0], G[0].p[1], G[0].p[2]),
			H = i.tR,
			I = i.tL,
			J = i.bL,
			K = LC.A(m, Q, H, I, J),
			r = [];
		if (K)
			r.push({
				aP: { x: K.aP.x, y: K.aP.y },
				bL: { x: J.x, y: J.y },
				dim: K.dim,
				tL: { x: I.x, y: I.y },
				tR: { x: H.x, y: H.y },
			});
		const L = LC.R(m, H),
			N = LC.R(m, I),
			O = LC.R(m, J),
			S = LC.A(m, Q, L, N, O);
		if (S)
			r.push({
				aP: {
					x: S.aP.x,
					y: S.aP.y,
				},
				bL: { x: O.x, y: O.y },
				tL: { x: N.x, y: N.y },
				tR: { x: L.x, y: L.y },
				dim: S.dim,
			});
		return r.length === 0 ? null : r;
	}
	static A(m, a, r, l, b) {
		let d, s;
		try {
			const i = LC.D(l, r, b, m);
			d = i.dim;
			s = i.mS;
		} catch (e) {
			return U.n('findAlignmentPattern e:', e);
		}
		const R = {
				x: r.x - l.x + b.x,
				y: r.y - l.y + b.y,
			},
			B = (LC.d(l, b) + LC.d(l, r)) / 2 / s,
			c = 1 - 3 / B,
			g = {
				x: l.x + c * (R.x - l.x),
				y: l.y + c * (R.y - l.y),
			},
			h = a
				.map((q) => {
					const x = (q.T.s + q.T.e + q.B.s + q.B.e) / 4,
						y = (q.T.y + q.B.y + 1) / 2,
						M = Math;
					return !m.g(M.floor(x), M.floor(y))
						? 0
						: { x, y, C: LC.Q({ x: M.floor(x), y: M.floor(y) }, [1, 1, 1], m) + LC.d({ x, y }, g) };
				})
				.filter((v) => !!v)
				.sort((a, b) => a.C - b.C);
		return { aP: B >= 15 && h.length ? h[0] : g, dim: d };
	}
}
/* 3 */
class JsQR {
	static s(m) {
		const L = LC.l(m);
		if (!L) return U.n('scan A ls:' + L);
		for (const l of L) {
			const e = EX.e(m, l),
				d = DC.dec(e.m);
			if (d)
				return {
					binaryData: d.b,
					data: d.t,
					chunks: d.c,
					version: d.v,
					location: {
						topRightCorner: e.mF(l.dim, 0),
						topLeftCorner: e.mF(0, 0),
						bottomRightCorner: e.mF(l.dim, l.dim),
						bottomLeftCorner: e.mF(0, l.dim),
						topRightFinderPattern: l.tR,
						topLeftFinderPattern: l.tL,
						bottomLeftFinderPattern: l.bL,
						bottomRightAlignmentPattern: l.aP,
					},
				};
		}
		return U.n(`scan B ls:${L}`);
	}
	static exec(u8a, width, height, providedOptions = {}) {
		W.init();
		const o = {
			inversionAttempts: 'attemptBoth',
		};
		for (const k in o) o[k] = providedOptions[k] || o[k];
		const i = o.inversionAttempts,
			s = i === 'attemptBoth' || i === 'invertFirst',
			t = i === 'onlyInvert' || i === 'invertFirst',
			j = BZ.b(u8a, width, height, s),
			r = JsQR.s(t ? j.v : j.z);
		return !r && (i === 'attemptBoth' || i === 'invertFirst') ? JsQR.s(t ? j.z : j.v) : r;
	}
}
export const jsQR = JsQR.exec;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @author davidshimjs
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
class QR8 {
	//QR8bitByte
	constructor(d) {
		const z = this;
		z.mode = QRMode.M_8;
		z.data = d;
		const pD = []; // Added to support UTF-8 Characters
		for (let i = 0, l = d.length; i < l; i++) {
			const b = [],
				c = d.charCodeAt(i);
			if (c > 0x10000) {
				b[0] = 0xf0 | ((c & 0x1c0000) >>> 18);
				b[1] = 0x80 | ((c & 0x3f000) >>> 12);
				b[2] = 0x80 | ((c & 0xfc0) >>> 6);
				b[3] = 0x80 | (c & 0x3f);
			} else if (c > 0x800) {
				b[0] = 0xe0 | ((c & 0xf000) >>> 12);
				b[1] = 0x80 | ((c & 0xfc0) >>> 6);
				b[2] = 0x80 | (c & 0x3f);
			} else if (c > 0x80) {
				b[0] = 0xc0 | ((c & 0x7c0) >>> 6);
				b[1] = 0x80 | (c & 0x3f);
			} else {
				b[0] = c;
			}
			pD.push(b);
		}
		z.pD = [].concat(pD);
		if (z.pD.length !== d.length) {
			z.pD.unshift(191); // ADD BOM
			z.pD.unshift(187);
			z.pD.unshift(239);
		}
	}
	gL() {
		return this.pD.length; //getLength
	}
	w(buf) {
		for (let i = 0, l = this.pD.length; i < l; i++) buf.put(this.pD[i], 8); //write
	}
}
class QRCM {
	//QRCodeModel
	constructor(tN, eCL) {
		const z = this;
		z.tN = tN;
		z.eCL = eCL;
		z.mdl = null;
		z.mC = 0;
		z.dC = null;
		z.dL = [];
	}
	addData(d) {
		this.dL.push(new QR8(d));
		this.dC = null;
	}
	isD(r, c) {
		return r < 0 || this.mC <= r || c < 0 || this.mC <= c ? U.e(r + ',' + c) : this.mdl[r][c];
	}
	gMC() {
		return this.mC; //getModuleCount
	}
	make() {
		this.mI(false, this.gBMP());
	}
	mI(test, mP) {
		const z = this,
			n = z.tN * 4 + 17,
			nOM7 = n - 7,
			m = U.A(n);
		z.mC = n;
		z.mdl = m;
		for (let rI = 0; rI < n; rI++) {
			const r = U.A(n);
			m[rI] = r;
			for (let cI = 0; cI < n; cI++) r[cI] = null;
		}
		z.sP3(0, 0, m, n);
		z.sP3(nOM7, 0, m, n);
		z.sP3(0, nOM7, m, n);
		z.sPAP(m, z.tN);
		z.sTP(m, n);
		z.sTI(test, mP, m, n, z.eCL);
		if (z.tN >= 7) z.sTN(test, m, n, z.tN);
		if (z.dC == null) z.dC = QRCM.cD(z.tN, z.eCL, z.dL);
		z.mD(z.dC, mP, m, n);
	}
	sP3(r, c, m, n) {
		//setupPositionProbePattern
		for (let y = -1; y <= 7; y++) {
			const rR = r + y;
			if (rR <= -1 || n <= rR) continue;
			for (let x = -1; x <= 7; x++) {
				const cC = c + x;
				if (cC <= -1 || n <= cC) continue;
				m[rR][cC] =
					!!(0 <= y && y <= 6 && (x === 0 || x === 6)) ||
					(0 <= x && x <= 6 && (y === 0 || y === 6)) ||
					(2 <= y && y <= 4 && 2 <= x && x <= 4);
			}
		}
	}
	gBMP() {
		let minLP = 0, //getBestMaskPattern
			p = 0;
		for (let i = 0; i < 8; i++) {
			this.mI(true, i);
			const lP = QRU.gLP(this);
			if (i === 0 || minLP > lP) {
				minLP = lP;
				p = i;
			}
		}
		return p;
	}
	sTP(m, n) {
		const nO = n - 8; //setupTimingPattern
		for (let i = 8; i < nO; i++) {
			const o = i % 2 === 0, //mod
				r = m[i][6],
				c = m[6][i];
			m[i][6] = r != null ? r : o;
			m[6][i] = c != null ? c : o;
		}
	}
	sPAP(m, tN) {
		const p = QRU.gPP(tN), //setupPositionAdjustPattern
			pl = p.length;
		for (let i = 0; i < pl; i++)
			for (let j = 0; j < pl; j++) {
				const rI = p[i],
					cI = p[j];
				if (m[rI][cI] != null) continue;
				for (let y = -2; y <= 2; y++) {
					const r = m[rI + y];
					for (let x = -2; x <= 2; x++)
						r[cI + x] = !!(y === -2 || y === 2 || x === -2 || x === 2 || (y === 0 && x === 0));
				}
			}
	}
	sTN(test, m, n, tN) {
		const b = QRU.gBCHTN(tN); //setupTypeNumber
		for (let i = 0; i < 18; i++) {
			const o = !test && ((b >> i) & 1) === 1, //mod
				a = Math.floor(i / 3),
				j = (i % 3) + n - 8 - 3;
			m[a][j] = o;
			m[j][a] = o;
		}
	}
	sTI(test, mP, m, n, eCL) {
		const d = (eCL << 3) | mP, //setupTypeInfo
			b = QRU.gBCHTI(d);
		for (let i = 0; i < 15; i++) {
			const o = !test && ((b >> i) & 1) === 1; //mod
			if (i < 6) m[i][8] = o;
			else if (i < 8) m[i + 1][8] = o;
			else m[n - 15 + i][8] = o;
			if (i < 8) m[8][n - i - 1] = o;
			else if (i < 9) m[8][15 - i - 1 + 1] = o;
			else m[8][15 - i - 1] = o;
		}
		m[n - 8][8] = !test;
	}
	mD(d, mP, m, n) {
		const dL = d.length; //mapData
		let inc = -1,
			rI = n - 1,
			biI = 7, //bitIindex
			byI = 0; //byteIndex
		for (let cI = n - 1; cI > 0; cI -= 2) {
			if (cI === 6) cI--;
			while (true) {
				const r = m[rI];
				for (let y = 0; y < 2; y++) {
					const cO = cI - y,
						c = r[cO];
					if (c !== null) continue;
					let isD = byI < dL ? ((d[byI] >>> biI) & 1) === 1 : false; //isDark
					const isM = QRU.gM(mP, rI, cO); //isMask
					if (isM) isD = !isD;
					r[cO] = isD;
					biI--;
					if (biI === -1) {
						byI++;
						biI = 7;
					}
				}
				rI += inc;
				if (rI < 0 || n <= rI) {
					rI -= inc;
					inc = -inc;
					break;
				}
			}
		}
	}
	static cD(tN, eCL, dL) {
		const PAD0 = 0xec, //createData
			PAD1 = 0x11,
			rsBs = QRRSB.gRSBs(tN, eCL),
			b = new QRBB();
		for (const d of dL) {
			b.put(d.mode, 4);
			b.put(d.gL(), QRU.gLIB(d.mode, tN));
			d.w(b);
		}
		let tCC = 0;
		for (const rsB of rsBs) tCC += rsB.dC;
		const tDBC = tCC * 8,
			bl = b.gLB();
		if (bl > tDBC) U.e('code length overflow. (' + bl + '>' + tDBC + ')');
		if (bl + 4 <= tDBC) b.put(0, 4);
		while (b.gLB() % 8 !== 0) b.pB(false);
		while (true) {
			if (b.gLB() >= tDBC) break;
			b.put(PAD0, 8);
			if (b.gLB() >= tDBC) break;
			b.put(PAD1, 8);
		}
		return QRCM.cB(b, rsBs);
	}
	static cB(buf, rsBs) {
		let o = 0, //createBytes
			maxDC = 0,
			maxEC = 0;
		const bitB = buf.buffer,
			len = rsBs.length,
			dc = U.A(len),
			ec = U.A(len);
		let tCC = 0;
		for (let r = 0; r < len; r++) {
			const rsB = rsBs[r],
				dC = rsB.dC,
				eC = rsB.tC - dC,
				dDR = U.A(dC);
			maxDC = Math.max(maxDC, dC);
			maxEC = Math.max(maxEC, eC);
			for (let i = 0; i < dC; i++) dDR[i] = 0xff & bitB[i + o];
			dc[r] = dDR;
			o += dC;
			const rsPoly = QRU.gECP(eC),
				ecL = rsPoly.gL() - 1,
				rP = new QRP(dDR, ecL),
				mP = rP.mod(rsPoly),
				mL = mP.gL(),
				oL = mL - ecL,
				eDR = U.A(ecL);
			for (let i = 0; i < ecL; i++) {
				const mI = i + oL;
				eDR[i] = mI >= 0 ? mP.get(mI) : 0;
			}
			ec[r] = eDR;
			tCC += rsB.tC;
		}
		const d = U.A(tCC);
		let i = 0;
		for (let j = 0; j < maxDC; j++)
			for (let r = 0; r < len; r++) {
				const dDR = dc[r];
				if (j < dDR.length) d[i++] = dDR[j];
			}
		for (let j = 0; j < maxEC; j++)
			for (let r = 0; r < len; r++) {
				const eDR = ec[r];
				if (j < eDR.length) d[i++] = eDR[j];
			}
		return d;
	}
}
const QRMode = { M_N: 1 << 0, M_A: 1 << 1, M_8: 1 << 2, M_K: 1 << 3 };
const QRECL = { L: 1, M: 0, Q: 3, H: 2 }; //QRErrorCorrectLevel
const QRMP = {
	P000: 0, //QRMaskPattern
	P001: 1,
	P010: 2,
	P011: 3,
	P100: 4,
	P101: 5,
	P110: 6,
	P111: 7,
};
class QRU {
	//QRUtil
	static PATTERN_POSITION_TABLE = [
		[],
		[6, 18],
		[6, 22],
		[6, 26],
		[6, 30],
		[6, 34],
		[6, 22, 38],
		[6, 24, 42],
		[6, 26, 46],
		[6, 28, 50],
		[6, 30, 54],
		[6, 32, 58],
		[6, 34, 62],
		[6, 26, 46, 66],
		[6, 26, 48, 70],
		[6, 26, 50, 74],
		[6, 30, 54, 78],
		[6, 30, 56, 82],
		[6, 30, 58, 86],
		[6, 34, 62, 90],
		[6, 28, 50, 72, 94],
		[6, 26, 50, 74, 98],
		[6, 30, 54, 78, 102],
		[6, 28, 54, 80, 106],
		[6, 32, 58, 84, 110],
		[6, 30, 58, 86, 114],
		[6, 34, 62, 90, 118],
		[6, 26, 50, 74, 98, 122],
		[6, 30, 54, 78, 102, 126],
		[6, 26, 52, 78, 104, 130],
		[6, 30, 56, 82, 108, 134],
		[6, 34, 60, 86, 112, 138],
		[6, 30, 58, 86, 114, 142],
		[6, 34, 62, 90, 118, 146],
		[6, 30, 54, 78, 102, 126, 150],
		[6, 24, 50, 76, 102, 128, 154],
		[6, 28, 54, 80, 106, 132, 158],
		[6, 32, 58, 84, 110, 136, 162],
		[6, 26, 54, 82, 110, 138, 166],
		[6, 30, 58, 86, 114, 142, 170],
	];
	static G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
	static G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
	static G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
	static gBCHTI(dt) {
		let d = dt << 10; //getBCHTypeInfo
		const Q = QRU;
		while (Q.gBCHD(d) - Q.gBCHD(Q.G15) >= 0) d ^= Q.G15 << (Q.gBCHD(d) - Q.gBCHD(Q.G15));
		return ((dt << 10) | d) ^ Q.G15_MASK;
	}
	static gBCHTN(dt) {
		let d = dt << 12; //getBCHTypeNumber
		const Q = QRU;
		while (Q.gBCHD(d) - Q.gBCHD(Q.G18) >= 0) d ^= Q.G18 << (Q.gBCHD(d) - Q.gBCHD(Q.G18));
		return (dt << 12) | d;
	}
	static gBCHD(dt) {
		let digit = 0; //getBCHDigit
		while (dt !== 0) {
			digit++;
			dt >>>= 1;
		}
		return digit;
	}
	static gPP = (tN) => QRU.PATTERN_POSITION_TABLE[tN - 1]; //getPatternPosition
	static gM(mP, i, j) {
		const Q = QRMP; //getMask
		switch (mP) {
			case Q.P000:
				return (i + j) % 2 === 0;
			case Q.P001:
				return i % 2 === 0;
			case Q.P010:
				return j % 3 === 0;
			case Q.P011:
				return (i + j) % 3 === 0;
			case Q.P100:
				return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
			case Q.P101:
				return ((i * j) % 2) + ((i * j) % 3) === 0;
			case Q.P110:
				return (((i * j) % 2) + ((i * j) % 3)) % 2 === 0;
			case Q.P111:
				return (((i * j) % 3) + ((i + j) % 2)) % 2 === 0;
			default:
				U.e('bad maskPattern:' + mP);
		}
	}
	static gECP(eCL) {
		let a = new QRP([1], 0); //getErrorCorrectPolynomial
		for (let i = 0; i < eCL; i++) a = a.multi(new QRP([1, QRM.gexp(i)], 0));
		return a;
	}
	static gLIB(m, t) {
		const Q = QRMode; //getLengthInBits
		if (1 <= t && t < 10)
			switch (m) {
				case Q.M_N: //MODE_NUMBER
					return 10;
				case Q.M_A: //MODE_ALPHA_NUM
					return 9;
				case Q.M_8: //MODE_8BIT_BYTE
					return 8;
				case Q.M_K: //MODE_KANJI
					return 8;
				default:
					U.e('mode:' + m);
			}
		else if (t < 27)
			switch (m) {
				case Q.M_N:
					return 12;
				case Q.M_A:
					return 11;
				case Q.M_8:
					return 16;
				case Q.M_K:
					return 10;
				default:
					U.e('mode:' + m);
			}
		else if (t < 41)
			switch (m) {
				case Q.M_N:
					return 14;
				case Q.M_A:
					return 13;
				case Q.M_8:
					return 16;
				case Q.M_K:
					return 12;
				default:
					U.e('mode:' + m);
			}
		else U.e('type:' + t);
	}
	static gLP(qrC) {
		const q = qrC,
			n = q.gMC(); //getLostPoint
		let lP = 0;
		for (let x = 0; x < n; x++)
			for (let y = 0; y < n; y++) {
				let sC = 0;
				const isDark = q.isD(x, y);
				for (let r = -1; r <= 1; r++) {
					const rR = x + r;
					if (rR < 0 || n <= rR) continue;
					for (let c = -1; c <= 1; c++) {
						const cC = y + c;
						if (cC < 0 || n <= cC) continue;
						if (r === 0 && c === 0) continue;
						if (isDark === q.isD(rR, cC)) sC++;
					}
				}
				if (sC > 5) lP += 3 + sC - 5;
			}
		for (let r = 0; r < n - 1; r++) {
			const r1 = r + 1;
			for (let c = 0; c < n - 1; c++) {
				let i = 0;
				const c1 = c + 1;
				if (q.isD(r, c)) i++;
				if (q.isD(r1, c)) i++;
				if (q.isD(r, c1)) i++;
				if (q.isD(r1, c1)) i++;
				if (i === 0 || i === 4) lP += 3;
			}
		}
		for (let r = 0; r < n; r++)
			for (let c = 0; c < n - 6; c++)
				if (
					q.isD(r, c) &&
					!q.isD(r, c + 1) &&
					q.isD(r, c + 2) &&
					q.isD(r, c + 3) &&
					q.isD(r, c + 4) &&
					!q.isD(r, c + 5) &&
					q.isD(r, c + 6)
				)
					lP += 40;
		for (let c = 0; c < n; c++)
			for (let r = 0; r < n - 6; r++)
				if (
					q.isD(r, c) &&
					!q.isD(r + 1, c) &&
					q.isD(r + 2, c) &&
					q.isD(r + 3, c) &&
					q.isD(r + 4, c) &&
					!q.isD(r + 5, c) &&
					q.isD(r + 6, c)
				)
					lP += 40;
		let dC = 0;
		for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (q.isD(x, y)) dC++;
		const r = Math.abs((100 * dC) / n / n - 50) / 5;
		lP += r * 10;
		return lP;
	}
}
class QRM {
	//QRMath
	static glog = (n) => (n < 1 ? U.e('glog(' + n + ')') : QRM.LOG_T[n]);
	static gexp(n) {
		while (n < 0) n += 255;
		while (n >= 256) n -= 255;
		return QRM.EXP_T[n];
	}
	static init() {
		const expT = U.A(256),
			logT = U.A(256);
		for (let i = 0; i < 8; i++) expT[i] = 1 << i;
		for (let i = 8; i < 256; i++) expT[i] = expT[i - 4] ^ expT[i - 5] ^ expT[i - 6] ^ expT[i - 8];
		for (let i = 0; i < 255; i++) logT[expT[i]] = i;
		QRM.EXP_T = expT;
		QRM.LOG_T = logT;
	}
}
QRM.init();
class QRP {
	//QRPolynomial
	constructor(n, s) {
		const nL = n.length;
		if (nL === void 0) U.e(nL + '/' + s);
		let o = 0;
		while (o < nL && n[o] === 0) o++;
		const nLO = nL - o,
			ns = U.A(nLO + s);
		for (let i = 0; i < nLO; i++) ns[i] = n[i + o];
		this.num = ns;
	}
	get(i) {
		return this.num[i];
	}
	gL() {
		return this.num.length;
	}
	multi(e) {
		const n = this.num,
			nL = n.length,
			eN = e.num,
			eL = eN.length,
			nR = U.A(nL + eL - 1);
		for (let i = 0; i < nL; i++) {
			const nG = QRM.glog(n[i]);
			for (let j = 0; j < eL; j++) {
				const eNG = QRM.glog(eN[j]);
				nR[i + j] ^= QRM.gexp(nG + eNG);
			}
		}
		return new QRP(nR, 0);
	}
	mod(e) {
		const n = this.num,
			nL = n.length,
			eN = e.num,
			eL = eN.length,
			Q = QRM;
		if (nL - eL < 0) return this;
		const ratio = Q.glog(n[0]) - Q.glog(eN[0]),
			nR = U.A(nL);
		for (let i = 0; i < nL; i++) nR[i] = n[i];
		for (let i = 0; i < eL; i++) nR[i] ^= Q.gexp(Q.glog(eN[i]) + ratio);
		return new QRP(nR, 0).mod(e);
	}
}
class QRRSB {
	//QRRSBlock
	constructor(tC, dC) {
		this.tC = tC;
		this.dC = dC;
	}
	static gRSBs(tN, eCL) {
		const rsB = QRRSB.gRsBT(tN, eCL); //getRSBlocks
		if (rsB === void 0) U.e('bad rs block @ typeNumber:' + tN + '/errorCorrectLevel:' + eCL);
		const l = rsB.length / 3,
			rsBs = [];
		for (let k = 0; k < l; k++) {
			const i = k * 3,
				c = rsB[i + 0],
				tC = rsB[i + 1],
				dC = rsB[i + 2];
			for (let j = 0; j < c; j++) rsBs.push(new QRRSB(tC, dC));
		}
		return rsBs;
	}
	static gRsBT(tN, eCL) {
		const bECL = (tN - 1) * 4; //getRsBlockTable
		const Q = QRECL;
		const T = QRRSB.RS_BLOCK_T;
		switch (eCL) {
			case Q.L:
				return T[bECL + 0];
			case Q.M:
				return T[bECL + 1];
			case Q.Q:
				return T[bECL + 2];
			case Q.H:
				return T[bECL + 3];
			default:
				return void 0;
		}
	}
}
QRRSB.RS_BLOCK_T = [
	[1, 26, 19],
	[1, 26, 16],
	[1, 26, 13],
	[1, 26, 9],
	[1, 44, 34],
	[1, 44, 28],
	[1, 44, 22],
	[1, 44, 16],
	[1, 70, 55],
	[1, 70, 44],
	[2, 35, 17],
	[2, 35, 13],
	[1, 100, 80],
	[2, 50, 32],
	[2, 50, 24],
	[4, 25, 9],
	[1, 134, 108],
	[2, 67, 43],
	[2, 33, 15, 2, 34, 16],
	[2, 33, 11, 2, 34, 12],
	[2, 86, 68],
	[4, 43, 27],
	[4, 43, 19],
	[4, 43, 15],
	[2, 98, 78],
	[4, 49, 31],
	[2, 32, 14, 4, 33, 15],
	[4, 39, 13, 1, 40, 14],
	[2, 121, 97],
	[2, 60, 38, 2, 61, 39],
	[4, 40, 18, 2, 41, 19],
	[4, 40, 14, 2, 41, 15],
	[2, 146, 116],
	[3, 58, 36, 2, 59, 37],
	[4, 36, 16, 4, 37, 17],
	[4, 36, 12, 4, 37, 13],
	[2, 86, 68, 2, 87, 69],
	[4, 69, 43, 1, 70, 44],
	[6, 43, 19, 2, 44, 20],
	[6, 43, 15, 2, 44, 16],
	[4, 101, 81],
	[1, 80, 50, 4, 81, 51],
	[4, 50, 22, 4, 51, 23],
	[3, 36, 12, 8, 37, 13],
	[2, 116, 92, 2, 117, 93],
	[6, 58, 36, 2, 59, 37],
	[4, 46, 20, 6, 47, 21],
	[7, 42, 14, 4, 43, 15],
	[4, 133, 107],
	[8, 59, 37, 1, 60, 38],
	[8, 44, 20, 4, 45, 21],
	[12, 33, 11, 4, 34, 12],
	[3, 145, 115, 1, 146, 116],
	[4, 64, 40, 5, 65, 41],
	[11, 36, 16, 5, 37, 17],
	[11, 36, 12, 5, 37, 13],
	[5, 109, 87, 1, 110, 88],
	[5, 65, 41, 5, 66, 42],
	[5, 54, 24, 7, 55, 25],
	[11, 36, 12],
	[5, 122, 98, 1, 123, 99],
	[7, 73, 45, 3, 74, 46],
	[15, 43, 19, 2, 44, 20],
	[3, 45, 15, 13, 46, 16],
	[1, 135, 107, 5, 136, 108],
	[10, 74, 46, 1, 75, 47],
	[1, 50, 22, 15, 51, 23],
	[2, 42, 14, 17, 43, 15],
	[5, 150, 120, 1, 151, 121],
	[9, 69, 43, 4, 70, 44],
	[17, 50, 22, 1, 51, 23],
	[2, 42, 14, 19, 43, 15],
	[3, 141, 113, 4, 142, 114],
	[3, 70, 44, 11, 71, 45],
	[17, 47, 21, 4, 48, 22],
	[9, 39, 13, 16, 40, 14],
	[3, 135, 107, 5, 136, 108],
	[3, 67, 41, 13, 68, 42],
	[15, 54, 24, 5, 55, 25],
	[15, 43, 15, 10, 44, 16],
	[4, 144, 116, 4, 145, 117],
	[17, 68, 42],
	[17, 50, 22, 6, 51, 23],
	[19, 46, 16, 6, 47, 17],
	[2, 139, 111, 7, 140, 112],
	[17, 74, 46],
	[7, 54, 24, 16, 55, 25],
	[34, 37, 13],
	[4, 151, 121, 5, 152, 122],
	[4, 75, 47, 14, 76, 48],
	[11, 54, 24, 14, 55, 25],
	[16, 45, 15, 14, 46, 16],
	[6, 147, 117, 4, 148, 118],
	[6, 73, 45, 14, 74, 46],
	[11, 54, 24, 16, 55, 25],
	[30, 46, 16, 2, 47, 17],
	[8, 132, 106, 4, 133, 107],
	[8, 75, 47, 13, 76, 48],
	[7, 54, 24, 22, 55, 25],
	[22, 45, 15, 13, 46, 16],
	[10, 142, 114, 2, 143, 115],
	[19, 74, 46, 4, 75, 47],
	[28, 50, 22, 6, 51, 23],
	[33, 46, 16, 4, 47, 17],
	[8, 152, 122, 4, 153, 123],
	[22, 73, 45, 3, 74, 46],
	[8, 53, 23, 26, 54, 24],
	[12, 45, 15, 28, 46, 16],
	[3, 147, 117, 10, 148, 118],
	[3, 73, 45, 23, 74, 46],
	[4, 54, 24, 31, 55, 25],
	[11, 45, 15, 31, 46, 16],
	[7, 146, 116, 7, 147, 117],
	[21, 73, 45, 7, 74, 46],
	[1, 53, 23, 37, 54, 24],
	[19, 45, 15, 26, 46, 16],
	[5, 145, 115, 10, 146, 116],
	[19, 75, 47, 10, 76, 48],
	[15, 54, 24, 25, 55, 25],
	[23, 45, 15, 25, 46, 16],
	[13, 145, 115, 3, 146, 116],
	[2, 74, 46, 29, 75, 47],
	[42, 54, 24, 1, 55, 25],
	[23, 45, 15, 28, 46, 16],
	[17, 145, 115],
	[10, 74, 46, 23, 75, 47],
	[10, 54, 24, 35, 55, 25],
	[19, 45, 15, 35, 46, 16],
	[17, 145, 115, 1, 146, 116],
	[14, 74, 46, 21, 75, 47],
	[29, 54, 24, 19, 55, 25],
	[11, 45, 15, 46, 46, 16],
	[13, 145, 115, 6, 146, 116],
	[14, 74, 46, 23, 75, 47],
	[44, 54, 24, 7, 55, 25],
	[59, 46, 16, 1, 47, 17],
	[12, 151, 121, 7, 152, 122],
	[12, 75, 47, 26, 76, 48],
	[39, 54, 24, 14, 55, 25],
	[22, 45, 15, 41, 46, 16],
	[6, 151, 121, 14, 152, 122],
	[6, 75, 47, 34, 76, 48],
	[46, 54, 24, 10, 55, 25],
	[2, 45, 15, 64, 46, 16],
	[17, 152, 122, 4, 153, 123],
	[29, 74, 46, 14, 75, 47],
	[49, 54, 24, 10, 55, 25],
	[24, 45, 15, 46, 46, 16],
	[4, 152, 122, 18, 153, 123],
	[13, 74, 46, 32, 75, 47],
	[48, 54, 24, 14, 55, 25],
	[42, 45, 15, 32, 46, 16],
	[20, 147, 117, 4, 148, 118],
	[40, 75, 47, 7, 76, 48],
	[43, 54, 24, 22, 55, 25],
	[10, 45, 15, 67, 46, 16],
	[19, 148, 118, 6, 149, 119],
	[18, 75, 47, 31, 76, 48],
	[34, 54, 24, 34, 55, 25],
	[20, 45, 15, 61, 46, 16],
];
const QRCodeLimitLength = [
	[17, 14, 11, 7],
	[32, 26, 20, 14],
	[53, 42, 32, 24],
	[78, 62, 46, 34],
	[106, 84, 60, 44],
	[134, 106, 74, 58],
	[154, 122, 86, 64],
	[192, 152, 108, 84],
	[230, 180, 130, 98],
	[271, 213, 151, 119],
	[321, 251, 177, 137],
	[367, 287, 203, 155],
	[425, 331, 241, 177],
	[458, 362, 258, 194],
	[520, 412, 292, 220],
	[586, 450, 322, 250],
	[644, 504, 364, 280],
	[718, 560, 394, 310],
	[792, 624, 442, 338],
	[858, 666, 482, 382],
	[929, 711, 509, 403],
	[1003, 779, 565, 439],
	[1091, 857, 611, 461],
	[1171, 911, 661, 511],
	[1273, 997, 715, 535],
	[1367, 1059, 751, 593],
	[1465, 1125, 805, 625],
	[1528, 1190, 868, 658],
	[1628, 1264, 908, 698],
	[1732, 1370, 982, 742],
	[1840, 1452, 1030, 790],
	[1952, 1538, 1112, 842],
	[2068, 1628, 1168, 898],
	[2188, 1722, 1228, 958],
	[2303, 1809, 1283, 983],
	[2431, 1911, 1351, 1051],
	[2563, 1989, 1423, 1093],
	[2699, 2099, 1499, 1139],
	[2809, 2213, 1579, 1219],
	[2953, 2331, 1663, 1273],
];
class QRBB {
	//QRBitBuffer
	constructor() {
		this.buffer = [];
		this.length = 0;
	}
	get(i) {
		return ((this.buffer[Math.floor(i / 8)] >>> (7 - (i % 8))) & 1) === 1;
	}
	put(n, l) {
		for (let i = 0; i < l; i++) this.pB(((n >>> (l - i - 1)) & 1) === 1);
	}
	gLB() {
		return this.length; //getLengthInBits
	}
	pB(bit) {
		const bufI = Math.floor(this.length / 8);
		if (this.buffer.length <= bufI) this.buffer.push(0);
		if (bit) this.buffer[bufI] |= 0x80 >>> this.length % 8;
		this.length++;
	}
}
class SvgDw {
	constructor(elm, opt) {
		this.elm = elm;
		this.opt = opt;
	}
	dw(qrCD) {
		const z = this,
			opt = z.opt,
			elm = z.elm,
			nC = qrCD.gMC();
		elm.style.width = opt.width + 'px';
		elm.style.height = opt.height + 'px';
		z.cl();
		const attrs = {
			viewBox: '0 0 ' + nC + ' ' + nC,
			width: '100%',
			height: '100%',
			fill: opt.colorLight,
		};
		const svg = z.makeSVG('svg', attrs);
		svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
		elm.appendChild(svg);
		svg.appendChild(z.makeSVG('rect', { fill: opt.colorLight, width: '100%', height: '100%' }));
		svg.appendChild(z.makeSVG('rect', { fill: opt.colorDark, width: '1', height: '1', id: 'template' }));
		for (let rI = 0; rI < nC; rI++)
			for (let cI = 0; cI < nC; cI++)
				if (qrCD.isD(rI, cI)) {
					const c = z.makeSVG('use', { x: cI + '', y: rI + '' });
					c.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#template');
					svg.appendChild(c);
				}
	}
	makeSVG(t, a) {
		const e = document.createElementNS('http://www.w3.org/2000/svg', t);
		for (const [k, v] of Object.entries(a)) if (v) e.setAttribute(k, v);
		return e;
	}
	cl() {
		while (this.elm.hasChildNodes()) this.elm.removeChild(this.elm.lastChild);
	}
}
class HtmlDw {
	constructor(elm, opt) {
		this.elm = elm;
		this.opt = opt;
	}
	/**
	 * Draw the QRCode
	 *
	 * @param {QRC} qrCD
	 */
	dw(qrCD) {
		const opt = this.opt,
			elm = this.elm,
			nC = qrCD.gMC(),
			nW = Math.floor(opt.width / nC),
			nH = Math.floor(opt.height / nC),
			tE = Vw.ce('table'),
			s = tE.style;
		s.borderWidth = 0;
		s.borderCollapse = 'collapse';
		for (let r = 0; r < nC; r++) {
			const trE = Vw.ce('tr');
			for (let c = 0; c < nC; c++) {
				const color = qrCD.isD(r, c) ? opt.colorDark : opt.colorLight,
					tE = Vw.ce('td');
				s.borderWidth = 0;
				s.borderCollapse = 'collapse';
				s.padding = 0;
				s.margin = 0;
				s.width = nW;
				s.height = nH;
				s.backgroundColor = color;
				trE.append(tE);
			}
			tE.append(trE);
		}
		elm.append(tE);
		const elT = elm.childNodes[0], // Fix the margin values as real size.
			nLMT = (opt.width - elT.offsetWidth) / 2,
			nTMT = (opt.height - elT.offsetHeight) / 2;
		if (nLMT > 0 && nTMT > 0) elT.style.margin = nTMT + 'px ' + nLMT + 'px';
	}
	/**
	 * Clear the QRCode
	 */
	cl() {
		while (this.elm.hasChildNodes()) this.elm.removeChild(this.elm.lastChild);
	}
}
class CanvasDw {
	/**
	 * Drawing QRCode by using canvas
	 *
	 * @constructor
	 * @param {HTMLElement} elm
	 * @param {Object} opt QRCode Options
	 */
	constructor(elm, opt) {
		const z = this;
		z.opt = opt;
		z.cElm = I.c();
		z.cElm.width = opt.width;
		z.cElm.height = opt.height;
		z.cElm.style.position = C.a;
		z.cElm.style.top = opt.height * -1;
		elm.appendChild(z.cElm);
		z.elm = elm;
		z.ctx = z.cElm.getContext('2d');
		z.iElm = Vw.ce('img');
		z.iElm.alt = 'Scan me!';
		z.iElm.style.display = 'none';
		z.elm.appendChild(this.iElm);
	}
	/**
	 * Draw the QRCode
	 *
	 * @param {QRC} qrCD
	 */
	dw(qrCD) {
		const z = this,
			opt = z.opt;
		z.cElm.width = opt.width;
		z.cElm.height = opt.height;
		const imgE = z.iElm,
			x = z.ctx,
			nC = qrCD.gMC(),
			nW = opt.width / nC,
			nH = opt.height / nC,
			nHW = Math.round(nW),
			nRH = Math.round(nH);
		imgE.style.display = 'none';
		z.cl();
		for (let rI = 0; rI < nC; rI++) {
			for (let cI = 0; cI < nC; cI++) {
				const isDark = qrCD.isD(rI, cI),
					nL = cI * nW,
					nT = rI * nH;
				x.strokeStyle = isDark ? opt.colorDark : opt.colorLight;
				x.lineWidth = 1;
				x.fillStyle = isDark ? opt.colorDark : opt.colorLight;
				x.fillRect(nL, nT, nW, nH);
				x.strokeRect(Math.floor(nL) + 0.5, Math.floor(nT) + 0.5, nHW, nRH);
				x.strokeRect(Math.ceil(nL) - 0.5, Math.ceil(nT) - 0.5, nHW, nRH);
			}
		}
		z.iElm.src = z.cElm.toDataURL('image/png');
		z.iElm.style.display = 'block';
		z.cElm.style.display = 'none';
	}
	/**
	 * Clear the QRCode
	 */
	cl() {
		this.ctx.clearRect(0, 0, this.cElm.width, this.cElm.height);
		this.iElm.style.display = 'none';
	}
}
/**
 * @class QRCode
 * @constructor
 * @example
 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
 *
 * @example
 * var qrCodeData = new QRCode("test", {
 *    text : "http://naver.com",
 *    width : 128,
 *    height : 128
 * });
 *
 * qrCodeData.cl(); // Clear the QRCode.
 * qrCodeData.makeCode("http://map.naver.com"); // Re-create the QRCode.
 *
 * @param {HTMLElement|String} el target element or 'id' attribute of element.
 * @param {Object|String} vOption
 * @param {String} vOption.text QRCode link data
 * @param {Number} [vOption.width=256]
 * @param {Number} [vOption.height=256]
 * @param {String} [vOption.colorDark="#000000"]
 * @param {String} [vOption.colorLight="#ffffff"]
 * @param {QRErrorCorrectLevel} [vOption.correctLevel=QRErrorCorrectLevel.H] [L|M|Q|H]
 */
export class QRC {
	constructor(elm, opt = {}) {
		const z = this;
		z.opt = {
			width: 256,
			height: 256,
			colorDark: '#000000',
			colorLight: '#ffffff',
			correctLevel: QRECL.H,
		};
		if (typeof opt === 'string')
			opt = {
				text: opt,
			};
		if (opt) for (let i in opt) z.opt[i] = opt[i]; // Overwrites options
		const e = typeof elm === 'string' ? document.getElementById(elm) : elm,
			DwClass = z.opt.useSVG ? SvgDw : z.opt.useHtml ? HtmlDw : CanvasDw;
		z.elm = e;
		z.dw = new DwClass(e, z.opt);
		if (z.opt.text) z.mkC(z.opt.text);
	}
	/**
	 * Make the QRCode
	 *
	 * @param {String} s link data
	 */
	mkC(s) {
		const z = this, //makeCode
			cL = z.opt.correctLevel,
			q = new QRCM(z.gTN(s, cL), cL);
		q.addData(s);
		q.make();
		z.elm.title = s;
		z.dw.dw(q);
		z.mkI();
	}
	/**
	 * Get the type by string length
	 *
	 * @private
	 * @param {String} s
	 * @param {Number} nCL
	 * @return {Number} type
	 */
	gTN(s, nCL) {
		let nT = 1; //_getTypeNumber
		const l = QRCodeLimitLength.length,
			lu = this.gUTF8L(s);
		for (let i = 0; i <= l; i++) {
			let nL = 0;
			const lL = QRCodeLimitLength[i],
				Q = QRECL;
			switch (nCL) {
				case Q.L:
					nL = lL[0];
					break;
				case Q.M:
					nL = lL[1];
					break;
				case Q.Q:
					nL = lL[2];
					break;
				case Q.H:
					nL = lL[3];
					break;
			}
			if (lu <= nL) break;
			else nT++;
		}
		if (nT > l) U.e('Too long data');
		return nT;
	}
	gUTF8L(s) {
		const rT = encodeURI(s) //_getUTF8Length
			.toString()
			.replace(/\%[0-9a-fA-F]{2}/g, 'a');
		return rT.length + (rT.length !== s ? 3 : 0);
	}
	/**
	 * Make the Image from Canvas element
	 * - It occurs automatically
	 * - Android below 3 doesn't support Data-URI spec.
	 *
	 * @private
	 */
	mkI() {
		if (typeof this.dw.makeImage === 'function') this.dw.makeImage(); //makeImage
	}
	/**
	 * reset size of the QRCode
	 * @param {Number} [vOption.width=256]
	 * @param {Number} [vOption.height=256]
	 */
	setSize(w = 256, h = 256) {
		this.opt.width = w;
		this.opt.height = h;
	}
	/**
	 * reset color of the QRCode
	 * @param {String} [vOption.colorDark="#000000"]
	 * @param {String} [vOption.colorLight="#ffffff"]
	 */
	setColor(ccD = '#000000', ccL = '#ffffff') {
		this.opt.colorDark = ccD;
		this.opt.colorLight = ccL;
	}
	/**
	 * reset recorrectLeve of the QRCode
	 * @param {QRErrorCorrectLevel} [vOption.correctLevel=QRErrorCorrectLevel.H] [L|M|Q|H]
	 */
	setCL(cL = QRECL.H) {
		const Q = QRECL; //setCorrectLevel
		if (typeof cL === 'string') {
			if (cL === 'H') this.opt.correctLevel = Q.H;
			else if (cL === 'Q') this.opt.correctLevel = Q.Q;
			else if (cL === 'M') this.opt.correctLevel = Q.M;
			else if (cL === 'L') this.opt.correctLevel = Q.L;
		} else this.opt.correctLevel = cL;
	}
	/**
	 * Clear the QRCode
	 */
	cl() {
		this.dw.cl();
	}
}
export class HtmlQRC extends QRC {
	constructor(
		elm,
		text = 'h',
		width = 256,
		height = 256,
		colorDark = '#000000',
		colorLight = '#ffffff',
		correctLevel = QRECL.H
	) {
		super(elm, { text, width, height, colorDark, colorLight, correctLevel, useHtml: true });
	}
}
export class SvgQRC extends QRC {
	constructor(
		elm,
		text = 's',
		width = 256,
		height = 256,
		colorDark = '#000000',
		colorLight = '#ffffff',
		correctLevel = QRECL.H
	) {
		super(elm, { text, width, height, colorDark, colorLight, correctLevel, useSVG: true });
	}
}
export class CanvasQRC extends QRC {
	constructor(
		elm,
		text = 'c',
		width = 256,
		height = 256,
		colorDark = '#000000',
		colorLight = '#ffffff',
		correctLevel = QRECL.H
	) {
		super(elm, { text, width, height, colorDark, colorLight, correctLevel });
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cy = crypto.subtle;
export class H {
	static async d(m, sc = 1, algo = 'SHA-256', isAB = false) {
		let r = m.buffer ? (m instanceof Uint8Array ? Y.dpU(m) : B.u8(m.buffer)) : te.encode(m);
		for (let i = 0; i < sc; i++) r = await cy.digest(algo, r);
		return isAB ? r : Y.a2U(r);
	}
	static async hmac(secretU, msgU, algo = 'SHA-512') {
		const key = await window.crypto.subtle.importKey(
			'raw',
			secretU,
			{
				name: 'HMAC',
				hash: { name: algo },
			},
			false,
			['sign', 'verify']
		);
		return await window.crypto.subtle.sign('HMAC', key, msgU);
	}
}
export class B {
	static u8 = (a) => new Uint8Array(a);
	static u32 = (a) => new Uint32Array(a);
	static i32 = (a) => new Int32Array(a);
}
export class Y {
	static isSameAb = (abA, abB) => Y.a2B(abA) === Y.a2B(abB);
	static isB64 = (s = '') => s % 4 === 0 && /[+/=0-9a-zA-Z]+/.test(s);
	static s2u = (s) => te.encode(s);
	static u2s = (u) => td.decode(u);
	static a2s = (a) => td.decode(B.u8(a));
	static a2B = (i) => window.btoa(Y.u2b(B.u8(i.buffer ? i.buffer : i)));
	static u2B = (u) => window.bta(Y.u2b(u));
	static u2I(u) {
		const f = B.u8(4),
			l = u.length,
			n = Math.ceil(l / 4),
			i32a = B.i32(n);
		for (let i = 0; i < n; i++) {
			f[0] = u[i + 0];
			f[1] = l < i + 1 ? 0 : u[i + 1];
			f[2] = l < i + 2 ? 0 : u[i + 2];
			f[3] = l < i + 3 ? 0 : u[i + 3];
			i32a[i] = B.i32(f.buffer)[0];
		}
		return i32a;
	}
	static u8a2u32a(u) {
		const f = B.u8(4),
			l = u.length,
			n = Math.ceil(l / 4),
			u32a = B.u32(n);
		for (let i = 0; i < n; i++) {
			f[0] = u[i + 0];
			f[1] = l < i + 1 ? 0 : u[i + 1];
			f[2] = l < i + 2 ? 0 : u[i + 2];
			f[3] = l < i + 3 ? 0 : u[i + 3];
			u32a[i] = B.u32(f.buffer)[0];
		}
		return u32a;
	}
	static h2u(h) {
		const l = h.length / 2,
			u = B.u8(l);
		for (let i = 0; i < l; i++) u[i] = parseInt(h.substr(i * 2, 2), 16);
		return u;
	}
	static u2h = (u) => Array.prototype.map.call(u, (x) => x.toString(16).padStart(2, '0')).join('');
	static a2U = (a) => Y.B2U(Y.a2B(a));
	static B2a = (B) => Y.b2u(window.atob(B));
	static U2a = (U) => Y.B2a(Y.U2B(U));
	static B2U = (B) => (B ? B.split('+').join('-').split('/').join('_').split('=').join('') : B);
	static U2B(U) {
		const l = U.length,
			c = l % 4 > 0 ? 4 - (l % 4) : 0;
		let B = U.split('-').join('+').split('_').join('/');
		for (let i = 0; i < c; i++) B += '=';
		return B;
	}
	static jus(s) {
		let l = 0;
		const c = s.length;
		for (let i = 0; i < c; i++) l += gBl(s[i]);
		const a = B.u8(l);
		let o = 0;
		for (let i = 0; i < c; i++) {
			const u = s[i];
			a.set(u, o);
			o += gBl(u);
		}
		return a;
	}
	static u2b(u) {
		const r = [];
		for (const e of u) r.push(String.fromCharCode(e));
		return r.join('');
	}
	static b2u(bs) {
		const l = bs.length,
			a = B.u8(new ArrayBuffer(l));
		for (let i = 0; i < l; i++) a[i] = bs.charCodeAt(i);
		return a;
	}
	static L2a(b) {
		return pr((r) => {
			const fr = new FileReader();
			fr.onload = () => r(fr.result);
			fr.onerror = () => cb(r(fr.error), err(fr.error));
			fr.readAsArrayBuffer(b);
		});
	}
	static dpU(u) {
		const l = u.length,
			n = B.u8(l);
		for (let i = 0; i < l; i++) n[i] = u[i];
		return n;
	}
	static N2u(n) {
		let a = n;
		const p = [];
		while (Math.abs(a) > 0) {
			p.unshift(a % 256);
			a = a >> 8;
		}
		const l = p.length,
			u = B.u8(l);
		for (let i = 0; i < l; i++) u[i] = p[i];
		return u;
	}
	static b32a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.split('');
	static b32t = (() => {
		const t = {};
		for (let i = 0; i < 32; i++) t[Y.b32a[i]] = i;
		return t;
	})();
	static b32d(b32) {
		const a = b32.toUpperCase().replace(/[^A-Z234567]/g, ''),
			b = a.padEnd(Math.ceil(a.length / 8) * 8, 'A'),
			u = B.u8((a.length * 5) / 8);
		let i = 0,
			j = 0,
			k = 0;
		for (const v of b.split('')) {
			i = (i << 5) | Y.b32t[v];
			j += 5;
			if (j >= 8) {
				j -= 8;
				u[k++] = i >> j;
				i %= 256;
			}
		}
		if (i > 0) u[k] = i;
		/*
        aaaaabbb
        bbcccccd
        ddddeeee
        efffffgg
        ggghhhhh
         */
		return u.buffer;
	}
	static b32e(ab) {
		const u = B.u8(ab),
			a = [];
		let j = 0,
			k = 0;
		for (let i = 0; i < u.length; i++) {
			const b = u[i];
			j = (j << 8) + b;
			k += 8;
			while (k > 5) {
				k -= 5;
				a.push(Y.b32a[j >> k]);
				j &= (1 << k) - 1;
			}
		}
		if (k > 0) a.push(Y.b32a[j << (5 - k)]);
		/*
        aaaaabbb
        bbcccccd
        ddddeeee
        efffffgg
        ggghhhhh
         */
		return a.join('');
	}
}
export class Totp {
	static T0 = 0;
	static X = 30;
	static getT = (t = now(), T = Totp.T0, X = Totp.X) => Math.floor((t - T * 1000) / (X * 1000));
	static P = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
	static async generate(keyHex, time, codeDigits, hmacAlgo) {
		console.log({ keyHex, time, codeDigits, hmacAlgo });
		while (time.length < 16) time = '0' + time;
		const h = B.u8(
				await H.hmac(
					keyHex.byteLength ? B.u8(keyHex) : keyHex.buffer ? keyHex : Y.h2u(keyHex),
					Y.h2u(time),
					hmacAlgo
				)
			),
			offset = h[h.length - 1] & 0xf,
			b =
				((h[offset] & 0x7f) << 24) |
				((h[offset + 1] & 0xff) << 16) |
				((h[offset + 2] & 0xff) << 8) |
				(h[offset + 3] & 0xff);
		let r = `${b % Totp.P[codeDigits]}`;
		while (r.length < codeDigits) r = '0' + r;
		return r;
	}
	static getOtp = async (secretU, offsetSecs, intervalSecs, codeDigits, hmacAlgo) =>
		await Totp.generate(secretU, Totp.getT(now(), offsetSecs, intervalSecs).toString(16), codeDigits, hmacAlgo);
}
class Cy {
	static async gK(p, s) {
		const k = await cy.deriveKey(
			{
				name: 'PBKDF2',
				salt: s,
				iterations: 100000,
				hash: 'SHA-256',
			},
			await cy.importKey('raw', await H.d(Y.s2u(p).buffer, 100, 'SHA-256', true), { name: 'PBKDF2' }, false, [
				'deriveKey',
			]),
			{ name: 'AES-GCM', length: 256 },
			false,
			['encrypt', 'decrypt']
		);
		return [k, s];
	}
	static gS = (saltI, isAB) => (saltI ? (isAB ? B.u8(saltI) : Y.s2u(saltI)) : crv(B.u8(16)));
	static importKeyAESGCM = async (kAb, usages = ['encrypt', 'decrypt']) =>
		await cy.importKey('raw', kAb, { name: 'AES-GCM' }, true, usages);
	static gFF = () => crv(B.u8(12));
	static gIF = () => crv(B.u32(1));
	static srand = () => crv(B.u32(1))[0] / 4294967295;
	static enc = async (s, pk) => await Cy.encAES256GCM(Y.s2u(s), pk ? pk : await Cy.mkH());
	static async encAES256GCM(u, pk, saltI = null, isAB) {
		const s = Cy.gS(saltI, isAB),
			iv = Uint8Array.from([...Cy.gFF(), ...B.u8(Cy.gIF().buffer)]),
			edAb = await cy.encrypt({ name: 'AES-GCM', iv }, await Cy.lk(pk, s), u.buffer);
		return [Y.a2U(edAb), Y.a2U(iv.buffer), Y.a2U(s.buffer)].join(',');
	}
	static mkH = (s = [location.origin], st = 100) => H.d(Js(s), st);
	static dec = async (ers, pk) => Y.u2s(await Cy.decAES256GCM(ers, pk ? pk : await Cy.mkH()));
	static lk = async (pk, s) => (isS(pk) ? await Cy.gK(pk, isS(s) ? B.u8(Y.U2a(s)) : s) : [pk])[0];
	static async decAES256GCM(ers, p) {
		const [U, ip, s] = ers.split(',');
		try {
			return B.u8(await cy.decrypt({ name: 'AES-GCM', iv: B.u8(Y.U2a(ip)) }, await Cy.lk(p, s), Y.U2a(U)));
		} catch (e) {
			return ef(e);
		}
	}
}
export class I {
	static i = () => new Image();
	static c = () => Vw.ce('canvas');
	static compess(u8a) {
		const b = u8a.length,
			s = Math.ceil(Math.sqrt(Math.ceil(b / 3) + 2)),
			c = I.c();
		c.width = c.height = s;
		const x = c.getContext('2d'),
			d = x.createImageData(s, s),
			l = d.data.length,
			n = B.u8(l);
		n.fill(255);
		n[l - 3] = b % 256;
		n[l - 2] = b >>> 8;
		for (let i = 0, j = 0; j < b; i++) if (i % 4 !== 3) n[i] = u8a[j++];
		for (let i = 0; i < l; i++) d.data[i] = n[i];
		x.putImageData(d, 0, 0);
		return c.toDataURL('image/png');
	}
	static decompress = async (dURI) => {
		const i = await I.il(dURI),
			s = i.width,
			l = s * s * 4,
			c = I.c();
		c.width = c.height = s;
		const x = c.getContext('2d');
		x.drawImage(i, 0, 0);
		const d = x.getImageData(0, 0, s, s),
			n = d.data,
			b = (n[l - 2] << 8) + n[l - 3],
			u = B.u8(b);
		for (let j = 0, k = 0; k < b; j++) if (j % 4 !== 3) u[k++] = n[j];
		return u;
	};
	static svg2pn() {
		const sD = new XMLSerializer().serializeToString(svg);
	}
	static il = (dURI) =>
		pr((r) => {
			const i = I.i();
			i.onload = () => r(i);
			i.src = dURI;
		});
}
class L {
	static k = async (k) => await H.d(k, 100);
	static save = async (k, v) =>
		!v || isN(v)
			? localStorage.setItem(await L.k(k), v)
			: localStorage.setItem(await L.k(k), await I.compess(Y.s2u(await Cy.enc(Js(v)))));

	static async load(k) {
		const d = localStorage.getItem(await L.k(k));
		return !d || isN(d) ? d : Jp(await Cy.dec(Y.u2s(await I.decompress(d))));
	}
}
export class Vw {
	static cnvtGebav2Camel(t = '') {
		if (!t) return t;
		const s = t.split('-');
		for (let i = 1, j = s.length; i < j; i++) {
			const w = s[i],
				l = w.length;
			s[i] = l > 0 ? w.substring(0, 1).toUpperCase() : `${l}` > 1 ? w.substring(1) : '';
		}
		return s.join('');
	}
	static addHiddenDiv = (p, att = {}) => Vw.add(p, 'div', att, C.dNone);
	static add(p, tN, att = {}, sty = {}) {
		const e = Vw.ce(tN);
		Vw.sa(e, att);
		if (att.text) Vw.text(e, att.text);
		Vw.sS(e, sty);
		if (p) p.appendChild(e);
		return e;
	}
	static div = (p, att, sty) => Vw.add(p, 'div', att, sty);
	static h1 = (p, att, sty) => Vw.add(p, 'h1', att, sty);
	static h2 = (p, att, sty) => Vw.add(p, 'h2', att, sty);
	static btn = (p, att, sty) => Vw.add(p, 'button', att, sty);
	static ipt = (p, att, sty) => Vw.add(p, 'input', att, sty);
	static gi = (i) => document.getElementById(i);
	static rm = (e) => (e.parentNode ? e.parentNode.removeChild(e) : null);
	static rc = (e) => {
		while (e.firstChild) e.removeChild(e.firstChild);
	};
	static sS = (e, sty = {}) => Object.keys(sty).map((k) => (e.style[Vw.cnvtGebav2Camel(k)] = sty[k]));
	static gS = (e, k) => e.style[Vw.cnvtGebav2Camel(k)];
	static tS = (e, k, v, v2) => (e.style[Vw.cnvtGebav2Camel(k)] = e.style[Vw.cnvtGebav2Camel(k)] === v ? v2 : v);
	static click = (e, cb) => Vw.ael(e, 'click', cb);
	static change = (e, cb) => Vw.ael(e, 'change', cb);
	static input = (e, cb) => Vw.ael(e, 'input', cb);
	static ael = (e, ev, cb) => (e.addEventListener(ev, cb) ? cb : cb);
	static text = (e, msg) => (msg ? (e.textContent = msg) : e.textContent);
	static aC = (e, cN) => e.classList.add(cN);
	static rC = (e, cN) => e.classList.remove(cN);
	static tC = (e, cN) => e.classList.toggle(cN);
	static sa = (e, att) => Object.keys(att).map((k) => e.setAttribute(k, att[k]));
	static gB = () => document.getElementsByTagName('body')[0];
	static gT = (p, T) => p.getElementsByTagName(T)[0];
	static ce = (tN) => document.createElement(tN);
	static copy = async (d) => navigator.clipboard.writeText(d);
	static uO = (a, b) => {
		const c = {};
		for (const k in a) c[k] = a[k];
		for (const k in b) c[k] = b[k];
		return c;
	};
	static fr = (f) => {
		console.log(f);
		const r = new FileReader(),
			p = pr((rv, rj) => {
				r.onload = () => rv(r.result);
				r.onerror = () => rj(r.error);
			});
		return {
			asArrayBuffer() {
				r.readAsArrayBuffer(f);
				return p;
			},
			asBinaryString() {
				r.readAsBinaryString(f);
				return p;
			},
			asDataURL() {
				r.readAsDataURL(f);
				return p;
			},
			asText() {
				r.readAsText(f);
				return p;
			},
		};
	};
}
class C {
	static p256 = '256px';
	static bi = 'linear-gradient(90deg, transparent 0 50%, blue 50% 100%)';
	static a = 'absolute';
	static dNone = { display: 'none' };
	static dBlock = { display: 'block' };
}
export class Auth {
	static ID = async () => await H.d(location.origin + '/ID/' + SALT, 10);
	static k = async () => await H.d(location.origin + '/Auth/' + SALT, 1230);
	static E = {};
	static T = {};
	static Q = {};
	static d = 10 * 1000;
	static as = { transform: ['scaleX(0%) ', 'scaleX(100%)'] };
	static at = { duration: Auth.d, iterations: 1 };
	static state = {};
	static c = null;
	static v = null;
	static Types = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'];
	static async build() {
		const id = await Auth.ID();
		if (Vw.gi(id)) return;
		const body = Vw.gB(),
			frame = Vw.div(
				body,
				{ id },
				{
					backgroundColor: '#ccc',
					position: C.a,
					minWidth: '300px',
					maxWidth: '95vw',
					minHeight: '10px',
					maxHeight: '95vh',
					top: '10px',
					left: '10px',
				}
			),
			rowSty = { margin: '10px', display: 'flex', justifyContent: 'space-between' },
			title = Vw.div(frame, {}, rowSty),
			inner = Vw.div(frame, {}, { margin: '10px', borderRadius: '5px', border: '5px #aaa dotted' }),
			ttx = Vw.div(title, { text: 'TOTP Authenticator' }),
			cBtn = Vw.div(title, { text: '×' }, { margin: '2px', cursor: 'pointer' }),
			list = Vw.div(
				inner,
				{},
				{
					backgroundColor: '#bbb',
				}
			),
			form = Vw.div(inner, {}, {}),
			bar = Vw.div(
				form,
				{ text: 'add' },
				{
					padding: '3px',
					backgroundColor: '#eee',
					cursor: 'pointer',
				}
			),
			input = Vw.div(form, {}, C.dNone),
			r0 = Vw.div(input, {}, rowSty),
			qc = Vw.div(r0, { text: 'QRCode' }, { fontSize: '80%', fontWeight: 'bold' }),
			qElm = Vw.ipt(r0, { type: 'file' }),
			qBtn = Vw.btn(r0, { text: 'scan' }),
			r01 = Vw.div(input, {}, rowSty),
			r02 = Vw.div(input, {}, Vw.uO(rowSty, { fontSize: '40%', wordBreak: 'break-all', maxWidth: '300px' })),
			r1 = Vw.div(input, {}, rowSty),
			nt = Vw.div(r1, { text: 'Name' }),
			nElm = Vw.ipt(r1, { size: '20' }),
			r3 = Vw.div(input, {}, rowSty),
			st = Vw.div(r3, { text: 'Secret' }),
			sElm = Vw.ipt(r3, { size: '30' }, { fontSize: '50%' }),
			r4 = Vw.div(input, {}, rowSty),
			pt = Vw.div(r4, { text: 'Period' }),
			pElm = Vw.ipt(r4, { type: 'Number', value: 30 }),
			r5 = Vw.div(input, {}, rowSty),
			tt = Vw.div(r5, { text: 'Type' }),
			select = Vw.add(r5, 'select', { text: 'type' }),
			r6 = Vw.div(input, {}, rowSty),
			dn = Vw.div(r6, { text: 'Digits' }),
			dElm = Vw.ipt(r6, { type: 'Number', value: 6 }),
			r7 = Vw.div(
				input,
				{},
				Vw.uO(rowSty, {
					fontSize: '150%',
					backgroundColor: '#ddd',
					fontWeight: 'bold',
					justifyContent: 'center',
					letterSpacing: '.2rem',
				})
			),
			cElm = Vw.div(r7, {}),
			r8 = Vw.div(input, {}, rowSty),
			aBtn = Vw.btn(r8, { text: 'Auth' }),
			sBtn = Vw.btn(r8, { text: 'Save' });
		Auth.v = Vw.ce('video'); // Vw.add(bar, 'video', { a: 'autoplay' }, { width: '98%' });
		Auth.c = Vw.add(frame, 'canvas', { a: 'autoplay' }, { width: '98%', display: 'none' });
		for (const type of Auth.Types) Vw.add(select, 'option', { text: type, value: type });
		select.value = Auth.Types[0];
		Vw.click(cBtn, Auth.close(frame));
		Vw.click(Auth.c, () => Vw.sS(Auth.c, C.dNone));
		Vw.click(title, () => Vw.tS(inner, 'display', 'none', 'block'));
		Vw.click(bar, () => Vw.tS(input, 'display', 'none', 'block'));
		Auth.E = { t: select, n: nElm, s: sElm, p: pElm, d: dElm, l: list };
		Vw.click(aBtn, async () => {
			cElm.textContent = await Auth.verify();
		});
		Vw.click(aBtn, async () => {
			cElm.textContent = await Auth.verify();
		});
		Vw.click(qBtn, Auth.sc(r01, r02));
		Vw.click(sBtn, Auth.save);
		Vw.change(qElm, Auth.getScanimgF(qElm, r01, r02));
		Auth.buildList();
	}
	static close = (f) => () => Vw.rm(f);
	static async buildList() {
		const e = await Auth.ld(),
			l = Auth.E.l;
		Vw.rc(l);
		for (const k in e.v) {
			// console.log('buildList k:' + k, e);
			const f = Vw.div(l, {}, {}),
				r = Vw.div(
					f,
					{},
					{ padding: '5px', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }
				),
				qr = Vw.div(f, {}, { display: 'none', backgroundColor: '#fff', width: C.p256, padding: ' 5px' }),
				q = Vw.div(
					qr,
					{},
					{
						width: C.p256,
						height: C.p256,
						paddingBottom: '5px',
					}
				),
				i = Vw.div(
					qr,
					{},
					{
						position: 'relative',
						left: '-271px',
						width: '532px',
						height: '5px',
						background: C.bi,
					}
				),
				t = Vw.div(r, { text: k }, { padding: '5px', fontSize: '80%', fontWeight: 'bold', lineHeight: '2em' }),
				w = Vw.div(
					r,
					{},
					{
						padding: '0',
						backgroundColor: '#ddd',
						minWidth: '4em',
						maxWidth: '4em',
						display: 'flex',
						flexDirection: 'column',
					}
				),
				s = Vw.div(
					w,
					{},
					{
						minWidth: '4em',
						lineHeight: '2em',
						minHeight: '2em',
						textAlign: 'center',
						backgroundColor: '#ddd',
					}
				),
				b = Vw.div(
					w,
					{},
					{
						position: 'relative',
						left: '-4em',
						minWidth: '8em',
						minHeight: '5px',
						visibility: 'hidden',
						background: C.bi,
					}
				),
				rBtn = Vw.btn(r, { text: 'del' }),
				eBtn = Vw.btn(r, { text: 'export' }),
				d = e.v[k];
			Vw.click(t, async () => {
				const t = st(() => {
					Vw.sS(b, { visibility: 'hidden' });
					s.textContent = ' ';
				}, Auth.d);
				ct(Auth.Q[d.name]);
				Auth.Q[d.name] = t;
				s.textContent = await Auth.vy(d.secret, d.period, d.digits, d.type);
				b.animate(Auth.as, Auth.at);
				Vw.sS(b, { visibility: 'visible' });
			});
			Vw.click(rBtn, async () => {
				if (!confirm('Is delete complitly OK?')) return;
				await Auth.rm(k);
				Vw.rm(r);
			});
			Vw.click(eBtn, async () => (!confirm('Is show secret OK?') ? '' : await Auth.gExprtF(q, i, qr, d)()));
		}
	}
	static gExprtF =
		(q, a, p, d, h = 256) =>
		async () => {
			const n = d.name.split(':'),
				userId = n.pop(),
				issuer = n.pop();
			let s = Auth.mkOtpURI(issuer, userId, d.secret, d.period, d.type, d.digits),
				i = false;
			while (!i) {
				try {
					s = s.split('&a=a').join('&a=aA');
					Vw.rc(q);
					new CanvasQRC(q, s, h, h);
					const iE = Vw.gT(q, 'img'),
						p = await Auth.gSF(iE.src);
					i = p !== null;
				} catch (e) {
					ef(e);
				}
				if (s.length > 300) break;
			}
			Vw.rc(q);
			new CanvasQRC(q, s, h, h);
			Vw.sS(p, C.dBlock);
			a.animate(Auth.as, Auth.at);
			const t = st(() => {
				Vw.sS(p, C.dNone);
				Vw.rc(q);
			}, Auth.d);
			ct(Auth.T[d.name]);
			Auth.T[d.name] = t;
		};
	static mkOtpURI = (issuer, userId, secret, period, type, digits) =>
		'otpauth:/' +
		`/totp/${eu(issuer)}:${eu(userId)}?secret=${secret}&a=a&issuer=${eu(issuer)}&algorithm=${type
			.split('-')
			.join('')}&digits=${digits}&period=${period}`;
	static getScanimgF = (qElm, r01, r02) => async () => {
		Vw.rc(r01);
		const dURI = await Vw.fr(qElm.files[0]).asDataURL(),
			p = await Auth.gSF(dURI, Vw.add(r01, 'canvas'));
		if (p && p.data) r02.textContent = Auth.decode(p.data);
	};
	static decode(otpURI) {
		if (otpURI.indexOf('otpauth') !== 0) return otpURI;
		const a = otpURI.split('?'),
			b = a ? a[0].split('/').pop() : a,
			c = b ? b.split(':') : b,
			q = isArr(a) && a.length > 1 ? a[1].split('&') : [],
			m = {},
			e = Auth.E;
		for (const r of q) {
			const kv = r.split('=');
			if (!isArr(kv)) continue;
			else if (kv.length === 1) m[kv[0]] = true;
			else m[kv[0]] = kv[1];
		}
		e.n.value = decodeURI(c[0]) + ':' + decodeURI(c[1]);
		e.s.value = m.secret;
		e.d.value = m.digits;
		e.p.value = m.period;
		e.t.value = m.algorithm.indexOf('-') > 0 ? m.algorithm : m.algorithm.toUpperCase().split('SHA').join('SHA-');
		return otpURI;
	}
	static gSF = async (dURI, c = I.c()) => {
		const i = await I.il(dURI),
			w = i.width,
			h = i.height,
			s = Math.ceil(w / 10),
			o = Math.floor(s / 2),
			z = w + s,
			y = h + s;
		(c.width = z), (c.height = y);
		const x = c.getContext('2d'),
			e = x.getImageData(0, 0, z, y);
		e.data.fill(255);
		x.putImageData(e, 0, 0);
		x.drawImage(i, o, o);
		const d = x.getImageData(0, 0, z, y),
			p = await jsQR(d.data, z, y);
		console.log('★gSF p' + p, await H.d(dURI), dURI, p);
		return p;
	};
	static verify = async () => {
		const e = Auth.E;
		return Auth.validate() ? await Auth.vy(e.s.value, e.p.value, e.d.value, e.t.value) : '';
	};
	static vy = async (s, p, d, t) => await Totp.getOtp(Y.b32d(s), 0, p * 1, d * 1, t);
	static validate = () => Auth.E.n.value && Auth.E.s.value && Auth.E.p.value && Auth.E.d.value;
	static save = async () => {
		if (!Auth.validate()) return alert('prease input infos! ');
		const b = Auth.E;
		await Auth.sd({
			name: b.n.value,
			secret: b.s.value,
			period: b.p.value,
			digits: b.d.value,
			type: b.t.value,
		});
		await Auth.buildList();
	};
	static rm = async (n) => await Auth.sd({ name: n, isRm: 1 });
	static sd = async (d) => {
		const e = await Auth.ld();
		console.log('A save k:' + e.k, a);
		if (d.isRm) delete e.v[d.name];
		else e.v[d.name] = d;
		console.log('B save k:' + e.k);
		await L.save(e.k, e.v);
	};
	static ld = async () => {
		const k = await Auth.k(),
			a = await L.load(k);
		return { k, v: a ? a : {} };
	};
	static load = async (n) => {
		const e = await Auth.ld();
		console.log('load k:' + e.k, a);
		return e.v[n];
	};
	static sc = (r01, r02) => async () => {
		try {
			const v = Auth.v,
				m = { a: 0 };
			v.srcObject = await navigator.mediaDevices.getDisplayMedia({
				video: {
					cursor: 'always',
				},
				audio: false,
			});
			v.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
			v.play();
			io('START');
			Vw.sS(Auth.c, C.dBlock);
			while (m.a < 100) {
				requestAnimationFrame(Auth.tick(r01, r02, m));
				await slp(100);
				m.a++;
			}
			v.srcObject.getTracks().forEach((t) => t.stop());
			v.srcObject = null;
		} catch (e) {
			ef(e);
		}
	};
	static dwL(c, b, e, color = '#FF3B58') {
		const x = c.getContext('2d');
		x.beginPath();
		x.moveTo(b.x, b.y);
		x.lineTo(e.x, e.y);
		x.lineWidth = 4;
		x.strokeStyle = color;
		x.stroke();
	}
	static dwB(c, code) {
		const l = code.location;
		Auth.dwL(c, l.topLeftCorner, l.topRightCorner);
		Auth.dwL(c, l.topRightCorner, l.bottomRightCorner);
		Auth.dwL(c, l.bottomRightCorner, l.bottomLeftCorner);
		Auth.dwL(c, l.bottomLeftCorner, l.topLeftCorner);
	}
	static tick(r01, r02, m) {
		return async () => {
			if (m.a > 100) return;
			const v = Auth.v,
				vT = v.srcObject.getVideoTracks()[0];
			io('Track settings:', JSON.stringify(vT.getSettings(), null, 2));
			io('Track constraints:', JSON.stringify(vT.getConstraints(), null, 2));
			io('A v.readyState :' + v.readyState);
			if (v.readyState === v.HAVE_ENOUGH_DATA) {
				const c = Auth.c,
					x = c.getContext('2d');
				io('A c2:', c);
				c.height = v.videoHeight;
				c.width = v.videoWidth;
				x.drawImage(v, 0, 0, c.width, c.height);
				const id = x.getImageData(0, 0, c.width, c.height),
					code = jsQR(id.data, id.width, id.height, {
						inversionAttempts: 'dontInvert',
					});
				io('A code', code);
				if (code) {
					m.a = 1000;
					Vw.rc(r01);
					const dURI = c.toDataURL(),
						c2 = Vw.add(r01, 'canvas'),
						p = await Auth.gSF(dURI, c2);
					Auth.dwB(c, code);
					Auth.dwB(c2, p);
					Vw.sS(Auth.c, C.dNone);
					if (p && p.data) r02.textContent = Auth.decode(p.data);
				}
			}
			io('A v.readyState :' + v.readyState);
		};
	}
}
const a = function () {
	// alert('');
	Auth.build();
};
//a();
