
/*Define new property of number to convert filesize*/
var _translations = _translations || {};
Object.defineProperty(Number.prototype, 'fileSize', {
    value: function (a, b, c, d) {
        
    }, writable: false, enumerable: false
});

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
    },
    decode: function (e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function (e) {
        e = e.replace(/\r\n/g, "\n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function (e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}
/*google recaptcha loader*/
var loadGoogleCaptcha = function (grecaptcha_box_id) {
    var captchaContainer = null;
    var box_id = grecaptcha_box_id || 'grecaptcha_box';
    if ($('#' + box_id).length > 0) {
        if (captchaContainer !== null) {
            grecaptcha.reset(captchaContainer);
        } else {
            captchaContainer = grecaptcha.render(box_id, {
                'sitekey': '6LfIJwQTAAAAAL_J9F4H43hBdBu2UXXSH3EJD2Je',
                'callback': function (response) {
                    return (response);
                }
            });
        }
    }
};

/*End google recaptcha loader*/
function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function (m) {
        return map[m];
    });
}

function loadCSS(href, before, media) {
    "use strict";
    // Arguments explained:
    // `href` is the URL for your CSS file.
    // `before` optionally defines the element we'll use as a reference for injecting our <link>
    // By default, `before` uses the first <script> element in the page.
    // However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
    // If so, pass a different reference element to the `before` argument and it'll insert before that instead
    // note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
    var ss = window.document.createElement("link");
    var ref = before || window.document.getElementsByTagName("script")[0];
    ss.rel = "stylesheet";
    ss.href = href;
    // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
    ss.media = "only x";
    // inject link
    ref.parentNode.insertBefore(ss, ref);
    // set media back to `all` so that the styleshet applies once it loads
    setTimeout(function () {
        ss.media = media || "all";
    });
    return ss;
}

/*harlem shake*/
var harlem_shake = function () {
    function c() {
        var e = document.createElement("link");
        e.setAttribute("type", "text/css");
        e.setAttribute("rel", "stylesheet");
        e.setAttribute("href", f);
        e.setAttribute("class", l);
        document.body.appendChild(e)
    }

    function h() {
        var e = document.getElementsByClassName(l);
        for (var t = 0; t < e.length; t++) {
            document.body.removeChild(e[t])
        }
    }

    function p() {
        var e = document.createElement("div");
        e.setAttribute("class", a);
        document.body.appendChild(e);
        setTimeout(function () {
            document.body.removeChild(e)
        }, 100)
    }

    function d(e) {
        return {
            height: e.offsetHeight,
            width: e.offsetWidth
        }
    }

    function v(i) {
        var s = d(i);
        return s.height > e && s.height < n && s.width > t && s.width < r
    }

    function m(e) {
        var t = e;
        var n = 0;
        while (!!t) {
            n += t.offsetTop;
            t = t.offsetParent
        }
        return n
    }

    function g() {
        var e = document.documentElement;
        if (!!window.innerWidth) {
            return window.innerHeight
        } else if (e && !isNaN(e.clientHeight)) {
            return e.clientHeight
        }
        return 0
    }

    function y() {
        if (window.pageYOffset) {
            return window.pageYOffset
        }
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    }

    function E(e) {
        var t = m(e);
        return t >= w && t <= b + w
    }

    function S() {
        var e = document.createElement("audio");
        e.setAttribute("class", l);
        e.src = i;
        e.loop = false;
        e.addEventListener("canplay", function () {
            setTimeout(function () {
                x(k)
            }, 500);
            setTimeout(function () {
                N();
                p();
                for (var e = 0; e < O.length; e++) {
                    T(O[e])
                }
            }, 15500)
        }, true);
        e.addEventListener("ended", function () {
            N();
            h()
        }, true);
        e.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
        document.body.appendChild(e);
        e.play()
    }

    function x(e) {
        e.className += " " + s + " " + o
    }

    function T(e) {
        e.className += " " + s + " " + u[Math.floor(Math.random() * u.length)]
    }

    function N() {
        var e = document.getElementsByClassName(s);
        var t = new RegExp("\\b" + s + "\\b");
        for (var n = 0; n < e.length;) {
            e[n].className = e[n].className.replace(t, "")
        }
    }

    var e = 30;
    var t = 30;
    var n = 350;
    var r = 350;
    var i = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";
    var s = "mw-harlem_shake_me";
    var o = "im_first";
    var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
    var a = "mw-strobe_light";
    var f = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
    var l = "mw_added_css";
    var b = g();
    var w = y();
    var C = document.getElementsByTagName("*");
    var k = null;
    for (var L = 0; L < C.length; L++) {
        var A = C[L];
        if (v(A)) {
            if (E(A)) {
                k = A;
                break
            }
        }
    }
    if (A === null) {
        console.warn("Could not find a node of the right size. Please try a different page.");
        return
    }
    c();
    S();
    var O = [];
    for (var L = 0; L < C.length; L++) {
        var A = C[L];
        if (v(A)) {
            O.push(A)
        }
    }
}
/* indexOf array for ie8 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    }
}

//check if localStorage avaliable
function isLocalStorageAvailable() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

//validate email func
function validateEmail(email) {
    var result = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return result.test(email);
}

function strFilterDigits(str) {
    return str.replace(new RegExp(/\D+/g), '');
}

//card number add spaces
function toCardNumber(cno) {
    var result = "";

    Array.prototype.forEach.call(cno.substr(0, 16), function (char, key) {
        if (key % 4 == 3 && key !== 15) {
            char += " "
        }
        result += char;
    });

    return result;
}

function getInputSelection(el) {
    var start = 0, end = 0, normalizedValue, range,
        textInputRange, len, endRange;

    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
        start = el.selectionStart;
        end = el.selectionEnd;
    } else {
        range = document.selection.createRange();

        if (range && range.parentElement() == el) {
            len = el.value.length;
            normalizedValue = el.value.replace(/\r\n/g, "\n");

            // Create a working TextRange that lives only in the input
            textInputRange = el.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());

            // Check if the start and end of the selection are at the very end
            // of the input, since moveStart/moveEnd doesn't return what we want
            // in those cases
            endRange = el.createTextRange();
            endRange.collapse(false);

            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                start = end = len;
            } else {
                start = -textInputRange.moveStart("character", -len);
                start += normalizedValue.slice(0, start).split("\n").length - 1;

                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                    end = len;
                } else {
                    end = -textInputRange.moveEnd("character", -len);
                    end += normalizedValue.slice(0, end).split("\n").length - 1;
                }
            }
        }
    }

    return {
        start: start,
        end: end
    };
}

function setCaretPosition(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

/*Getting counts*/
var getSocialLikesCounts = function (like_url, callback) {

    this.likes = {
        facebook: {loaded: false, count: 0},
        //twitter: {loaded: false, count: 0},
        linkedin: {loaded: false, count: 0},
        pinterest: {loaded: true, count: 0},
        google: {loaded: false, count: 0},
        vkontakte: {loaded: false, count: 0}
        //,stumbleupon: {loaded: false, count: 0}
    };

    this.getFacebookCount = function () {
        var that = this;
        $.ajax({
            type: 'GET',
            url: window.location.protocol + '//api.facebook.com/restserver.php?method=links.getStats&format=json&urls=' + like_url,
            dataType: "jsonp",
            success: function (data) {
                that.likes.facebook.loaded = true;
                that.likes.facebook.count = data[0].like_count || 0;
                that.returnCounts();
            }
        })

    };

    this.getTwitterCount = function () {
        var that = this;
        $.ajax({
            type: 'GET',
            url: window.location.protocol + '//urls.api.twitter.com/1/urls/count.json?url=' + like_url,
            dataType: "jsonp",
            success: function (data) {
                that.likes.twitter.loaded = true;
                that.likes.twitter.count = data.count || 0;
                that.returnCounts();
            }
        })
    };

    this.getLinkedinCount = function () {
        var that = this;
        $.ajax({
            type: 'GET',
            url: window.location.protocol + '//www.linkedin.com/countserv/count/share?url=' + like_url,
            dataType: "jsonp",
            success: function (data) {
                that.likes.linkedin.loaded = true;
                that.likes.linkedin.count = data.count || 0;
                that.returnCounts();
            }
        })
    };

    this.getPinterestCount = function () {
        var that = this;
        $.ajax({
            type: 'GET',
            url: window.location.protocol + '//api.pinterest.com/v1/urls/count.json?url=' + like_url,
            dataType: "jsonp",
            success: function (data) {
                that.likes.pinterest.loaded = true;
                that.likes.pinterest.count = data.count || 0;
                that.returnCounts();
            }
        });
    };

    this.getGoogleCount = function () {
        var that = this;
        var params = {
            nolog: true,
            id: like_url,
            source: "widget",
            userId: "@viewer",
            groupId: "@self"
        };
        gapi.client.setApiKey('AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ')
        gapi.client.rpcRequest('pos.plusones.get', 'v1', params).execute(function (resp) {
            that.likes.google.loaded = true;
            that.likes.google.count = resp.result.metadata.globalCounts.count || 0;
            that.returnCounts();
        });
    };

    this.getVkontakteCount = function () {
        var that = this;
        $.ajax({
            type: 'GET',
            url: 'https://api.vk.com/method/likes.getList?type=sitepage&owner_id=4459886&page_url=' + like_url,
            dataType: "jsonp",
            success: function (data) {
                that.likes.vkontakte.loaded = true;
                if (typeof (data.response) == 'undefined') {
                    that.likes.vkontakte.count = 0;
                } else {
                    that.likes.vkontakte.count = data.response.count || 0;
                }
                that.returnCounts();
            }
        })
    };

    this.getAllCounts = function () {
        this.getFacebookCount();
        // this.getTwitterCount();
        this.getLinkedinCount();
        this.getPinterestCount();
        this.getGoogleCount();
        this.getVkontakteCount();
    };

    this.returnCounts = function () {
        var keys_count = Object.keys(this.likes).length;
        var all_loaded = true;
        var loaded_likes = {};
        for (var social in this.likes) {
            var social_is_loaded = this.likes[social].loaded;
            all_loaded = (social_is_loaded && all_loaded);
            loaded_likes[social] = this.likes[social].count;
        }
        if (all_loaded) {
            callback(loaded_likes);
        }
    };

    this.getAllCounts();
}
//capitalize functionality for strings
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
var yandex_api_key = 'trnsl.1.1.20140709T071400Z.14191c724012a815.5e9969c0346d4d8da08ded6562bcd9a5e0fd45ef';
//second key - trnsl.1.1.20140709T114733Z.e563e752f9980112.8ab98acfde5ae87ffe4332cd55e45122eda2058f
//get yandex translator api languages list
function getLangs(user_interfase_lang, success, error) {
    var ui = user_interfase_lang || navigator.browserLanguage || navigator.language || navigator.userLanguage;

    var value = "; " + document.cookie;
    var parts = value.split("; site_lang=");
    var cur_lang = parts.pop().split(";").shift().split('-').shift();

    $.ajax(
        {
            url: 'https://translate.yandex.net/api/v1.5/tr.json/getLangs',
            dataType: 'jsonp',
            jsonp: 'getLangsCallback',
            data: {
                key: yandex_api_key,
                ui: cur_lang,
                callback: 'getLangsCallback'
            },
            success: success,
            error: error
        }
    )

    getLangsCallback = function (data) {
        success(data);
    }
}

function detectLang(text, format, success) {
    var text_format = format || 'html';
    $.ajax(
        {
            url: 'https://translate.yandex.net/api/v1.5/tr.json/detect',
            dataType: 'jsonp',
            jsonp: 'detectLangCallback',
            data: {
                key: yandex_api_key,
                text: text,
                format: text_format,
                callback: 'detectLangCallback'
            },
            success: success
        }
    )
    detectLangCallback = function (data) {
        success(data);
    }
}

function translateText(text, lang, format, success) {
    var text_format = format || 'html';
    $.ajax(
        {
            url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
            dataType: 'jsonp',
            jsonp: 'translateTextCallback',
            data: {
                key: yandex_api_key,
                lang: lang,
                text: text,
                format: text_format,
                callback: 'translateTextCallback'
            },
            success: success
        }
    )
    translateTextCallback = function (data) {
        success(data); //test
    }
}

/* DC translator*/
(function ($) {
    $.dcTextTranslator = function (el, option, callback) {

        /* Setup base elem vars */
        var base = this;
        base.langs = {};
        base.text_lang = '';
        base.$el = $(el);
        base.el = el;
        base.$el.data("dcTextTranslator", base);
        /* Option object */
        base.o = option;

        /*
         * Init
         */
        base.init = function () {
            base.$el.html('<div><img src="/images/load.gif" id="loading_img"/></div>');
            base.loadLanguages();
        };

        base.loadLanguages = function () {
            getLangs('',
                function (langs_list) {
                    var ci;

                    for (code in langs_list.langs) {
                        if (!langs_list.langs.hasOwnProperty(code)) {
                            continue;
                        }
                        ci = langs_list.langs[code];
                        langs_list.langs[code] = dropdown_langs[ci] || ci;
                    }

                    base.langs = langs_list.langs;
                    base.detectTextLang();
                },
                function (XMLHttpRequest, errorMsg, errorThrown) {
                    /*
                     var answer = JSON.parse(error.responseText);
                     base.$el.html(answer.message);
                     if (answer.code==401) {
                     yandex_api_key = 'trnsl.1.1.20140709T071400Z.14191c724012a815.5e9969c0346d4d8da08ded6562bcd9a5e0fd45ef';
                     base.loadLanguages();
                     }
                     */
                }
            );
        };

        base.detectTextLang = function () {
            detectLang(base.o.text, 'html', function (data) {
                base.text_lang = base.langs[data.lang];
                base.createHtmlStructure();
            })
        };

        base.createHtmlStructure = function () {
            base.$el.html(base.o.inner_html);
            var $select = base.$el.find('.lang_selection');
            _.each(base.langs, function (val, key) {
                var $option = $('<option value="' + key + '">' + val + '</option>');
                if (val == base.text_lang) $option.attr('selected', true);
                $option.appendTo($select);
            });
            base.$el.find('.comment_language').text(base.text_lang);
            base.bindHandlers();
        };

        base.loadTranslation = function (e) {
            var selected_language = $(e.currentTarget).val();
            translateText(base.o.text, selected_language, 'html', callback);
        };

        base.bindHandlers = function () {
            var $document = $(document);
            var $select = base.$el.find('.lang_selection');
            ;
            $select.bind('change', base.loadTranslation);
        };

        base.init();

    };
    $.fn.dcTextTranslator = function (option, callback) {
        return this.each(function () {
            (new $.dcTextTranslator(this, option, callback));
        });
    };
})(jQuery);
/* DC image notes*/
(function ($) {
    $.dcImageNotes = function (el, option, callback) {

        /* Setup base elem vars */
        var base = this;
        base.langs = {};
        base.text_lang = '';
        base.$el = $(el);
        var $container = base.$el;
        base.el = el;
        base.$el.data("dcImageNotes", base);
        /* Option object */
        base.o = option;

        /*
         * Init
         */
        base.init = function () {
            if (base.$el.hasClass('initialized')) {
                base.unbindAll();
                base.$el.find('.note_marker').remove();
            }
            base.createStructure();
        };

        base.createStructure = function () {

            var note_text = {
                write: 'Write here a comment',
                post: 'Post comment'
            };

            var value = "; " + document.cookie;
            var parts = value.split("; site_lang=");
            var cur_lang = parts.pop().split(";").shift().split('-').shift();

            if (cur_lang == 'fr') {
                note_text.write = 'Ecrivez un commentaire ici';
                note_text.post = 'Poster le commentaire';
            } else if (cur_lang == 'es') {
                note_text.write = 'Escribe aquí un comentario';
                note_text.post = 'Enviar comentario';
            } else if (cur_lang == 'ru') {
                note_text.write = 'Оставьте комментарий здесь';
                note_text.post = 'Комментировать';
            } else if (cur_lang === 'de') {
                note_text.write = 'Kommentieren Sie';
                note_text.post = 'Schicken';
            } else if (cur_lang == 'uk') {
                note_text.write = 'Залиште коментар тут';
                note_text.post = 'Коментувати';
            } else {
                note_text.write = 'Write here a comment';
                note_text.post = 'Post comment';
            }

            $container.addClass('initialized');
            $container.find('.note_box').remove();
            var markers_count = base.o.markers.length;
            var $add_comment_marker = $('<div class="note_marker add_note">' + (markers_count + 1) + '</div>');
            var $add_comment_box = $('<div class="add_note_box"><textarea placeholder="' + note_text.write + '"></textarea><button class="grey_button comment add_comment_to_entry"><span>' + note_text.post + '</span><i class="grey_comment_ico"></i></button><span class="item_icons_remove">Close add marker box</span></div>');
            $add_comment_marker.css({top: '-9999px', left: '-9999px'});
            $add_comment_marker.appendTo($container);
            $add_comment_box.appendTo($add_comment_marker);
            $add_comment_marker.draggable({
                containment: $container, scroll: true,
                drag: function (e) {
                    base.setCommentBoxPosition();
                },
                stop: function () {
                    base.setAddCommentMarkerPosition();
                }
            });
            $('.enabled-markers-ico').show();
            base.showMarkers();
            base.bindHandlers();
        };
        base.showMarkers = function () {
            var markers_arr = base.o.markers;
            var markers_count = markers_arr.length;
            _.each(markers_arr, function (commentModel, i) {
                var comment = commentModel.toJSON();
                var comment_text = $('<div></div>').html(comment.comment).text().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                var $note = $('<div class="note_marker with_tooltip marker_' + comment.marker_num + '" data-marker="' + comment.marker_num + '" title data-tooltip-text="' + comment_text + '"><span>' + (comment.marker_num) + '</span></div>');
                var x_offset = comment.offset_x;
                var y_offset = comment.offset_y;
                $note.css({top: y_offset + '%', left: x_offset + '%'});
                $note.appendTo($container);
            });
        };


        base.showAddNoteBlock = function (e) {
            if (!$container.hasClass('disabled')) {
                var $add_comment_marker = $container.find('.note_marker.add_note');
                var $add_comment_box = $container.find('.add_note_box');
                var offsetX = e.offsetX;
                var offsetY = e.offsetY;

                // firefox is missing offsetX and offsetY
                if (typeof (offsetX) === "undefined" || typeof (offsetY) === "undefined") {
                    offsetX = e.pageX - $container.offset().left;
                    offsetY = e.pageY - $container.offset().top;
                }

                var x = Math.min(
                    Math.max(offsetX, $add_comment_marker.width() / 2), // can't get too close to left side
                    $container.width() - ($add_comment_marker.width() / 2)) - ($add_comment_marker.width() / 2); // can't get too close to right side
                var y = Math.min(
                    Math.max(offsetY, $add_comment_marker.height() / 2), // can't get too close to top
                    $container.height() - ($add_comment_marker.height() / 2)) - ($add_comment_marker.height() / 2); // can't get too close to bottom
                var x_percent = (x) / $container.width() * 100;
                var y_percent = (y) / $container.height() * 100;
                $add_comment_marker.css({top: y_percent + '%', left: x_percent + '%'});
                $add_comment_marker.show(200);
                base.setCommentBoxPosition();
            }
        };

        base.hideAddNoteBlock = function (e) {
            var $add_comment_marker = $container.find('.note_marker.add_note');
            $add_comment_marker.hide(200);
        };

        base.setCommentBoxPosition = function () {
            var $add_comment_marker = $container.find('.note_marker.add_note');
            var $add_comment_box = $container.find('.add_note_box');
            $add_comment_box.css({display: 'none'});
            var position = $add_comment_marker.position();
            var marker_top = position.top;
            var marker_left = position.left;
            var container_width = $container.width();
            var container_height = $container.height();
            var vertical_position = (marker_top < container_height / 2) ? 'bottom' : 'top';
            var horizontal_position = (marker_left < container_width / 2) ? 'right' : 'left';
            $add_comment_box.removeClass('left_side right_side bottom_side top_side');
            $add_comment_box.addClass(vertical_position + '_side ' + horizontal_position + '_side');
            $add_comment_box.show(400);
        };

        base.setAddCommentMarkerPosition = function () {
            var $add_comment_marker = $container.find('.note_marker.add_note');
            var position = $add_comment_marker.position();
            var marker_top = position.top;
            var marker_left = position.left;
            var container_width = $container.width();
            var container_height = $container.height();
            var x_percent = marker_left / container_width * 100;
            var y_percent = marker_top / container_height * 100;
            $add_comment_marker.css({top: y_percent + '%', left: x_percent + '%'});
        };

        base.addNewMarker = function (e) {
            var comment_text = $container.find('.add_note_box textarea').val();
            var $add_comment_marker = $container.find('.note_marker.add_note');
            var marker_width = $add_comment_marker.width();
            var marker_height = $add_comment_marker.height();
            var position = $add_comment_marker.position();
            var marker_top = position.top;
            var marker_left = position.left;
            var container_width = $container.width();
            var container_height = $container.height();
            var offset_y = (marker_top + marker_height / 2) / container_height * 100;
            var offset_x = (marker_left + marker_width / 2) / container_width * 100;
            callback(comment_text, offset_x, offset_y);
            e.stopPropagation;
            e.preventDefault();
            return false
        };

        base.bindHandlers = function () {
            var can_add = base.o.can_add;

            var $markers = $container.find('.note_marker');

            if (can_add) {
                var $add_note_box = $container.find('.add_note_box');
                var $submit_btn = $add_note_box.find('button');
                var $close_btn = $add_note_box.find('.item_icons_remove');

                $container.bind('click', base.showAddNoteBlock);
                $close_btn.bind('click', base.hideAddNoteBlock);
                $add_note_box.bind('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                });
                $submit_btn.bind('click', base.addNewMarker);
            }

            $markers.on('click', function (e) {
                e.stopPropagation();
                $(e.currentTarget).trigger('scrollToComment')
            });
        };

        base.unbindAll = function () {
            var $document = $(document);
            var $add_note_box = $container.find('.add_note_box');
            var $submit_btn = $add_note_box.find('button');
            var $close_btn = $add_note_box.find('.item_icons_remove');
            var $markers = $container.find('.note_marker');
            $container.unbind('click');
            $close_btn.unbind('click');
            $add_note_box.unbind('click');
            $markers.unbind('click');
            $submit_btn.unbind('click');
        };

        base.init();

    };
    $.fn.dcImageNotes = function (option, callback) {
        return this.each(function () {
            (new $.dcImageNotes(this, option, callback));
        });
    };
})(jQuery);
/* jquery deparam function*/
(function ($) {
    $.deparam = function (params, coerce) {
        var obj = {},
            coerce_types = {'true': !0, 'false': !1, 'null': null};

        // Iterate over all name=value pairs.
        $.each(params.replace(/\+/g, ' ').split('&'), function (j, v) {
            var param = v.split('='),
                key = decodeURIComponent(param[0]),
                val,
                cur = obj,
                i = 0,

                // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
                // into its component parts.
                keys = key.split(']['),
                keys_last = keys.length - 1;

            // If the first keys part contains [ and the last ends with ], then []
            // are correctly balanced.
            if (/\[/.test(keys[0]) && /\]$/.test(keys[keys_last])) {
                // Remove the trailing ] from the last keys part.
                keys[keys_last] = keys[keys_last].replace(/\]$/, '');

                // Split first keys part into two parts on the [ and add them back onto
                // the beginning of the keys array.
                keys = keys.shift().split('[').concat(keys);

                keys_last = keys.length - 1;
            } else {
                // Basic 'foo' style key.
                keys_last = 0;
            }

            // Are we dealing with a name=value pair, or just a name?
            if (param.length === 2) {
                val = decodeURIComponent(param[1]);

                // Coerce values.
                if (coerce) {
                    val = val && !isNaN(val) ? +val              // number
                        : val === 'undefined' ? undefined         // undefined
                            : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
                                : val;                                                // string
                }

                if (keys_last) {
                    // Complex key, build deep object structure based on a few rules:
                    // * The 'cur' pointer starts at the object top-level.
                    // * [] = array push (n is set to array length), [n] = array if n is
                    //   numeric, otherwise object.
                    // * If at the last keys part, set the value.
                    // * For each keys part, if the current level is undefined create an
                    //   object or array based on the type of the next keys part.
                    // * Move the 'cur' pointer to the next level.
                    // * Rinse & repeat.
                    for (; i <= keys_last; i++) {
                        key = keys[i] === '' ? cur.length : keys[i];
                        cur = cur[key] = i < keys_last
                            ? cur[key] || (keys[i + 1] && isNaN(keys[i + 1]) ? {} : [])
                            : val;
                    }

                } else {
                    // Simple key, even simpler rules, since only scalars and shallow
                    // arrays are allowed.

                    if ($.isArray(obj[key])) {
                        // val is already an array, so push on the next value.
                        obj[key].push(val);

                    } else if (obj[key] !== undefined) {
                        // val isn't an array, but since a second value has been specified,
                        // convert val into an array.
                        obj[key] = [obj[key], val];

                    } else {
                        // val is a scalar.
                        obj[key] = val;
                    }
                }

            } else if (key) {
                // No value was defined, so set something meaningful.
                obj[key] = coerce
                    ? undefined
                    : '';
            }
        });

        return obj;
    };
})(jQuery);
/* menuup msg plugin */
$.stickr = function (o) {
    var o = $.extend({   // настройки по умолчанию
        time: 3000, // количество мс, которое отображается сообщение
        speed: 'slow', // скорость исчезания
        note: null, // текст сообщения
        className: null, // класс, добавляемый к сообщению
        sticked: true, // не выводить кнопку закрытия сообщения
        position: {bottom: 0, right: 0}, // позиция по умолчанию - справа сверху
        title: '' + notification_translation.system_translation + ' ' + notification_translation.notification_translation,
        img: '/images/notifications/system-new.svg'
    }, o);
    ////set 3000 ms for all notifications
    o.time = (o.time < 3000) ? 3000 : 3000;
    var stickers = $('#jquery-stickers'); // начинаем работу с главным элементом
    if (!stickers.length) { // если его ещё не существует
        $('body').prepend('<div id="jquery-stickers"></div>'); // добавляем его
        var stickers = $('#jquery-stickers');
        stickers.css('position', 'fixed').css(o.position); // позиционируем
    }
    var stick = $('<div class="stick"></div>'); // создаём стикер
    stickers.append(stick); // добавляем его к родительскому элементу
    if (o.className) stick.addClass(o.className); // если необходимо, добавляем класс
    stick.html('<div class="ntfc_img"><img src="' + o.img + '"></div><div class="stick_content"><p class="system">' + o.title + '</p><p>' + o.note + '</p></div>'); // вставляем сообщение

    var stickr_timeout = setTimeout(function () { // устанавливаем таймер на необходимое время
        stick.fadeOut(o.speed, function () { // затем скрываем стикер
            $(this).remove(); // по окончании анимации удаляем его
        });
    }, o.time);
    if (o.sticked) { // если сообщение закреплено
        var exit = $('<i class="svg-icon icon-cross_small"></i>');  // создаём кнопку выхода
        stick.prepend(exit); // вставляем её перед сообщением
        exit.click(function () {  // при клике
            stick.fadeOut(o.speed, function () { // скрываем стикер
                $(this).remove(); // по окончании анимации удаляем его
            })
        });
    }
    stick.mouseenter(function () {
        clearTimeout(stickr_timeout);
    }).mouseleave(function () {
        stickr_timeout = setTimeout(function () { // устанавливаем таймер на необходимое время
            stick.fadeOut(o.speed, function () { // затем скрываем стикер
                $(this).remove(); // по окончании анимации удаляем его
            });
        }, 5000);
    });
};
/* DC File Uploader*/
(function ($) {
    $.dcFileUploader = function (el, option, callback) {

        /* Setup base elem vars */
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.id = base.$el.attr('id');
        base.$el.data("dcFileUploader", base);
        /* Option object */
        base.o = option;


        /*
         * Init
         */
        base.init = function () {
            base.createHtmlStructure();
            base.bindHandlers();
        };

        base.createHtmlStructure = function () {
            base.$el.addClass('uploider_item');
            var max_filesize = base.o.max_filesize || 100 * 1024 * 1024;
            var filesize_limit = max_filesize.fileSize();
            var $uploid_img, $file_input;
            if (typeof FormData != 'undefined') {
                $uploid_img = (base.$uploid_img = $('<div class="uploid_img drop"></div>').appendTo(base.$el));
                $file_input = (base.$file_input = $('<input type="file" class="upload_file_input" multiple="" name="File[files][]"/>').appendTo(base.$el));
            } else {
                var $form = (base.$form = $('<form method="post" action="' + base.o.post_url + '" enctype="multipart/form-data" encoding="multipart/form-data" id="my_form_id' + base.id + '"></form>').appendTo(base.$el));
                var $input_contest_id = $('<input type="hidden" value="' + base.o.contest_id + '" name="id"/>').appendTo(base.$form);
                $uploid_img = (base.$uploid_img = $('<div class="uploid_img drop"></div>').appendTo(base.$form));
                $file_input = (base.$file_input = $('<input type="file" class="upload_file_input" name="File[files][]"/>').appendTo(base.$form));
                _.each(base.o.params, function (val, key) {
                    $('<input type="hidden" value="' + val + '" name="' + key + '"/>').appendTo(base.$form);
                });

            }
            ;
            var $file_loading = (base.$file_loading = $('<div class="file_loading" style="display:none;"></div>').appendTo($uploid_img));
            var $wrapper_bar = (base.$wrapper_bar = $('<div class="wrapper_bar"></div>').appendTo($file_loading));
            var $percent_span = (base.$percent_span = $('<span id="span_bar_id' + base.id + '">0%</span>').appendTo($wrapper_bar));
            var $loading_bar = (base.$loading_bar = $('<div class="bar"></div>').appendTo($wrapper_bar));
            var $loading_bar_strip = (base.$loading_bar_strip = $('<div class="strip"></div>').appendTo($loading_bar));
            if (typeof FormData != 'undefined') {
                $('<span class="icon"></span><p>' + file_upload_translation.drag_n_drop + ' ' + file_upload_translation.to_upload + '</p><p class="conjunction">' + file_upload_translation.or_symbol + '</p><span class="file-icon"><a href="#" class="select_files_link">' + file_upload_translation.select_files + '</a></span>' + ((base.o.max_filesize) ? '<p class="upload_file_limit">' + file_upload_translation.file_limit + filesize_limit + '<p>' : '')).appendTo($uploid_img);
            } else {
                $('<span class="icon"></span><p class="conjunction">' + file_upload_translation.click_to + '</p><span class="file-icon"><a href="#" class="select_files_link">' + file_upload_translation.select_file + '</a></span>' + ((base.o.max_filesize) ? '<p class="upload_file_limit">' + file_upload_translation.file_limit + filesize_limit + '<p>' : '')).appendTo($uploid_img);
            }
            ;
            base.$el.closest('li').addClass('add_new_file');
        };

        /*
         * Callback func when successful (returns element)
         */
        base.loadFiles = function (e) {
            if (typeof FormData != 'undefined') {
                var uploaded_files = (base.uploaded_files = e.currentTarget.files);
                base.postFilesToServer();
            } else {
                base.postFilesInFrame();
            }
        };

        base.postFilesInFrame = function () {
            base.$form.attr('enctype', 'multipart/form-data');
            base.$form.attr('encoding', 'multipart/form-data');
            //base.$form.trigger('submit');
            base.IEfileUpload('my_form_id' + base.id, base.o.post_url, 'span_bar_id' + base.id);
        };

        base.IEfileUpload = function (form_id, action_url, div_id) {
            base.$file_loading.css('display', 'block');
            base.$file_loading.addClass('is-loading');
            var form = document.getElementById(form_id); // getting created form by id
            // Create the iframe...
            document.charset = "UTF-8"; // set document chartset for correct server data handling
            var iframe = document.createElement("iframe");
            iframe.setAttribute("id", "upload_iframe");
            iframe.setAttribute("name", "upload_iframe");
            iframe.setAttribute("width", "0");
            iframe.setAttribute("height", "0");
            iframe.setAttribute("border", "0");
            iframe.setAttribute("style", "width: 0; height: 0; border: none;");

            // Add iframe to document...
            form.parentNode.appendChild(iframe);
            window.frames['upload_iframe'].name = "upload_iframe";

            iframeId = document.getElementById("upload_iframe");

            // Add event...
            var eventHandler = function () {
                if (iframeId.detachEvent) {
                    iframeId.detachEvent("onload", eventHandler)
                } else {
                    iframeId.removeEventListener("load", eventHandler, false)
                }
                ;

                // Message from server...
                if (iframeId.contentDocument) {
                    content = iframeId.contentDocument.body.innerHTML;
                } else if (iframeId.contentWindow) {
                    content = iframeId.contentWindow.document.body.innerHTML;
                } else if (iframeId.document) {
                    content = iframeId.document.body.innerHTML;
                }
                document.getElementById(div_id).innerHTML = '';

                var result = JSON.parse(content);
                base.success(result);

                // Del the iframe...
                setTimeout(function () {
                    $('#upload_iframe').remove(); // removing iframe
                    base.$file_loading.css('display', 'none');
                    base.$file_loading.removeClass('is-loading');

                    //$('#'+div_id).remove(); // removing progress bar for ie
                    //var form_inner = $('#'+form_id).contents(); // removing form without its inner elements
                    //$('#'+form_id).replaceWith(form_inner);
                }, 250);
            }

            if (iframeId.attachEvent) {
                iframeId.attachEvent("onload", eventHandler)
            } else {
                iframeId.addEventListener("load", eventHandler, true)
            }
            ;

            // Set properties of form...
            form.setAttribute("target", "upload_iframe");
            form.setAttribute("action", action_url);
            form.setAttribute("method", "post");
            form.setAttribute("enctype", "multipart/form-data");
            form.setAttribute("encoding", "multipart/form-data");

            // Submit the form...
            form.submit();
            document.getElementById(div_id).innerHTML = "Uploading...";
        }

        base.postFilesToServer = function () {
            var files = base.uploaded_files;
            var post_url = base.o.post_url;
            var max_filesize = base.o.max_filesize || 100 * 1024 * 1024;
            var filesize_limit = max_filesize.fileSize();
            var contest_id = base.o.contest_id;
            var xhr = new XMLHttpRequest();
            var that = this;
            if (typeof FormData != 'undefined') {
                var form = new FormData();
                for (var i = 0; i < files.length; i++) {
                    if (files[i].size > max_filesize) {
                        var error_message = files[i].name + (file_upload_translation.filesize_error || (' - file size error. Allowed size - ')) + filesize_limit;
                        $.stickr({note: error_message, className: 'classic', time: 4000, speed: 200});
                    } else {
                        form.append('File[files][]', files[i]);
                    }
                }
                ;
                _.each(base.o.params, function (val, key) {
                    form.append(key, val);
                });
                form.append('id', contest_id);
                xhr.onload = function () {
                    var result = JSON.parse(xhr.responseText);
                    base.success(result);
                    base.$file_loading.css('display', 'none');
                    base.$file_loading.removeClass('is-loading');
                };
                xhr.upload.onprogress = function (event) {
                    var percent = Math.round((event.loaded * 100) / event.total) + '%';
                    base.$percent_span.text(percent);
                    base.$loading_bar_strip.css('width', percent);
                };
                xhr.open('POST', post_url, true);
                xhr.send(form);
                base.$file_loading.css('display', 'block');
                base.$file_loading.addClass('is-loading');
            }
        };

        base.success = function (result) {
            callback(result); // Return elem
        };

        base.bindHandlers = function () {
            var $document = $(document);
            base.$file_input.on('change', $.proxy(base.loadFiles, this))
            base.$uploid_img.on('click', function (e) {
                e.preventDefault();
                base.$file_input.click()
            });
        }

        base.init();

    };
    $.fn.dcFileUploader = function (option, callback) {
        return this.each(function () {
            (new $.dcFileUploader(this, option, callback));
        });
    };
})(jQuery);
/* DC File Wrapper*/
(function ($) {
    $.dcFileWrapper = function (el, option, callback) {

        /* Setup base elem vars */
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.id = base.$el.attr('id');
        base.$el.data("dcFileWrapper", base);
        /* Option object */
        base.o = option;

        /*
         * Init
         */
        base.init = function () {
            base.createHtmlStructure();
            base.bindHandlers();
        };

        base.createHtmlStructure = function () {
            base.$el.addClass('uploider_item');
            var $uploid_img, $file_input;

            if (base.o.noMarkup) {
                base.$file_input = $('<input type="file" class="no-markup upload_file_input" multiple="" name="File[files][]"/>').appendTo(base.$el);
            } else {
                if (typeof FormData != 'undefined') {
                    $uploid_img = (base.$uploid_img = $('<div class="uploid_img drop"></div>').appendTo(base.$el));
                    $file_input = (base.$file_input = $('<input type="file" class="upload_file_input" multiple="" name="File[files][]"/>').appendTo(base.$el));
                } else {
                    var $form = (base.$form = $('<div></div>').appendTo(base.$el));
                    var $input_contest_id = $('<input type="hidden" value="' + base.o.contest_id + '" name="id"/>').appendTo(base.$form);
                    $uploid_img = (base.$uploid_img = $('<div class="uploid_img drop"></div>').appendTo(base.$form));
                    $file_input = (base.$file_input = $('<input type="file" class="upload_file_input" name="image"/>').appendTo(base.$form));
                    _.each(base.o.params, function (val, key) {
                        $('<input type="hidden" value="' + val + '" name="' + key + '"/>').appendTo(base.$form);
                    });

                }
                ;
                var $file_loading = (base.$file_loading = $('<div class="file_loading" style="display:none;"></div>').appendTo($uploid_img));
                var $wrapper_bar = (base.$wrapper_bar = $('<div class="wrapper_bar"></div>').appendTo($file_loading));
                var $percent_span = (base.$percent_span = $('<span id="span_bar_id' + base.id + '">0%</span>').appendTo($wrapper_bar));
                var $loading_bar = (base.$loading_bar = $('<div class="bar"></div>').appendTo($wrapper_bar));
                var $loading_bar_strip = (base.$loading_bar_strip = $('<div class="strip"></div>').appendTo($loading_bar));
                if (typeof FormData != 'undefined') {
                    $('<span class="icon"></span><p>' + file_upload_translation.drag_n_drop + ' ' + file_upload_translation.to_upload + '</p><p class="conjunction">' + file_upload_translation.or_symbol + '</p><span class="file-icon"><a href="#" class="select_files_link">' + file_upload_translation.select_files + '</a></span>').appendTo($uploid_img);
                } else {
                    $('<span class="icon"></span><p class="conjunction">' + file_upload_translation.click_to + '</p><span class="file-icon"><a href="#" class="select_files_link">' + file_upload_translation.select_file + '</a></span>').appendTo($uploid_img);
                }
                ;
                base.$el.closest('li').addClass('add_new_file');
            }
        };

        /*
         * Callback func when successful (returns element)
         */
        base.loadFiles = function (e) {
            base.success(e);
        };

        base.success = function (result) {
            callback(result); // Return elem
        };

        base.bindHandlers = function () {
            var $document = $(document);
            base.$file_input.on('change', $.proxy(base.loadFiles, this));
            if (base.$uploid_img) {
                base.$uploid_img.on('click', function (e) {
                    e.preventDefault();
                    base.$file_input.click()
                });
            }
        }

        base.init();

    };
    $.fn.dcFileWrapper = function (option, callback) {
        return this.each(function () {
            (new $.dcFileWrapper(this, option, callback));
        });
    };
})(jQuery);
/* DC Email input*/
(function ($) {
    //$('#email_input').data('dcEmailInput').addEmail('email@email.com'); - to add email
    $.dcEmailInput = function (el, option, arg) {

        /* Setup base elem vars */
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.id = base.$el.attr('id');
        base.$el.data("dcEmailInput", base);
        /* Option object */
        base.o = option;
        base.emails = [];
        base.inner_timer = {};

        base.init = function () {
            base.createHtmlStructure();
            base.bindHandlers();
        };

        base.createHtmlStructure = function () {
            var $plugin_wrapper = $('<div id="' + base.id + '_wrapper"></div>');
            base.$el.wrap($plugin_wrapper);
            base.$plugin_wrapper = $('#' + base.id + '_wrapper');
            var $emails_list = (base.$emails_list = $('<input name="' + base.o.field_name + '" type="hidden" id="hidden_' + base.id + '">').insertAfter(base.$el));
        };

        base.checkTimeout = function (e) {
            var $email_input = $(e.currentTarget);
            var input_val = $email_input.val();
            clearTimeout(base.inner_timer);
            if (e.keyCode == 13) {
                base.checkForEmail(input_val);
                return false;
            } else {
                base.inner_timer = setTimeout(function () {
                    base.checkForEmail(input_val);
                }, 1000);
            }
        };

        base.checkForEmail = function (input_val) {
            if (validateEmail(input_val)) {
                base.addEmail(input_val);
            }
            //base.success(e);
        };

        base.addEmail = function (email) {
            if (base.emails.indexOf(email) > -1) {
                //email duplicates
            } else {
                base.emit('onBeforeAddEmail', email, base);
                base.emails.push(email);
                base.$el.val('');
                base.$plugin_wrapper = $('#' + base.id + '_wrapper');
                base.$emails_list = $('#hidden_' + base.id);
                var $email_box = $('<div class="stored_email">' + email + '<i class="delet-skills"></i></div>');
                base.$plugin_wrapper.append($email_box);
                $email_box.hide().show(300);
                //base.$el.before('<div class="stored_email">'+email+'<i class="delet-skills"></i></div>');
                base.$emails_list.val(base.emails.join());
                base.$el.trigger('change');
            }
        };

        base.removeEmail = function (e) {
            var $stored_email_div = $(e.currentTarget).closest('.stored_email');
            var index_val = $('#' + base.id + '_wrapper .stored_email').index($stored_email_div);
            var email_val = base.emails[index_val];
            $stored_email_div.remove();
            base.emails.splice(index_val, 1);
            base.$emails_list.val(base.emails.join());
            base.$emails_list.trigger('change');
            base.$emails_list.trigger('remove_email', {email: email_val});
        };

        base.success = function (result) {
            callback(result); // Return elem
        };

        base.bindHandlers = function () {
            var $document = $(document);
            base.$el.on('change', $.proxy(base.checkTimeout, this));
            base.$el.on('keyup', $.proxy(base.checkTimeout, this));
            base.$el.on('input', $.proxy(base.checkTimeout, this));
            base.$el.on('click', $.proxy(base.checkTimeout, this));
            base.$plugin_wrapper.on('click', '.delet-skills', $.proxy(base.removeEmail, this))
        };

        base.emit = function (eventName) {
            if (base.o[eventName]) {
                base.o[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
        };

        base.init();

    };
    $.fn.dcEmailInput = function (option, callback) {
        return this.each(function () {
            (new $.dcEmailInput(this, option, callback));
        });
    };
})(jQuery);
/* DC Option selector*/
(function ($) {
    $.dcOptionsSelector = function (el, option, callback) {

        /* Setup base elem vars */
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.id = base.$el.attr('id');
        base.$el.data("dcOptionsSelector", base);
        /* Option object */
        base.o = option;

        /*
         * Init
         */
        base.init = function () {
            base.createHtmlStructure();
            base.bindHandlers();
        };

        base.createHtmlStructure = function () {
            base.$el.addClass('select');
            var $select_in = $('<div class="select__in"></div>').appendTo(base.$el);
            var $select_head = $('<div class="select__head"></div>').appendTo($select_in);
            var $head_in = $('<div class="select__head-in"></div>').appendTo($select_head);
            var $select_arr = (base.$select_arr = $('<div class="select__arr"></div>').appendTo($select_head));
            var $select_list = (base.$select_list = $('<ul class="select__list"></ul>').appendTo($select_in));
            var $select_head_list = (base.$select_head_list = $('<ul class="select__head-list"></ul>').appendTo($head_in));
            base.reloadOptionsElements();
        };

        base.reloadOptionsElements = function () {
            base.$select_list.html('');
            base.$select_head_list.html('');
            var list_items = base.o.list;
            _.each(list_items, function (item) {
                var $list_item = $('<li data-item-value="' + item.value + '"></li>').appendTo(base.$select_list);
                var $input = $('<input id="' + item.value + '_checkbox" type="checkbox" name="user_group">').appendTo($list_item);
                var $label = $('<label for="' + item.value + '_checkbox" class="checkbox"><span>' + item.name + '</span></label>').appendTo($list_item);
                if (item.checked) {
                    var $head_item = $('<li data-item-value="' + item.value + '">' + item.short_name + '<i></i></li>').appendTo(base.$select_head_list);
                    $input.attr('checked', 'checked');
                }
                ;
            });
        };

        base.success = function (result) {
            callback(base.o); // Return elem
        };

        base.toggleSelectOpened = function (e) {
            e.stopPropagation();
            base.$el.toggleClass('is-open');
        };

        base.changeOptionStatus = function (e) {
            e.stopPropagation();
            var $checkbox = $(e.currentTarget);
            var $clicked_li = $checkbox.closest('li');
            var option_value = $clicked_li.attr('data-item-value');
            var list_items = base.o.list;
            _.each(list_items, function (item) {
                if (item.value == option_value) {
                    var checked_val = item.checked;
                    item.checked = !checked_val;
                }
            });
            base.o.list = list_items;
            base.reloadOptionsElements();
            base.success();
        };

        base.changeHeadOptionStatus = function (e) {
            e.stopPropagation();
            var $clicked_li = $(e.currentTarget);
            var option_value = $clicked_li.attr('data-item-value');
            var list_items = base.o.list;
            _.each(list_items, function (item) {
                if (item.value == option_value) {
                    var checked_val = item.checked;
                    item.checked = !checked_val;
                }
            });
            base.o.list = list_items;
            base.reloadOptionsElements();
            base.success();
        };

        base.stopEventPropagation = function (e) {
            e.stopPropagation();
        };

        base.closeOptionsList = function (e) {
            e.stopPropagation();
            base.$el.removeClass('is-open');
        };

        base.bindHandlers = function () {
            var $document = $(document);
            base.checkbox_in_list = '#' + this.id + ' .select__list li input';
            base.label_in_list = '#' + this.id + ' .select__list li label';
            base.item_in_headlist = '#' + this.id + ' .select__head-list li';
            base.$select_arr.on('click', $.proxy(base.toggleSelectOpened, this));
            $document.on('change', base.checkbox_in_list, $.proxy(base.changeOptionStatus, this));
            $document.on('click', base.item_in_headlist, $.proxy(base.changeHeadOptionStatus, this));
            $document.on('click', base.label_in_list, $.proxy(base.stopEventPropagation, this));
            $document.on('click', base.$el, $.proxy(base.stopEventPropagation, this));
            $document.on('click', 'html', $.proxy(base.closeOptionsList, this));
            $document.on('click', '#' + this.id, $.proxy(this.stopEventPropagation, this));
            $document.on('click', 'html', $.proxy(this.closeOptionsList, this));
            // base.$el.on('click', $.proxy(base.stopEventPropagation, this));
            // $('html').on('click', $.proxy(base.closeOptionsList, this));
        }

        base.init();

    };
    $.fn.dcOptionsSelector = function (option, callback) {
        return this.each(function () {
            (new $.dcOptionsSelector(this, option, callback));
        });
    };
})(jQuery);
/* DC hire designer*/
(function ($) {
    $.dcHireDesigner = function (el, option, callback) {

        /* Setup base elem vars */
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.designer = base.$el.attr('data-designer-name');
        base.link = true;
        base.href_link = '/start-one-on-one/';
        base.projects = [];
        base.$el.data("dcHireDesigner", base);
        /* Option object */
        base.o = option;

        /*
         * Init
         */
        base.init = function () {
            base.bindHandlers();
        };

        base.createHtmlStructure = function () {
            if ($('#hire_designer_menuup').length) {
                //menuup is exist
                var $menuup = base.$menuup = $('#hire_designer_menuup');
                $menuup.html('');
            } else {
                var $menuup = (base.$menuup = $('<div class="menuup confirmation invite_designer" id="hire_designer_menuup"></div>').appendTo('body'));
            }
            var $menuup_header = (base.$menuup_header = $('<h2>' + invite_designer_menuup.invite_designer + '</h2>').appendTo($menuup));
            var $menuup_text = (base.$menuup_text = $('<p>' + invite_designer_menuup.invite_guestion + '</p>').appendTo($menuup));
            var $select_label = (base.$select_label = $('<label class="selection"></label>').appendTo($menuup));
            var $select = (base.$select = $('<select></select>').appendTo($select_label));
            _.each(base.projects, function (project) {
                var select_option = $('<option value="' + project.id + '">' + project.title + '</option>');
                if (project.selected) {
                    select_option.attr('selected', true)
                }
                ;
                select_option.appendTo($select);
            });
            var $btns_box = (base.$btns_box = $('<div class="client-menuup-btns"></div>').appendTo($menuup));
            var $send_btn = (base.$send_btn = $('<button class="btn-blue" id="send_designer_hire">' + invite_designer_menuup.send + '</button>').appendTo($btns_box));
            var $btn_separator = (base.$btn_separator = $('<span>' + invite_designer_menuup.or + '</span>').appendTo($btns_box));
            var $create_new_btn = (base.$create_new_btn = $('<button class="btn-grey" id="create_new_brief">' + invite_designer_menuup.create_new_brief + '</button>').appendTo($btns_box));
            var $close_link = (base.$close_menuup_link = $('<a href="#" class="close_menuup" title="Close details">Close details</a>').appendTo($menuup));
            base.bindmenuupHandlers();
        };

        base.setmenuupCenter = function () {
            var left_margin = 0 - Math.round($('.menuup').outerWidth() / 2);
            var top_margin = 0 - Math.round($('.menuup').outerHeight() / 2);
            $('.menuup').css({'margin-left': left_margin, 'margin-top': top_margin});
        };

        base.success = function (result) {
            callback(base.o); // Return elem
        };

        base.stopEventPropagation = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };

        base.loadOneOnOneList = function (e) {
            e.preventDefault();
            e.stopPropagation();
            var location_url = '/start-one-on-one/?designer=' + base.designer;
            if (dc.user_logged_in == 'true') {
                $.get('/one-on-one/getProjects/', function (data) {
                    var answer = JSON.parse(data);
                    base.link = answer.link;
                    if ((answer.link) || (answer.projects && (answer.projects.length == 0))) {//link = true or projects array is empty
                        //document.location.href = answer.href;
                        document.location.href = location_url; //if user have no projects
                    } else {
                        base.projects = answer.projects
                        base.showProjectSelectionmenuup();
                    }
                });
            } else {
                document.location.href = location_url;
            }
        };

        base.showProjectSelectionmenuup = function (e) {
            if ($('.overlay').length) {
                //overlay exist on page
            } else {
                $('<div class="overlay"></div>').appendTo('body');
            }
            base.createHtmlStructure();
            $('#hire_designer_menuup').show(100);
            base.setmenuupCenter();
            $('.overlay').show(100);
        };

        base.hidemenuup = function (e) {
            e.preventDefault();
            $('#hire_designer_menuup').hide(100);
            $('.overlay').hide(100);
        };

        base.sendDesignerHireInvite = function (e) {
            e.preventDefault();
            e.stopPropagation();
            var project_id = base.$select.val();
            var project_data = _.findWhere(base.projects, {id: project_id});
            var project_name = project_data.serialized_url;
            if (project_name == '') {
                var location_url = '/start-one-on-one/?id=' + project_id + '&designer=' + base.designer;
                document.location.href = location_url;
            } else {
                base.sendDesignerInvitation(base.designer, project_data);
            }
        };

        base.sendDesignerInvitation = function (designer_name, project_data) {
            var project_id = project_data.id;
            var project_name = project_data.serialized_url;
            $.post('/one-on-one/invite/send', {contest_id: project_id, designer_name: designer_name}, function (resp) {
                var answer = JSON.parse(resp);
                $.stickr({note: answer.returnMessage, className: 'classic', time: 4000, speed: 200});
                if (answer.status) {
                    var location_url = '/one-on-one/' + project_name + '/' + base.designer;
                    document.location.href = location_url;
                }
            });
        };

        base.openNewBriefPage = function (e) {
            e.preventDefault();
            e.stopPropagation();
            $.post('/start-one-on-one/createDraft', function (resp) {
                var answer = JSON.parse(resp);
                if ((answer.status) && (answer.id)) {
                    var location_url = '/start-one-on-one/?id=' + answer.id + '&designer=' + base.designer;
                    document.location.href = location_url;
                }
            });
        };

        base.bindHandlers = function () {
            var $document = $(document);
            base.$el.bind('click', base.loadOneOnOneList);
        };

        base.bindmenuupHandlers = function () {
            var $document = $(document);
            base.$close_menuup_link.bind('click', base.hidemenuup);
            base.$send_btn.bind('click', base.sendDesignerHireInvite);
            base.$create_new_btn.bind('click', base.openNewBriefPage);
            $document.on('click', '.overlay', $.proxy(base.hidemenuup, this));
        };

        base.init();

    };
    $.fn.dcHireDesigner = function (option, callback) {
        return this.each(function () {
            (new $.dcHireDesigner(this, option, callback));
        });
    };
})(jQuery);
/* DC invite designer*/
(function ($) {
    $.dcInviteDesigner = function (el, option, callback) {
        /* Setup base elem vars */
        var base = this;

        base.$el = $(el);
        base.el = el;
        base.designer_id = base.$el.attr('data-designer-id');
        base.link = true;
        base.href_link = '/start-one-on-one/';
        base.projects = [];
        base.$el.data("dcInviteDesigner", base);
        /* Option object */
        base.o = option;
        // debugger;

        /*
         * Init
         */
        base.init = function () {
            base.bindHandlers();
        };

        base.setmenuupCenter = function () {
            var left_margin = 0 - Math.round($('.menuup').outerWidth() / 2);
            var top_margin = 0 - Math.round($('.menuup').outerHeight() / 2);
            $('.menuup').css({'margin-left': left_margin, 'margin-top': top_margin});
        };

        base.success = function (result) {
            callback(base.o); // Return elem
        };

        base.stopEventPropagation = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };

        base.loadContestsList = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (dc.user_logged_in == 'true') {
                $.getJSON('/contests/invitemenuup/', {designer_id: base.designer_id}, function (answer) {
                    if (answer.returnMessage) {
                        $.stickr({note: answer.returnMessage, className: 'classic', time: 4000, speed: 200});
                    }
                    if ((answer.status) && (answer.show_menuup)) {
                        base.showProjectSelectionmenuup(answer.data);
                    }
                });
            }
        };

        base.showProjectSelectionmenuup = function (menuup_code) {
            if ($('.overlay').length) {
                //overlay exist on page
            } else {
                $('<div class="overlay"></div>').appendTo('body');
            }
            if ($('#invite_designer_menuup').length) {
                //menuup is exist
                var $menuup = $('#invite_designer_menuup');
                $menuup.replaceWith(menuup_code);
                base.$menuup = $('#invite_designer_menuup');
            } else {
                var $menuup = (base.$menuup = $(menuup_code).appendTo('body'));
            }
            base.bindmenuupHandlers();
            $('#invite_designer_menuup').show(100);
            base.setmenuupCenter();
            $('.overlay').show(100);
        };

        base.hidemenuup = function (e) {
            if (e) {
                e.preventDefault();
            }
            $('#invite_designer_menuup').hide(100);
            $('.overlay').hide(100);
        };

        base.bindHandlers = function () {
            var $document = $(document);
            base.$el.bind('click', base.loadContestsList);
        };

        base.sendDesignerInvitation = function (e) {
            e.preventDefault();
            var contest_id = base.$menuup.find('select').val();
            $.post('/contests/singleInvite/', {
                designer_id: base.designer_id,
                contest_id: contest_id
            }, function (answer) {
                //var answer = JSON.parse(data);
                if (answer.returnMessage) {
                    $.stickr({note: answer.returnMessage, className: 'classic', time: 4000, speed: 200});
                }
                if (answer.status) {
                    base.hidemenuup();
                }
            })
        };

        base.bindmenuupHandlers = function () {
            var $document = $(document);
            var $close_menuup_btn = base.$menuup.find('.close_menuup_btn');
            var $confirm_invite_btn = base.$menuup.find('#send_designer_invitation');
            $close_menuup_btn.bind('click', base.hidemenuup);
            $confirm_invite_btn.bind('click', base.sendDesignerInvitation);
            $document.on('click', '.overlay', $.proxy(base.hidemenuup, this));
        };

        base.init();

    };
    $.fn.dcInviteDesigner = function (option, callback) {

        return this.each(function () {
            (new $.dcInviteDesigner(this, option, callback));
        });
    };
})(jQuery);
/* Comment editing pludin */
(function ($) {
    $.dcCommentEditor = function (el, option, callback) {

        /* Setup base elem vars */
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.$el.data("dcCommentEditor", base);
        /* Option object */
        base.o = option;

        /*
         * Init
         */
        base.init = function () {
            if (!base.$el.hasClass('edite')) {
                base.createHtmlStructure();
                base.bindHandlers();
            }
        };

        base.createHtmlStructure = function () {
            var $comment = (base.$comment = base.$el.find('.comment_text'));
            var comment_html = $comment.html();
            base.old_comment_html = $comment.html();
            var br_reg_ex = new RegExp('<br>', 'g');
            comment_html = comment_html.replace(br_reg_ex, 'here_will_be_new_line_tag');
            $comment.html(comment_html);
            var comment_text = $comment.text();
            var new_line_reg_ex = new RegExp('here_will_be_new_line_tag', 'g');
            comment_text = comment_text.replace(new_line_reg_ex, '\n');

            base.$el.addClass('edite');

            var comment_id = $comment.attr('data-comment-id');
            $comment.html('');
            var $textarea = (base.$textarea = $('<textarea class="dc-comment">' + comment_text.trim() + '</textarea>').appendTo($comment));
            var $save_change = (base.$save_change = $('<div class="save_change"></div>').appendTo($comment));
            var $btn_save = (base.$btn_save = $('<a class="btn-grey save" href="#">' + comment_editing_translation.save_changes + '</a>').appendTo($save_change));
            var $btn_cancel = (base.$btn_cancel = $('<a title="Cancel" class="cancel" href="#">' + comment_editing_translation.cancel + '</a>').appendTo($save_change));
            var $edit_status = (base.$edit_status = $('<span class="info_edit">' + comment_editing_translation.editing_comment + '</span>').prependTo($comment));
        };

        base.postFilesToServer = function () {

        };

        base.clickSaveBtn = function (event) {
            event.stopPropagation();
            event.preventDefault();
            $('html').click();
        };

        base.clickCancelBtn = function (event) {
            event.stopPropagation();
            event.preventDefault();
            base.unbindAllHandlers();
            base.removeAllHtmlStructure();
            base.$comment.html(base.old_comment_html);
        };

        base.unbindAllHandlers = function () {
            $('html').unbind('click');
            base.$comment.unbind('click');
            base.$btn_save.unbind('click');
        };

        base.removeAllHtmlStructure = function () {
            base.$textarea.remove();
            base.$save_change.remove();
            base.$edit_status.remove();
            base.$el.removeClass('edite');
        };

        base.saveEditedComment = function (event) {
            event.stopPropagation();
            event.preventDefault();
            base.unbindAllHandlers();
            var edited_text = base.$textarea.val();
            base.removeAllHtmlStructure();
            if (edited_text != '') {
                edited_text = edited_text.replace(/\r?\n/g, '<br>');
                base.$comment.html(edited_text);
                var post_data = {
                    comment_id: base.o.comment_id,
                    comment: edited_text
                };
                $.post(base.o.post_url, post_data, function (resp) {
                    var answer = JSON.parse(resp);
                    base.success(answer);
                });
            } else {
                base.$comment.html(base.old_comment_html);
            }
        };

        base.success = function (result) {
            callback(result); //
        };

        base.bindHandlers = function () {
            var $document = $(document);
            base.$btn_save.bind('click', base.clickSaveBtn);
            base.$comment.bind('click', function (event) {
                event.stopPropagation();
            });
            base.$btn_cancel.bind('click', base.clickCancelBtn);
            $('html').bind('click', base.saveEditedComment);
        };

        base.init();

    };
    $.fn.dcCommentEditor = function (option, callback) {
        return this.each(function () {
            (new $.dcCommentEditor(this, option, callback));
        });
    };
})(jQuery);
/* Enabling selector with data attribute */
(function ($) {
    /*
     var _dataFn = $.fn.data;
     $.fn.data = function(key, val){
     if (typeof val !== 'undefined'){
     $.expr.attrHandle[key] = function(elem){
     return $(elem).attr(key) || $(elem).data(key);
     };
     }
     return _dataFn.apply(this, arguments);
     };*/

    $.fn.designerLivesearch = function (params) {
        var defaults = {
            designers: [],
            max_results_items: 10,
            active_designers: [],
            searched_designers: [],
            placeholder: 'Filter designers'
        };
        options = $.extend({}, defaults, params);

        this.id = this.attr('id');
        this.init_status = false;

        this.init = function () {
            this.addClass('select_designer');
            this._buildHtmlStructure();
            this.setDefaults();
            this.bindHandlers();
            this.init_status = true;
        };

        this.setDefaults = function () {
            this.active_designers = $.extend([], options.active_designers);
            this.designers = $.extend([], options.designers);
            this.searched_designers = $.extend([], options.searched_designers);
            this.designers = $.extend([], this.searched_designers);
            this._updateSearchResults();
        };

        this._buildHtmlStructure = function () {
            this.html('');
            var bordered_wrapper = (this.bordered_wrapper = $('<div class="bordered_wrapper"></div>').appendTo(this))
            var selected_box = (this.selected_box = $('<div class="selected_box"></div>').appendTo(bordered_wrapper));
            var selected_list = (this.selected_list = $('<ul class="selected_list"></ul>').appendTo(selected_box));
            var select_arrow = (this.select_arrow = $('<i class="select_arrow"></i>').appendTo(selected_box));
            var search_box = (this.search_box = $('<div class="search_box"></div>').appendTo(bordered_wrapper));
            var input_box = (this.input_box = $('<div class="input_box"></div>').appendTo(search_box));
            var search_input = (this.search_input = $('<input type="text" class="search_input"/>').appendTo(input_box));
            var results_box = (this.results_box = $('<div class="results_box"></div>').appendTo(search_box));
            var results_list = (this.results_list = $('<ul class="results_list"></ul>').appendTo(results_box));
            var search_list = (this.search_list = $('<ul class="search_list"></ul>').appendTo(results_box));
            var hidden_input = (this.hidden_input = $('<input type="hidden" value="" id="selected_designers_list"/>').appendTo(this));
        };

        this._sliceSearchList = function () {
            var active_count = this.active_designers.length;
            var max_search_count = ((options.max_results_items - active_count) > 0) ? (options.max_results_items - active_count) : 0;
            var search_count = this.searched_designers.length;
            var slice_count = (search_count > max_search_count) ? max_search_count : search_count;
            this.searched_designers = this.searched_designers.slice(0, slice_count);
        };

        this.isInit = function () {
            var init_status = this.init_status;
            return init_status;
        };

        this._reloadSelectedList = function () {
            var that = this;
            this.selected_list.html('');
            if (this.active_designers.length > 0) {
                $.each(this.active_designers, function (i, item) {
                    var searchItem = $('<li data-userid="' + item.id + '"></li>');
                    var name = $('<span>' + item.username + '<span/>').appendTo(searchItem);
                    var remove_link = $('<a href="#" title="remove from list" class="remove_link">remove from list</a>').appendTo(searchItem);
                    searchItem.appendTo(that.selected_list);
                });
            } else {
                var placeholder = $('<li class="placeholder">' + options.placeholder + '</li>');
                placeholder.appendTo(that.selected_list);
            }
        };

        this._reloadSearchList = function () {
            var that = this;
            //get slice count
            var active_count = this.active_designers.length;
            var max_search_count = ((options.max_results_items - active_count) > 0) ? (options.max_results_items - active_count) : 0;
            var search_count = this.searched_designers.length;
            var slice_count = (search_count > max_search_count) ? max_search_count : search_count;
            var srch_string = this.srch_string;

            this.search_list.html('');
            $.each(this.searched_designers, function (i, item) {
                if (i < slice_count) {
                    var searchItem = $('<li data-userid="' + item.id + '"></li>');
                    var checkbox = $('<input type="checkbox" id="' + item.username + '_checkbox" value="' + item.username + '"/>').appendTo(searchItem);
                    var user_name = (item.username.indexOf(srch_string) != -1) ? item.username.replace(srch_string, '<b>' + srch_string + '</b>') : item.username;
                    var user_text = (item.favorite) ? '<span class="favorite_designer">' + user_name + '</span>' : user_name;
                    var label = $('<label for="' + item.username + '_checkbox">' + user_text + ' (' + item.entries_count + ')</label>').appendTo(searchItem);
                    searchItem.appendTo(that.search_list);
                }
            });
        };

        this._reloadResultsList = function () {
            var that = this;
            this.results_list.html('');
            $.each(this.active_designers, function (i, item) {
                var searchItem = $('<li data-userid="' + item.id + '"></li>');
                var checkbox = $('<input type="checkbox" id="' + item.username + '_checkbox" value="' + item.username + '" checked="checked"/>').appendTo(searchItem);
                var user_text = (item.favorite) ? '<span class="favorite_designer">' + item.username + '</span>' : item.username;
                var label = $('<label for="' + item.username + '_checkbox">' + user_text + ' (' + item.entries_count + ')</label>').appendTo(searchItem);
                searchItem.appendTo(that.results_list);
            });
        };

        this._updateSearchResults = function () {
            this._sortActiveDesigners();
            this._sortSearchedDesigners();
            this._reloadSearchList();
            this._reloadResultsList();
            this._reloadSelectedList();
            this._getAllSelectedIds();
        };

        this._getAllSelectedIds = function () {
            var ids_array = [];
            _.each(this.active_designers, function (designer) {
                ids_array.push(designer.username);//change from id to username for new filter params
            });
            this.hidden_input.val(ids_array.join()).trigger('change');
        },

            this._sortActiveDesigners = function () {
                var input_array = this.active_designers;
                var favorites_array = _.where(input_array, {favorite: true});
                var other_array = _.where(input_array, {favorite: false});
                favorites_array = _.sortBy(favorites_array, function (obj) {
                    return -obj.entries_count
                });
                other_array = _.sortBy(other_array, function (obj) {
                    return -obj.entries_count
                });
                var sorted_array = favorites_array.concat(other_array);
                this.active_designers = sorted_array;
            },

            this._sortSearchedDesigners = function () {
                var input_array = this.searched_designers;
                var favorites_array = _.where(input_array, {favorite: true});
                var other_array = _.where(input_array, {favorite: false});
                favorites_array = _.sortBy(favorites_array, function (obj) {
                    return -obj.entries_count
                });
                other_array = _.sortBy(other_array, function (obj) {
                    return -obj.entries_count
                });
                var sorted_array = favorites_array.concat(other_array);
                this.searched_designers = sorted_array;
            },

            this.get_activeDesigners = function () {
                return this.active_designers;
            };

        this._addDesignToActive = function (e) {
            var user_id = $(e.target).parent('li').attr('data-userid');
            var selected_designer = _.findWhere(this.designers, {id: user_id});

            //remove selected designer from search array
            this.searched_designers = _.without(this.searched_designers, selected_designer);

            //remove selected designer from all designers array
            this.designers = _.without(this.designers, selected_designer);

            this.active_designers.push(selected_designer);
            this._updateSearchResults();
        };

        this._removeDesignFromActive = function (e) {
            e.preventDefault();
            var user_id = $(e.target).parent('li').attr('data-userid');

            var selected_designer = _.findWhere(this.active_designers, {id: user_id});

            this.active_designers = _.without(this.active_designers, selected_designer);

            this.designers.push(selected_designer);
            this.search_input.val('');
            this.srch_string = '';
            this._searchInDesigners('');
            this._updateSearchResults();
        };

        this.removeAllDesignersFromActive = function (e) {
            if (e) e.preventDefault();
            var that = this;
            this.selected_list.find('li').each(function (i, list_element) {
                var user_id = $(list_element).attr('data-userid');
                if (user_id) {
                    var selected_designer = _.findWhere(that.active_designers, {id: user_id});
                    that.active_designers = _.without(that.active_designers, selected_designer);
                    that.designers.push(selected_designer);
                }
            })
            this.search_input.val('');
            this.srch_string = '';
            this._searchInDesigners('');
            this._updateSearchResults();
        };

        this._startSearching = function (event) {
            var srch_string = $(event.target).val();
            this.srch_string = srch_string;
            this._searchInDesigners(srch_string);
        };

        this._searchInDesigners = function (s_string) {
            var selected_designers = $.grep(this.designers, function (e) {
                return (e.username.toLowerCase().indexOf(s_string.toLocaleLowerCase()) != -1);
            });
            this.searched_designers = selected_designers;
            this._updateSearchResults();
        };

        this._toggleActiveClass = function (e) {
            this.toggleClass('active');
        };

        this.removeActive = function () {
            this.removeClass('active');
        };

        this.stopProp = function (e) {
            e.stopPropagation();
        };

        this.bindHandlers = function () {
            var $document = $(document);
            this.checkbox_on_search = '#' + this.id + ' .search_list li input';
            this.checkbox_on_results = '#' + this.id + ' .results_list li input';
            this.remove_link = '#' + this.id + ' .remove_link';
            this.arrow = '#' + this.id + ' i.select_arrow';
            var placeholder = '#' + this.id + ' .placeholder';
            $document.on('change', this.checkbox_on_search, $.proxy(this._addDesignToActive, this));
            $document.on('change', this.checkbox_on_results, $.proxy(this._removeDesignFromActive, this));
            $document.on('click', this.remove_link, $.proxy(this._removeDesignFromActive, this));
            $document.on('keyup', this.search_input, $.proxy(this._startSearching, this));
            $document.on('click', this.arrow, $.proxy(this._toggleActiveClass, this));
            $document.on('click', placeholder, $.proxy(this._toggleActiveClass, this));
            $document.on('click', '#' + this.id, $.proxy(this.stopProp, this));
            $document.on('click', 'html', $.proxy(this.removeActive, this));
            var that = this;
        }

        return this;

    };
    // from serialize to JSON obj
    $.fn.serializeFormJSON = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);
var getNewLoginCaptcha = function (post_data, callback) {
    $.post('/auth/login/captcha/refresh/1', post_data, function (data) {
        var answer = JSON.parse(data);
        callback(answer);
    });
}
/* Check is element in visible part of window*/
var isScrolledIntoView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
/* Check is element hide from visible part of window*/
var isScrolledFromView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return (elemBottom <= docViewTop);
}
/* Calculate time left */
$.fn.time_left = function () {
    var parse_date = function (date) {
        var day_left = Math.floor(date / (24 * 60 * 60));
        var hours_left = Math.floor((date - (day_left * 24 * 60 * 60)) / (60 * 60));
        var minutes_left = Math.floor((date - (day_left * 24 * 60 * 60) - (hours_left * 60 * 60)) / 60);
        var seconds_left = Math.floor(date - (day_left * 24 * 60 * 60) - (hours_left * 60 * 60) - (minutes_left * 60));

        var days = (day_left > 0) ? day_left + onsite_translations.time_left['d'] : '';
        var hours = (hours_left > 0) ? hours_left + onsite_translations.time_left['h'] : '';
        var minutes = (minutes_left > 0) ? minutes_left + onsite_translations.time_left['m'] : '';
        var seconds = (seconds_left > 0) ? seconds_left + onsite_translations.time_left['s'] : '';

        var string_days = days + ' ' + hours;
        var string_hours = hours + ' ' + minutes;
        var string_minutes = minutes + ' ' + seconds;
        var string_seconds = seconds;

        var string = (day_left > 0) ? string_days : (hours_left > 0) ? string_hours : (minutes_left > 0) ? string_minutes : string_seconds;
        return string;
        delete day_left, hours_left, minutes_left, seconds_left, days, hours, minutes, seconds, string_days, string_hours, string_minutes, string_seconds, string;
    };

    var calculate_left = function (pub_date, period) {
        var pub_time, current_time, time_spent, spent_data, time_left, left_data, period_in_unix, answer;
        pub_time = new Date(+pub_date * 1000);
        current_time = new Date();
        time_spent = (current_time - pub_time) / 1000;
        period_in_unix = (+period) * 24 * 60 * 60;
        time_left = (period_in_unix - time_spent);
        spent_data = (time_left > 0) ? parse_date(time_spent) : period + 'days';
        left_data = (time_left > 0) ? parse_date(time_left) : 'No time!';
        answer = (time_left < 0) ? false : left_data;
        return answer;
        delete pub_time, current_time, time_spent, spent_data, time_left, left_data, period_in_unix, answer;
    };

    $.each(this, function (i, item) {
        var pub_date = $(item).attr('data-published-on');
        var period = $(item).attr('data-period');

        var time_data = calculate_left(pub_date, period);
        time_data = (time_data) ? time_data : _t('contests', 'Expired');
        $(item).html(time_data);

        var timer = setInterval(function () {
            time_data = calculate_left(pub_date, period);
            time_data = (time_data) ? time_data : _t('contests', 'Expired')
            $(item).html(time_data);
            if (!time_data) {
                clearInterval(timer);
            }
            ;
        }, 1000);
    });
};

