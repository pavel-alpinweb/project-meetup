!function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=14)}({0:function(e,a){console.log("Hello world!")},13:function(e,a){var t,r,n,o,l,i,s,d;t=jQuery,o="onpaste",(n=document.createElement("input")).setAttribute(o,""),l=("function"==typeof n[o]?"paste":"input")+".mask",i=navigator.userAgent,s=/iphone/i.test(i),d=/android/i.test(i),t.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},t.fn.extend({caret:function(e,a){var t;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(a="number"==typeof a?a:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,a):this.createTextRange&&((t=this.createTextRange()).collapse(!0),t.moveEnd("character",a),t.moveStart("character",e),t.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,a=this[0].selectionEnd):document.selection&&document.selection.createRange&&(t=document.selection.createRange(),e=0-t.duplicate().moveStart("character",-1e5),a=e+t.text.length),{begin:e,end:a})},unmask:function(){return this.trigger("unmask")},mask:function(e,a){var n,o,i,c,u;return!e&&0<this.length?t(this[0]).data(t.mask.dataName)():(a=t.extend({placeholder:t.mask.placeholder,completed:null},a),n=t.mask.definitions,o=[],i=u=e.length,c=null,t.each(e.split(""),function(e,a){"?"==a?(u--,i=e):n[a]?(o.push(new RegExp(n[a])),null===c&&(c=o.length-1)):o.push(null)}),this.trigger("unmask").each(function(){var f=t(this),p=t.map(e.split(""),function(e,t){if("?"!=e)return n[e]?a.placeholder:e}),m=f.val();function v(e){for(;++e<u&&!o[e];);return e}function h(e,t){var r,n;if(!(e<0)){for(r=e,n=v(t);r<u;r++)if(o[r]){if(!(n<u&&o[r].test(p[n])))break;p[r]=p[n],p[n]=a.placeholder,n=v(n)}$(),f.caret(Math.max(c,e))}}function g(e,t){var r;for(r=e;r<t&&r<u;r++)o[r]&&(p[r]=a.placeholder)}function $(){f.val(p.join(""))}function k(e){var t,r,n=f.val(),l=-1;for(t=0,pos=0;t<u;t++)if(o[t]){for(p[t]=a.placeholder;pos++<n.length;)if(r=n.charAt(pos-1),o[t].test(r)){p[t]=r,l=t;break}if(pos>n.length)break}else p[t]===n.charAt(pos)&&t!==i&&(pos++,l=t);return e?$():l+1<i?(f.val(""),g(0,u)):($(),f.val(f.val().substring(0,l+1))),i?t:c}f.data(t.mask.dataName,function(){return t.map(p,function(e,t){return o[t]&&e!=a.placeholder?e:null}).join("")}),f.attr("readonly")||f.one("unmask",function(){f.unbind(".mask").removeData(t.mask.dataName)}).bind("focus.mask",function(){var a;clearTimeout(r),m=f.val(),a=k(),r=setTimeout(function(){$(),a==e.length?f.caret(0,a):f.caret(a)},10)}).bind("blur.mask",function(){k(),f.val()!=m&&f.change()}).bind("keydown.mask",function(e){var a,t,r,n=e.which;8===n||46===n||s&&127===n?(t=(a=f.caret()).begin,(r=a.end)-t==0&&(t=46!==n?function(e){for(;0<=--e&&!o[e];);return e}(t):r=v(t-1),r=46===n?v(r):r),g(t,r),h(t,r-1),e.preventDefault()):27==n&&(f.val(m),f.caret(0,k()),e.preventDefault())}).bind("keypress.mask",function(e){var r,n,l,i=e.which,s=f.caret();e.ctrlKey||e.altKey||e.metaKey||i<32||i&&(s.end-s.begin!=0&&(g(s.begin,s.end),h(s.begin,s.end-1)),(r=v(s.begin-1))<u&&(n=String.fromCharCode(i),o[r].test(n)&&(function(e){var t,r,n,l;for(t=e,r=a.placeholder;t<u;t++)if(o[t]){if(n=v(t),l=p[t],p[t]=r,!(n<u&&o[n].test(l)))break;r=l}}(r),p[r]=n,$(),l=v(r),d?setTimeout(t.proxy(t.fn.caret,f,l),0):f.caret(l),a.completed&&u<=l&&a.completed.call(f))),e.preventDefault())}).bind(l,function(){setTimeout(function(){var e=k(!0);f.caret(e),a.completed&&e==f.val().length&&a.completed.call(f)},0)}),k()}))}})},14:function(e,a,t){"use strict";function r(e,a){$('[data-role="ajaxPreloader"]').fadeIn(),$.post(e,a,function(e){$('[data-role="server message"]').removeClass("hide").removeClass("m-fail").text(e)}).fail(function(){$('[data-role="server message"]').removeClass("hide").addClass("m-fail").text("Что-то пошло не так!")}).always(function(){$('[data-role="ajaxPreloader"]').fadeOut(),setTimeout(function(){$('[data-role="server message"]').addClass("hide")},3e3)})}t.r(a),t(0);var n=$('[data-role="events-form"] [data-role="form-row"]:last-child'),o=[],l={};$('[data-role="add-table-row-events"]').click(function(e){e.preventDefault(),n.clone().appendTo('[data-role="events-form"] [data-role="form-body"]')}),$("html, body").on("click",'[data-role="remove-table-row"]',function(e){e.preventDefault(),$(this).parents('[data-role="form-row"]').remove()}),$('[data-role="save-table-events"]').click(function(e){e.preventDefault(),o=[];var a=$('[data-role="events-form"] [data-role="form-row"]');a.each(function(){var e={};e.time=$(this).find('[data-input="event-time"]').val(),e.name=$(this).find('[data-input="event-name"]').val(),o.push(e)}),console.log(l),l.rows=o,0==a.length?($('[data-role="server message"]').removeClass("hide").addClass("m-fail").text("Необходимо добавить хотябы одно событие!"),setTimeout(function(){$('[data-role="server message"]').addClass("hide")},3e3)):r("/events",l)});var i=$('[data-role="speakers-form"] [data-role="form-row"]:last-child');function s(e,a,t){var n={};n.name=a.find('[data-input="name"]').val(),n.description=a.find('[data-input="description"]').val(),n.photo=a.find('[data-input="photo"]').val(),t?(n.id=Date.now(),a.attr("id",n.id)):n.id=a.attr("id");var o=[];a.find('[data-role="social-input"]').each(function(){var e={};e.name=$(this).attr("data-name"),e.link=$(this).val(),$(this).parents('[data-role="social-input-container"]').hasClass("is-active")?e.empty=!1:e.empty=!0,o.push(e)}),n.social=o,console.log(n),r(e,n)}function d(e){var a={};return a.title=$(e).find('[data-input="title"]').val(),a.text=$(e).find('[data-input="text"]').val(),0<$(e).find('[data-input="link"]').length&&(a.link=$(e).find('[data-input="link"]').val()),console.log(a),a}$("body").on("click",'[data-role="remove-table-row-speakers"]',function(e){e.preventDefault(),$(this).parents('[data-role="speakers-form-row"]').remove()}),$("body").on("click",'[data-role="soc-flag"]',function(){""!=$(this).next().val()&&$(this).parent().toggleClass("is-active")}),$("body").on("click",'[data-role="social-input"]',function(){$(this).parent().addClass("is-active")}),$("body").on("focusout",'[data-role="social-input"]',function(){""==$(this).val()&&$(this).parent().removeClass("is-active")}),$('[data-role="add-table-row-speakers"]').click(function(e){e.preventDefault(),i.clone().appendTo('[data-role="speakers-form"]  [data-role="form-body"]')}),$('[data-role="save-new-speaker"]').click(function(e){var a=$('[data-role="speakers-form"] [data-role="form-row"]:last-child');e.preventDefault(),s("/speakersList",a,!0)}),$('[data-role="save-speaker"]').click(function(e){var a=$(this).parents('[data-role="form-row"]').attr("id"),t=$("#"+a);e.preventDefault(),s("/speaker/"+a,t,!1)}),$("body").on("click",'[data-role="save-speaker"]',function(e){e.preventDefault();var a=$(this).parents('[data-role="form-row"]').attr("id");s("/speaker/"+a,$("#"+a),!1)}),$('[data-role="saveWelcomeText"]').click(function(e){e.preventDefault(),r("/welcomeText",d('[data-role="welcomeText"]'))}),$('[data-role="savePromoText"]').click(function(e){e.preventDefault(),r("/promoText",d('[data-role="promoText"]'))}),t(13);var c={};$('[data-role="timer-input"]').mask("9999, 99, 99",{placeholder:" "}),$('[data-role="save-header"]').click(function(e){e.preventDefault();var a=(""==$('[data-role="timer-input"]').val()?$('[data-role="timer-input"]').attr("placeholder"):$('[data-role="timer-input"]').val()).split(", ");c.timerYear=+a[0],c.timerMounth=+a[1],c.timerDays=+a[2],c.emailForRegistration=$('[data-role="email-reg-input"]').val(),console.log(c),r("/headerSettings",c)});var u,f,p={},m=[],v=$('[data-role="contacts-admin-form"]');function h(e){$('[data-role="server message"]').removeClass("hide").addClass("m-fail").text(e),setTimeout(function(){$('[data-role="server message"]').addClass("hide")},3e3)}function g(e,a,t){$('[data-role="ajaxPreloader"]').fadeIn();var r=new FormData;r.append("uploadFile",e),$.ajax({url:a,data:r,cache:!1,contentType:!1,processData:!1,type:"POST",success:function(e){"ok"==e.status?($('[data-role="server message"]').removeClass("hide").removeClass("m-fail").text(e.text),$('[data-role="ajaxPreloader"]').fadeOut(),setTimeout(function(){$('[data-role="server message"]').addClass("hide")},3e3),t(e.data)):($('[data-role="ajaxPreloader"]').fadeOut(),h(e.errors))}})}function k(e){var a=e[e.length-1];$('[data-role="preview-container"]').html(""),$('[data-role="gallery-file-input"]').val("");var t='<div class="gallery-form__image-container" id="'+a.id+'"><div class="gallery-form__button" data-role="delete-image" data-id="'+a.id+'"><svg class="gallery-form__delete"><use xlink:href="assets/images/icons/sprite.svg#More_icon"></use></svg></div><img src="'+a.src+'" alt="img"></div> ';$('[data-role="gallery-form-container"]').append(t)}$('[data-role="save-contacts"]').click(function(e){e.preventDefault(),m=[],v.find('[data-role="social-input"]').each(function(){var e={};e.name=$(this).attr("data-name"),e.link=$(this).val(),$(this).parents('[data-role="social-input-container"]').hasClass("is-active")?e.empty=!1:e.empty=!0,m.push(e)}),p.email=v.find('[data-input="email-post-input"]').val(),p.address=v.find('[data-input="address-input"]').val(),p.map=v.find('[data-input="map-code-input"]').val(),p.social=m,console.log(p),r("/contacts",p)}),$('[data-role="add-bg-file"]').click(function(e){e.preventDefault(),$('[data-role="file-input"]').click()}),$('[data-role="file-input"]').change(function(){var e=this.files[0],a=new FileReader;return a.onload=function(){var t="image/png"==e.type||"image/jpeg"==e.type||"image/jpg"==e.type,r=e.size/1024/1024<2;t&&r?$('[data-role="preview-main-bg"]').attr("src",a.result):t?r||($('[data-role="file-input"]').val(""),h("Файл не должен привышать размер 2mb")):($('[data-role="file-input"]').val(""),h("Можно загружать только изображения форматов: png, jpeg, jpg"))},a.readAsDataURL(e),u=e}),$('[data-role="upload-file"]').click(function(e){e.preventDefault(),""!=$('[data-role="file-input"]').val()?g(u,"/mainBackgorund"):h("Выберите изображение для загрузки")}),$('[data-role="add-gallery-file"]').click(function(e){e.preventDefault(),$('[data-role="gallery-file-input"]').click()}),$('[data-role="gallery-file-input"]').change(function(){var e=this.files[0],a=new FileReader;return a.onload=function(){var t="image/png"==e.type||"image/jpeg"==e.type||"image/jpg"==e.type,r=e.size/1024/1024<2;if(t&&r){$('[data-role="preview-container"]').html("");var n=$("<img>");n.attr("src",a.result),$('[data-role="preview-container"]').prepend(n)}else t?r||($('[data-role="gallery-file-input"]').val(""),h("Файл не должен привышать размер 2mb")):($('[data-role="gallery-file-input"]').val(""),h("Можно загружать только изображения форматов: png, jpeg, jpg"))},a.readAsDataURL(e),f=e}),$('[data-role="upload-image"]').click(function(e){e.preventDefault(),""!=$('[data-role="gallery-file-input"]').val()?g(f,"/gallery",k):h("Выберите изображение для загрузки")}),$("body").on("click",'[data-role="delete-image"]',function(){$('[data-role="ajaxPreloader"]').fadeIn();var e=$(this).attr("data-id"),a=$(this).parent("#"+e);console.log(a),$.ajax({url:"/gallery/"+e,type:"DELETE",success:function(e){a.remove(),$('[data-role="ajaxPreloader"]').fadeOut(),h(e)}})})}});