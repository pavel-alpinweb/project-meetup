!function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=14)}({0:function(e,a){console.log("Hello world!")},13:function(e,a){var t,r,n,o,l,i,s,d;t=jQuery,o="onpaste",(n=document.createElement("input")).setAttribute(o,""),l=("function"==typeof n[o]?"paste":"input")+".mask",i=navigator.userAgent,s=/iphone/i.test(i),d=/android/i.test(i),t.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},t.fn.extend({caret:function(e,a){var t;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(a="number"==typeof a?a:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,a):this.createTextRange&&((t=this.createTextRange()).collapse(!0),t.moveEnd("character",a),t.moveStart("character",e),t.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,a=this[0].selectionEnd):document.selection&&document.selection.createRange&&(t=document.selection.createRange(),e=0-t.duplicate().moveStart("character",-1e5),a=e+t.text.length),{begin:e,end:a})},unmask:function(){return this.trigger("unmask")},mask:function(e,a){var n,o,i,c,u;return!e&&0<this.length?t(this[0]).data(t.mask.dataName)():(a=t.extend({placeholder:t.mask.placeholder,completed:null},a),n=t.mask.definitions,o=[],i=u=e.length,c=null,t.each(e.split(""),function(e,a){"?"==a?(u--,i=e):n[a]?(o.push(new RegExp(n[a])),null===c&&(c=o.length-1)):o.push(null)}),this.trigger("unmask").each(function(){var p=t(this),f=t.map(e.split(""),function(e,t){if("?"!=e)return n[e]?a.placeholder:e}),v=p.val();function m(e){for(;++e<u&&!o[e];);return e}function h(e,t){var r,n;if(!(e<0)){for(r=e,n=m(t);r<u;r++)if(o[r]){if(!(n<u&&o[r].test(f[n])))break;f[r]=f[n],f[n]=a.placeholder,n=m(n)}$(),p.caret(Math.max(c,e))}}function g(e,t){var r;for(r=e;r<t&&r<u;r++)o[r]&&(f[r]=a.placeholder)}function $(){p.val(f.join(""))}function k(e){var t,r,n=p.val(),l=-1;for(t=0,pos=0;t<u;t++)if(o[t]){for(f[t]=a.placeholder;pos++<n.length;)if(r=n.charAt(pos-1),o[t].test(r)){f[t]=r,l=t;break}if(pos>n.length)break}else f[t]===n.charAt(pos)&&t!==i&&(pos++,l=t);return e?$():l+1<i?(p.val(""),g(0,u)):($(),p.val(p.val().substring(0,l+1))),i?t:c}p.data(t.mask.dataName,function(){return t.map(f,function(e,t){return o[t]&&e!=a.placeholder?e:null}).join("")}),p.attr("readonly")||p.one("unmask",function(){p.unbind(".mask").removeData(t.mask.dataName)}).bind("focus.mask",function(){var a;clearTimeout(r),v=p.val(),a=k(),r=setTimeout(function(){$(),a==e.length?p.caret(0,a):p.caret(a)},10)}).bind("blur.mask",function(){k(),p.val()!=v&&p.change()}).bind("keydown.mask",function(e){var a,t,r,n=e.which;8===n||46===n||s&&127===n?(t=(a=p.caret()).begin,(r=a.end)-t==0&&(t=46!==n?function(e){for(;0<=--e&&!o[e];);return e}(t):r=m(t-1),r=46===n?m(r):r),g(t,r),h(t,r-1),e.preventDefault()):27==n&&(p.val(v),p.caret(0,k()),e.preventDefault())}).bind("keypress.mask",function(e){var r,n,l,i=e.which,s=p.caret();e.ctrlKey||e.altKey||e.metaKey||i<32||i&&(s.end-s.begin!=0&&(g(s.begin,s.end),h(s.begin,s.end-1)),(r=m(s.begin-1))<u&&(n=String.fromCharCode(i),o[r].test(n)&&(function(e){var t,r,n,l;for(t=e,r=a.placeholder;t<u;t++)if(o[t]){if(n=m(t),l=f[t],f[t]=r,!(n<u&&o[n].test(l)))break;r=l}}(r),f[r]=n,$(),l=m(r),d?setTimeout(t.proxy(t.fn.caret,p,l),0):p.caret(l),a.completed&&u<=l&&a.completed.call(p))),e.preventDefault())}).bind(l,function(){setTimeout(function(){var e=k(!0);p.caret(e),a.completed&&e==p.val().length&&a.completed.call(p)},0)}),k()}))}})},14:function(e,a,t){"use strict";function r(e,a,t){$('[data-role="ajaxPreloader"]').fadeIn(),$.post(e,a,function(e){$('[data-role="server message"]').removeClass("hide").removeClass("m-fail").text(e),t&&t()}).fail(function(){$('[data-role="server message"]').removeClass("hide").addClass("m-fail").text("Что-то пошло не так!")}).always(function(){$('[data-role="ajaxPreloader"]').fadeOut(),setTimeout(function(){$('[data-role="server message"]').addClass("hide")},3e3)})}t.r(a),t(0);var n=$('[data-role="events-form"] [data-role="form-row"]:last-child'),o=[],l={};function i(e){$('[data-role="server message"]').removeClass("hide").addClass("m-fail").text(e),setTimeout(function(){$('[data-role="server message"]').addClass("hide")},3e3)}function s(e,a,t){$('[data-role="ajaxPreloader"]').fadeIn();var r=new FormData;r.append("uploadFile",e),$.ajax({url:a,data:r,cache:!1,contentType:!1,processData:!1,type:"POST",success:function(e){"ok"==e.status?t():($('[data-role="ajaxPreloader"]').fadeOut(),i("Загрузка файла не удалась"))}})}$('[data-role="add-table-row-events"]').click(function(e){e.preventDefault(),n.clone().appendTo('[data-role="events-form"] [data-role="form-body"]')}),$("html, body").on("click",'[data-role="remove-table-row"]',function(e){e.preventDefault(),$(this).parents('[data-role="form-row"]').remove()}),$('[data-role="save-table-events"]').click(function(e){e.preventDefault(),o=[];var a=$('[data-role="events-form"] [data-role="form-row"]');a.each(function(){var e={};e.time=$(this).find('[data-input="event-time"]').val(),e.name=$(this).find('[data-input="event-name"]').val(),o.push(e)}),console.log(l),l.rows=o,0==a.length?($('[data-role="server message"]').removeClass("hide").addClass("m-fail").text("Необходимо добавить хотябы одно событие!"),setTimeout(function(){$('[data-role="server message"]').addClass("hide")},3e3)):r("/events",l)});var d,c=$("#speaker-placeholder").clone().removeClass("hide");function u(e,a,t,n){var o={};o.name=a.find('[data-input="name"]').val(),o.description=a.find('[data-input="description"]').val(),o.photo=a.find('[data-input="photo-url"]').val(),t?(o.id=Date.now(),a.attr("id",o.id)):o.id=a.attr("id");var l=[];a.find('[data-role="social-input"]').each(function(){var e={};e.name=$(this).attr("data-name"),e.link=$(this).val(),$(this).parents('[data-role="social-input-container"]').hasClass("is-active")?e.empty=!1:e.empty=!0,l.push(e)}),o.social=l,console.log(o),r(e,o,n)}function p(e){$('[data-role="add-table-row-speakers"]').removeClass("hide"),$('[data-role="save-new-speaker"]').addClass("hide"),(e=$('[data-role="speakers-form"] [data-role="form-row"]:last-child')).find('[data-role="save-speaker"]').removeClass("hide"),e.find('[data-role="remove-table-row-speakers"]').removeClass("hide"),e.find('[data-input="speaker-file"]').val("")}function f(e){var a={};return a.title=$(e).find('[data-input="title"]').val(),a.text=$(e).find('[data-input="text"]').val(),0<$(e).find('[data-input="link"]').length&&(a.link=$(e).find('[data-input="link"]').val()),console.log(a),a}$("body").on("click",'[data-role="soc-flag"]',function(){""!=$(this).next().val()&&$(this).parent().toggleClass("is-active")}),$("body").on("click",'[data-role="social-input"]',function(){$(this).parent().addClass("is-active")}),$("body").on("focusout",'[data-role="social-input"]',function(){""==$(this).val()&&$(this).parent().removeClass("is-active")}),$('[data-role="add-table-row-speakers"]').click(function(e){e.preventDefault(),c.clone().appendTo('[data-role="speakers-form"]  [data-role="form-body"]');var a=$('[data-role="speakers-form"] [data-role="form-row"]:last-child');a.find('[data-role="save-speaker"]').addClass("hide"),a.find('[data-role="remove-table-row-speakers"]').addClass("hide"),$(this).addClass("hide"),$('[data-role="save-new-speaker"]').removeClass("hide")}),$("body").on("click",'[data-role="remove-table-row-speakers"]',function(e){e.preventDefault(),$('[data-role="ajaxPreloader"]').fadeIn();var a=$(this).parents('[data-role="form-row"]').attr("id"),t=$(this).parents("#"+a);$.ajax({url:"/speaker/"+a,type:"DELETE",success:function(e){t.remove(),$('[data-role="ajaxPreloader"]').fadeOut(),i(e)}})}),$("body").on("click",'[data-role="add-speaker-photo"]',function(e){e.preventDefault(),$(this).parents('[data-role="form-row"]').find('[data-input="speaker-file"]').click()}),$("body").on("change",'[data-input="speaker-file"]',function(){var e=this.files[0],a=new FileReader,t=$(this).parents('[data-role="form-row"]').find('[data-role="speaker-photo-preview"]');a.onload=function(){var r="image/png"==e.type||"image/jpeg"==e.type||"image/jpg"==e.type,n=e.size/1024/1024<2;r&&n?(t.attr("src",a.result),$('[data-input="photo-url"]').val("content/"+e.name)):r?n||($('[data-input="speaker-file"]').val(""),i("Файл не должен привышать размер 2mb")):($('[data-input="speaker-file"]').val(""),i("Можно загружать только изображения форматов: png, jpeg, jpg"))},a.readAsDataURL(e),d=e}),$('[data-role="save-new-speaker"]').click(function(e){e.preventDefault();var a=$('[data-role="speakers-form"] [data-role="form-row"]:last-child');""!=a.find('[data-input="speaker-file"]').val()?s(d,"/speaker-photo",function(){u("/speakersList",a,!0,p)}):u("/speakersList",a,!0,p)}),$("body").on("click",'[data-role="save-speaker"]',function(e){e.preventDefault();var a=$(this).parents('[data-role="form-row"]').attr("id"),t=$("#"+a),r=t.find('[data-input="speaker-file"]');""!=r.val()?s(d,"/speaker-photo",function(){u("/speaker/"+a,t,!1,function(){r.val("")})}):u("/speaker/"+a,t,!1)}),$('[data-role="saveWelcomeText"]').click(function(e){e.preventDefault(),r("/welcomeText",f('[data-role="welcomeText"]'))}),$('[data-role="savePromoText"]').click(function(e){e.preventDefault(),r("/promoText",f('[data-role="promoText"]'))}),t(13);var v={};$('[data-role="timer-input"]').mask("9999, 99, 99",{placeholder:" "}),$('[data-role="save-header"]').click(function(e){e.preventDefault();var a=(""==$('[data-role="timer-input"]').val()?$('[data-role="timer-input"]').attr("placeholder"):$('[data-role="timer-input"]').val()).split(", ");v.timerYear=+a[0],v.timerMounth=+a[1],v.timerDays=+a[2],v.emailForRegistration=$('[data-role="email-reg-input"]').val(),console.log(v),r("/headerSettings",v)});var m,h,g={},k=[],y=$('[data-role="contacts-admin-form"]');function b(e,a,t){$('[data-role="ajaxPreloader"]').fadeIn();var r=new FormData;r.append("uploadFile",e),$.ajax({url:a,data:r,cache:!1,contentType:!1,processData:!1,type:"POST",success:function(e){"ok"==e.status?($('[data-role="server message"]').removeClass("hide").removeClass("m-fail").text(e.text),$('[data-role="ajaxPreloader"]').fadeOut(),setTimeout(function(){$('[data-role="server message"]').addClass("hide")},3e3),t(e.data)):($('[data-role="ajaxPreloader"]').fadeOut(),i(e.errors))}})}function x(e){var a=e[e.length-1];$('[data-role="preview-container"]').html(""),$('[data-role="gallery-file-input"]').val("");var t='<div class="gallery-form__image-container" id="'+a.id+'"><div class="gallery-form__button" data-role="delete-image" data-id="'+a.id+'"><svg class="gallery-form__delete"><use xlink:href="assets/images/icons/sprite.svg#More_icon"></use></svg></div><img src="'+a.src+'" alt="img"></div> ';$('[data-role="gallery-form-container"]').append(t)}$('[data-role="save-contacts"]').click(function(e){e.preventDefault(),k=[],y.find('[data-role="social-input"]').each(function(){var e={};e.name=$(this).attr("data-name"),e.link=$(this).val(),$(this).parents('[data-role="social-input-container"]').hasClass("is-active")?e.empty=!1:e.empty=!0,k.push(e)}),g.email=y.find('[data-input="email-post-input"]').val(),g.address=y.find('[data-input="address-input"]').val(),g.map=y.find('[data-input="map-code-input"]').val(),g.social=k,console.log(g),r("/contacts",g)}),$('[data-role="add-bg-file"]').click(function(e){e.preventDefault(),$('[data-role="file-input"]').click()}),$('[data-role="file-input"]').change(function(){var e=this.files[0],a=new FileReader;return a.onload=function(){var t="image/png"==e.type||"image/jpeg"==e.type||"image/jpg"==e.type,r=e.size/1024/1024<2;t&&r?$('[data-role="preview-main-bg"]').attr("src",a.result):t?r||($('[data-role="file-input"]').val(""),i("Файл не должен привышать размер 2mb")):($('[data-role="file-input"]').val(""),i("Можно загружать только изображения форматов: png, jpeg, jpg"))},a.readAsDataURL(e),m=e}),$('[data-role="upload-file"]').click(function(e){e.preventDefault(),""!=$('[data-role="file-input"]').val()?b(m,"/mainBackgorund"):i("Выберите изображение для загрузки")}),$('[data-role="add-gallery-file"]').click(function(e){e.preventDefault(),$('[data-role="gallery-file-input"]').click()}),$('[data-role="gallery-file-input"]').change(function(){var e=this.files[0],a=new FileReader;return a.onload=function(){var t="image/png"==e.type||"image/jpeg"==e.type||"image/jpg"==e.type,r=e.size/1024/1024<2;if(t&&r){$('[data-role="preview-container"]').html("");var n=$("<img>");n.attr("src",a.result),$('[data-role="preview-container"]').prepend(n)}else t?r||($('[data-role="gallery-file-input"]').val(""),i("Файл не должен привышать размер 2mb")):($('[data-role="gallery-file-input"]').val(""),i("Можно загружать только изображения форматов: png, jpeg, jpg"))},a.readAsDataURL(e),h=e}),$('[data-role="upload-image"]').click(function(e){e.preventDefault(),""!=$('[data-role="gallery-file-input"]').val()?b(h,"/gallery",x):i("Выберите изображение для загрузки")}),$("body").on("click",'[data-role="delete-image"]',function(){$('[data-role="ajaxPreloader"]').fadeIn();var e=$(this).attr("data-id"),a=$(this).parent("#"+e);console.log(a),$.ajax({url:"/gallery/"+e,type:"DELETE",success:function(e){a.remove(),$('[data-role="ajaxPreloader"]').fadeOut(),i(e)}})})}});