function _t(group, name) {
    return (_translations && _translations[group] && _translations[group][name]) ? _translations[group][name] : name;
};

$.fn.phoneActivityUpdater = function () {

    function getMonday(d) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? 1 : 8); // adjust when day is sunday
        var monday = new Date(d.setDate(diff));
        monday.setHours(1, 0, 0);
        return monday;
    }

    function getDifference(firstDay, secondDay) {
        var delta = Math.abs(firstDay.getTime() - secondDay.getTime()) / 1000;

        var days_left = Math.floor(delta / 86400);
        delta -= days_left * 86400;

        var hours_left = Math.floor(delta / 3600) % 24;
        delta -= hours_left * 3600;

        var minutes_left = Math.floor(delta / 60) % 60;
        delta -= minutes_left * 60;

        var seconds_left = delta % 60;

        var days = (days_left > 0) ? days_left + 'd' : '';
        var hours = (hours_left > 0) ? hours_left + 'h' : '';
        var minutes = (minutes_left > 0) ? minutes_left + 'm' : '';
        var seconds = (seconds_left > 0) ? seconds_left + 's' : '';

        var string_days = days + ' ' + hours;
        var string_hours = hours + ' ' + minutes;
        var string_minutes = minutes + ' ' + seconds;
        var string_seconds = seconds;

        var string = (days_left > 0) ? string_days : (hours_left > 0) ? string_hours : (minutes_left > 0) ? string_minutes : string_seconds;
        return string;
        delete days_left, hours_left, minutes_left, seconds_left, days, hours, minutes, seconds, string_days, string_hours, string_minutes, string_seconds, string;
    }

    function getPhoneStatus() {
        var offset = -5.0;

        var clientDate = new Date();
        var utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

        var server_date = new Date(utc + (3600000 * offset));

        var server_day = server_date.getDay();
        var is_weekend = ((server_day == 0) || (server_day == 6));
        var server_hours = server_date.getHours();
        var is_offline_hour = !((server_hours >= 1) && (server_hours < 19));

        var is_offline = is_weekend || is_offline_hour;

        var start_online_date = (server_hours > 19) ? new Date(server_date.getTime() + 86400000) : new Date(server_date);

        start_online_date.setHours(1, 0, 0);

        var closest_monday = getMonday(server_date);

        var time_leff_to_online = (is_weekend || (server_day === 5 && server_hours > 19)) ? getDifference(closest_monday, server_date) : (is_offline_hour) ? getDifference(start_online_date, server_date) : '';

        return {offline: is_offline, time_left: time_leff_to_online};
    }

    $.each(this, function (i, item) {
        var timer = setInterval(function () {
            var phone_status = getPhoneStatus();
            $(item).removeClass('open closed');
            if (phone_status.offline) {
                $(item).addClass('closed');
                $(item).find('#online_in').text(phone_status.time_left);
            } else {
                $(item).addClass('open');
            }
            if (typeof (phone_status) == 'undefined') {
                clearInterval(timer);
            }
            ;
        }, 1000);
    });

};
var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};
$.fn.unix_time_convert = function () {
    $.each(this, function (i, item) {
        var unix_date = $(item).attr('data-unixdate');
        var date_format = $(item).attr('data-dateformat') || '';
        var normal_date = new Date(unix_date * 1000);
        $(item).html(normal_date.format(date_format));
    });
};

