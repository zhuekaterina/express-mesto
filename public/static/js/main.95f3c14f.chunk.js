(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  15(e, t, n) {},
  16(e, t, n) {
    n.r(t); const a = n(0); const o = n(1); const c = n.n(o); const s = n(6); const r = n.n(s); const i = (n(15), n(9)); const u = n(2); const l = `${n.p}static/media/logo.a307e1c4.svg`; const d = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('img', { className: 'header__logo', src: l, alt: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 - Mesto.' }) }); }; const p = c.a.createContext(); const b = function (e) {
      const t = e.card; const n = e.onCardClick; const o = e.onDeleteCardClick; const s = e.onCardLike; const r = c.a.useContext(p); const i = t.owner._id === r._id; const u = 'element__delete-button '.concat(i && 'element__delete-button_visible'); const l = t.likes.some(((e) => e._id === r._id)); const d = 'element__like-button '.concat(l && 'element__like-button_active'); return Object(a.jsxs)('div', {
        className: 'element',
        children: [Object(a.jsx)('button', {
          type: 'button', className: u, name: 'delete-button', onClick() { o(t); },
        }), Object(a.jsx)('img', {
          className: 'element__picture', alt: t.name, src: t.link, onClick() { n(t); },
        }), Object(a.jsxs)('div', {
          className: 'element__caption',
          children: [Object(a.jsx)('h2', { className: 'element__name', children: t.name }), Object(a.jsxs)('div', {
            className: 'element__likes',
            children: [Object(a.jsx)('button', {
              type: 'button', className: d, name: 'like-button', onClick() { s(t); },
            }), Object(a.jsx)('p', { className: 'element__likes-number', children: t.likes.length })],
          })],
        })],
      });
    }; const m = function (e) {
      const t = e.onEditProfile; const n = e.onAddPlace; const o = e.onEditAvatar; const s = e.cards; const r = e.onCardClick; const i = e.onDeleteCardClick; const u = e.onCardLike; const l = e.onCardDelete; const d = c.a.useContext(p); return Object(a.jsxs)('main', {
        className: 'main',
        children: [Object(a.jsxs)('section', {
          className: 'profile main__profile',
          children: [Object(a.jsxs)('div', {
            className: 'profile__avatar-container',
            children: [Object(a.jsx)('img', { className: 'profile__avatar', src: d.avatar, alt: '\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.' }), Object(a.jsx)('div', {
              className: 'profile__avatar-cover',
              children: Object(a.jsx)('button', {
                type: 'button', name: 'avatar-edit-button', className: 'profile__avatar-edit', onClick: o,
              }),
            })],
          }), Object(a.jsxs)('div', {
            className: 'profile__info',
            children: [Object(a.jsx)('h1', { className: 'profile__name', children: d.name }), Object(a.jsx)('button', {
              type: 'button', name: 'edit-button', className: 'profile__edit-button', onClick: t,
            }), Object(a.jsx)('p', { className: 'profile__job', children: d.about })],
          }), Object(a.jsx)('button', {
            type: 'button', name: 'add-button', className: 'profile__add-button', onClick: n,
          })],
        }), Object(a.jsx)('section', {
          className: 'elements',
          children: s.map(((e) => Object(a.jsx)(b, {
            card: e, onCardClick: r, onDeleteCardClick: i, onCardLike: u, onCardDelete: l,
          }, e._id))),
        })],
      });
    }; const j = function () { const e = new Date(); return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsxs)('p', { className: 'footer__copyright', children: ['\xa9 ', e.getFullYear(), ' Mesto Russia'] }) }); }; const f = function (e) {
      const t = e.name; const n = e.isOpen; const o = e.title; const c = e.children; const s = e.onClose; const r = e.buttonText; const i = e.onSubmit; return Object(a.jsxs)('div', {
        className: 'popup popup-'.concat(t, ' ').concat(n && 'popup_opened'),
        children: [Object(a.jsx)('button', {
          type: 'button', name: 'close-button', className: 'popup__close-button popup-'.concat(t, '__close-button'), onClick: s,
        }), Object(a.jsxs)('form', {
          className: 'popup__form popup-'.concat(t, '__form'),
          onSubmit: i,
          noValidate: !0,
          children: [Object(a.jsx)('h3', { className: 'popup-'.concat(t, '__title'), children: o }), c, Object(a.jsx)('button', {
            type: 'submit', className: 'popup-'.concat(t, '__save-button popup__button'), name: 'save-button', onClick: s, children: r,
          })],
        })],
      });
    }; const h = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onDeleteCard; return Object(a.jsx)(f, {
        name: 'removal', isOpen: t, title: '\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?', onClose: n, buttonText: '\u0414\u0430', onSubmit(e) { e.preventDefault(), o(); },
      });
    }; const _ = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.name; const c = e.link; return Object(a.jsx)('div', {
        className: 'popup popup-zoom '.concat(t && 'popup_opened'),
        children: Object(a.jsxs)('figure', {
          className: 'popup-zoom__figure',
          children: [Object(a.jsx)('button', {
            type: 'button', name: 'image-close-button', className: 'popup__close-button popup-zoom__close-button', onClick: n,
          }), Object(a.jsx)('img', { className: 'popup-zoom__image', alt: o, src: c }), Object(a.jsx)('h4', { className: 'popup-zoom__name', children: o })],
        }),
      });
    }; const v = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onUpdateUser; const s = c.a.useContext(p); const r = c.a.useState(''); const i = Object(u.a)(r, 2); const l = i[0]; const d = i[1]; const b = c.a.useState(''); const m = Object(u.a)(b, 2); const j = m[0]; const h = m[1]; return c.a.useEffect((() => { d(s.name), h(s.about); }), [s]), c.a.useEffect((() => { t && (d(s.name), h(s.about)); }), [t, s]), Object(a.jsxs)(f, {
        name: 'user',
        isOpen: t,
        title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
        onClose: n,
        buttonText: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        onSubmit(e) { e.preventDefault(), o({ name: l, about: j }); },
        children: [Object(a.jsx)('input', {
          placeholder: '\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f', value: l || '', onChange(e) { d(e.target.value); }, ame: 'name', id: 'user-name', className: 'popup__input popup-user__field', type: 'text', required: !0, minLength: '2', maxLength: '40',
        }), Object(a.jsx)('span', { className: 'popup__error', id: 'user-name-error' }), Object(a.jsx)('input', {
          placeholder: '\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438', value: j || '', onChange(e) { h(e.target.value); }, name: 'about', id: 'user-job', className: 'popup__input popup-user__field', type: 'text', required: !0, minLength: '2', maxLength: '200',
        }), Object(a.jsx)('span', { className: 'popup__error', id: 'user-job-error' })],
      });
    }; const O = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onUpdateAvatar; const s = c.a.useRef(); return c.a.useEffect((() => { t && (s.current.value = ''); }), [t]), Object(a.jsxs)(f, {
        name: 'avatar',
        isOpen: t,
        title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
        onClose: n,
        buttonText: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        onSubmit(e) { e.preventDefault(), o({ avatar: s.current.value }); },
        children: [Object(a.jsx)('input', {
          placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', ref: s, name: 'avatar', id: 'avatar-link', className: 'popup__input popup-avatar__field', required: !0, type: 'url',
        }), Object(a.jsx)('span', { className: 'popup__error', id: 'avatar-link-error' })],
      });
    }; const x = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onAddPlace; const s = c.a.useRef(); const r = c.a.useRef(); return c.a.useEffect((() => { t && (s.current.value = '', r.current.value = ''); }), [t]), Object(a.jsxs)(f, {
        name: 'card',
        isOpen: t,
        title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
        onClose: n,
        buttonText: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c',
        onSubmit(e) { e.preventDefault(), o({ name: s.current.value, link: r.current.value }); },
        children: [Object(a.jsx)('input', {
          placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', ref: s, name: 'name', id: 'card-name', className: 'popup__input popup-card__field', type: 'text', required: !0, minLength: '1', maxLength: '30',
        }), Object(a.jsx)('span', { className: 'popup__error', id: 'card-name-error' }), Object(a.jsx)('input', {
          placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', ref: r, name: 'link', id: 'card-link', className: 'popup__input popup-card__field', required: !0, type: 'url',
        }), Object(a.jsx)('span', { className: 'popup__error', id: 'card-link-error' })],
      });
    }; const C = n(7); const g = n(8); const k = new (function () { function e(t) { const n = t.baseUrl; const a = t.headers; Object(C.a)(this, e), this._baseUrl = n, this._headers = a; } return Object(g.a)(e, [{ key: '_getResStatus', value(e) { return e.ok ? e.json() : Promise.reject('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e.status)); } }, { key: 'getUserInfo', value() { const e = this; return fetch(''.concat(this._baseUrl, '/users/me'), { headers: this._headers }).then(((t) => e._getResStatus(t))); } }, { key: 'getInitialCards', value() { const e = this; return fetch(''.concat(this._baseUrl, '/cards'), { headers: this._headers }).then(((t) => e._getResStatus(t))); } }, { key: 'getAppInfo', value() { return Promise.all([this.getUserInfo(), this.getInitialCards()]); } }, { key: 'editUserInfo', value(e) { const t = this; const n = e.name; const a = e.about; return fetch(''.concat(this._baseUrl, '/users/me'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ name: ''.concat(n), about: ''.concat(a) }) }).then(((e) => t._getResStatus(e))); } }, { key: 'addNewCard', value(e) { const t = this; const n = e.name; const a = e.link; return fetch(''.concat(this._baseUrl, '/cards'), { method: 'POST', headers: this._headers, body: JSON.stringify({ link: ''.concat(a), name: ''.concat(n) }) }).then(((e) => t._getResStatus(e))); } }, { key: 'deleteCard', value(e) { const t = this; return fetch(''.concat(this._baseUrl, '/cards/').concat(e), { method: 'DELETE', headers: this._headers }).then(((e) => t._getResStatus(e))); } }, { key: 'editAvatar', value(e) { const t = this; const n = e.avatar; return fetch(''.concat(this._baseUrl, '/users/me/avatar'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ avatar: ''.concat(n) }) }).then(((e) => t._getResStatus(e))); } }, { key: 'changeLikeCardStatus', value(e, t) { const n = this; return fetch(''.concat(this._baseUrl, '/cards/likes/').concat(e), { method: ''.concat(t ? 'PUT' : 'DELETE'), headers: this._headers }).then(((e) => n._getResStatus(e))); } }]), e; }())({ baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16', headers: { authorization: '9e2464ed-9bf4-456d-960e-bc935e02e4f4', 'Content-Type': 'application/json' } }); const N = function () {
      const e = c.a.useState({}); const t = Object(u.a)(e, 2); const n = t[0]; const o = t[1]; const s = c.a.useState(!1); const r = Object(u.a)(s, 2); const l = r[0]; const b = r[1]; const f = c.a.useState(!1); const C = Object(u.a)(f, 2); const g = C[0]; const N = C[1]; const S = c.a.useState(!1); const y = Object(u.a)(S, 2); const U = y[0]; const D = y[1]; const E = c.a.useState([]); const L = Object(u.a)(E, 2); const P = L[0]; const T = L[1]; const A = c.a.useState({}); const R = Object(u.a)(A, 2); const I = R[0]; const w = R[1]; const z = c.a.useState(!1); const q = Object(u.a)(z, 2); const F = q[0]; const J = q[1]; const M = c.a.useState(!1); const B = Object(u.a)(M, 2); const H = B[0]; const V = B[1]; const Y = c.a.useState(null); const G = Object(u.a)(Y, 2); const K = G[0]; const Q = G[1]; function W() { b(!1), D(!1), N(!1), J(!1), V(!1); } function X() { k.deleteCard(K._id).then((() => { T(P.filter(((e) => e !== K))), W(); })).catch(((e) => { console.log(e); })); } return c.a.useEffect((() => { Promise.all([k.getUserInfo(), k.getInitialCards()]).then(((e) => { const t = Object(u.a)(e, 2); const n = t[0]; const a = t[1]; o(n), T(a); })).catch(((e) => { console.log(e); })); }), []), Object(a.jsx)(p.Provider, {
        value: n,
        children: Object(a.jsxs)('div', {
          className: 'page',
          children: [Object(a.jsx)(d, {}), Object(a.jsx)(m, {
            onEditProfile() { b(!0); }, onAddPlace() { N(!0); }, onEditAvatar() { D(!0); }, cards: P, onCardClick(e) { J(!0), w(e); }, onDeleteCardClick(e) { V(!0), Q(e); }, onCardLike(e) { const t = e.likes.some(((e) => e._id === n._id)); k.changeLikeCardStatus(e._id, !t).then(((t) => { const n = P.map(((n) => (n._id === e._id ? t : n))); T(n); })).catch(((e) => { console.log(e); })); }, onCardDelete: X,
          }), Object(a.jsx)(j, {}), Object(a.jsx)(v, { isOpen: l, onClose: W, onUpdateUser(e) { k.editUserInfo(e).then(((e) => { o(e), W(); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(x, { isOpen: g, onClose: W, onAddPlace(e) { k.addNewCard(e).then(((e) => { T([e].concat(Object(i.a)(P))), W(); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(O, { isOpen: U, onClose: W, onUpdateAvatar(e) { k.editAvatar(e).then(((e) => { o(e), W(); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(h, { isOpen: H, onClose: W, onDeleteCard: X }), Object(a.jsx)(_, {
            isOpen: F, onClose: W, name: I.name, link: I.link,
          })],
        }),
      });
    }; const S = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 17)).then(((t) => { const n = t.getCLS; const a = t.getFID; const o = t.getFCP; const c = t.getLCP; const s = t.getTTFB; n(e), a(e), o(e), c(e), s(e); })); }; r.a.render(Object(a.jsx)(c.a.StrictMode, { children: Object(a.jsx)(N, {}) }), document.getElementById('root')), S();
  },
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.95f3c14f.chunk.js.map