// get cookie by name if exist, else undefined
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// set cookie val
function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }
    document.cookie = updatedCookie;
}

// delete a cookie by name
function deleteCookie(name, path) {
    setCookie(name, "123", {expires: new Date(), path: (path) ? path : '/'})
}

/* Class for updated count in slider */
var updateCount = function (params) {

    this.params = $.extend({
        conteinerId: 'inspired',
        countClass: 'count',
        startCount: 1,
        maxCount: 5,
        timeInterval: 500,
        timeDelay: 4000
    }, params)

    var newInterval = null;

    this.currentCount = this.params.startCount;

    this.incrementCount = function () {
        this.currentCount = (this.currentCount >= this.params.maxCount) ? this.params.startCount : ++this.currentCount;
    }

    this.showCount = function () {
        $('#' + this.params.conteinerId + ' .' + this.params.countClass).text(this.currentCount);
    }

    this.checkCount = function () {
        if (this.currentCount >= this.params.maxCount) {
            this.stopAction();
            var self = this;
            setTimeout(function () {
                self.startAction()
            }, this.params.timeDelay);
        }
    }

    this.startAction = function () {
        var self = this;
        self.showCount();
        newInterval = setInterval(function () {
            self.incrementCount();
            self.showCount();
            self.checkCount();
        }, this.params.timeInterval)
    }

    this.stopAction = function () {
        clearInterval(newInterval);
    }


    /* Class for growing tower in slider */
}
var tower = function (params) {

    this.params = $.extend({
        conteinerId: 'tower',
        scaleClass: 'scale',
        startHeight: 77,
        timeInterval: 10000,
        timeDelay: 4000
    }, params)

    var newInterval;

    this.currentHeight = this.params.startHeight;

    this.decrementHeight = function () {
        this.currentHeight = (this.currentHeight <= 0) ? this.params.startHeight : --this.currentHeight;
    }

    this.setHeight = function () {
        $('#' + this.params.conteinerId + ' .' + this.params.scaleClass).height(this.currentHeight + '%');
    }

    this.checkHeight = function () {
        if (this.currentHeight <= 0) {
            this.stopAction();
            var self = this;
            setTimeout(function () {
                self.startAction()
            }, this.params.timeDelay);
        }
    }

    this.startAction = function () {
        var self = this;
        self.setHeight();
        newInterval = setInterval(function () {
            self.decrementHeight();
            self.setHeight();
            self.checkHeight();
        }, (this.params.timeInterval / this.params.startHeight))
    }

    this.stopAction = function () {
        clearInterval(newInterval);
    }
}
/* Add functionality to top slider */
var pumpSlider = function (sliderObj) {

    this.nextLinkClass = '.next_slide';
    this.sliderObj = sliderObj;

    this.bindHandlers = function () {
        var $document = $(document);
        $document.on('click', this.nextLinkClass, $.proxy(this.onNextClick, this));
    }
    this.onNextClick = function () {
        this.sliderObj.swipeTo(this.sliderObj.activeIndex + 1, 1000);
    }
}
/* Add functionality to main page carousel */
var pumpCarousel = function (carouselObj, ItemSlider) {

    this.carouselDetailsContainer = '.carousel_item';
    this.closeDetaisLink = '.close_details';
    this.carouselContainer = '.carousel';
    this.scrollLeftClass = '.scroll_left';
    this.scrollRightClass = '.scroll_right';
    this.slideLeftClass = '.slide_left';
    this.slideRightClass = '.slide_right';

    var activeSlideIndex = 0;

    this.carouselObj = carouselObj;
    this.ItemSliderObj = ItemSlider;

    var timer = null;
    var speed = this.carouselObj.params.speed;

    /**
     * Инициализация расширенной карусели
     */
    this.init = function () {
        this.bindHandlers();
        $(this.carouselDetailsContainer).slideUp(10);
    }
    /**
     * Установка активного индекса
     */
    this.setActiveIndex = function (index) {
        var max_index = $(this.carouselContainer).find('.item').length - 1;
        activeSlideIndex = (index > max_index) ? max_index : index;
    }
    /**
     * Устанавливаем активные слайды в карусели и слайдере
     */
    this.updatePositions = function () {
        this.highlightElement();
        this.goToDetailsItem();
    }
    /**
     * Скрытие слайдера с детальной информацией
     */
    this.hideCarouselDetails = function (e) {
        if (e) e.preventDefault();
        this.offViewMode();
        $(this.carouselContainer).find('.active').removeClass('active');
        $(this.carouselDetailsContainer).slideUp(1000);
    }
    /**
     * Показ слайдера с детальной информацией
     */
    this.loadItemData = function (e) {
        if (e) e.preventDefault();
        this.onViewMode();
        var active_element = $(e.currentTarget);
        activeSlideIndex = active_element.attr('data-item');
        $(this.carouselDetailsContainer).slideDown(1000);
        this.ItemSliderObj.resizeFix();
        this.ItemSliderObj.reInit();
        this.updatePositions();
    }
    /**
     * Включение View mode в главной карусели
     */
    this.onViewMode = function () {
        $(this.carouselContainer).addClass('view_mode');
        var max_height = 715;
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            max_height = max_height;
        }
        if (window.innerHeight > 715) {
            $('html, body').animate({scrollTop: $(this.carouselContainer).offset().top}, 800);
        } else {
            $('html, body').animate({scrollTop: ($(this.carouselContainer).offset().top + $(this.carouselContainer).height())}, 800);
        }

    }
    /**
     * Подсветка активного элемента
     */
    this.highlightElement = function () {
        $(this.carouselContainer).find('.active').removeClass('active');
        $('.item[data-item=' + activeSlideIndex + ']').addClass('active');
        var parent_slide = $(this.carouselContainer).find('.active').parents('.slide');
        if (parent_slide[0]) {
            var slide_index = $(parent_slide)[0].index();
            this.carouselObj.swipeTo(slide_index);
        }
    }
    /**
     * Выключение View mode в главной карусели
     */
    this.offViewMode = function () {
        $(this.carouselContainer).removeClass('view_mode');
    }
    /**
     * Слайдим детальную информацию до указанного индекса
     */
    this.goToDetailsItem = function () {
        this.ItemSliderObj.swipeTo(activeSlideIndex, 1000);
        //hide left or right scroll arrows if first or last slide is active
        var max_index = $(this.carouselContainer).find('.item').length - 1;
        if (activeSlideIndex == max_index) {
            $(this.slideRightClass).hide();
        } else {
            $(this.slideRightClass).show();
        }
        if (activeSlideIndex == 0) {
            $(this.slideLeftClass).hide();
        } else {
            $(this.slideLeftClass).show();
        }
    }
    /**
     * Слайдим детальную инфу влево
     */
    this.slideLeft = function (e) {
        if (e) e.preventDefault();
        activeSlideIndex = (activeSlideIndex > 0) ? --activeSlideIndex : 0;
        this.updatePositions();
    }
    /**
     * Слайдим детальную инфу вправо
     */
    this.slideRight = function (e) {
        if (e) e.preventDefault();
        this.setActiveIndex(++activeSlideIndex);
        this.updatePositions();
    }
    /**
     * Навешиваем обработчики собыий
     */
    this.bindHandlers = function () {
        var $document = $(document);
        $document.on('mouseenter', this.scrollLeftClass, $.proxy(this.scrollLeft, this));
        $document.on('mouseenter', this.scrollRightClass, $.proxy(this.scrollRight, this));
        $document.on('click', this.slideLeftClass, $.proxy(this.slideLeft, this));
        $document.on('click', this.slideRightClass, $.proxy(this.slideRight, this));
        $document.on('mouseleave', this.scrollRightClass, $.proxy(this.stopScrolling, this));
        $document.on('mouseleave', this.scrollLeftClass, $.proxy(this.stopScrolling, this));
        $document.on('click', this.carouselContainer + ' .item', $.proxy(this.loadItemData, this));
        $document.on('click', this.closeDetaisLink, $.proxy(this.hideCarouselDetails, this));
    }
    /**
     * Скролим главную карусель влево
     */
    this.scrollLeft = function () {
        var self = this;
        this.carouselObj.swipePrev();
        timer = setTimeout(function () {
            self.scrollLeft()
        }, speed);
    }
    /**
     * Скролим главную карусель вправо
     */
    this.scrollRight = function () {
        var self = this;
        this.carouselObj.swipeNext();
        timer = setTimeout(function () {
            self.scrollRight()
        }, speed - 500);
    }
    /**
     * Останавливаем скролл главной карусели
     */
    this.stopScrolling = function () {
        clearTimeout(timer);
    }
}

var LoggedMobileMenuView = Backbone.View.extend({

    el: '.logged-menu',

    events: {
        'click .mmenu-ico-2': 'menuToggleActive',
        'click #hide_mmenu': 'menuToggleActive',
        'click #category_link': 'openCategoryMenu',
        'click .logged > li .with_sub': 'showSubMenu',
        'click #back_link': 'hideSubMenu',
        'click div.sub-menu li.sub-second > div > p': 'showToggleMenu',
    },

    menuToggleActive: function (e) {
        e.preventDefault();
        $(this.el).toggleClass('active');
        $('body').toggleClass('open-menu');
    },

    showToggleMenu: function (e) {
        e.preventDefault();
        var $clicked_link = $(e.currentTarget);
        var $menu_item = $clicked_link.closest('li');
        $($menu_item).toggleClass('show_sub');
        $(this.el).toggleClass('show_sub');
    },

    openCategoryMenu: function () {
        var that = this;
        $(this.el).animate({width: '100%'}, 10, function () {
            $(that.el).find('.categories_menu').toggle();
        });
    },

    showSubMenu: function (e) {
        e.preventDefault();
        var $clicked_link = $(e.currentTarget);
        var $menu_item = $clicked_link.closest('li');

        $(this.el).find('li').not($menu_item).removeClass('active')
        $menu_item.toggleClass('active')
    },


    hideSubMenu: function (e) {
        e.preventDefault();
        $(this.el).find('li.active').removeClass('active');
        $(this.el).find('li.hide').removeClass('hide');
    }

});
var MobileMenuView = Backbone.View.extend({

    el: '.mobile_menu',

    events: {
        'click .mmenu-ico': 'menuToggleActive',
        'click #hide_mmenu': 'menuToggleActive',
        'click #category_link': 'openCategoryMenu'
    },

    menuToggleActive: function (e) {
        if (e) {
            e.preventDefault()
        }
        $(this.el).toggleClass('active');
        $('body').toggleClass('open-menu');
    },

    openCategoryMenu: function (e) {
        if (e) {
            e.preventDefault()
        }
        var that = this;
        if ($(window).width() < 1025) {
            $(this.el).animate({width: '100%'}, 10, function () {
                $(that.el).find('.categories_menu').toggle();
            });
        }
    }

});
var CatogoriesMenuView = Backbone.View.extend({

    el: '.categories_menu',

    events: {
        'click #back_link': 'hideMenu',
        'click .category_item>a': 'showSubCategories'
    },

    hideMenu: function (e) {
        if (e) {
            e.preventDefault()
        }
        var $active_cat = $(this.el).find('.category_item.active');
        if ($active_cat.length > 0) {
            //one of parent category is opened
            $(this.el).find('.category_item').removeClass('hide active');
        } else {
            //hide categories menu
            $(this.el).toggleClass('active');
            var that = this;
            $(this.el).animate({width: '0'}, 10, function () {
                $(that.el).siblings('.mobile_menu').css({overflow: 'visible'});
                $(that.el).siblings('.mobile_menu').animate({width: '290px'}, 200, function () {
                    $(that.el).siblings('.mobile_menu').find('.mmenu-ico').show();
                })
            });
        }
    },

    showSubCategories: function (e) {
        if (e) {
            e.preventDefault()
        }
        var $clicked_link = $(e.currentTarget);
        var $clicked_item = $clicked_link.closest('li');
        var $list = $clicked_item.closest('ul');
        $list.find('.category_item').not($clicked_item).removeClass('active');
        $clicked_item.toggleClass('active');

        // $(this.el).find('li').not($menu_item).removeClass('active')
        // $menu_item.toggleClass('active')
    }

});

var TopMenuView = Backbone.View.extend({

    el: '#menu',

    events: {
        'click .has_sub:not(.active)': 'showSub',
        'click .sub_menu .close_btn': 'hideSub',
        'click .menu_overlay': 'stopBubbling'
    },

    initialize: function () {
        var that = this;
        try {
            $('html').click(function () {
                that.hideSub()
            });
        } catch (e) {

        }
    },

    showSub: function (e) {
        var clicked_item = e.currentTarget;
        $(clicked_item).addClass('active');
        return false;
    },

    hideSub: function (e) {
        $(this.el).find('.has_sub').removeClass('active');
        if (e) {
            return false;
        }
    },

    stopBubbling: function (e) {
        return false;
    }
});

var LoginBlockView = Backbone.View.extend({

    el: '#signup_form',

    events: {
        'keypress .login input': 'hideSocial',
        'click #show_social': 'showSocial',
        'blur .email input[type="text"]': 'blurEmail',
        'keyup .password input[type="password"]': 'checkPassword',
        'keyup .email input.success': 'blurEmail',
        'keyup .email input.error': 'blurEmail',
        'keypress input': 'formValidate',
        'click input[type="radio"]': 'formValidate',
        'click label': 'formValidate'
    },

    initialize: function () {

    },

    hideSocial: function () {
        $(this.el).find('.social_btns').slideUp(800);
        $(this.el).find('.email_sign').slideUp(200);
        $(this.el).find('.social_sign').slideDown(200);
    },

    showSocial: function (e) {
        if (e) {
            e.preventDefault()
        }
        ;
        $(this.el).find('.social_btns').slideDown(800);
        $(this.el).find('.email_sign').slideDown(200);
        $(this.el).find('.social_sign').slideUp(200);
    },

    blurEmail: function () {
        var email_input = $(this.el).find('.email input[type="text"]');
        var email_val = email_input.val();
        var format_error_msg = $(this.el).find('.dog_symbol');
        if (validateEmail(email_val)) {
            email_input.removeClass().addClass('success');
            format_error_msg.slideUp(300);
        } else {
            email_input.removeClass().addClass('error');
            format_error_msg.slideDown(300);
        }
        this.formValidate();
    },

    checkPassword: function () {
        var pass_input = $(this.el).find('.password input[type="password"]');
        var pass_val = pass_input.val();
        var short_error_msg = $(this.el).find('.short_pass');
        if (pass_val.length < 6) {
            short_error_msg.slideDown(200);
            pass_input.removeClass().addClass('error');
        } else {
            short_error_msg.slideUp(200);
            pass_input.removeClass().addClass('success');
        }
        ;
        this.formValidate();
    },

    formValidate: function () {
        var form = $(this.el);
        var array_data = form.serializeArray();
        var has_empty = false;
        _.each(array_data, function (item, i) {
            var empty_item = (item.value == '');
            has_empty = (has_empty || empty_item);
        });
        var errors_count = $(this.el).find('input.error').length;
        var string_data = JSON.stringify(array_data);
        var submit_button = $(this.el).find('button#sing_btn');
        if ((array_data.length > 2) && (errors_count == 0) && (!has_empty)) {
            submit_button.removeClass('grey').addClass('green');
        } else {
            submit_button.removeClass('green').addClass('grey')
        }
    }

});
var QuickLoginView = Backbone.View.extend({

    el: '#quick_login_menuup',

    menuup_html: '',

    events: {
        'click .close_menuup': 'hidemenuup',
        'click #quick_login_btn': 'tryToLogin'
    },

    capchaShowed: false,

    initialize: function () {
        var that = this;
        $('#quick_login_link').on('click', function (e) {
            e.preventDefault();
            if (that.menuup_html == '') {
                that.loadmenuupHtml();
            } else {
                that.render();
            }
        });
        // $('.quick_login_link').on('click', function(e){
        //     e.preventDefault();
        //     if (that.menuup_html==''){
        //         that.loadmenuupHtml();
        //     } else {
        //         that.render();
        //     }
        // });
    },

    loadmenuupHtml: function () {
        var that = this;
        $.get('/auth/login/menuup', function (data) {
            that.menuup_html = data;
            that.render();
        })
    },

    render: function () {
        $(this.el).html(this.menuup_html);
        $(this.el).show();
        this.setmenuupCenterPosition();
        var that = this;
        $('.overlay').fadeIn(300).click(function () {
            that.hidemenuup();
        });
        $('body').css('overflow', 'hidden');
        $(this.el).find('.username_input').focus();
    },

    hidemenuup: function (e) {
        if (e) {
            e.preventDefault()
        }
        ;
        $(this.el).hide();
        $('.overlay').fadeOut(400);
        $('body').css('overflow', 'auto');
    },

    setmenuupCenterPosition: function (with_animation) {
        var show_animation = with_animation || false;
        var left_margin = 0 - Math.round($(this.el).find('.menuup').outerWidth() / 2);
        var top_margin = 0 - Math.round($(this.el).find('.menuup').outerHeight() / 2);
        if (show_animation) {
            $(this.el).find('.menuup').animate({'margin-left': left_margin, 'margin-top': top_margin});
        } else {
            $(this.el).find('.menuup').css({'margin-left': left_margin, 'margin-top': top_margin});
        }
    },

    tryToLogin: function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation()
        }
        ;
        var that = this;
        var $form = $(e.currentTarget).closest('form');
        var form_data = $form.serializeFormJSON();
        var post_data = {LoginForm: form_data};
        var user_info = dc;
        $(this.el).find('.error').removeClass('error');
        $(this.el).find('.error_text').remove();
        $.post('/login', post_data, function (data) {
            var answer = JSON.parse(data);
            if (answer.status) {
                that.hidemenuup();
                location.reload();
            } else if (answer.captcha && !that.capchaShowed) {
                $('#google_recaptcha').empty();
                loadGoogleCaptcha('google_recaptcha');
                that.capchaShowed = true;
                /*
                 getNewLoginCaptcha(post_data, function(capcha_info){
                 $form.find('.img_captcha').html('<img src="'+capcha_info.url+'">');
                 $form.find('.captcha_box').show();
                 });
                 */
            }
            ;
            if (answer.errors) {
                if (answer.errors.mustRevalidate) {
                    that.enableRevalidatePass();
                } else {
                    that.showErrors(answer.errors);
                }
            }
        });
    },

    showErrors: function (errors) {
        var that = this;
        _.each(errors, function (error_array, row_name) {
            _.each(error_array, function (error_text) {
                var $wrong_input = $(that.el).find('.' + row_name + '_input');
                $wrong_input.addClass('error');
                $('<p class="error_text"><span class="text_red">' + error_text + '</span></p>').insertAfter($wrong_input);
            })
        });
        $(this.el).find('.menuup').addClass('shake');
        $(this.el).find('.menuup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('shake');
        });
    },

    enableRevalidatePass: function () {
        $(this.el).find('.email').slideUp(300);
        $(this.el).find('.password').slideUp(300);
        var user_name = $(this.el).find('.username_input').val();
        ;
        $(this.el).find('#old_email').text(user_name);
        $(this.el).find('.old_email').slideDown(400);
        $(this.el).find('.new_pass_block').slideDown(400);
        $(this.el).find('#mustRevalidate').val('1');
        var that = this;
        setTimeout(function () {
            that.setmenuupCenterPosition(true);
        }, 401);
    }

});
var NotificationmenuupView = Backbone.View.extend({

    el: '#site_notification_menuup',

    menuup_html: '',

    events: {
        'click .close_menuup': 'hidemenuup',
        'click .close_menuup_btn': 'hidemenuup'
    },

    initialize: function () {
        var that = this;
        var notification_cookie = getCookie('show_notification');
        if (typeof (notification_cookie) != 'undefined') {
            if (that.menuup_html == '') {
                that.loadmenuupHtml();
            } else {
                that.render();
            }
        }
    },

    loadmenuupHtml: function () {
        var that = this;
        $.get('/menuup/notification', function (data) {
            that.menuup_html = data.content;
            that.render();
        })
    },

    render: function () {
        var notification_cookie = getCookie('show_notification');
        $(this.el).html(this.menuup_html);
        $(this.el).find('#notification_text').text(notification_cookie.replace(/\+/g, ' '));
        $(this.el).show();
        this.setmenuupCenterPosition();
        var that = this;
        $('.overlay').fadeIn(300).click(function () {
            that.hidemenuup();
        });
        $('body').css('overflow', 'hidden');
        $(this.el).find('.username_input').focus();
    },

    hidemenuup: function (e) {
        if (e) {
            e.preventDefault()
        }
        ;
        $(this.el).hide();
        $('.overlay').fadeOut(400);
        $('body').css('overflow', 'auto');
        deleteCookie('show_notification');
    },

    setmenuupCenterPosition: function (with_animation) {
        var show_animation = with_animation || false;
        var left_margin = 0 - Math.round($(this.el).find('.menuup').outerWidth() / 2);
        var top_margin = 0 - Math.round($(this.el).find('.menuup').outerHeight() / 2);
        if (show_animation) {
            $(this.el).find('.menuup').animate({'margin-left': left_margin, 'margin-top': top_margin});
        } else {
            $(this.el).find('.menuup').css({'margin-left': left_margin, 'margin-top': top_margin});
        }
    }
});
var RequestConsultationView = Backbone.View.extend({

    el: '#request_consultation_menuup',

    menuup_html: '',

    events: {
        'click .close_menuup_btn': 'hidemenuup',
        'change .check input': 'changeContactMethod',
        'click .more .more-options': 'showMoreOptions',
        'change input': 'checkRequiredValues',
        'keyup input': 'checkRequiredValues',
        'click #send_request': 'submitRequest'
    },

    initialize: function () {
        var that = this;
        $('.request_consultation_link').on('click', function (e) {
            e.preventDefault();
            if (that.menuup_html == '') {
                that.loadmenuupHtml();
            } else {
                that.render();
            }
        })
    },

    loadmenuupHtml: function () {
        var that = this;
        $.get('/menuup/requestConsultation', function (data) {
            that.menuup_html = data;
            that.render();
        })
    },

    render: function () {
        $(this.el).html(this.menuup_html);
        $(this.el).show();
        this.setmenuupCenterPosition();
        var that = this;
        $('.overlay').fadeIn(300).click(function () {
            that.hidemenuup();
        });
        $('body').css('overflow', 'hidden');
        loadGoogleCaptcha('grecaptcha_box_consultation')
    },

    hidemenuup: function (e) {
        if (e) {
            e.preventDefault()
        }
        ;
        $(this.el).hide();
        $('.overlay').fadeOut(400);
        $('body').css('overflow', 'auto');
    },

    setmenuupCenterPosition: function (with_animation) {
        var show_animation = with_animation || false;
        var left_margin = 0 - Math.round($(this.el).find('.menuup').outerWidth() / 2);
        var top_margin = 0 - Math.round($(this.el).find('.menuup').outerHeight() / 2);
        if (show_animation) {
            $(this.el).find('.menuup').animate({'margin-left': left_margin, 'margin-top': top_margin});
        } else {
            $(this.el).find('.menuup').css({'margin-left': left_margin, 'margin-top': top_margin});
        }
    },

    changeContactMethod: function (e) {
        e.preventDefault();
        var $checkbox = $(e.currentTarget);
        if ($checkbox.val() == 'phone') {
            $(this.el).find('.content').addClass('phone-active');
        } else {
            $(this.el).find('.content').removeClass('phone-active');
        }
    },

    showMoreOptions: function (e) {
        e.preventDefault();
        $(this.el).find('.more').addClass('with_details');
        this.setmenuupCenterPosition(true);
    },

    checkRequiredValues: function (e) {
        e.preventDefault();
        var form_data = $(this.el).find('form').serializeFormJSON();
        form_data.contact_type = (form_data.contact_type == '') ? 'phone' : form_data.contact_type;
        var required_rows = ['user_name'];
        required_rows.push('user_' + form_data.contact_type);
        var empty_rows = [];
        _.each(required_rows, function (row_name) {
            var row_value = form_data[row_name];
            if (row_value.replace(/\s+/g, '') == '') {
                empty_rows.push(row_name);
            }
        });
        if (empty_rows.length > 0) {
            $(this.el).find('#send_request').attr('disabled', true);
        } else {
            $(this.el).find('#send_request').removeAttr('disabled')
        }
    },

    submitRequest: function (e) {
        e.preventDefault();
        var that = this;
        var form_data = $(this.el).find('form').serializeFormJSON();
        $(this.el).find('.error').removeClass('error');
        $(this.el).find('.error_text').remove();
        $.post('/consultation/send', form_data, function (data) {
            var answer = JSON.parse(data);
            if (answer.status) {
                $.stickr({note: answer.returnMessage, className: 'classic', time: 5000, speed: 1000});
                that.hidemenuup();
            } else if (answer.errors) {
                that.showErrors(answer.errors);
            }

        })
    },

    showErrors: function (errors) {
        var that = this;
        _.each(errors, function (error_array, row_name) {
            _.each(error_array, function (error_text) {
                var $wrong_input = $(that.el).find('.' + row_name + '_input');
                $wrong_input.addClass('error');
                if (row_name = 'recaptcha_validation') {
                    $wrong_input = $(that.el).find('#grecaptcha_box_consultation');
                }
                $('<p class="error_text"><span class="text_red">' + error_text + '</span></p>').insertAfter($wrong_input);
            })
        });
        $(this.el).find('.menuup').addClass('shake');
        $(this.el).find('.menuup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('shake');
        });
    }

});
//subscribe menuup
var SubscribeView = Backbone.View.extend({

    el: '#subscribe_email_menuup',
    email_value: '',
    user_type: '',

    menuup_html: '',

    events: {
        'click .close_menuup': 'hidemenuup',
        'click .set_user_btn': 'setUserParam',
        'click .clear-chose': 'clearUserType',
        'click .submit_subscribe': 'checkEmailInputAndSubscribe'
    },

    initialize: function () {

    },

    initEmailSubmit: function (email_value, user_type) {
        this.email_value = email_value || '';
        this.user_type = user_type || '';
        if ((this.email_value != '') && (this.user_type != '')) {
            this.subscribeUser();
        } else {
            this.loadmenuupHtml();
        }
    },

    loadmenuupHtml: function () {
        var that = this;
        $.get('/menuup/subscribe', function (data) {
            that.menuup_html = data.content;
            that.render();
        })
    },

    render: function () {

        $(this.el).html(this.menuup_html);
        $(this.el).show();
        this.setmenuupCenterPosition();
        var that = this;
        $('.overlay').fadeIn(300).click(function () {
            that.hidemenuup();
        });
        $('body').css('overflow', 'hidden');


    },

    hidemenuup: function (e) {
        if (e) {
            e.preventDefault()
        }
        ;
        $(this.el).hide();
        $('.overlay').fadeOut(400);
        $('body').css('overflow', 'auto');
    },

    setmenuupCenterPosition: function (with_animation) {
        var show_animation = with_animation || false;
        var left_margin = 0 - Math.round($(this.el).find('.menuup').outerWidth() / 2);
        var top_margin = 0 - Math.round($(this.el).find('.menuup').outerHeight() / 2);
        if (show_animation) {
            $(this.el).find('.menuup').animate({'margin-left': left_margin, 'margin-top': top_margin});
        } else {
            $(this.el).find('.menuup').css({'margin-left': left_margin, 'margin-top': top_margin});
        }
    },

    setUserParam: function (e) {
        e.preventDefault();
        var $clicked_btn = $(e.currentTarget);
        var user_type = $clicked_btn.attr('data-user');
        this.user_type = user_type || '';
        this.checkAndSubscribe();
    },

    checkAndSubscribe: function () {
        if (this.email_value == '') {
            this.showEmailInput();
        } else if (this.user_type != '') {
            this.subscribeUser();
        }
    },

    showEmailInput: function () {
        var menuup_class = (this.user_type == '2') ? 'designer-choice' : (this.user_type == '1') ? 'client-choice' : '';
        $(this.el).find('.menuup').addClass(menuup_class);
    },

    clearUserType: function (e) {
        e.preventDefault();
        $(this.el).find('.menuup').removeClass('designer-choice').removeClass('client-choice');
        this.user_type = '';
    },

    subscribeUser: function () {
        var that = this;
        $.post('/news/subscribe/', {email: this.email_value, type: this.user_type}, function (data) {
            var answer = JSON.parse(data);
            $.stickr({note: answer.returnMessage, className: 'classic', time: 7000, speed: 200});
            if (answer.status) {
                $('#subscribe-input-footer').val('');
                that.hidemenuup();
            } else {
                _.each(answer.errors, function (error_array, row_name) {
                    _.each(error_array, function (error_text) {
                        $.stickr({note: error_text, className: 'classic', time: 7000, speed: 200});
                    })
                });
            }
        });
    },

    checkEmailInputAndSubscribe: function (e) {
        e.preventDefault();
        var $subcribe_block = $(e.currentTarget).closest('.subscribe-block');
        var $email_input = $subcribe_block.find('.email_input');
        var email_value = $email_input.val();
        if (email_value != '') {
            this.email_value = email_value;
            this.subscribeUser();
        }
    }
});
//for check if browser support css3
var supports = (function () {
    var div = document.createElement('div'),
        vendors = 'Khtml Ms O Moz Webkit'.split(' '),
        len = vendors.length;

    return function (prop) {
        if (prop in div.style) return true;

        prop = prop.replace(/^[a-z]/, function (val) {
            return val.toUpperCase();
        });

        while (len--) {
            if (vendors[len] + prop in div.style) {
                // browser supports box-shadow. Do what you need.
                // Or use a bang (!) to test if the browser doesn't.
                return true;
            }
        }
        return false;
    };
})();

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function getTextWidth(text, font) {
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
};



$(document).ready(function () {
    var MobMenuView = new MobileMenuView();
    var LoggedMobMenuView = new LoggedMobileMenuView();
    var CatMenuView = new CatogoriesMenuView();
    var MenuView = new TopMenuView();
    $('.dc-account button').click(function () {
        $('.dc-account ul').toggle(250);
    });
    $(document).click(function (event) {
        if ($(event.target).closest('.dc-account').length) return;
        $('.dc-account ul').hide(250);
        event.stopPropagation();
    });
});
