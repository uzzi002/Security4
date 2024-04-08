(async function () {
    if (typeof app_widget_load == 'undefined') {
        app_widget_load = {
            init: async function () {
                heartIcon = typeof customHeartIcon != undefined && customHeartIcon != '' ? customHeartIcon : '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 22" fill="none"><path d="M12.4869 22C12.2364 21.9968 11.9918 21.9232 11.7804 21.7875C8.18822 19.57 5.48518 17.3766 3.2783 14.8705C2.01853 13.5287 1.04215 11.942 0.408559 10.207C-0.730606 6.84675 0.5832 2.9211 3.46882 1.07256C4.78425 0.221399 6.35422 -0.134962 7.90363 0.0659208C9.45304 0.266804 10.8831 1.01212 11.9431 2.17126C12.1376 2.37977 12.3162 2.60031 12.4869 2.81685C12.7194 2.51694 12.97 2.2317 13.2371 1.96275C13.8816 1.32075 14.6473 0.816306 15.4888 0.479444C16.3303 0.142583 17.2302 -0.0198119 18.1351 0.00192686C19.0214 0.0266866 19.8936 0.23235 20.6992 0.606539C21.5048 0.980728 22.2271 1.51571 22.8227 2.17928C25.0693 4.63732 25.6012 7.62065 24.3072 10.8045C23.6255 12.404 22.6611 13.8647 21.4613 15.1151C19.3548 17.3836 16.9713 19.3724 14.3683 21.0336C14.019 21.2662 13.6578 21.4907 13.3006 21.7113L13.1934 21.7795C12.9825 21.9174 12.738 21.9937 12.4869 22Z" stroke="currentColor" fill="none"/></svg>';
                heartFillIcon = typeof customHeartFillIcon != undefined && customHeartFillIcon != '' ? customHeartFillIcon : '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 22" fill="none"><path d="M12.4869 22C12.2364 21.9968 11.9918 21.9232 11.7804 21.7875C8.18822 19.57 5.48518 17.3766 3.2783 14.8705C2.01853 13.5287 1.04215 11.942 0.408559 10.207C-0.730606 6.84675 0.5832 2.9211 3.46882 1.07256C4.78425 0.221399 6.35422 -0.134962 7.90363 0.0659208C9.45304 0.266804 10.8831 1.01212 11.9431 2.17126C12.1376 2.37977 12.3162 2.60031 12.4869 2.81685C12.7194 2.51694 12.97 2.2317 13.2371 1.96275C13.8816 1.32075 14.6473 0.816306 15.4888 0.479444C16.3303 0.142583 17.2302 -0.0198119 18.1351 0.00192686C19.0214 0.0266866 19.8936 0.23235 20.6992 0.606539C21.5048 0.980728 22.2271 1.51571 22.8227 2.17928C25.0693 4.63732 25.6012 7.62065 24.3072 10.8045C23.6255 12.404 22.6611 13.8647 21.4613 15.1151C19.3548 17.3836 16.9713 19.3724 14.3683 21.0336C14.019 21.2662 13.6578 21.4907 13.3006 21.7113L13.1934 21.7795C12.9825 21.9174 12.738 21.9937 12.4869 22Z" stroke="currentColor" fill="currentColor"/></svg>';
                __this = this, app_notification_popup = 1, is_enable_show_branding = 0, branding_text = "Powered by Script Engine", app_plan_type = 0, wishlist_lunch_config = {}, app_widget_data = {}, wishlist_page = {}, wishlist_widget = {}, app_base_url_wishlist = "https://wishlist.scriptengine.net/api", app_customre_id = (JSON.parse(document.getElementById('wishlist-engine-customer-records')?.textContent ?? '{}')?.id ?? ''), app_wishlist_total = (__this._getCookie('WISHLIST_TOTAL') || 0), app_UUID_ID = (__this._getCookie('WISHLIST_UUID') || ''), app_ip_address = (__this._getCookie('WISHLIST_IP_ADDRESS') || ''), app_product_id = [], app_store_id = '', wishlist_products_ids = (__this._getCookie('WISHLIST_PRODUCTS_IDS') != '' ? JSON.parse(__this._getCookie('WISHLIST_PRODUCTS_IDS')) : {});
                wishlist_proxy_url = "wishlist";
                listenVariantFlag = true;
                selectVariantId = typeof ShopifyAnalytics != 'undefined' ? ShopifyAnalytics?.meta?.selectedVariantId : '';
                initUrl = document.URL
                searchProcessChange = __this._debounce(() => __this._wishlistSearchLoad());

                await __this._getEmptyWidgetButton();
                await __this._appWidgetLoad();
                await __this._setWishlistTotalCount(app_wishlist_total);
                await __this._getManualyWidgetButton();

                setTimeout(function () {
                    typeof __st != 'undefined' && __st.p == 'product' && __this._WishlistListenVariantChange();
                }, 1000)

                var cartPageInterval = setInterval(function () {
                    __this._cartPageAction(cartPageInterval);
                }, 300);
                __this._faceBookLoadPixel();
                trending_widget_interval = setInterval(async function () {
                    if (document.querySelectorAll('.wishlist-trending-widget:empty').length > 0) {
                        clearTimeout(trending_widget_interval);
                        trending_widget_interval = '';
                        await __this._trendingWishlist();
                    }
                }, 1000);
                setInterval(async function () {
                    if (app_widget_data.is_enable_app == "1") {
                        await __this._getEmptyWidgetButton();
                        await __this._wishlistProductStatus();
                    }
                }, 2000);
            },
            _faceBookLoadPixel: function () {
                !function (f, b, e, v, n, t, s) {
                    if (f.fbq) return; n = f.fbq = function () {
                        n.callMethod ?
                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    };
                    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                    n.queue = []; t = b.createElement(e); t.async = !0;
                    t.src = v; s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
            },
            _faceBookInit: function (id) {
                fbq('init', id.toString());
            },
            _faceBookPixelTracking: function (topic, object) {
                if (object) {
                    fbq('track', topic, object);
                } else {
                    fbq('track', topic);
                }
            },
            _getManualyWidgetButton: function () {
                setInterval(async () => {
                    var app_variant_ids = [];
                    await document.querySelectorAll('.wishlist-engine[data-loaded-menualy="false"]').forEach(function (e) {
                        if (!app_variant_ids.includes(e.dataset.variant_id)) {
                            app_variant_ids.push(e.dataset.variant_id);
                            app_product_id.push({
                                product_id: e.dataset.product_id,
                                variant_id: e.dataset.variant_id
                            });
                            e.addEventListener('click', function (event) {
                                event.preventDefault();
                                if (app_customre_id == '' && app_widget_data.is_enable_guest_whishlist == 0) {
                                    __this._wishlistAlerMessage('susccessMessageGuestLoginDisable');
                                } else {
                                    if (app_widget_data.app_plan_type == 0 && parseInt(app_widget_data.wishlistMonthCount) >= 100) {
                                        console.log("Limit reached");
                                    } else {
                                        __this._addOrRemoveWishlist(e);
                                    }
                                }
                            });
                            e.dataset.loadedMenualy = true;
                            e.dataset.applyEvent = "true";
                        }
                    });
                    await app_widget_data.is_enable_app == "1" && app_variant_ids.length && __this._wishlistProductStatus();
                }, 100);
            },
            _getEmptyWidgetButton: function () {
                app_product_id = [];
                var app_variant_ids = [];
                document.querySelectorAll('.wishlist-engine:empty').forEach(function (e) {
                    if (!app_variant_ids.includes(e.dataset.variant_id)) {
                        app_variant_ids.push(e.dataset.variant_id);
                        app_product_id.push({
                            product_id: e.dataset.product_id,
                            variant_id: e.dataset.variant_id
                        });
                    }
                    e.addEventListener('click', function (event) {
                        event.preventDefault();
                        if (app_customre_id == '' && app_widget_data.is_enable_guest_whishlist == 0) {
                            if (app_widget_data.is_redirect_account_page == '1') {
                                window.location.href = "/account";
                            } else {
                                __this._wishlistAlerMessage('susccessMessageGuestLoginDisable');
                            }
                        } else {
                            if (app_widget_data.app_plan_type == 0 && parseInt(app_widget_data.wishlistMonthCount) >= 100) {
                                console.log("Limit reached");
                            } else {
                                __this._addOrRemoveWishlist(e);
                            }
                        }
                    });
                    e.dataset.applyEvent = "true";
                });
                document.querySelectorAll('.wishlist-engine').forEach(function (e) {
                    if (!e.dataset.applyEvent && !e.dataset.loadedMenualy) {
                        if (!app_variant_ids.includes(e.dataset.variant_id)) {
                            app_variant_ids.push(e.dataset.variant_id);
                            app_product_id.push({
                                product_id: e.dataset.product_id,
                                variant_id: e.dataset.variant_id
                            });
                        }
                        e.addEventListener('click', function (event) {
                            event.preventDefault();
                            if (app_customre_id == '' && app_widget_data.is_enable_guest_whishlist == 0) {
                                if (app_widget_data.is_redirect_account_page == '1') {
                                    window.location.href = "/account";
                                } else {
                                    __this._wishlistAlerMessage('susccessMessageGuestLoginDisable');
                                }
                            } else {
                                if (app_widget_data.app_plan_type == 0 && parseInt(app_widget_data.wishlistMonthCount) >= 100) {
                                    console.log("Limit reached");
                                } else {
                                    __this._addOrRemoveWishlist(e);
                                }
                            }
                        });
                        e.dataset.applyEvent = "true";
                    }
                })
                return true;
            },
            _addOrRemoveWishlist: async function (e) {
                let payload = {
                    uuid: app_UUID_ID,
                    ip_address: app_ip_address,
                    customer_id: app_customre_id,
                    customers: JSON.parse(document.getElementById('wishlist-engine-customer-records')?.textContent ?? '{}'),
                    shopify_store_id: app_store_id,
                    shopify_store: Shopify.shop,
                    product_id: e.dataset.product_id,
                    variant_id: e.dataset.variant_id,
                    price: e.dataset.price,
                    status: e.dataset.added == 'false' ? 1 : 0,
                }
                let oldHtml = e.innerHTML;
                if (e.dataset.full_button == 'true') {
                    let wishlistButton = '';
                    if (e.dataset.css == 'true' || !e.dataset.css) {
                        wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '"  ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? `style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"` : `style="background:transparent;"`) + '>';
                    } else {
                        wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '">';
                    }

                    if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '5') {
                        if (e.dataset.css == 'true' || !e.dataset.css) {
                            wishlistButton += '<span class="wishlist-icon">' + (e.dataset.added == 'false' ? heartFillIcon.replaceAll("currentColor", wishlist_widget?.wishlistButtonTextColor) : heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor)) + '</span>';
                        } else {
                            wishlistButton += '<span class="wishlist-icon">' + (e.dataset.added == 'false' ? heartFillIcon : heartIcon) + '</span>';
                        }
                    }
                    if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '4') {
                        wishlistButton += '<span class="wishlist-text" style="color:' + wishlist_widget?.wishlistButtonTextColor + '">' + (e.dataset.added == 'false' ? wishlist_widget.wishlistButtonAfterText : wishlist_widget.wishlistButtonBeforeText) + '</span>';
                    }
                    if (app_widget_data.is_enable_public_wishlist_count == '1') {
                        wishlistButton += '<span class="wishlist-count">(' + (e.dataset.added == 'false' ? (parseInt(e.dataset.total) + 1 ?? 1) : (parseInt(e.dataset.total) - 1 ?? 0)) + ')</span>';
                    }
                    wishlistButton += '</div>';
                    e.innerHTML = wishlistButton;
                } else {
                    if (e.dataset.css == 'true' || !e.dataset.css) {
                        e.innerHTML = '<div class="wishlist-engine-button" ' + (`style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"`) + '><span class="wishlist-icon">' + (e.dataset.added == 'false' ? heartFillIcon.replaceAll("currentColor", wishlist_widget?.wishlistButtonTextColor) : heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor)) + '</span></div>';
                    } else {
                        e.innerHTML = '<div class="wishlist-engine-button-icon"><span class="wishlist-icon">' + (e.dataset.added == 'false' ? heartFillIcon : heartIcon) + '</span></div>';
                    }
                }
                __this._XMLHttpRequest("POST", app_base_url_wishlist + '/save-wishlist', payload, (function (status, response) {
                    if (status == 200) {
                        if (e.dataset.full_button == 'true') {
                            let wishlistButton = '';
                            if (e.dataset.css == 'true' || !e.dataset.css) {
                                wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '"  ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? `style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"` : `style="background:transparent;"`) + '>';
                            } else {
                                wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '">';
                            }

                            if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '5') {
                                if (e.dataset.css == 'true' || !e.dataset.css) {
                                    wishlistButton += '<span class="wishlist-icon">' + (e.dataset.added == 'false' ? heartFillIcon.replaceAll("currentColor", wishlist_widget?.wishlistButtonTextColor) : heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor)) + '</span>';
                                } else {
                                    wishlistButton += '<span class="wishlist-icon">' + (e.dataset.added == 'false' ? heartFillIcon : heartIcon) + '</span>';
                                }
                            }
                            if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '4') {
                                wishlistButton += '<span class="wishlist-text" style="color:' + wishlist_widget?.wishlistButtonTextColor + '">' + (e.dataset.added == 'false' ? wishlist_widget.wishlistButtonAfterText : wishlist_widget.wishlistButtonBeforeText) + '</span>';
                            }
                            if (app_widget_data.is_enable_public_wishlist_count == '1') {
                                wishlistButton += '<span class="wishlist-count">(' + (e.dataset.added == 'false' ? (parseInt(e.dataset.total) + 1 ?? 1) : (parseInt(e.dataset.total) - 1 ?? 0)) + ')</span>';
                            }
                            wishlistButton += '</div>';
                            e.innerHTML = wishlistButton;
                        } else {
                            if (e.dataset.css == 'true' || !e.dataset.css) {
                                e.innerHTML = '<div class="wishlist-engine-button" ' + (`style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"`) + '><span class="wishlist-icon">' + (e.dataset.added == 'false' ? heartFillIcon.replaceAll("currentColor", wishlist_widget?.wishlistButtonTextColor) : heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor)) + '</span></div>';
                            } else {
                                e.innerHTML = '<div class="wishlist-engine-button-icon"><span class="wishlist-icon">' + (e.dataset.added == 'false' ? heartFillIcon : heartIcon) + '</span></div>';
                            }
                        }
                        if (ShopifyAnalytics.meta.product?.id == e.dataset.product_id) {
                            document.querySelectorAll('.wishlist-engine[data-product_id="' + ShopifyAnalytics.meta.product?.id + '"]').forEach(function (wishlistButtonSelecter) {
                                var variantsIds = JSON.parse(wishlistButtonSelecter.dataset.variantsIds);
                                if (variantsIds.includes(parseInt(e.dataset.variant_id))) {
                                    var index = variantsIds.indexOf(parseInt(e.dataset.variant_id));
                                    variantsIds.splice(index, 1);
                                } else {
                                    variantsIds.push(parseInt(e.dataset.variant_id))
                                }
                                wishlistButtonSelecter.setAttribute("data-variants-ids", JSON.stringify(variantsIds));
                            });
                        }
                        app_UUID_ID = response.data.uuid, __this._setCookie("WISHLIST_UUID", (response.data.uuid));
                        (e.dataset.added == 'false') && __this._wishlistAlerMessage((app_customre_id ? 'susccessMessageWithLogin' : 'susccessMessageWithoutLogin'), response.product);
                        (e.dataset.added == 'true') && __this._wishlistAlerMessage('susccessMessageItemRemove');
                        (e.dataset.added == 'false') && __this._faceBookPixelTracking('addedInWishlist', response.product);
                        (e.dataset.added == 'true') && __this._faceBookPixelTracking('removeFromWishlist', response.product);


                        if ((e.dataset.added == 'false')) {
                            WISHLIST_PRODUCTS_IDS = ((__this._getCookie('WISHLIST_PRODUCTS_IDS') != '' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != 'undefined' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != null) ? JSON.parse(__this._getCookie('WISHLIST_PRODUCTS_IDS')) : {});

                            if (WISHLIST_PRODUCTS_IDS[e.dataset.product_id]) {
                                if (!WISHLIST_PRODUCTS_IDS[e.dataset.product_id].variants.includes(parseInt(e.dataset.variant_id))) {
                                    WISHLIST_PRODUCTS_IDS[e.dataset.product_id].variants.push(parseInt(e.dataset.variant_id));
                                    WISHLIST_PRODUCTS_IDS[e.dataset.product_id].is_exist = true;
                                    WISHLIST_PRODUCTS_IDS[e.dataset.product_id].total = 0;
                                }
                            } else {
                                WISHLIST_PRODUCTS_IDS[e.dataset.product_id] = {
                                    variants: [parseInt(e.dataset.variant_id)],
                                    is_exist: true,
                                    total: 0,
                                };
                            }
                            __this._setCookie("WISHLIST_PRODUCTS_IDS", JSON.stringify(WISHLIST_PRODUCTS_IDS));

                        } else {
                            WISHLIST_PRODUCTS_IDS = ((__this._getCookie('WISHLIST_PRODUCTS_IDS') != '' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != 'undefined' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != null) ? JSON.parse(__this._getCookie('WISHLIST_PRODUCTS_IDS')) : {});
                            if (app_widget_data.is_enable_wishlist_variant_level == '1') {
                                let productsVariants = WISHLIST_PRODUCTS_IDS[e.dataset.product_id].variants;
                                var index = productsVariants.indexOf(parseInt(e.dataset.variant_id));
                                productsVariants.splice(index, 1);
                                if (productsVariants.length <= 0) {
                                    delete WISHLIST_PRODUCTS_IDS[e.dataset.product_id];
                                } else {
                                    WISHLIST_PRODUCTS_IDS[e.dataset.product_id].variants = productsVariants;
                                }
                            } else {
                                delete WISHLIST_PRODUCTS_IDS[e.dataset.product_id];
                            }
                            __this._setCookie("WISHLIST_PRODUCTS_IDS", JSON.stringify(WISHLIST_PRODUCTS_IDS));

                        }


                        e.dataset.total = ((e.dataset.added == 'false') ? (parseInt(e.dataset.total) + 1 ?? 1) : (parseInt(e.dataset.total ?? 0) - 1 ?? 0))
                        e.dataset.added = ((e.dataset.added == 'false') ? "true" : "false");
                        e.dataset.wishlist_count = app_widget_data.is_enable_public_wishlist_count ?? false;
                        __this._setWishlistTotalCount(response.data.wishlistTotalCount);
                        if (typeof wishlistCallback == 'function') {
                            wishlistCallback({
                                "event": payload.status == "1" ? "ADD" : "REMOVE",
                                "product": response.product
                            });
                        }
                    } else {
                        e.innerHTML = oldHtml;
                    }
                }));
            },
            _appWidgetLoad: async function () {
                let configPayload = {
                    uuid: app_UUID_ID,
                    ip_address: app_ip_address,
                    customer_id: app_customre_id,
                    customers: JSON.parse(document.getElementById('wishlist-engine-customer-records')?.textContent ?? '{}'),
                    shop: Shopify.shop
                };
                __this._XMLHttpRequest("POST", app_base_url_wishlist + '/apps-config', configPayload, (async function (status, responseJson) {
                    if (status == 200) {
                        app_notification_popup = responseJson.data.is_enable_wishlist_notification_popup, app_plan_type = responseJson.data.app_plan_type, is_enable_show_branding = responseJson.data.is_enable_show_branding, branding_text = responseJson.data.branding_text, app_ip_address = (responseJson.data.ip_address), __this._setCookie("WISHLIST_UUID", (responseJson.data.uuid)), app_UUID_ID = responseJson.data.uuid, __this._setCookie("WISHLIST_IP_ADDRESS", (responseJson.data.ip_address)), __this._setCookie("WISHLIST_TOTAL", (responseJson.data.wishlistTotalCount)), app_wishlist_total = responseJson.data.wishlistTotalCount, app_store_id = responseJson.data.id;
                        app_widget_data = responseJson.data;
                        wishlist_widget = JSON.parse(app_widget_data.wishlist_widget);
                        wishlist_lunch_config = JSON.parse(app_widget_data.wishlist_lunch_config);
                        wishlist_page = JSON.parse(app_widget_data.wishlist_page);

                        wishlist_proxy_url = responseJson.data.wishlist_proxy_url;
                        if (responseJson.data.facebook_pixel_code != '' && responseJson.data.facebook_pixel_code != 'null' && responseJson.data.facebook_pixel_code) {
                            __this._faceBookInit(responseJson.data.facebook_pixel_code);
                        }
                        await responseJson.data.is_enable_app == 1 && __this._setWishlistWidgetButton();
                        if (responseJson.data.is_enable_app == 1) {
                            if ((app_customre_id != '' && responseJson.data.is_enable_guest_whishlist == 0) || responseJson.data.is_enable_guest_whishlist == 1) {
                                __this._wishlistProductStatus();
                            }
                        }

                        if (responseJson.data.is_enable_app == 0) {
                            console.log("Please enable App");
                        }
                        if (typeof wishlistPageLoad !== 'undefined') {
                            __this._wishlistPageWidgetData();
                        }
                        if (responseJson.data.wishlistTotalCount <= 0) {
                            __this._setCookie("WISHLIST_PRODUCTS_IDS", JSON.stringify({}));
                            __this._setCookie("WISHLIST_PRODUCTS_IDS_SET", "1");
                        }
                    }
                }));
                return true;
            },
            _wishlistProductStatus: async function () {
                if (app_product_id.length > 0) {
                    let old_app_product_id = app_product_id
                    WISHLIST_PRODUCTS_IDS = ((__this._getCookie('WISHLIST_PRODUCTS_IDS') != '' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != 'undefined' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != null) ? JSON.parse(__this._getCookie('WISHLIST_PRODUCTS_IDS')) : {});

                    if (app_widget_data.is_enable_public_wishlist_count == 0 && __this._getCookie('WISHLIST_PRODUCTS_IDS_SET') == "1" && Object.entries(WISHLIST_PRODUCTS_IDS).length === parseInt(app_wishlist_total)) {
                        old_app_product_id.forEach(function (checkProductObject, index) {
                            if (WISHLIST_PRODUCTS_IDS[checkProductObject.product_id]) {
                                if (app_widget_data.is_enable_wishlist_variant_level == 1) {
                                    if (WISHLIST_PRODUCTS_IDS[checkProductObject.product_id].variants.includes(parseInt(checkProductObject.variant_id))) {
                                        old_app_product_id[index].is_exist = true;
                                    } else {
                                        old_app_product_id[index].is_exist = false;
                                    }
                                } else {
                                    old_app_product_id[index].is_exist = true;
                                }
                                old_app_product_id[index].total = 1;
                            } else {
                                old_app_product_id[index].is_exist = false;
                                old_app_product_id[index].total = 0;
                            }
                        });
                        __this._setWishlistButtonLoad({ status: true, data: old_app_product_id, [ShopifyAnalytics?.meta?.product?.id ?? '']: WISHLIST_PRODUCTS_IDS[ShopifyAnalytics?.meta?.product?.id ?? '']?.variants });
                    } else if ((__this._getCookie('WISHLIST_PRODUCTS_IDS_SET') || "0") == "0" || Object.entries(WISHLIST_PRODUCTS_IDS).length !== parseInt(app_wishlist_total)) {
                        let payload = {
                            uuid: __this._getCookie('WISHLIST_UUID'),
                            ip_address: app_ip_address,
                            shopify_store_id: app_store_id,
                            shop: Shopify.shop
                        }
                        __this._XMLHttpRequest("POST", app_base_url_wishlist + '/get-all-product', payload, (function (status, responseJson) {
                            if (status == 200) {
                                var objects = {};
                                (responseJson.data ?? []).forEach(function (responseObject, index) {
                                    if (objects[responseObject.product_id]) {
                                        objects[responseObject.product_id].variants.push(parseInt(responseObject.variant_id));
                                        objects[responseObject.product_id].is_exist = true;
                                        objects[responseObject.product_id].total = 0;
                                    } else {
                                        objects[responseObject.product_id] = {
                                            variants: [parseInt(responseObject.variant_id)],
                                            is_exist: true,
                                            total: 0,
                                        };
                                    }

                                });
                                __this._setCookie("WISHLIST_PRODUCTS_IDS", JSON.stringify(objects));
                                __this._setCookie("WISHLIST_PRODUCTS_IDS_SET", "1");

                                let payload = {
                                    ids: old_app_product_id,
                                    shopify_store_id: app_store_id,
                                    uuid: __this._getCookie('WISHLIST_UUID'),
                                    is_enable_public_wishlist_count: app_widget_data.is_enable_public_wishlist_count,
                                    is_enable_wishlist_variant_level: app_widget_data.is_enable_wishlist_variant_level,
                                    shopify_product_id: ShopifyAnalytics.meta.product?.id || '',
                                    shop: Shopify.shop
                                }
                                __this._XMLHttpRequest("POST", app_base_url_wishlist + '/product-status', payload, (function (status, responseJson) {
                                    if (status == 200) {
                                        __this._setWishlistButtonLoad(responseJson);
                                    }
                                }));
                            }
                        }));
                    } else {
                        let payload = {
                            ids: app_product_id,
                            shopify_store_id: app_store_id,
                            uuid: __this._getCookie('WISHLIST_UUID'),
                            is_enable_public_wishlist_count: app_widget_data.is_enable_public_wishlist_count,
                            is_enable_wishlist_variant_level: app_widget_data.is_enable_wishlist_variant_level,
                            shopify_product_id: ShopifyAnalytics.meta.product?.id || '',
                            shop: Shopify.shop
                        }
                        __this._XMLHttpRequest("POST", app_base_url_wishlist + '/product-status', payload, (function (status, responseJson) {
                            if (status == 200) {
                                __this._setWishlistButtonLoad(responseJson);
                            }
                        }));
                    }
                } else {
                    return true;
                }
            },
            _setWishlistWidgetButton: async function () {

                let wishlistCount = '';
                if (app_widget_data.is_enable_public_wishlist_count == '1') {
                    wishlistCount = '<span class="wishlist-count">(0)</span>';
                }
                app_product_id.forEach(function (object) {
                    document.querySelectorAll('.wishlist-engine[data-product_id="' + object.product_id + '"]').forEach(function (element) {
                        let wishlistButton = '';
                        if (element.dataset.full_button == 'true') {
                            if (element.dataset.css == 'true' || !element.dataset.css) {
                                wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '"' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? `style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"` : `style="background:transparent;"`) + '>';
                            } else {
                                wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '">';
                            }
                            if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '5') {
                                if (element.dataset.css == 'true' || !element.dataset.css) {
                                    wishlistButton += '<span class="wishlist-icon">' + (element.dataset.added === 'true' ? heartFillIcon.replaceAll("currentColor", wishlist_widget?.wishlistButtonTextColor) : heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor)) + '</span>';
                                } else {
                                    wishlistButton += '<span class="wishlist-icon">' + (element.dataset.added === 'true' ? heartFillIcon : heartIcon) + '</span>';
                                }
                            }
                            if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '4') {
                                wishlistButton += '<span class="wishlist-text" style="color:' + wishlist_widget?.wishlistButtonTextColor + '">' + wishlist_widget.wishlistButtonBeforeText + '</span>';
                            }
                            wishlistButton += wishlistCount + '</div>';
                        } else {
                            if (element.dataset.css == 'true' || !element.dataset.css) {
                                wishlistButton = '<div class="wishlist-engine-button" ' + (`style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"`) + '><span class="wishlist-icon">' + heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor) + '</span></div>';
                            } else {
                                wishlistButton = '<div class="wishlist-engine-button-icon"><span class="wishlist-icon">' + heartIcon + '</span></div>';
                            }
                        }
                        element.innerHTML = wishlistButton;
                    });
                })
                if (app_widget_data.wishlist_lunch_type === 1) {
                    var elemButton = document.createElement('button');
                    elemButton.style.cssText = 'background:' + wishlist_lunch_config?.luncherButtonBackgroundColor + ';color:' + wishlist_lunch_config?.luncherButtonTextColor + ';';
                    elemButton.className = 'wishlist-fix wishlist-page-widget';
                    elemButton.dataset.position = wishlist_lunch_config.placeMent;
                    elemButton.innerHTML = heartFillIcon.replaceAll("currentColor", wishlist_lunch_config?.luncherButtonTextColor) + ((wishlist_lunch_config?.luncherButtonText != null && wishlist_lunch_config?.luncherButtonText != '') ? '<span class="wishlist-button-text">' + wishlist_lunch_config?.luncherButtonText + '</span>' : "") + '<span class="sg-wishlist-badge wishlist-total-count" style="background:' + wishlist_lunch_config.luncherButtonBackgroundColor + ';color:' + wishlist_lunch_config.luncherButtonTextColor + ';">' + app_widget_data.wishlistTotalCount ?? 0 + '</span>';
                    document.body.appendChild(elemButton);
                }
                document.querySelectorAll('.wishlist-page-widget').forEach(function (element) {
                    element.addEventListener('click', function (event) {
                        event.preventDefault(); event.stopPropagation();
                        __this._triggerWishlistPageAction(app_widget_data.wishlist_lunch_action)
                    });
                });
                __this._setWishlistTotalCount(app_widget_data.wishlistTotalCount);
            },
            _triggerWishlistPageAction: async function (lunchType) {

                if (lunchType == 1) {
                    var pageHtml = '';
                    pageHtml += '<div class="sewp-header"><div>&nbsp;</div><div class="sewp-right-data">' + (!app_customre_id ? '<a href="/account/login">' + wishlist_page?.pageButtonLogin?.value + '</a>' : '') + '<button class="sewp-close"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="_02_User" data-name="02 User"><path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z" fill="#000000" data-original="#000000" class=""></path><path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z" fill="#000000" data-original="#000000" class=""></path></g></g></svg></button></div></div>';
                    pageHtml += '<div class="sewp-content" id="wishlist-page-contain">';
                    pageHtml += '<div class="headerwishlist">';
                    pageHtml += '<h1 class="wishlist-heading">' + (wishlist_page?.pageTitle?.value ?? "Wishlist") + '</h1>';
                    if (app_widget_data.is_enable_share_wishlist == "1") {
                        pageHtml += '<ul class="wishlist-share">';
                        if (app_widget_data.is_share_facebook == "1") {
                            pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.shareOnFaceBook?.value ?? "Share on facebook") + '" data-trigger="facebook"><svg viewBox="0 0 96.227 96.227" ><path fill="currentColor" d="M73.099,15.973l-9.058,0.004c-7.102,0-8.477,3.375-8.477,8.328v10.921h16.938l-0.006,17.106H55.564v43.895H37.897V52.332   h-14.77V35.226h14.77V22.612C37.897,7.972,46.84,0,59.9,0L73.1,0.021L73.099,15.973L73.099,15.973z"></path></svg></a></li>';
                        }
                        if (app_widget_data.is_share_twitter == "1") {
                            pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.shareOnTwitter?.value ?? "Share on twitter") + '" data-trigger="twitter"><svg version="1.1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M23.444,4.834c-0.814,0.363-1.5,0.375-2.228,0.016c0.938-0.562,0.981-0.957,1.32-2.019c-0.878,0.521-1.851,0.9-2.886,1.104 C18.823,3.053,17.642,2.5,16.335,2.5c-2.51,0-4.544,2.036-4.544,4.544c0,0.356,0.04,0.703,0.117,1.036 C8.132,7.891,4.783,6.082,2.542,3.332C2.151,4.003,1.927,4.784,1.927,5.617c0,1.577,0.803,2.967,2.021,3.782 C3.203,9.375,2.503,9.171,1.891,8.831C1.89,8.85,1.89,8.868,1.89,8.888c0,2.202,1.566,4.038,3.646,4.456 c-0.666,0.181-1.368,0.209-2.053,0.079c0.579,1.804,2.257,3.118,4.245,3.155C5.783,18.102,3.372,18.737,1,18.459 C3.012,19.748,5.399,20.5,7.966,20.5c8.358,0,12.928-6.924,12.928-12.929c0-0.198-0.003-0.393-0.012-0.588 C21.769,6.343,22.835,5.746,23.444,4.834z"></path></svg></a></li>';
                        }
                        if (app_widget_data.is_share_whatsapp == "1") {
                            pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.shareOnWhatsapp?.value ?? "Share on whatsapp") + '" data-trigger="whatsapp"><svg xmlns="https://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M20.1,3.9C17.9,1.7,15,0.5,12,0.5C5.8,0.5,0.7,5.6,0.7,11.9c0,2,0.5,3.9,1.5,5.6l-1.6,5.9l6-1.6c1.6,0.9,3.5,1.3,5.4,1.3l0,0l0,0c6.3,0,11.4-5.1,11.4-11.4C23.3,8.9,22.2,6,20.1,3.9z M12,21.4L12,21.4c-1.7,0-3.3-0.5-4.8-1.3l-0.4-0.2l-3.5,1l1-3.4L4,17c-1-1.5-1.4-3.2-1.4-5.1c0-5.2,4.2-9.4,9.4-9.4c2.5,0,4.9,1,6.7,2.8c1.8,1.8,2.8,4.2,2.8,6.7C21.4,17.2,17.2,21.4,12,21.4z M17.1,14.3c-0.3-0.1-1.7-0.9-1.9-1c-0.3-0.1-0.5-0.1-0.7,0.1c-0.2,0.3-0.8,1-0.9,1.1c-0.2,0.2-0.3,0.2-0.6,0.1c-0.3-0.1-1.2-0.5-2.3-1.4c-0.9-0.8-1.4-1.7-1.6-2c-0.2-0.3,0-0.5,0.1-0.6s0.3-0.3,0.4-0.5c0.2-0.1,0.3-0.3,0.4-0.5c0.1-0.2,0-0.4,0-0.5c0-0.1-0.7-1.5-1-2.1C8.9,6.6,8.6,6.7,8.5,6.7c-0.2,0-0.4,0-0.6,0S7.5,6.8,7.2,7c-0.3,0.3-1,1-1,2.4s1,2.8,1.1,3c0.1,0.2,2,3.1,4.9,4.3c0.7,0.3,1.2,0.5,1.6,0.6c0.7,0.2,1.3,0.2,1.8,0.1c0.6-0.1,1.7-0.7,1.9-1.3c0.2-0.7,0.2-1.2,0.2-1.3C17.6,14.5,17.4,14.4,17.1,14.3z"></path></svg></a></li>';
                        }
                        if (app_widget_data.is_share_email == "1") {
                            pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.shareOnEmail?.value ?? "Share on email") + '" data-trigger="mail"><svg version="1.1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24" "=""><path fill="currentColor" d="M22,4H2C0.897,4,0,4.897,0,6v12c0,1.103,0.897,2,2,2h20c1.103,0,2-0.897,2-2V6C24,4.897,23.103,4,22,4z M7.248,14.434 l-3.5,2C3.67,16.479,3.584,16.5,3.5,16.5c-0.174,0-0.342-0.09-0.435-0.252c-0.137-0.239-0.054-0.545,0.186-0.682l3.5-2 c0.24-0.137,0.545-0.054,0.682,0.186C7.571,13.992,7.488,14.297,7.248,14.434z M12,14.5c-0.094,0-0.189-0.026-0.271-0.08l-8.5-5.5 C2.997,8.77,2.93,8.46,3.081,8.229c0.15-0.23,0.459-0.298,0.691-0.147L12,13.405l8.229-5.324c0.232-0.15,0.542-0.084,0.691,0.147 c0.15,0.232,0.083,0.542-0.148,0.691l-8.5,5.5C12.189,14.474,12.095,14.5,12,14.5z M20.934,16.248 C20.842,16.41,20.673,16.5,20.5,16.5c-0.084,0-0.169-0.021-0.248-0.065l-3.5-2c-0.24-0.137-0.323-0.442-0.186-0.682 s0.443-0.322,0.682-0.186l3.5,2C20.988,15.703,21.071,16.009,20.934,16.248z"></path></svg></a></li>';
                        }
                        if (app_widget_data.is_share_url == "1") {
                            pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.ShareCopyLink?.value ?? "Copy link") + '" data-trigger="link"><svg xmlns="https://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><path fill="currentColor" d="M459.654,233.373l-90.531,90.5c-49.969,50-131.031,50-181,0c-7.875-7.844-14.031-16.688-19.438-25.813 l42.063-42.063c2-2.016,4.469-3.172,6.828-4.531c2.906,9.938,7.984,19.344,15.797,27.156c24.953,24.969,65.563,24.938,90.5,0 l90.5-90.5c24.969-24.969,24.969-65.563,0-90.516c-24.938-24.953-65.531-24.953-90.5,0l-32.188,32.219 c-26.109-10.172-54.25-12.906-81.641-8.891l68.578-68.578c50-49.984,131.031-49.984,181.031,0 C509.623,102.342,509.623,183.389,459.654,233.373z M220.326,382.186l-32.203,32.219c-24.953,24.938-65.563,24.938-90.516,0 c-24.953-24.969-24.953-65.563,0-90.531l90.516-90.5c24.969-24.969,65.547-24.969,90.5,0c7.797,7.797,12.875,17.203,15.813,27.125 c2.375-1.375,4.813-2.5,6.813-4.5l42.063-42.047c-5.375-9.156-11.563-17.969-19.438-25.828c-49.969-49.984-131.031-49.984-181.016,0 l-90.5,90.5c-49.984,50-49.984,131.031,0,181.031c49.984,49.969,131.031,49.969,181.016,0l68.594-68.594 C274.561,395.092,246.42,392.342,220.326,382.186z"></path></svg></a></li>';
                        }
                        pageHtml += '</ul>';
                    }
                    pageHtml += '</div>';

                    /* Wishlist Page Header */
                    pageHtml += '<div class="wishlist-header">';
                    pageHtml += '<div class="wishlist-header-left">';
                    pageHtml += '<div class="wishlist-form">';
                    pageHtml += '<div class="wishlist-fromwrap">';
                    pageHtml += '<span class="wh-search-icon">';
                    pageHtml += '<svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke="currentColor"><circle cx="10.364" cy="10.364" r="10.364"></circle><path stroke-linecap="square" d="m18 18 5.777 5.788"></path></g></g></svg>';
                    pageHtml += '</span>';
                    pageHtml += '<input type="text" placeholder="' + wishlist_page?.pageSearchBoxPlaceHolder?.value + '" id="wishlist-input" onkeyup="searchProcessChange()" />';
                    pageHtml += '</div>';
                    pageHtml += '</div>';
                    pageHtml += '</div>';
                    /*
                    pageHtml += '<div class="wishlist-header-right">';
                    if (app_widget_data.wishlist_view === 1) {
                        pageHtml += '<button class="list-button">';
                        pageHtml += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g id="Layer_1"> <path d="M8,15c3.86,0,7-3.14,7-7s-3.14-7-7-7S1,4.14,1,8S4.14,15,8,15z M8,3c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5 S5.243,3,8,3z"/> <rect x="18" y="7" width="31" height="2"/><path d="M8,32c3.86,0,7-3.14,7-7s-3.14-7-7-7s-7,3.14-7,7S4.14,32,8,32z M8,20c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5 S5.243,20,8,20z"/><rect x="18" y="24" width="31" height="2"/><path d="M8,49c3.86,0,7-3.14,7-7s-3.14-7-7-7s-7,3.14-7,7S4.14,49,8,49z M8,37c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5 S5.243,37,8,37z"/><rect x="18" y="41" width="31" height="2"/></g><g></g></svg>';
                        pageHtml += '</button>';
                    } else {
                        pageHtml += '<button class="grid-button active">';
                        pageHtml += '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><path d="M8.775,24.477h12.914c0.553,0,1-0.447,1-1V10.563c0-0.553-0.447-1-1-1H8.775c-0.553,0-1,0.447-1,1v12.914 C7.775,24.029,8.223,24.477,8.775,24.477z M9.775,11.563h10.914v10.914H9.775V11.563z"/><path d="M25.861,24.477h12.914c0.553,0,1-0.447,1-1V10.563c0-0.553-0.447-1-1-1H25.861c-0.553,0-1,0.447-1,1v12.914 C24.861,24.029,25.309,24.477,25.861,24.477z M26.861,11.563h10.914v10.914H26.861V11.563z"/><path d="M8.775,41.563h12.914c0.553,0,1-0.447,1-1V27.648c0-0.553-0.447-1-1-1H8.775c-0.553,0-1,0.447-1,1v12.914 C7.775,41.115,8.223,41.563,8.775,41.563z M9.775,28.648h10.914v10.914H9.775V28.648z"/><path d="M24.861,40.563c0,0.553,0.447,1,1,1h12.914c0.553,0,1-0.447,1-1V27.648c0-0.553-0.447-1-1-1H25.861c-0.553,0-1,0.447-1,1 V40.563z M26.861,28.648h10.914v10.914H26.861V28.648z"/></svg>';
                        pageHtml += '</button>';
                    }
                    pageHtml += '</div>';
                    */
                    pageHtml += '</div>';
                    if (app_widget_data.is_enable_bulk_action == '1') {
                        pageHtml += '<ul class="bulk_action">';
                        pageHtml += '<li><input type="checkbox" id="wishlist_select_all" name="select_all" value="select_all" aria-label="Select products in bulk"><label for="wishlist_select_all">' + (wishlist_page?.pageBulkButtonSelectAll?.value ?? "Select All") + '</label></li>';
                        pageHtml += '<li><a href="javascript:void(0)" aria-describedby="a11y-external-message" data-type="move-to-cart" id="move_to_cart_all">' + (wishlist_page?.pageBulkButtonMoveToCart?.value ?? "Wishlist") + '</a></li>';
                        pageHtml += '<li><a href="javascript:void(0)" aria-describedby="a11y-external-message" data-type="delete" id="delete_all">' + (wishlist_page?.pageBulkButtonDelete?.value ?? "Wishlist") + '</a></li>';
                        pageHtml += '</ul>';
                    }
                    await __this._wishlistSearchData(function (response) {
                        if (response.data.length) {
                            if (app_widget_data.wishlist_view === 1) {
                                /* Wishlist List Layout */
                                pageHtml += '<div class="wh-list-layout active wishlistajaxLoad">';
                                (response.data || []).forEach(function (object, index) {
                                    if (object.variants && typeof object.variants[object.shopify_variant_id] != 'undefined' && object.variants[object.shopify_variant_id]) {
                                        pageHtml += '<div class="wh-list-column" id="wishlist_page_' + object.shopify_id + '_' + object.shopify_variant_id + '">';
                                        pageHtml += '<div class="wh-list-left">';
                                        pageHtml += '<a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '"><img src="' + (typeof object.variants[object.shopify_variant_id]?.image_src != 'undefined' && object.variants[object.shopify_variant_id]?.image_src != '' ? object.variants[object.shopify_variant_id]?.image_src : (object.image != '' ? object.image : "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_620x620.gif")) + '" alt="" /></a>';
                                        if (app_widget_data.is_enable_bulk_action == '1') {
                                            pageHtml += '<input type="checkbox" name="wishlist_item_checkbox" data-quntity="' + object.quntity + '" value="" data-wishlist-id="' + object.shopify_wishlist_id + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" class="wishlist_item_checkbox" id="wishlist_item_checkbox_' + index + '">';
                                        }
                                        pageHtml += '</div>';
                                        pageHtml += '<div class="wh-list-right">';
                                        pageHtml += '<div class="wh-pro-meta">';
                                        if (object.vandor && app_widget_data.is_enable_show_vendor == 1) {
                                            pageHtml += '<p class="wishlistvendor">' + object.vandor + '</p>';
                                        }
                                        pageHtml += '<h3><a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '">' + object.title + '</a></h3>';
                                        pageHtml += '<p class="wishlist-price" data-price="' + object.variants[object.shopify_variant_id].price + '"  id="wishlist-price-' + index + '"><span class="money">' + ((app_widget_data.is_divided == 0) ? (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.money_format).replace("{{amount}}", (object.variants[object.shopify_variant_id].price)) : ((app_widget_data.is_divided == 100) ? Shopify.formatMoney(Math.ceil(parseFloat(object.variants[object.shopify_variant_id].price) * Shopify.currency.rate).toFixed(2).toString(), (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : ((app_widget_data.is_divided == 50) ? wishlistCustomCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : __this._wishlistCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format))))) + '</span></p>';
                                        pageHtml += '<p class="wishlist-variant" id="wishlist-variant-title-' + index + '">' + ((object.variants[object.shopify_variant_id].title != 'Default Title') ? object.variants[object.shopify_variant_id].title : "") + '</p>';
                                        pageHtml += '<div class="wishlist-advanced-option">';
                                        if (app_widget_data.is_enable_show_quntity_picker == '1') {
                                            pageHtml += '<div class="wishlist_qty">';
                                            pageHtml += '<ul class="wsh_qty">';
                                            pageHtml += '<li class="wishlist-qty-event" data-type="minus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.1667 9H5.83333C5.3725 9 5 9.448 5 10C5 10.552 5.3725 11 5.83333 11H14.1667C14.6275 11 15 10.552 15 10C15 9.448 14.6275 9 14.1667 9" fill="currentColor"/></svg></span></li>';
                                            pageHtml += '<li><input type="text" id="wishlist-qty-event-' + index + '" value="' + object.quntity + '" readonly /></li>';
                                            pageHtml += '<li class="wishlist-qty-event" data-type="plus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4a1 1 0 0 0-1 1v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V5a1 1 0 0 0-1-1Z" fill="currentColor"/></svg></span></li>';
                                            pageHtml += '</ul>';
                                            pageHtml += '</div>';
                                        }
                                        if (app_widget_data.is_enable_show_variant_picker == '1') {
                                            pageHtml += '<div class="wishlist_droplist" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">';
                                            if (object.variants[object.shopify_variant_id].title != 'Default Title') {
                                                pageHtml += '<select class="wishlist-variant-picker" id="#wishlist-variant-picker-' + index + '" data-index="' + index + '">';
                                                for (const key in object.variants) {
                                                    pageHtml += '<option data-inventory_quantity="' + object.variants[key].inventory_quantity + '" data-inventory_management="' + object.variants[key].inventory_management + '"  data-inventory_policy="' + object.variants[key].inventory_policy + '"  value="' + object.variants[key].id + '" data-price="' + object.variants[key].price + '" ' + ((object.variants[key].id == object.shopify_variant_id) ? "selected" : "") + ' data-title="' + object.variants[key].title + '">' + object.variants[key].title + '</option>';
                                                }
                                                pageHtml += '</select>';
                                            }
                                            pageHtml += '</div>';
                                        }
                                        pageHtml += '</div>';
                                        if (app_widget_data.is_enable_show_movetocart_button == "1") {
                                            if (app_widget_data.is_enable_show_outofstock_button == 0) {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart" id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                            } else {
                                                if (object.variants[object.shopify_variant_id].inventory_quantity > 0 || object.variants[object.shopify_variant_id].inventory_management == 'null' || object.variants[object.shopify_variant_id].inventory_management == null || (object.variants[object.shopify_variant_id].inventory_management != '' && object.variants[object.shopify_variant_id].inventory_management != 'null' && object.variants[object.shopify_variant_id].inventory_management != null && object.variants[object.shopify_variant_id].inventory_policy == 'continue')) {
                                                    pageHtml += '<button class="wishlist-cart wishlist-move-cart" id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '"  >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                                } else {
                                                    pageHtml += '<button class="wishlist-cart wishlist-move-cart" id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonOutOfStockBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonOutOfStockTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';cursor: crosshair; pointer-events: none;" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">' + wishlist_page?.pageButtonOutOfStock?.value + '</button>';
                                                }
                                            }
                                        }
                                        pageHtml += '</div>';
                                        pageHtml += '<div class="wh-pro-button">';
                                        pageHtml += '<div>';
                                        pageHtml += '<button class="wh-wishlist-remove wishlist_page_remove_product" data-added="true" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >';
                                        pageHtml += '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5938 22C17.538 22 18.2818 21.2894 18.3106 20.3514L18.8542 4.12124H21V2.98438H14.9632V1.76224C14.9632 0.795875 14.1621 0 13.1894 0H7.81061C6.83791 0 6.03681 0.795875 6.03681 1.76224V2.98438H0V4.12124H2.14579L2.68944 20.3514C2.71798 21.2894 3.46197 22 4.40617 22H16.5938ZM7.18098 1.76204C7.18098 1.42101 7.46716 1.13671 7.81041 1.13671H13.1892C13.5324 1.13671 13.8186 1.42103 13.8186 1.76204V2.98418H7.18098V1.76204ZM3.83355 20.323L3.2899 4.12124H17.681L17.1373 20.323C17.1373 20.6357 16.8799 20.8631 16.5652 20.8631H4.40571C4.11972 20.8631 3.86206 20.6357 3.83355 20.323Z" fill="black"></path><path d="M9.92969 8.16016H11.074V16.659H9.92969V8.16016Z" fill="black"></path><path d="M6.49219 8.16016H7.6365V16.659H6.49219V8.16016Z" fill="black"></path><path d="M13.3594 8.16016H14.5037V16.659H13.3594V8.16016Z" fill="black"></path></svg>';
                                        pageHtml += '</button>';
                                        pageHtml += '</div>';
                                        pageHtml += '</div>';
                                        pageHtml += '</div>';
                                        pageHtml += '</div>';
                                    }
                                });
                                pageHtml += '</div>';

                                /* Wishlist List Layout END */
                            } else {
                                pageHtml += '<div class="wh-grid-layout active">';
                                pageHtml += '<div class="wishlist-row wishlistajaxLoad">';
                                /* Wishlist GRID Layout START */
                                (response.data || []).forEach(function (object, index) {
                                    if (object.variants && typeof object.variants[object.shopify_variant_id] != 'undefined' && object.variants[object.shopify_variant_id]) {

                                        pageHtml += '<div class="wishlist-column" id="wishlist_page_' + object.shopify_id + '_' + object.shopify_variant_id + '">';
                                        pageHtml += '<div class="wishlist-top">';
                                        pageHtml += '<a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '"><img src="' + (typeof object.variants[object.shopify_variant_id]?.image_src != 'undefined' && object.variants[object.shopify_variant_id]?.image_src != '' ? object.variants[object.shopify_variant_id]?.image_src : (object.image != '' ? object.image : "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_620x620.gif")) + '" alt="" /></a>';
                                        if (app_widget_data.is_enable_bulk_action == '1') {
                                            pageHtml += '<input type="checkbox" name="wishlist_item_checkbox" data-quntity="' + object.quntity + '" value="" data-wishlist-id="' + object.shopify_wishlist_id + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" class="wishlist_item_checkbox"  id="wishlist_item_checkbox_' + index + '" >';
                                        }
                                        pageHtml += '<button class="wishlist-remove wishlist_page_remove_product" data-added="true" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >';
                                        pageHtml += '<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M2.276.39L12 10.115 21.724.391c.486-.486 1.254-.519 1.777-.098l.108.098c.521.52.521 1.364 0 1.885L13.886 12l9.723 9.724c.521.52.521 1.365 0 1.885-.52.521-1.364.521-1.885 0L12 13.886l-9.724 9.723c-.486.486-1.254.519-1.777.098l-.108-.098c-.521-.52-.521-1.364 0-1.885L10.114 12 .391 2.276C-.13 1.756-.13.911.39.391.91-.13 1.755-.13 2.276.39z" id="close__a"></path></defs><use xlink:href="#close__a" fill-rule="evenodd"></use></svg>';
                                        pageHtml += '</button>';
                                        pageHtml += '</div>';
                                        pageHtml += '<div class="wihslist-meta">';
                                        if (object.vandor && app_widget_data.is_enable_show_vendor == 1) {
                                            pageHtml += '<p class="wishlistvendor">' + object.vandor + '</p>';
                                        }
                                        pageHtml += '<h3><a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '">' + object.title + '</a></h3>';
                                        pageHtml += '<p class="wishlist-price" data-price="' + object.variants[object.shopify_variant_id].price + '"  id="wishlist-price-' + index + '"><span class="money">' + ((app_widget_data.is_divided == 0) ? (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.money_format).replace("{{amount}}", (object.variants[object.shopify_variant_id].price)) : ((app_widget_data.is_divided == 100) ? Shopify.formatMoney(Math.ceil(parseFloat(object.variants[object.shopify_variant_id].price) * Shopify.currency.rate).toFixed(2).toString(), (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : ((app_widget_data.is_divided == 50) ? wishlistCustomCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : __this._wishlistCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format))))) + '</span></p>';
                                        pageHtml += '<p class="wishlist-variant" id="wishlist-variant-title-' + index + '">' + ((object.variants[object.shopify_variant_id].title != 'Default Title') ? object.variants[object.shopify_variant_id].title : "") + '</p>';
                                        pageHtml += '<div class="wishlist-advanced-option">';
                                        if (app_widget_data.is_enable_show_quntity_picker == '1') {
                                            pageHtml += '<div class="wishlist_qty">';
                                            pageHtml += '<ul class="wsh_qty">';
                                            pageHtml += '<li class="wishlist-qty-event" data-type="minus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.1667 9H5.83333C5.3725 9 5 9.448 5 10C5 10.552 5.3725 11 5.83333 11H14.1667C14.6275 11 15 10.552 15 10C15 9.448 14.6275 9 14.1667 9" fill="currentColor"/></svg></span></li>';
                                            pageHtml += '<li><input type="text" id="wishlist-qty-event-' + index + '" value="' + object.quntity + '" readonly /></li>';
                                            pageHtml += '<li class="wishlist-qty-event" data-type="plus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4a1 1 0 0 0-1 1v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V5a1 1 0 0 0-1-1Z" fill="currentColor"/></svg></span></li>';
                                            pageHtml += '</ul>';
                                            pageHtml += '</div>';
                                        }
                                        if (app_widget_data.is_enable_show_variant_picker == '1') {
                                            pageHtml += '<div class="wishlist_droplist" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">';
                                            if (object.variants[object.shopify_variant_id].title != 'Default Title') {
                                                pageHtml += '<select class="wishlist-variant-picker" id="#wishlist-variant-picker-' + index + '" data-index="' + index + '">';
                                                for (const key in object.variants) {
                                                    pageHtml += '<option data-inventory_quantity="' + object.variants[key].inventory_quantity + '" data-inventory_management="' + object.variants[key].inventory_management + '"  data-inventory_policy="' + object.variants[key].inventory_policy + '"  value="' + object.variants[key].id + '" data-price="' + object.variants[key].price + '" ' + ((object.variants[key].id == object.shopify_variant_id) ? "selected" : "") + '  data-title="' + object.variants[key].title + '">' + object.variants[key].title + '</option>';
                                                }
                                                pageHtml += '</select>';
                                            }
                                            pageHtml += '</div>';
                                        }
                                        pageHtml += '</div>';
                                        if (app_widget_data.is_enable_show_movetocart_button == "1") {
                                            if (app_widget_data.is_enable_show_outofstock_button == 0) {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart" id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                            } else {
                                                if (object.variants[object.shopify_variant_id].inventory_quantity > 0 || object.variants[object.shopify_variant_id].inventory_management == 'null' || object.variants[object.shopify_variant_id].inventory_management == null || (object.variants[object.shopify_variant_id].inventory_management != '' && object.variants[object.shopify_variant_id].inventory_management != 'null' && object.variants[object.shopify_variant_id].inventory_management != null && object.variants[object.shopify_variant_id].inventory_policy == 'continue')) {
                                                    pageHtml += '<button class="wishlist-cart wishlist-move-cart"  id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '"  data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                                } else {
                                                    pageHtml += '<button class="wishlist-cart wishlist-move-cart"  id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonOutOfStockBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonOutOfStockTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">' + wishlist_page?.pageButtonOutOfStock?.value + '</button>';
                                                }
                                            }
                                        }

                                        pageHtml += '</div>';
                                        pageHtml += '</div>';
                                    }
                                });

                                pageHtml += '</div>';
                                pageHtml += '</div>';

                                /* Wishlist GRID Layout END*/
                            }
                        } else {
                            pageHtml += '<div class="wishlsitnoitem"><p>' + wishlist_page?.pageEmptyWishlist.value + '</p></div>';
                        }
                        if (app_widget_data.is_enable_show_trending_wishlist == '1') {
                            pageHtml += '<div class="wishlist-trending-widget"></div>';
                            if (trending_widget_interval == '') {
                                setInterval(async function () {
                                    if (document.querySelectorAll('.wishlist-trending-widget:empty').length > 0) {
                                        clearTimeout(trending_widget_interval);
                                        trending_widget_interval = '';
                                        await __this._trendingWishlist();
                                    }
                                }, 500)
                            }
                        }
                        pageHtml += '</div>';

                        if (document.getElementById('sewp-engine-popup')) {
                            document.getElementById('sewp-engine-popupinr').innerHTML = pageHtml;
                        } else {
                            let popupDiv = document.createElement('div');
                            popupDiv.className = 'sewp-engine-popup';
                            popupDiv.setAttribute("id", "sewp-engine-popup");
                            let popupInnerDiv = document.createElement('div');
                            popupInnerDiv.className = 'sewp-engine-popupinr';
                            popupInnerDiv.setAttribute("id", "sewp-engine-popupinr");
                            popupInnerDiv.innerHTML = pageHtml;
                            popupDiv.appendChild(popupInnerDiv);
                            document.body.appendChild(popupDiv);
                        }
                        document.querySelectorAll('.wishlist_page_remove_product').forEach(function (element) {
                            element.addEventListener('click', function () {
                                __this._wishlistPageRemoveButton(element);
                            });
                        });
                        if (response.data.length <= 0 && document.querySelector('.bulk_action')) {
                            document.querySelector('.bulk_action').style.display = 'none';
                        }
                        document.querySelectorAll('.wishlist-move-cart').forEach(function (element) {
                            element.addEventListener('click', function () {
                                __this._wishlistAddToCart(element);
                            });
                        });
                        document.querySelector('.sewp-close').addEventListener('click', function () {
                            document.getElementById('sewp-engine-popup').remove();
                        });
                        __this._wishlist_share_trigger();


                        if (app_widget_data.is_enable_bulk_action == '1') {
                            __this._BulkActionEvent()
                        }
                        if (app_widget_data.is_enable_show_quntity_picker == '1') {
                            __this._WishlistQuntityEvent();
                        }
                        if (app_widget_data.is_enable_show_variant_picker == '1') {
                            __this._WishlistVariantPicker();
                        }

                        if (document.querySelectorAll('.wishlist_item_checkbox:checked').length <= 0) {
                            if (document.querySelector('#move_to_cart_all')) {
                                document.querySelector('#move_to_cart_all').style.display = 'none';
                            }
                            if (document.querySelector('#delete_all')) {
                                document.querySelector('#delete_all').style.display = 'none';
                            }
                        } else {
                            if (document.querySelector('#move_to_cart_all')) {
                                document.querySelector('#move_to_cart_all').style.display = 'block';
                            }
                            if (document.querySelector('#delete_all')) {
                                document.querySelector('#delete_all').style.display = 'block';
                            }
                        }

                        typeof checkShopifyFormatMoney == 'function' && checkShopifyFormatMoney();

                        __this._faceBookPixelTracking("wishlistPageLoad", {});
                        document.dispatchEvent(new CustomEvent('wishlist:page:loaded', { bubbles: true, cancelable: false }));
                    });
                } else {
                    window.location.href = "/" + wishlist_proxy_url;
                }
            },
            _setWishlistTotalCount: async function (wishlistTotalCount) {
                __this._setCookie("WISHLIST_TOTAL", wishlistTotalCount);
                document.querySelectorAll('.wishlist-total-count').forEach(function (element) {
                    element.innerHTML = parseInt(wishlistTotalCount) ?? 0;
                    element.dataset.total = parseInt(wishlistTotalCount) ?? 0;
                })
            },
            _wishlist_share_trigger: function () {

                document.querySelectorAll('.wishlist-share-triger').forEach(function (element) {
                    element.addEventListener('click', function () {
                        if (element.dataset.trigger == 'facebook') {
                            window.open(
                                `https://www.facebook.com/sharer/sharer.php?u=${location.origin}/${wishlist_proxy_url}/?share_id=${btoa(app_UUID_ID)}`,
                                "_blank"
                            );
                        } else if (element.dataset.trigger == 'twitter') {
                            window.open(
                                `https://twitter.com/intent/tweet?text="${wishlist_page?.shareWishlistText?.value ?? 'Hey there! Check out '}"&url=${location.origin}/${wishlist_proxy_url}/?share_id=${btoa(app_UUID_ID)}`,
                                "_blank"
                            );
                        } else if (element.dataset.trigger == 'mail') {
                            window.location.href = `mailto:?&subject=${wishlist_page?.shareWishlistText?.value ?? 'Hey there! Check out My Wishlist'}&body=${location.origin}/${wishlist_proxy_url}/?share_id=${btoa(app_UUID_ID)}`;
                        } else if (element.dataset.trigger == 'whatsapp') {
                            window.open(
                                `https://api.whatsapp.com/send?text=${location.origin}/${wishlist_proxy_url}/?share_id=${btoa(app_UUID_ID)}`,
                                "_blank"
                            );
                        } else if (element.dataset.trigger == 'link') {
                            navigator.clipboard.writeText(`${location.origin}/${wishlist_proxy_url}/?share_id=${btoa(app_UUID_ID)}`);

                            if (app_widget_data.is_enable_wishlist_notification_popup == 1) {
                                wishlist_message = JSON.parse(app_widget_data.wishlist_message);

                                var popupElementDiv = document.createElement('div')
                                popupElementDiv.className = 'wishlist-popup';
                                var uniqId = Math.floor(Math.random() * 101);
                                popupElementDiv.setAttribute('id', 'wishlist-popup-' + uniqId);
                                popupElementDiv.setAttribute('data-position', ((app_widget_data.wishlist_notification_popup_position == '1') ? "top-left" : (app_widget_data.wishlist_notification_popup_position == '2') ? 'top-right' : (app_widget_data.wishlist_notification_popup_position == '3') ? 'bottom-left' : (app_widget_data.wishlist_notification_popup_position == '4') ? 'bottom-right' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'left-center' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'right-center' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'top-center' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'bottom-center' : ''));

                                var html = '';
                                html += '<button class="close-wishlist" data-uniqId="' + uniqId + '">';
                                html += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="_02_User" data-name="02 User"><path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z" fill="#000000" data-original="#000000" class=""></path><path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z" fill="#000000" data-original="#000000" class=""></path></g></g></svg>';
                                html += '</button>';
                                html += '<div class="wishlit-popupinr">';
                                html += '<div class="wishlist-p-right">';
                                html += '<h3>' + (wishlist_message?.successMessageShareUrlCopy?.value ?? "Wishlist url copied successfully!") + '</h3>';
                                if (app_plan_type == 0) {
                                    html += '<p>Powered by Script Engine</p>';
                                } else {
                                    if (is_enable_show_branding == "1") {
                                        html += '<p>' + branding_text + '</p>';
                                    }
                                }
                                html += '</div>';
                                html += '</div>';
                                html += '</div>';
                                popupElementDiv.innerHTML = html;
                                document.body.appendChild(popupElementDiv);


                                var interval1 = setTimeout(function () {
                                    document.getElementById('wishlist-popup-' + uniqId).style.transform = (app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,0%)' : 'translate(-50%,0%)';

                                    interval2 = setTimeout(function () {
                                        document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                                        interval3 = setTimeout(function () {
                                            document.getElementById('wishlist-popup-' + uniqId).remove();
                                        }, 100);
                                    }, (app_widget_data.wishlist_notification_popup_duration_time * 1000));
                                }, 500);
                                document.querySelectorAll('.close-wishlist').forEach(function (element, index) {
                                    element.addEventListener('click', function () {
                                        document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                                        setTimeout(function () {
                                            clearTimeout(interval1);
                                            clearTimeout(interval2);
                                            document.getElementById('wishlist-popup-' + element.dataset.uniqid)?.remove();
                                        }, 100);
                                    })
                                });
                            }
                        }

                    });
                })
            },
            _setWishlistButtonLoad: async function (responseJson) {

                (responseJson.data).forEach(function (object, index) {
                    document.querySelectorAll('.wishlist-engine[data-product_id="' + object.product_id + '"]' + (app_widget_data.is_enable_wishlist_variant_level == 1 ? '[data-variant_id="' + object.variant_id + '"]' : '')).forEach(function (wishlistButtonSelecter) {
                        if (wishlistButtonSelecter.dataset.full_button == 'true') {
                            let wishlistButton = '';
                            if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '" ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? `style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"` : `style="background:transparent;"`) + '>';
                            } else {
                                wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '">';
                            }

                            if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '5') {
                                if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                    wishlistButton += '<span class="wishlist-icon">' + (object.is_exist ? heartFillIcon.replaceAll("currentColor", wishlist_widget?.wishlistButtonTextColor) : heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor)) + '</span>';
                                } else {
                                    wishlistButton += '<span class="wishlist-icon">' + (object.is_exist ? heartFillIcon : heartIcon) + '</span>';
                                }
                            }
                            if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '4') {
                                wishlistButton += '<span class="wishlist-text" style="color:' + wishlist_widget?.wishlistButtonTextColor + '">' + (object.is_exist ? wishlist_widget.wishlistButtonAfterText : wishlist_widget.wishlistButtonBeforeText) + '</span>';
                            }
                            if (app_widget_data.is_enable_public_wishlist_count == 1) {
                                wishlistButton += '<span class="wishlist-count" data-total="' + object.total + '">(' + object.total + ')</span>';
                            }
                            wishlistButton += '</div>';
                            wishlistButtonSelecter.innerHTML = wishlistButton;
                            if (object.is_exist) {
                                wishlistButtonSelecter.setAttribute("data-added", "true");
                            } else {
                                wishlistButtonSelecter.setAttribute("data-added", "false");
                            }

                        } else {
                            if (object.is_exist) {
                                if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                    wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button" ' + (`style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"`) + '><span class="wishlist-icon">' + heartFillIcon.replaceAll("currentColor", wishlist_widget?.wishlistButtonTextColor) + '</span></div>';
                                } else {
                                    wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button-icon"><span class="wishlist-icon">' + heartFillIcon + '</span></div>';
                                }
                                wishlistButtonSelecter.setAttribute("data-added", "true");
                            } else {
                                if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                    wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button" ' + (`style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"`) + '><span class="wishlist-icon">' + heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor) + '</span></div>';
                                } else {
                                    wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button-icon"><span class="wishlist-icon">' + heartIcon + '</span></div>';
                                }
                                wishlistButtonSelecter.setAttribute("data-added", "false");
                            }
                        }
                        wishlistButtonSelecter.setAttribute("data-total", object.total);
                        wishlistButtonSelecter.setAttribute("data-wishlist_count", app_widget_data.is_enable_public_wishlist_count);
                    });
                });
                document.querySelectorAll('.wishlist-engine[data-product_id="' + ShopifyAnalytics.meta.product?.id + '"]').forEach(function (wishlistButtonSelecter) {
                    wishlistButtonSelecter.setAttribute("data-variants-ids", (responseJson[ShopifyAnalytics.meta.product?.id] ? JSON.stringify(responseJson[ShopifyAnalytics.meta.product?.id]) : JSON.stringify([])));
                });
            },
            _createSingleInstanceOfCSS: async function (assetURL, sectionSelector = "head") {
                __this._checkElement(sectionSelector).then((element) => {
                    const instance = document.querySelector('link[href*="' + assetURL + '"]')
                    if (instance === null) {
                        const cssLink = document.createElement("link");
                        cssLink.rel = "stylesheet";
                        cssLink.media = "screen";
                        cssLink.href = assetURL;
                        element[0].prepend(cssLink);
                    }
                });
            },
            _checkElement: async function (selector) {
                let querySelector = null;
                while (querySelector === null) {
                    await __this._rafAsync();
                    querySelector = document.querySelectorAll(selector);
                }
                return querySelector;
            },
            _rafAsync: function () {
                return new Promise(resolve => {
                    requestAnimationFrame(resolve);
                });
            },
            _XMLHttpRequest: function (method, url, payload, callback) {
                payload.shop = Shopify.shop;
                let requestPayload = {};
                if (method == 'POST') {
                    requestPayload = {
                        method,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }
                    if (url == window.Shopify.routes.root + 'cart/add.js') {
                        requestPayload.cache = "no-cache";
                    }
                } else {
                    requestPayload = {
                        method,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }
                }
                fetch(url, requestPayload).then(response => response.json()).then((response) => {
                    callback((response.status ? 200 : (response.status ?? 200)), response);
                }).catch((error) => {
                    callback(400, error);
                });
            },
            _setCookie: function (key, value, days = 30) {
                var i = new Date;
                i.setTime(i.getTime() + (days * 24 * 60 * 60 * 1000));
                var l = "expires=" + i.toUTCString();
                document.cookie = key + "=" + value + ";" + l + ";path=/", "WISHLIST_UUID" == key
            },
            _getCookie: function (key) {
                for (var e = key + "=", s = decodeURIComponent(document.cookie).split(";"), i = 0; i < s.length; i++) {
                    for (var l = s[i];
                        " " == l.charAt(0);)
                        l = l.substring(1);
                    if (0 == l.indexOf(e))
                        return l.substring(e.length, l.length)
                }
                return ""
            },
            _wishlistAlerMessage: function (key, object = {}) {
                if (app_widget_data.is_enable_wishlist_notification_popup == 1 && key != 'successMessageAddToCart' && key != 'custom' && key != 'successMessageAddToCartAll') {
                    wishlist_message = JSON.parse(app_widget_data.wishlist_message);

                    var popupElementDiv = document.createElement('div')
                    popupElementDiv.className = 'wishlist-popup';
                    var uniqId = Math.floor(Math.random() * 101);
                    popupElementDiv.setAttribute('id', 'wishlist-popup-' + uniqId);
                    popupElementDiv.setAttribute('data-position', ((app_widget_data.wishlist_notification_popup_position == '1') ? "top-left" : (app_widget_data.wishlist_notification_popup_position == '2') ? 'top-right' : (app_widget_data.wishlist_notification_popup_position == '3') ? 'bottom-left' : (app_widget_data.wishlist_notification_popup_position == '4') ? 'bottom-right' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'left-center' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'right-center' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'top-center' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'bottom-center' : ''));

                    var html = '';
                    html += '<button class="close-wishlist" data-uniqId="' + uniqId + '">';
                    html += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="_02_User" data-name="02 User"><path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z" fill="#000000" data-original="#000000" class=""></path><path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z" fill="#000000" data-original="#000000" class=""></path></g></g></svg>';
                    html += '</button>';
                    html += '<div class="wishlit-popupinr">';
                    if (["susccessMessageWithoutLogin", "susccessMessageWithLogin"].includes(key)) {
                        html += '<div class="wishlist-p-left">';
                        html += '<a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '"><img src="' + (object.image != '' ? object.image : 'https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_620x620.gif') + '"></a>';
                        html += '</div>';
                    }
                    html += '<div class="wishlist-p-right">';
                    html += '<h3>' + wishlist_message[key].value + '</h3>';
                    if (app_plan_type == 0) {
                        html += '<p>Powered by Script Engine</p>';
                    } else {
                        if (is_enable_show_branding == "1") {
                            html += '<p>' + branding_text + '</p>';
                        }
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    popupElementDiv.innerHTML = html;
                    document.body.appendChild(popupElementDiv);


                    var interval1 = setTimeout(function () {
                        document.getElementById('wishlist-popup-' + uniqId).style.transform = (app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,0%)' : 'translate(-50%,0%)';

                        interval2 = setTimeout(function () {
                            document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                            interval3 = setTimeout(function () {
                                document.getElementById('wishlist-popup-' + uniqId).remove();
                            }, 100);
                        }, (app_widget_data.wishlist_notification_popup_duration_time * 1000));
                    }, 500);
                    document.querySelectorAll('.close-wishlist').forEach(function (element, index) {
                        element.addEventListener('click', function () {
                            document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                            setTimeout(function () {
                                clearTimeout(interval1);
                                clearTimeout(interval2);
                                document.getElementById('wishlist-popup-' + element.dataset.uniqid)?.remove();
                            }, 100);
                        })
                    });
                } else if (app_widget_data.is_enable_cart_notification_popup == 1 && key == 'successMessageAddToCartAll') {
                    wishlist_message = JSON.parse(app_widget_data.wishlist_message);

                    var popupElementDiv = document.createElement('div')
                    popupElementDiv.className = 'wishlist-popup';
                    var uniqId = Math.floor(Math.random() * 101);
                    popupElementDiv.setAttribute('id', 'wishlist-popup-' + uniqId);
                    popupElementDiv.setAttribute('data-position', ((app_widget_data.wishlist_notification_popup_position == '1') ? "top-left" : (app_widget_data.wishlist_notification_popup_position == '2') ? 'top-right' : (app_widget_data.wishlist_notification_popup_position == '3') ? 'bottom-left' : (app_widget_data.wishlist_notification_popup_position == '4') ? 'bottom-right' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'left-center' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'right-center' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'top-center' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'bottom-center' : ''));

                    var html = '';
                    html += '<button class="close-wishlist" data-uniqId="' + uniqId + '">';
                    html += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="_02_User" data-name="02 User"><path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z" fill="#000000" data-original="#000000" class=""></path><path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z" fill="#000000" data-original="#000000" class=""></path></g></g></svg>';
                    html += '</button>';
                    html += '<div class="wishlit-popupinr">';
                    html += '<div class="wishlist-p-right">';
                    html += '<h3>' + (wishlist_message['successMessageAddToCart']?.value ?? 'Item added to your cart.') + '</h3>';
                    if (app_plan_type == 0) {
                        html += '<p>Powered by Script Engine</p>';
                    } else {
                        if (is_enable_show_branding == "1") {
                            html += '<p>' + branding_text + '</p>';
                        }
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    popupElementDiv.innerHTML = html;
                    document.body.appendChild(popupElementDiv);


                    var interval1 = setTimeout(function () {
                        document.getElementById('wishlist-popup-' + uniqId).style.transform = (app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,0%)' : 'translate(-50%,0%)';

                        interval2 = setTimeout(function () {
                            document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                            interval3 = setTimeout(function () {
                                document.getElementById('wishlist-popup-' + uniqId).remove();
                            }, 100);
                        }, (app_widget_data.wishlist_notification_popup_duration_time * 1000));
                    }, 500);
                    document.querySelectorAll('.close-wishlist').forEach(function (element, index) {
                        element.addEventListener('click', function () {
                            document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                            setTimeout(function () {
                                clearTimeout(interval1);
                                clearTimeout(interval2);
                                document.getElementById('wishlist-popup-' + element.dataset.uniqid)?.remove();
                            }, 100);
                        })
                    });
                } else if (app_widget_data.is_enable_cart_notification_popup == 1 && key == 'successMessageAddToCart') {

                    wishlist_message = JSON.parse(app_widget_data.wishlist_message);

                    var popupElementDiv = document.createElement('div')
                    popupElementDiv.className = 'wishlist-popup';
                    var uniqId = Math.floor(Math.random() * 101);
                    popupElementDiv.setAttribute('id', 'wishlist-popup-' + uniqId);
                    popupElementDiv.setAttribute('data-position', ((app_widget_data.wishlist_notification_popup_position == '1') ? "top-left" : (app_widget_data.wishlist_notification_popup_position == '2') ? 'top-right' : (app_widget_data.wishlist_notification_popup_position == '3') ? 'bottom-left' : (app_widget_data.wishlist_notification_popup_position == '4') ? 'bottom-right' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'left-center' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'right-center' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'top-center' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'bottom-center' : ''));

                    var html = '';
                    html += '<button class="close-wishlist" data-uniqId="' + uniqId + '">';
                    html += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="_02_User" data-name="02 User"><path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z" fill="#000000" data-original="#000000" class=""></path><path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z" fill="#000000" data-original="#000000" class=""></path></g></g></svg>';
                    html += '</button>';
                    html += '<div class="wishlit-popupinr">';
                    if (["successMessageAddToCart"].includes(key)) {
                        html += '<div class="wishlist-p-left">';
                        html += '<a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.items[0].handle + '"><img src="' + (object.items[0].image != '' ? object.items[0].image : 'https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_620x620.gif') + '"></a>';
                        html += '</div>';
                    }
                    html += '<div class="wishlist-p-right">';
                    html += '<h3>' + (wishlist_message[key]?.value ?? 'Item added to your cart.') + '</h3>';
                    if (app_plan_type == 0) {
                        html += '<p>Powered by Script Engine</p>';
                    } else {
                        if (is_enable_show_branding == "1") {
                            html += '<p>' + branding_text + '</p>';
                        }
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    popupElementDiv.innerHTML = html;
                    document.body.appendChild(popupElementDiv);


                    var interval1 = setTimeout(function () {
                        document.getElementById('wishlist-popup-' + uniqId).style.transform = (app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,0%)' : 'translate(-50%,0%)';

                        interval2 = setTimeout(function () {
                            document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                            interval3 = setTimeout(function () {
                                document.getElementById('wishlist-popup-' + uniqId).remove();
                            }, 100);
                        }, (app_widget_data.wishlist_notification_popup_duration_time * 1000));
                    }, 500);
                    document.querySelectorAll('.close-wishlist').forEach(function (element, index) {
                        element.addEventListener('click', function () {
                            document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                            setTimeout(function () {
                                clearTimeout(interval1);
                                clearTimeout(interval2);
                                document.getElementById('wishlist-popup-' + element.dataset.uniqid)?.remove();
                            }, 100);
                        })
                    });
                } else if (app_widget_data.is_enable_cart_notification_popup == 1 && key == 'custom') {

                    var popupElementDiv = document.createElement('div')
                    popupElementDiv.className = 'wishlist-popup';
                    var uniqId = Math.floor(Math.random() * 101);
                    popupElementDiv.setAttribute('id', 'wishlist-popup-' + uniqId);
                    popupElementDiv.setAttribute('data-position', ((app_widget_data.wishlist_notification_popup_position == '1') ? "top-left" : (app_widget_data.wishlist_notification_popup_position == '2') ? 'top-right' : (app_widget_data.wishlist_notification_popup_position == '3') ? 'bottom-left' : (app_widget_data.wishlist_notification_popup_position == '4') ? 'bottom-right' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'left-center' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'right-center' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'top-center' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'bottom-center' : ''));

                    var html = '';
                    html += '<button class="close-wishlist" data-uniqId="' + uniqId + '">';
                    html += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="_02_User" data-name="02 User"><path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z" fill="#000000" data-original="#000000" class=""></path><path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z" fill="#000000" data-original="#000000" class=""></path></g></g></svg>';
                    html += '</button>';
                    html += '<div class="wishlit-popupinr">';
                    html += '<div class="wishlist-p-right">';
                    if (object.description.includes("are in your cart")) {
                        html += '<h3>' + object.description.replace('All 0', 'The product').replace('are in your cart', 'is already sold out.') + '</h3>';
                    } else {
                        html += '<h3>' + object.description + '</h3>';
                    }

                    if (app_plan_type == 0) {
                        html += '<p>Powered by Script Engine</p>';
                    } else {
                        if (is_enable_show_branding == "1") {
                            html += '<p>' + branding_text + '</p>';
                        }
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    popupElementDiv.innerHTML = html;
                    document.body.appendChild(popupElementDiv);
                    var interval1 = setTimeout(function () {
                        document.getElementById('wishlist-popup-' + uniqId).style.transform = (app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '5') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(0%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(0%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,0%)' : 'translate(-50%,0%)';

                        interval2 = setTimeout(function () {
                            document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                            interval3 = setTimeout(function () {
                                document.getElementById('wishlist-popup-' + uniqId).remove();
                            }, 100);
                        }, (app_widget_data.wishlist_notification_popup_duration_time * 1000));
                    }, 500);
                    document.querySelectorAll('.close-wishlist').forEach(function (element, index) {
                        element.addEventListener('click', function () {
                            document.getElementById('wishlist-popup-' + uniqId).style.transform = ((app_widget_data.wishlist_notification_popup_position == '1' || app_widget_data.wishlist_notification_popup_position == '3') ? 'translateX(-100%)' : (app_widget_data.wishlist_notification_popup_position == '2' || app_widget_data.wishlist_notification_popup_position == '4') ? 'translateX(100%)' : app_widget_data.wishlist_notification_popup_position == '5' ? 'translate(-100%,-50%)' : (app_widget_data.wishlist_notification_popup_position == '6') ? 'translate(100%, -50%)' : (app_widget_data.wishlist_notification_popup_position == '7') ? 'translate(-50%,-150%)' : (app_widget_data.wishlist_notification_popup_position == '8') ? 'translate(-50%,150%)' : '');
                            setTimeout(function () {
                                clearTimeout(interval1);
                                clearTimeout(interval2);
                                document.getElementById('wishlist-popup-' + element.dataset.uniqid)?.remove();
                            }, 100);
                        })
                    });
                }
            },
            _wishlistSearchData: async function (callback) {
                const params = new Proxy(new URLSearchParams(window.location.search), {
                    get: (searchParams, prop) => searchParams.get(prop),
                });
                let payload = {
                    uuid: app_UUID_ID,
                    ip_address: app_ip_address,
                    customer_id: app_customre_id,
                    customers: JSON.parse(document.getElementById('wishlist-engine-customer-records')?.textContent ?? '{}'),
                    shopify_store_id: app_store_id,
                    shopify_store: Shopify.shop,
                    search: document.getElementById("wishlist-input")?.value ?? '',
                    active_currency: Shopify?.currency?.active ?? '',
                    share_id: params.share_id ? atob(params.share_id) : '',
                }
                await __this._XMLHttpRequest("POST", app_base_url_wishlist + '/apps-wishlist', payload, (function (status, response) {
                    if (status == 200) {
                        callback(response);
                    }
                }));
            },
            _wishlistPageWidgetData: async function () {
                var pageHtml = '<div class="wishlist-container" id="wishlist-page-contain">';
                pageHtml += '<div class="headerwishlist">';
                pageHtml += '<h1 class="wishlist-heading">' + (wishlist_page?.pageTitle?.value ?? "Wishlist") + '</h1>';
                if (app_widget_data.is_enable_share_wishlist == "1") {
                    pageHtml += '<ul class="wishlist-share">';
                    if (app_widget_data.is_share_facebook == "1") {
                        pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.shareOnFaceBook?.value ?? "Share on facebook") + '" data-trigger="facebook"><svg viewBox="0 0 96.227 96.227" ><path fill="currentColor" d="M73.099,15.973l-9.058,0.004c-7.102,0-8.477,3.375-8.477,8.328v10.921h16.938l-0.006,17.106H55.564v43.895H37.897V52.332   h-14.77V35.226h14.77V22.612C37.897,7.972,46.84,0,59.9,0L73.1,0.021L73.099,15.973L73.099,15.973z"></path></svg></a></li>';
                    }
                    if (app_widget_data.is_share_twitter == "1") {
                        pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.shareOnTwitter?.value ?? "Share on twitter") + '" data-trigger="twitter"><svg version="1.1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M23.444,4.834c-0.814,0.363-1.5,0.375-2.228,0.016c0.938-0.562,0.981-0.957,1.32-2.019c-0.878,0.521-1.851,0.9-2.886,1.104 C18.823,3.053,17.642,2.5,16.335,2.5c-2.51,0-4.544,2.036-4.544,4.544c0,0.356,0.04,0.703,0.117,1.036 C8.132,7.891,4.783,6.082,2.542,3.332C2.151,4.003,1.927,4.784,1.927,5.617c0,1.577,0.803,2.967,2.021,3.782 C3.203,9.375,2.503,9.171,1.891,8.831C1.89,8.85,1.89,8.868,1.89,8.888c0,2.202,1.566,4.038,3.646,4.456 c-0.666,0.181-1.368,0.209-2.053,0.079c0.579,1.804,2.257,3.118,4.245,3.155C5.783,18.102,3.372,18.737,1,18.459 C3.012,19.748,5.399,20.5,7.966,20.5c8.358,0,12.928-6.924,12.928-12.929c0-0.198-0.003-0.393-0.012-0.588 C21.769,6.343,22.835,5.746,23.444,4.834z"></path></svg></a></li>';
                    }
                    if (app_widget_data.is_share_whatsapp == "1") {
                        pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.shareOnWhatsapp?.value ?? "Share on whatsapp") + '" data-trigger="whatsapp"><svg xmlns="https://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M20.1,3.9C17.9,1.7,15,0.5,12,0.5C5.8,0.5,0.7,5.6,0.7,11.9c0,2,0.5,3.9,1.5,5.6l-1.6,5.9l6-1.6c1.6,0.9,3.5,1.3,5.4,1.3l0,0l0,0c6.3,0,11.4-5.1,11.4-11.4C23.3,8.9,22.2,6,20.1,3.9z M12,21.4L12,21.4c-1.7,0-3.3-0.5-4.8-1.3l-0.4-0.2l-3.5,1l1-3.4L4,17c-1-1.5-1.4-3.2-1.4-5.1c0-5.2,4.2-9.4,9.4-9.4c2.5,0,4.9,1,6.7,2.8c1.8,1.8,2.8,4.2,2.8,6.7C21.4,17.2,17.2,21.4,12,21.4z M17.1,14.3c-0.3-0.1-1.7-0.9-1.9-1c-0.3-0.1-0.5-0.1-0.7,0.1c-0.2,0.3-0.8,1-0.9,1.1c-0.2,0.2-0.3,0.2-0.6,0.1c-0.3-0.1-1.2-0.5-2.3-1.4c-0.9-0.8-1.4-1.7-1.6-2c-0.2-0.3,0-0.5,0.1-0.6s0.3-0.3,0.4-0.5c0.2-0.1,0.3-0.3,0.4-0.5c0.1-0.2,0-0.4,0-0.5c0-0.1-0.7-1.5-1-2.1C8.9,6.6,8.6,6.7,8.5,6.7c-0.2,0-0.4,0-0.6,0S7.5,6.8,7.2,7c-0.3,0.3-1,1-1,2.4s1,2.8,1.1,3c0.1,0.2,2,3.1,4.9,4.3c0.7,0.3,1.2,0.5,1.6,0.6c0.7,0.2,1.3,0.2,1.8,0.1c0.6-0.1,1.7-0.7,1.9-1.3c0.2-0.7,0.2-1.2,0.2-1.3C17.6,14.5,17.4,14.4,17.1,14.3z"></path></svg></a></li>';
                    }
                    if (app_widget_data.is_share_email == "1") {
                        pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.shareOnEmail?.value ?? "Share on email") + '"  data-trigger="mail"><svg version="1.1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24" "=""><path fill="currentColor" d="M22,4H2C0.897,4,0,4.897,0,6v12c0,1.103,0.897,2,2,2h20c1.103,0,2-0.897,2-2V6C24,4.897,23.103,4,22,4z M7.248,14.434 l-3.5,2C3.67,16.479,3.584,16.5,3.5,16.5c-0.174,0-0.342-0.09-0.435-0.252c-0.137-0.239-0.054-0.545,0.186-0.682l3.5-2 c0.24-0.137,0.545-0.054,0.682,0.186C7.571,13.992,7.488,14.297,7.248,14.434z M12,14.5c-0.094,0-0.189-0.026-0.271-0.08l-8.5-5.5 C2.997,8.77,2.93,8.46,3.081,8.229c0.15-0.23,0.459-0.298,0.691-0.147L12,13.405l8.229-5.324c0.232-0.15,0.542-0.084,0.691,0.147 c0.15,0.232,0.083,0.542-0.148,0.691l-8.5,5.5C12.189,14.474,12.095,14.5,12,14.5z M20.934,16.248 C20.842,16.41,20.673,16.5,20.5,16.5c-0.084,0-0.169-0.021-0.248-0.065l-3.5-2c-0.24-0.137-0.323-0.442-0.186-0.682 s0.443-0.322,0.682-0.186l3.5,2C20.988,15.703,21.071,16.009,20.934,16.248z"></path></svg></a></li>';
                    }
                    if (app_widget_data.is_share_url == "1") {
                        pageHtml += '<li><a href="javascript:void(0)" class="wishlist-share-triger" title="' + (wishlist_page?.ShareCopyLink?.value ?? "Copy link") + '" data-trigger="link"><svg xmlns="https://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><path fill="currentColor" d="M459.654,233.373l-90.531,90.5c-49.969,50-131.031,50-181,0c-7.875-7.844-14.031-16.688-19.438-25.813 l42.063-42.063c2-2.016,4.469-3.172,6.828-4.531c2.906,9.938,7.984,19.344,15.797,27.156c24.953,24.969,65.563,24.938,90.5,0 l90.5-90.5c24.969-24.969,24.969-65.563,0-90.516c-24.938-24.953-65.531-24.953-90.5,0l-32.188,32.219 c-26.109-10.172-54.25-12.906-81.641-8.891l68.578-68.578c50-49.984,131.031-49.984,181.031,0 C509.623,102.342,509.623,183.389,459.654,233.373z M220.326,382.186l-32.203,32.219c-24.953,24.938-65.563,24.938-90.516,0 c-24.953-24.969-24.953-65.563,0-90.531l90.516-90.5c24.969-24.969,65.547-24.969,90.5,0c7.797,7.797,12.875,17.203,15.813,27.125 c2.375-1.375,4.813-2.5,6.813-4.5l42.063-42.047c-5.375-9.156-11.563-17.969-19.438-25.828c-49.969-49.984-131.031-49.984-181.016,0 l-90.5,90.5c-49.984,50-49.984,131.031,0,181.031c49.984,49.969,131.031,49.969,181.016,0l68.594-68.594 C274.561,395.092,246.42,392.342,220.326,382.186z"></path></svg></a></li>';
                    }
                    pageHtml += '</ul>';
                }
                pageHtml += '</div>';
                /* Wishlist Page Header */
                pageHtml += '<div class="wishlist-header">';
                pageHtml += '<div class="wishlist-header-left">';
                pageHtml += '<div class="wishlist-form">';
                pageHtml += '<div class="wishlist-fromwrap">';
                pageHtml += '<span class="wh-search-icon">';
                pageHtml += '<svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke="currentColor"><circle cx="10.364" cy="10.364" r="10.364"></circle><path stroke-linecap="square" d="m18 18 5.777 5.788"></path></g></g></svg>';
                pageHtml += '</span>';
                pageHtml += '<input type="text" placeholder="' + wishlist_page?.pageSearchBoxPlaceHolder?.value + '" id="wishlist-input" onkeyup="searchProcessChange()"/>';
                pageHtml += '</div>';
                pageHtml += '</div>';
                pageHtml += '</div>';
                /*pageHtml += '<div class="wishlist-header-right">';
                if (app_widget_data.wishlist_view === 1) {
                    pageHtml += '<button class="list-button">';
                    pageHtml += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g id="Layer_1"> <path d="M8,15c3.86,0,7-3.14,7-7s-3.14-7-7-7S1,4.14,1,8S4.14,15,8,15z M8,3c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5 S5.243,3,8,3z"/> <rect x="18" y="7" width="31" height="2"/><path d="M8,32c3.86,0,7-3.14,7-7s-3.14-7-7-7s-7,3.14-7,7S4.14,32,8,32z M8,20c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5 S5.243,20,8,20z"/><rect x="18" y="24" width="31" height="2"/><path d="M8,49c3.86,0,7-3.14,7-7s-3.14-7-7-7s-7,3.14-7,7S4.14,49,8,49z M8,37c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5 S5.243,37,8,37z"/><rect x="18" y="41" width="31" height="2"/></g><g></g></svg>';
                    pageHtml += '</button>';
                } else {
                    pageHtml += '<button class="grid-button active">';
                    pageHtml += '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><path d="M8.775,24.477h12.914c0.553,0,1-0.447,1-1V10.563c0-0.553-0.447-1-1-1H8.775c-0.553,0-1,0.447-1,1v12.914 C7.775,24.029,8.223,24.477,8.775,24.477z M9.775,11.563h10.914v10.914H9.775V11.563z"/><path d="M25.861,24.477h12.914c0.553,0,1-0.447,1-1V10.563c0-0.553-0.447-1-1-1H25.861c-0.553,0-1,0.447-1,1v12.914 C24.861,24.029,25.309,24.477,25.861,24.477z M26.861,11.563h10.914v10.914H26.861V11.563z"/><path d="M8.775,41.563h12.914c0.553,0,1-0.447,1-1V27.648c0-0.553-0.447-1-1-1H8.775c-0.553,0-1,0.447-1,1v12.914 C7.775,41.115,8.223,41.563,8.775,41.563z M9.775,28.648h10.914v10.914H9.775V28.648z"/><path d="M24.861,40.563c0,0.553,0.447,1,1,1h12.914c0.553,0,1-0.447,1-1V27.648c0-0.553-0.447-1-1-1H25.861c-0.553,0-1,0.447-1,1 V40.563z M26.861,28.648h10.914v10.914H26.861V28.648z"/></svg>';
                    pageHtml += '</button>';
                }
                pageHtml += '</div>';*/
                pageHtml += '</div>';
                if (app_widget_data.is_enable_bulk_action == '1') {
                    pageHtml += '<ul class="bulk_action">';
                    pageHtml += '<li><input type="checkbox" id="wishlist_select_all" name="select_all" value="select_all" aria-label="Select products in bulk"><label for="wishlist_select_all">' + (wishlist_page?.pageBulkButtonSelectAll?.value ?? "Select All") + '</label></li>';
                    pageHtml += '<li><a href="javascript:void(0)" aria-describedby="a11y-external-message" data-type="move-to-cart" id="move_to_cart_all">' + (wishlist_page?.pageBulkButtonMoveToCart?.value ?? "Wishlist") + '</a></li>';
                    pageHtml += '<li><a href="javascript:void(0)" aria-describedby="a11y-external-message" data-type="delete" id="delete_all">' + (wishlist_page?.pageBulkButtonDelete?.value ?? "Wishlist") + '</a></li>';
                    pageHtml += '</ul>';
                }
                await __this._wishlistSearchData(function (response) {
                    if (response.data.length) {
                        if (app_widget_data.wishlist_view === 1) {
                            /* Wishlist List Layout */
                            pageHtml += '<div class="wh-list-layout active wishlistajaxLoad">';
                            (response.data || []).forEach(function (object, index) {
                                if (object.variants && typeof object.variants[object.shopify_variant_id] != 'undefined' && object.variants[object.shopify_variant_id]) {
                                    pageHtml += '<div class="wh-list-column" id="wishlist_page_' + object.shopify_id + '_' + object.shopify_variant_id + '" data-id="' + index + '">';
                                    pageHtml += '<div class="wh-list-left">';
                                    pageHtml += '<a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '"><img src="' + (typeof object.variants[object.shopify_variant_id]?.image_src != 'undefined' && object.variants[object.shopify_variant_id]?.image_src != '' ? object.variants[object.shopify_variant_id]?.image_src : (object.image != '' ? object.image : "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_620x620.gif")) + '" alt="" /></a>';
                                    if (app_widget_data.is_enable_bulk_action == '1') {
                                        pageHtml += '<input type="checkbox" name="wishlist_item_checkbox" data-quntity="' + object.quntity + '"  data-wishlist-id="' + object.shopify_wishlist_id + '" value="" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" class="wishlist_item_checkbox"  id="wishlist_item_checkbox_' + index + '" >';
                                    }
                                    pageHtml += '</div>';
                                    pageHtml += '<div class="wh-list-right">';
                                    pageHtml += '<div class="wh-pro-meta">';
                                    if (object.vandor && app_widget_data.is_enable_show_vendor == 1) {
                                        pageHtml += '<p class="wishlistvendor">' + object.vandor + '</p>';
                                    }
                                    pageHtml += '<h3><a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '">' + object.title + '</a></h3>';
                                    pageHtml += '<p class="wishlist-price" data-price="' + object.variants[object.shopify_variant_id].price + '"  id="wishlist-price-' + index + '"><span class="money">' + ((app_widget_data.is_divided == 0) ? (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.money_format).replace("{{amount}}", (object.variants[object.shopify_variant_id].price)) : ((app_widget_data.is_divided == 100) ? Shopify.formatMoney(Math.ceil(parseFloat(object.variants[object.shopify_variant_id].price) * Shopify.currency.rate).toFixed(2).toString(), (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : ((app_widget_data.is_divided == 50) ? wishlistCustomCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : __this._wishlistCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format))))) + '</span></p>';
                                    pageHtml += '<p class="wishlist-variant" id="wishlist-variant-title-' + index + '">' + ((object.variants[object.shopify_variant_id].title != 'Default Title') ? object.variants[object.shopify_variant_id].title : "") + '</p>';
                                    pageHtml += '<div class="wishlist-advanced-option">';
                                    if (app_widget_data.is_enable_show_quntity_picker == '1') {
                                        pageHtml += '<div class="wishlist_qty">';
                                        pageHtml += '<ul class="wsh_qty">';
                                        pageHtml += '<li class="wishlist-qty-event" data-type="minus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.1667 9H5.83333C5.3725 9 5 9.448 5 10C5 10.552 5.3725 11 5.83333 11H14.1667C14.6275 11 15 10.552 15 10C15 9.448 14.6275 9 14.1667 9" fill="currentColor"/></svg></span></li>';
                                        pageHtml += '<li><input type="text" id="wishlist-qty-event-' + index + '" value="' + object.quntity + '" readonly /></li>';
                                        pageHtml += '<li class="wishlist-qty-event" data-type="plus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4a1 1 0 0 0-1 1v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V5a1 1 0 0 0-1-1Z" fill="currentColor"/></svg></span></li>';
                                        pageHtml += '</ul>';
                                        pageHtml += '</div>';
                                    }
                                    if (app_widget_data.is_enable_show_variant_picker == '1') {
                                        pageHtml += '<div class="wishlist_droplist" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">';
                                        if (object.variants[object.shopify_variant_id].title != 'Default Title') {
                                            pageHtml += '<select class="wishlist-variant-picker" id="#wishlist-variant-picker-' + index + '" data-index="' + index + '">';
                                            for (const key in object.variants) {
                                                pageHtml += '<option data-inventory_quantity="' + object.variants[key].inventory_quantity + '" data-inventory_management="' + object.variants[key].inventory_management + '"  data-inventory_policy="' + object.variants[key].inventory_policy + '"  value="' + object.variants[key].id + '" data-price="' + object.variants[key].price + '" ' + ((object.variants[key].id == object.shopify_variant_id) ? "selected" : "") + '  data-title="' + object.variants[key].title + '">' + object.variants[key].title + '</option>';
                                            }
                                            pageHtml += '</select>';
                                        }
                                        pageHtml += '</div>';
                                    }
                                    pageHtml += '</div>';
                                    if (app_widget_data.is_enable_show_movetocart_button == "1") {
                                        if (app_widget_data.is_enable_show_outofstock_button == 0) {
                                            pageHtml += '<button class="wishlist-cart wishlist-move-cart"  id="wishlist-move-cart-' + index + '" style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                        } else {
                                            if (object.variants[object.shopify_variant_id].inventory_quantity > 0 || object.variants[object.shopify_variant_id].inventory_management == 'null' || object.variants[object.shopify_variant_id].inventory_management == null || (object.variants[object.shopify_variant_id].inventory_management != '' && object.variants[object.shopify_variant_id].inventory_management != 'null' && object.variants[object.shopify_variant_id].inventory_management != null && object.variants[object.shopify_variant_id].inventory_policy == 'continue')) {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart" id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                            } else {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart" id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonOutOfStockBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonOutOfStockTextColor?.value + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '">' + wishlist_page?.pageButtonOutOfStock?.value + '</button>';
                                            }
                                        }
                                    }

                                    pageHtml += '</div>';
                                    pageHtml += '<div class="wh-pro-button">';
                                    pageHtml += '<div>';
                                    pageHtml += '<button class="wh-wishlist-remove wishlist_page_remove_product" data-added="true" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >';
                                    pageHtml += '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5938 22C17.538 22 18.2818 21.2894 18.3106 20.3514L18.8542 4.12124H21V2.98438H14.9632V1.76224C14.9632 0.795875 14.1621 0 13.1894 0H7.81061C6.83791 0 6.03681 0.795875 6.03681 1.76224V2.98438H0V4.12124H2.14579L2.68944 20.3514C2.71798 21.2894 3.46197 22 4.40617 22H16.5938ZM7.18098 1.76204C7.18098 1.42101 7.46716 1.13671 7.81041 1.13671H13.1892C13.5324 1.13671 13.8186 1.42103 13.8186 1.76204V2.98418H7.18098V1.76204ZM3.83355 20.323L3.2899 4.12124H17.681L17.1373 20.323C17.1373 20.6357 16.8799 20.8631 16.5652 20.8631H4.40571C4.11972 20.8631 3.86206 20.6357 3.83355 20.323Z" fill="black"></path><path d="M9.92969 8.16016H11.074V16.659H9.92969V8.16016Z" fill="black"></path><path d="M6.49219 8.16016H7.6365V16.659H6.49219V8.16016Z" fill="black"></path><path d="M13.3594 8.16016H14.5037V16.659H13.3594V8.16016Z" fill="black"></path></svg>';
                                    pageHtml += '</button>';
                                    pageHtml += '</div>';
                                    pageHtml += '</div>';
                                    pageHtml += '</div>';
                                    pageHtml += '</div>';
                                }
                            });
                            pageHtml += '</div>';



                            /* Wishlist List Layout END */
                        } else {
                            pageHtml += '<div class="wh-grid-layout active">';
                            pageHtml += '<div class="wishlist-row wishlistajaxLoad">';
                            /* Wishlist GRID Layout START */
                            (response.data || []).forEach(function (object, index) {

                                if (object.variants && typeof object.variants[object.shopify_variant_id] != 'undefined' && object.variants[object.shopify_variant_id]) {
                                    pageHtml += '<div class="wishlist-column" id="wishlist_page_' + object.shopify_id + '_' + object.shopify_variant_id + '" data-id="' + index + '">';
                                    pageHtml += '<div class="wishlist-top">';
                                    pageHtml += '<a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '"><img src="' + (typeof object.variants[object.shopify_variant_id]?.image_src != 'undefined' && object.variants[object.shopify_variant_id]?.image_src != '' ? object.variants[object.shopify_variant_id]?.image_src : (object.image != '' ? object.image : "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_620x620.gif")) + '" alt="" /></a>';
                                    if (app_widget_data.is_enable_bulk_action == '1') {
                                        pageHtml += '<input type="checkbox" name="wishlist_item_checkbox" data-quntity="' + object.quntity + '" data-wishlist-id="' + object.shopify_wishlist_id + '" value="" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" class="wishlist_item_checkbox"  id="wishlist_item_checkbox_' + index + '">';
                                    }
                                    pageHtml += '<button class="wishlist-remove wishlist_page_remove_product" data-added="true" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >';
                                    pageHtml += '<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M2.276.39L12 10.115 21.724.391c.486-.486 1.254-.519 1.777-.098l.108.098c.521.52.521 1.364 0 1.885L13.886 12l9.723 9.724c.521.52.521 1.365 0 1.885-.52.521-1.364.521-1.885 0L12 13.886l-9.724 9.723c-.486.486-1.254.519-1.777.098l-.108-.098c-.521-.52-.521-1.364 0-1.885L10.114 12 .391 2.276C-.13 1.756-.13.911.39.391.91-.13 1.755-.13 2.276.39z" id="close__a"></path></defs><use xlink:href="#close__a" fill-rule="evenodd"></use></svg>';
                                    pageHtml += '</button>';
                                    pageHtml += '</div>';
                                    pageHtml += '<div class="wihslist-meta">';
                                    if (object.vandor && app_widget_data.is_enable_show_vendor == 1) {
                                        pageHtml += '<p class="wishlistvendor">' + object.vandor + '</p>';
                                    }
                                    pageHtml += '<h3><a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '">' + object.title + '</a></h3>';
                                    pageHtml += '<p class="wishlist-price" data-price="' + object.variants[object.shopify_variant_id].price + '"  id="wishlist-price-' + index + '"><span class="money">' + ((app_widget_data.is_divided == 0) ? (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.money_format).replace("{{amount}}", (object.variants[object.shopify_variant_id].price)) : ((app_widget_data.is_divided == 100) ? Shopify.formatMoney(Math.ceil(parseFloat(object.variants[object.shopify_variant_id].price) * Shopify.currency.rate).toFixed(2).toString(), (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : ((app_widget_data.is_divided == 50) ? wishlistCustomCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : __this._wishlistCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format))))) + '</span></p>';

                                    pageHtml += '<p class="wishlist-variant" id="wishlist-variant-title-' + index + '">' + ((object.variants[object.shopify_variant_id].title != 'Default Title') ? object.variants[object.shopify_variant_id].title : "") + '</p>';
                                    pageHtml += '<div class="wishlist-advanced-option">';
                                    if (app_widget_data.is_enable_show_quntity_picker == '1') {
                                        pageHtml += '<div class="wishlist_qty">';
                                        pageHtml += '<ul class="wsh_qty">';
                                        pageHtml += '<li class="wishlist-qty-event" data-type="minus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.1667 9H5.83333C5.3725 9 5 9.448 5 10C5 10.552 5.3725 11 5.83333 11H14.1667C14.6275 11 15 10.552 15 10C15 9.448 14.6275 9 14.1667 9" fill="currentColor"/></svg></span></li>';
                                        pageHtml += '<li><input type="text" id="wishlist-qty-event-' + index + '" value="' + object.quntity + '" readonly /></li>';
                                        pageHtml += '<li class="wishlist-qty-event" data-type="plus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4a1 1 0 0 0-1 1v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V5a1 1 0 0 0-1-1Z" fill="currentColor"/></svg></span></li>';
                                        pageHtml += '</ul>';
                                        pageHtml += '</div>';
                                    }
                                    if (app_widget_data.is_enable_show_variant_picker == '1') {
                                        pageHtml += '<div class="wishlist_droplist" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">';
                                        if (object.variants[object.shopify_variant_id].title != 'Default Title') {
                                            pageHtml += '<select class="wishlist-variant-picker" id="#wishlist-variant-picker-' + index + '" data-index="' + index + '">';
                                            for (const key in object.variants) {
                                                pageHtml += '<option data-inventory_quantity="' + object.variants[key].inventory_quantity + '" data-inventory_management="' + object.variants[key].inventory_management + '"  data-inventory_policy="' + object.variants[key].inventory_policy + '"  value="' + object.variants[key].id + '" data-price="' + object.variants[key].price + '" ' + ((object.variants[key].id == object.shopify_variant_id) ? "selected" : "") + '  data-title="' + object.variants[key].title + '">' + object.variants[key].title + '</option>';
                                            }
                                            pageHtml += '</select>';
                                        }
                                        pageHtml += '</div>';
                                    }
                                    pageHtml += '</div>';
                                    if (app_widget_data.is_enable_show_movetocart_button == "1") {
                                        if (app_widget_data.is_enable_show_outofstock_button == 0) {
                                            pageHtml += '<button class="wishlist-cart wishlist-move-cart"  id="wishlist-move-cart-' + index + '" style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '"  data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                        } else {
                                            if (object.variants[object.shopify_variant_id].inventory_quantity > 0 || object.variants[object.shopify_variant_id].inventory_management == 'null' || object.variants[object.shopify_variant_id].inventory_management == null || (object.variants[object.shopify_variant_id].inventory_management != '' && object.variants[object.shopify_variant_id].inventory_management != 'null' && object.variants[object.shopify_variant_id].inventory_management != null && object.variants[object.shopify_variant_id].inventory_policy == 'continue')) {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart" id="wishlist-move-cart-' + index + '" style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                            } else {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart" id="wishlist-move-cart-' + index + '" style="background:' + wishlist_page?.pageButtonOutOfStockBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonOutOfStockTextColor?.value + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '">' + wishlist_page?.pageButtonOutOfStock?.value + '</button>';
                                            }
                                        }
                                    }

                                    pageHtml += '</div>';
                                    pageHtml += '</div>';
                                }
                            });

                            pageHtml += '</div>';
                            pageHtml += '</div>';

                            /* Wishlist GRID Layout END*/
                        }
                    } else {
                        pageHtml += '<div class="wishlsitnoitem"><p>' + wishlist_page?.pageEmptyWishlist.value + '</p></div>';
                    }
                    if (app_widget_data.is_enable_show_trending_wishlist == '1') {
                        console.log("trending_widget_interval", trending_widget_interval);
                        pageHtml += '<div class="wishlist-trending-widget"></div>';
                        if (trending_widget_interval == '') {
                            setInterval(async function () {
                                if (document.querySelectorAll('.wishlist-trending-widget:empty').length > 0) {
                                    clearTimeout(trending_widget_interval);
                                    trending_widget_interval = '';
                                    await __this._trendingWishlist();
                                }
                            }, 500)
                        }
                    }
                    pageHtml += '</div>';

                    document.querySelector('.wishlist-page').innerHTML = pageHtml;
                    document.querySelectorAll('.wishlist_page_remove_product').forEach(function (element) {
                        element.addEventListener('click', function () {
                            __this._wishlistPageRemoveButton(element);
                        });
                    });
                    document.querySelectorAll('.wishlist-move-cart').forEach(function (element) {
                        element.addEventListener('click', function () {
                            __this._wishlistAddToCart(element);
                        });
                    });
                    __this._wishlist_share_trigger();
                    if (app_widget_data.is_enable_bulk_action == '1') {
                        __this._BulkActionEvent()
                    }
                    if (app_widget_data.is_enable_show_quntity_picker == '1') {
                        __this._WishlistQuntityEvent();
                    }
                    if (app_widget_data.is_enable_show_variant_picker == '1') {
                        __this._WishlistVariantPicker();
                    }
                    typeof checkShopifyFormatMoney == 'function' && checkShopifyFormatMoney();
                    if (response.data.length <= 0 && document.querySelector('.bulk_action')) {
                        document.querySelector('.bulk_action').style.display = 'none';
                    }
                    if (document.querySelectorAll('.wishlist_item_checkbox:checked').length <= 0) {
                        if (document.querySelector('#move_to_cart_all')) {
                            document.querySelector('#move_to_cart_all').style.display = 'none';
                        }
                        if (document.querySelector('#delete_all')) {
                            document.querySelector('#delete_all').style.display = 'none';
                        }
                    } else {
                        if (document.querySelector('#move_to_cart_all')) {
                            document.querySelector('#move_to_cart_all').style.display = 'block';
                        }
                        if (document.querySelector('#delete_all')) {
                            document.querySelector('#delete_all').style.display = 'block';
                        }
                    }
                    __this._faceBookPixelTracking("wishlistPageLoad", {});
                    document.dispatchEvent(new CustomEvent('wishlist:page:loaded', { bubbles: true, cancelable: false }));

                });

            },
            _wishlistAddToCart: async function (element) {

                let payload = {
                    items: [{
                        id: element.dataset.variant_id,
                        quantity: element.dataset.quntity ?? 1,
                        properties: {
                            '_wishlist_engine': app_UUID_ID,
                            '_wishlist_uuid': app_UUID_ID
                        }
                    }],
                    sections: ((app_widget_data.wishlist_section !== '' && app_widget_data.wishlist_section != 'null') ? app_widget_data.wishlist_section : 'cart-drawer,cart-icon-bubble,mini-cart'),
                    sections_url: '/',
                    form_type: 'product',
                    utf8: 'Ã¢Å“â€œ',
                };
                __this._XMLHttpRequest('POST', window.Shopify.routes.root + 'cart/add.js', payload, (function (status, response) {
                    if (response.status) {
                        __this._wishlistAlerMessage('custom', response);
                    } else {
                        if (response.error) {
                            console.log("errors", response.error);
                        }
                        if (!response.error) {
                            if (typeof wishlistEngineCallback == 'function') {
                                wishlistEngineCallback(response);
                            }
                            __this._wishlistAlerMessage('successMessageAddToCart', response);
                            if (app_widget_data.is_enable_delete_on_cart == 1) {
                                __this._wishlistPageRemoveButton(element, 1, response);
                            }
                            if (app_widget_data.is_enable_stay_on_page_after_cart != 1) {
                                window.location.href = "/cart";
                            }
                            __this._getSectionsToRender().forEach((section => {
                                const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
                                if (sectionElement != '' && sectionElement != null && sectionElement != 'null') {
                                    if (typeof response.sections != 'undefined' && response.sections != '') {
                                        sectionElement.innerHTML = __this._getSectionInnerHTML(response?.sections[section.id], section.selector);
                                        sectionElement?.parentNode?.classList?.remove('is-empty');
                                    }
                                }
                            }));
                        }
                    }
                }));
            },
            _wishlistPageRemoveButton: async function (e, type = 0, fetchResponse = {}) {
                let payload = {
                    uuid: app_UUID_ID,
                    ip_address: app_ip_address,
                    customer_id: app_customre_id,
                    customers: JSON.parse(document.getElementById('wishlist-engine-customer-records')?.textContent ?? '{}'),
                    shopify_store_id: app_store_id,
                    shopify_store: Shopify.shop,
                    product_id: e.dataset.product_id,
                    variant_id: e.dataset.oldVariant_id,
                    price: e.dataset.price,
                    status: e.dataset.added == 'false' ? 1 : 0,
                    type
                }
                __this._XMLHttpRequest("POST", app_base_url_wishlist + '/save-wishlist', payload, (function (status, response) {
                    if (status == 200) {
                        document.getElementById("wishlist_page_" + e.dataset.product_id + "_" + e.dataset.oldVariant_id) && document.getElementById("wishlist_page_" + e.dataset.product_id + "_" + e.dataset.oldVariant_id).remove();
                        __this._setWishlistTotalCount(response.data.wishlistTotalCount);
                        type == "0" && __this._wishlistAlerMessage('susccessMessageItemRemove');
                        if (response.data.wishlistTotalCount <= 0) {

                            let emptyHTML = document.createElement('div');
                            emptyHTML.className = "wishlsitnoitem";
                            emptyHTML.innerHTML = '<p>' + wishlist_page?.pageEmptyWishlist.value + '</p>';
                            document.getElementById('wishlist-page-contain').appendChild(emptyHTML);
                            if (document.querySelector('.bulk_action')) {
                                document.querySelector('.bulk_action').style.display = 'none';
                            }
                        }

                        if (typeof wishlistCallback == 'function') {
                            wishlistCallback({
                                "event": type == "0" ? "REMOVE" : "MOVETOCART",
                                "product": response.product
                            });
                        }
                        __this._faceBookPixelTracking((type == "0" ? "removeFromWishlist" : "moveToCartFromWishlist"), response.product)
                        document.querySelectorAll('.wishlist-engine[data-product_id="' + e.dataset.product_id + '"]' + (app_widget_data.is_enable_wishlist_variant_level == 1 ? '[data-variant_id="' + e.dataset.oldVariant_id + '"]' : '')).forEach(function (wishlistButtonSelecter) {
                            if (wishlistButtonSelecter.dataset.full_button == 'true') {
                                let wishlistButton = '';
                                if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                    wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '" ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? `style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"` : `style="background:transparent;"`) + '>';
                                } else {
                                    wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '">';
                                }

                                if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '5') {
                                    if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                        wishlistButton += '<span class="wishlist-icon">' + heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor) + '</span>';
                                    } else {
                                        wishlistButton += '<span class="wishlist-icon">' + heartIcon + '</span>';
                                    }
                                }
                                if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '4') {
                                    wishlistButton += '<span class="wishlist-text" style="color:' + wishlist_widget?.wishlistButtonTextColor + '" >' + wishlist_widget.wishlistButtonBeforeText + '</span>';
                                }

                                wishlistButton += '</div>';
                                wishlistButtonSelecter.innerHTML = wishlistButton;
                                wishlistButtonSelecter.setAttribute("data-total", wishlistButtonSelecter.dataset.total - 1);
                                wishlistButtonSelecter.setAttribute("data-added", "false");


                            } else {

                                if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                    wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button" ' + (`style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"`) + '><span class="wishlist-icon">' + heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor) + '</span></div>';
                                } else {
                                    wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button-icon"><span class="wishlist-icon">' + heartIcon + '</span></div>';
                                }
                                wishlistButtonSelecter.setAttribute("data-added", "false");

                            }
                            wishlistButtonSelecter.setAttribute("data-total", wishlistButtonSelecter.dataset.total - 1);
                        });
                        if (ShopifyAnalytics.meta.product?.id == e.dataset.product_id) {
                            document.querySelectorAll('.wishlist-engine[data-product_id="' + ShopifyAnalytics.meta.product?.id + '"]').forEach(function (wishlistButtonSelecter) {
                                var variantsIds = JSON.parse(wishlistButtonSelecter.dataset.variantsIds);
                                if (variantsIds.includes(parseInt(e.dataset.oldVariant_id))) {
                                    var index = variantsIds.indexOf(parseInt(e.dataset.oldVariant_id));
                                    variantsIds.splice(index, 1);
                                } else {
                                    variantsIds.push(parseInt(e.dataset.oldVariant_id))
                                }
                                wishlistButtonSelecter.setAttribute("data-variants-ids", JSON.stringify(variantsIds));
                            });
                        }

                        WISHLIST_PRODUCTS_IDS = ((__this._getCookie('WISHLIST_PRODUCTS_IDS') != '' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != 'undefined' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != null) ? JSON.parse(__this._getCookie('WISHLIST_PRODUCTS_IDS')) : {});
                        if (app_widget_data.is_enable_wishlist_variant_level == '1') {
                            let productsVariants = WISHLIST_PRODUCTS_IDS[e.dataset.product_id].variants;
                            var index = productsVariants.indexOf(parseInt(e.dataset.oldVariant_id));
                            productsVariants.splice(index, 1);
                            if (productsVariants.length <= 0) {
                                delete WISHLIST_PRODUCTS_IDS[e.dataset.product_id];
                            } else {
                                WISHLIST_PRODUCTS_IDS[e.dataset.product_id].variants = productsVariants;
                            }
                        } else {
                            delete WISHLIST_PRODUCTS_IDS[e.dataset.product_id];
                        }
                        __this._setCookie("WISHLIST_PRODUCTS_IDS", JSON.stringify(WISHLIST_PRODUCTS_IDS));
                    }
                }));
            },
            _wishlistCurrencyFormate: function (cents, format) {
                cents = Math.ceil(cents).toFixed(2).toString()

                if (typeof cents == 'string') { cents = cents.replace('.', ''); }
                var value = '';
                var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
                var formatString = (format || this.money_format);

                function defaultOption(opt, def) {
                    return (typeof opt == 'undefined' ? def : opt);
                }
                function formatWithDelimiters(number, precision, thousands, decimal) {
                    precision = defaultOption(precision, 2);
                    thousands = defaultOption(thousands, ',');
                    decimal = defaultOption(decimal, '.');
                    if (isNaN(number) || number == null) { return 0; }
                    number = (number / 100.0).toFixed(precision);

                    var parts = number.split('.'),
                        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
                        cents = parts[1] ? (decimal + parts[1]) : '';

                    return dollars + cents;
                }

                switch (formatString.match(placeholderRegex)[1]) {
                    case 'amount':
                        value = formatWithDelimiters(cents, 2);
                        break;
                    case 'amount_no_decimals':
                        value = formatWithDelimiters(cents, 0);
                        break;
                    case 'amount_with_comma_separator':
                        value = formatWithDelimiters(cents, 2, '.', ',');
                        break;
                    case 'amount_no_decimals_with_comma_separator':
                        value = formatWithDelimiters(cents, 0, '.', ',');
                        break;
                }
                return formatString.replace(placeholderRegex, value);
            },
            _debounce: function (func, timeout = 300) {
                let timer;
                return (...args) => {
                    clearTimeout(timer);
                    timer = setTimeout(() => { func.apply(this, args); }, timeout);
                };
            },
            _getSectionsToRender: function () {
                return [
                    {
                        id: 'cart-drawer',
                        selector: '#CartDrawer'
                    },
                    {
                        id: 'cart-icon-bubble'
                    },
                ];
            },
            _getSectionInnerHTML: function (html, selector = '.shopify-section') {
                if (selector != null && selector != 'null') {
                    return new DOMParser()
                        .parseFromString(html, 'text/html')
                        .querySelector(selector).innerHTML;
                } else {
                    return true;
                }
            },
            _wishlistSearchLoad: async function () {
                await __this._wishlistSearchData(function (response) {
                    let pageHtml = '';
                    if (response.data.length) {
                        if (app_widget_data.wishlist_view === 1) {
                            /* Wishlist List Layout */
                            (response.data || []).forEach(function (object, index) {

                                if (object.variants && typeof object.variants[object.shopify_variant_id] != 'undefined' && object.variants[object.shopify_variant_id]) {
                                    pageHtml += '<div class="wh-list-column" id="wishlist_page_' + object.shopify_id + '_' + object.shopify_variant_id + '" data-index="' + index + '">';
                                    pageHtml += '<div class="wh-list-left">';
                                    pageHtml += '<a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '"><img src="' + (typeof object.variants[object.shopify_variant_id]?.image_src != 'undefined' && object.variants[object.shopify_variant_id]?.image_src != '' ? object.variants[object.shopify_variant_id]?.image_src : (object.image != '' ? object.image : "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_620x620.gif")) + '" alt="" /></a>';
                                    if (app_widget_data.is_enable_bulk_action == '1') {
                                        pageHtml += '<input type="checkbox" name="wishlist_item_checkbox" data-quntity="' + object.quntity + '" data-wishlist-id="' + object.shopify_wishlist_id + '" value="" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" class="wishlist_item_checkbox"  id="wishlist_item_checkbox_' + index + '" >';
                                    }
                                    pageHtml += '</div>';
                                    pageHtml += '<div class="wh-list-right">';
                                    pageHtml += '<div class="wh-pro-meta">';
                                    if (object.vandor && app_widget_data.is_enable_show_vendor == 1) {
                                        pageHtml += '<p class="wishlistvendor">' + object.vandor + '</p>';
                                    }

                                    pageHtml += '<h3><a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '">' + object.title + '</a></h3>';
                                    pageHtml += '<p class="wishlist-price" data-price="' + object.variants[object.shopify_variant_id].price + '"  id="wishlist-price-' + index + '"><span class="money">' + ((app_widget_data.is_divided == 0) ? (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.money_format).replace("{{amount}}", (object.variants[object.shopify_variant_id].price)) : ((app_widget_data.is_divided == 100) ? Shopify.formatMoney(Math.ceil(parseFloat(object.variants[object.shopify_variant_id].price) * Shopify.currency.rate).toFixed(2).toString(), (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : ((app_widget_data.is_divided == 50) ? wishlistCustomCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : __this._wishlistCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format))))) + '</span></p>';
                                    pageHtml += '<p class="wishlist-variant" id="wishlist-variant-title-' + index + '">' + ((object?.variants[object.shopify_variant_id]?.title != 'Default Title') ? object.variants[object.shopify_variant_id].title : "") + '</p>';
                                    pageHtml += '<div class="wishlist-advanced-option">';
                                    if (app_widget_data.is_enable_show_quntity_picker == '1') {
                                        pageHtml += '<div class="wishlist_qty">';
                                        pageHtml += '<ul class="wsh_qty">';
                                        pageHtml += '<li class="wishlist-qty-event" data-type="minus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.1667 9H5.83333C5.3725 9 5 9.448 5 10C5 10.552 5.3725 11 5.83333 11H14.1667C14.6275 11 15 10.552 15 10C15 9.448 14.6275 9 14.1667 9" fill="currentColor"/></svg></span></li>';
                                        pageHtml += '<li><input type="text" id="wishlist-qty-event-' + index + '" value="' + object.quntity + '" readonly /></li>';
                                        pageHtml += '<li class="wishlist-qty-event" data-type="plus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4a1 1 0 0 0-1 1v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V5a1 1 0 0 0-1-1Z" fill="currentColor"/></svg></span></li>';
                                        pageHtml += '</ul>';
                                        pageHtml += '</div>';
                                    }
                                    if (app_widget_data.is_enable_show_variant_picker == '1') {
                                        pageHtml += '<div class="wishlist_droplist" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">';
                                        if (object.variants[object.shopify_variant_id].title != 'Default Title') {
                                            pageHtml += '<select class="wishlist-variant-picker" id="#wishlist-variant-picker-' + index + '" data-index="' + index + '">';
                                            for (const key in object.variants) {
                                                pageHtml += '<option data-inventory_quantity="' + object.variants[key].inventory_quantity + '" data-inventory_management="' + object.variants[key].inventory_management + '"  data-inventory_policy="' + object.variants[key].inventory_policy + '"  value="' + object.variants[key].id + '" data-price="' + object.variants[key].price + '" ' + ((object.variants[key].id == object.shopify_variant_id) ? "selected" : "") + '  data-title="' + object.variants[key].title + '">' + object.variants[key].title + '</option>';
                                            }
                                            pageHtml += '</select>';
                                        }
                                        pageHtml += '</div>';
                                    }
                                    pageHtml += '</div>';
                                    if (app_widget_data.is_enable_show_movetocart_button == "1") {
                                        if (app_widget_data.is_enable_show_outofstock_button == 0) {
                                            pageHtml += '<button class="wishlist-cart wishlist-move-cart"   id="wishlist-move-cart-' + index + '" style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                        } else {
                                            if (object.variants[object.shopify_variant_id].inventory_quantity > 0 || object.variants[object.shopify_variant_id].inventory_management == 'null' || object.variants[object.shopify_variant_id].inventory_management == null || (object.variants[object.shopify_variant_id].inventory_management != '' && object.variants[object.shopify_variant_id].inventory_management != 'null' && object.variants[object.shopify_variant_id].inventory_management != null && object.variants[object.shopify_variant_id].inventory_policy == 'continue')) {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart"  id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                            } else {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart"  id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonOutOfStockBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonOutOfStockTextColor?.value + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">' + wishlist_page?.pageButtonOutOfStock?.value + '</button>';
                                            }
                                        }
                                    }
                                    pageHtml += '</div>';
                                    pageHtml += '<div class="wh-pro-button">';
                                    pageHtml += '<div>';
                                    pageHtml += '<button class="wh-wishlist-remove wishlist_page_remove_product" data-added="true" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >';
                                    pageHtml += '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5938 22C17.538 22 18.2818 21.2894 18.3106 20.3514L18.8542 4.12124H21V2.98438H14.9632V1.76224C14.9632 0.795875 14.1621 0 13.1894 0H7.81061C6.83791 0 6.03681 0.795875 6.03681 1.76224V2.98438H0V4.12124H2.14579L2.68944 20.3514C2.71798 21.2894 3.46197 22 4.40617 22H16.5938ZM7.18098 1.76204C7.18098 1.42101 7.46716 1.13671 7.81041 1.13671H13.1892C13.5324 1.13671 13.8186 1.42103 13.8186 1.76204V2.98418H7.18098V1.76204ZM3.83355 20.323L3.2899 4.12124H17.681L17.1373 20.323C17.1373 20.6357 16.8799 20.8631 16.5652 20.8631H4.40571C4.11972 20.8631 3.86206 20.6357 3.83355 20.323Z" fill="black"></path><path d="M9.92969 8.16016H11.074V16.659H9.92969V8.16016Z" fill="black"></path><path d="M6.49219 8.16016H7.6365V16.659H6.49219V8.16016Z" fill="black"></path><path d="M13.3594 8.16016H14.5037V16.659H13.3594V8.16016Z" fill="black"></path></svg>';
                                    pageHtml += '</button>';
                                    pageHtml += '</div>';
                                    pageHtml += '</div>';
                                    pageHtml += '</div>';
                                    pageHtml += '</div>';
                                }
                            });
                            /* Wishlist List Layout END */
                        } else {
                            /* Wishlist GRID Layout START */
                            (response.data || []).forEach(function (object, index) {

                                if (object.variants && typeof object.variants[object.shopify_variant_id] != 'undefined' && object.variants[object.shopify_variant_id]) {

                                    pageHtml += '<div class="wishlist-column" id="wishlist_page_' + object.shopify_id + '_' + object.shopify_variant_id + '">';
                                    pageHtml += '<div class="wishlist-top">';
                                    pageHtml += '<a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '"><img src="' + (typeof object.variants[object.shopify_variant_id]?.image_src != 'undefined' && object.variants[object.shopify_variant_id]?.image_src != '' ? object.variants[object.shopify_variant_id]?.image_src : (object.image != '' ? object.image : "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_620x620.gif")) + '" alt="" /></a>';
                                    if (app_widget_data.is_enable_bulk_action == '1') {
                                        pageHtml += '<input type="checkbox" name="wishlist_item_checkbox" data-quntity="' + object.quntity + '" data-wishlist-id="' + object.shopify_wishlist_id + '" value="" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" class="wishlist_item_checkbox"  id="wishlist_item_checkbox_' + index + '">';
                                    }
                                    pageHtml += '<button class="wishlist-remove wishlist_page_remove_product" data-added="true" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >';
                                    pageHtml += '<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M2.276.39L12 10.115 21.724.391c.486-.486 1.254-.519 1.777-.098l.108.098c.521.52.521 1.364 0 1.885L13.886 12l9.723 9.724c.521.52.521 1.365 0 1.885-.52.521-1.364.521-1.885 0L12 13.886l-9.724 9.723c-.486.486-1.254.519-1.777.098l-.108-.098c-.521-.52-.521-1.364 0-1.885L10.114 12 .391 2.276C-.13 1.756-.13.911.39.391.91-.13 1.755-.13 2.276.39z" id="close__a"></path></defs><use xlink:href="#close__a" fill-rule="evenodd"></use></svg>';
                                    pageHtml += '</button>';
                                    pageHtml += '</div>';
                                    pageHtml += '<div class="wihslist-meta">';
                                    if (object.vandor && app_widget_data.is_enable_show_vendor == 1) {
                                        pageHtml += '<p class="wishlistvendor">' + object.vandor + '</p>';
                                    }
                                    pageHtml += '<h3><a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '?variant=' + object.shopify_variant_id + '">' + object.title + '</a></h3>';
                                    pageHtml += '<p class="wishlist-price" data-price="' + object.variants[object.shopify_variant_id].price + '"  id="wishlist-price-' + index + '"><span class="money">' + ((app_widget_data.is_divided == 0) ? (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.money_format).replace("{{amount}}", (object.variants[object.shopify_variant_id].price)) : ((app_widget_data.is_divided == 100) ? Shopify.formatMoney(Math.ceil(parseFloat(object.variants[object.shopify_variant_id].price) * Shopify.currency.rate).toFixed(2).toString(), (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : ((app_widget_data.is_divided == 50) ? wishlistCustomCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : __this._wishlistCurrencyFormate(object.variants[object.shopify_variant_id].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format))))) + '</span></p>';
                                    pageHtml += '<p class="wishlist-variant" id="wishlist-variant-title-' + index + '">' + ((object.variants[object.shopify_variant_id].title != 'Default Title') ? object.variants[object.shopify_variant_id].title : "") + '</p>';
                                    pageHtml += '<div class="wishlist-advanced-option">';
                                    if (app_widget_data.is_enable_show_quntity_picker == '1') {
                                        pageHtml += '<div class="wishlist_qty">';
                                        pageHtml += '<ul class="wsh_qty">';
                                        pageHtml += '<li class="wishlist-qty-event" data-type="minus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.1667 9H5.83333C5.3725 9 5 9.448 5 10C5 10.552 5.3725 11 5.83333 11H14.1667C14.6275 11 15 10.552 15 10C15 9.448 14.6275 9 14.1667 9" fill="currentColor"/></svg></span></li>';
                                        pageHtml += '<li><input type="text" id="wishlist-qty-event-' + index + '" value="' + object.quntity + '" readonly /></li>';
                                        pageHtml += '<li class="wishlist-qty-event" data-type="plus" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" ><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4a1 1 0 0 0-1 1v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V5a1 1 0 0 0-1-1Z" fill="currentColor"/></svg></span></li>';
                                        pageHtml += '</ul>';
                                        pageHtml += '</div>';
                                    }
                                    if (app_widget_data.is_enable_show_variant_picker == '1') {
                                        pageHtml += '<div class="wishlist_droplist" data-index="' + index + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">';
                                        if (object.variants[object.shopify_variant_id].title != 'Default Title') {
                                            pageHtml += '<select class="wishlist-variant-picker" id="#wishlist-variant-picker-' + index + '" data-index="' + index + '">';
                                            for (const key in object.variants) {
                                                pageHtml += '<option data-inventory_quantity="' + object.variants[key].inventory_quantity + '" data-inventory_management="' + object.variants[key].inventory_management + '" data-inventory_policy="' + object.variants[key].inventory_policy + '" value="' + object.variants[key].id + '" data-price="' + object.variants[key].price + '" ' + ((object.variants[key].id == object.shopify_variant_id) ? "selected" : "") + '  data-title="' + object.variants[key].title + '">' + object.variants[key].title + '</option>';
                                            }
                                            pageHtml += '</select>';
                                        }
                                        pageHtml += '</div>';
                                    }

                                    pageHtml += '</div>';
                                    if (app_widget_data.is_enable_show_movetocart_button == "1") {
                                        if (app_widget_data.is_enable_show_outofstock_button == 0) {
                                            pageHtml += '<button class="wishlist-cart wishlist-move-cart"  id="wishlist-move-cart-' + index + '" style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                        } else {
                                            if (object.variants[object.shopify_variant_id].inventory_quantity > 0 || object.variants[object.shopify_variant_id].inventory_management == 'null' || object.variants[object.shopify_variant_id].inventory_management == null || (object.variants[object.shopify_variant_id].inventory_management != '' && object.variants[object.shopify_variant_id].inventory_management != 'null' && object.variants[object.shopify_variant_id].inventory_management != null && object.variants[object.shopify_variant_id].inventory_policy == 'continue')) {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart"  id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonMoveToCartTextColor?.value + ';border:' + wishlist_page?.pageButtonMoveToCartBackgroundColor?.value + ';" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '" data-quntity="' + object.quntity + '" data-index="' + index + '"  data-old-variant_id="' + object.shopify_variant_id + '" data-wishlist-id="' + object.shopify_wishlist_id + '" >' + wishlist_page?.pageButtonMoveToCart?.value + '</button>';
                                            } else {
                                                pageHtml += '<button class="wishlist-cart wishlist-move-cart"  id="wishlist-move-cart-' + index + '"  style="background:' + wishlist_page?.pageButtonOutOfStockBackgroundColor?.value + ';color:' + wishlist_page?.pageButtonOutOfStockTextColor?.value + '" data-product_id="' + object.shopify_id + '" data-variant_id="' + object.shopify_variant_id + '">' + wishlist_page?.pageButtonOutOfStock?.value + '</button>';
                                            }
                                        }
                                    }
                                    pageHtml += '</div>';
                                    pageHtml += '</div>';
                                }
                            });
                            /* Wishlist GRID Layout END*/
                        }
                    } else {
                        pageHtml += '<div class="wishlsitnoitem"><p>' + wishlist_page?.pageEmptyWishlist.value + '</p></div>';
                    }
                    document.querySelector('.wishlistajaxLoad').innerHTML = pageHtml;
                    document.querySelectorAll('.wishlist_page_remove_product').forEach(function (element) {
                        element.addEventListener('click', function () {
                            __this._wishlistPageRemoveButton(element);
                        });
                    });
                    document.querySelectorAll('.wishlist-move-cart').forEach(function (element) {
                        element.addEventListener('click', function () {
                            __this._wishlistAddToCart(element);
                        });
                    });
                    if (app_widget_data.is_enable_show_quntity_picker == '1') {
                        __this._WishlistQuntityEvent();
                    }
                    if (app_widget_data.is_enable_show_variant_picker == '1') {
                        __this._WishlistVariantPicker();
                    }
                    typeof checkShopifyFormatMoney == 'function' && checkShopifyFormatMoney();
                    document.dispatchEvent(new CustomEvent('wishlist:page:loaded', { bubbles: true, cancelable: false }));
                });
            },
            _cartPageAction: async function (cartPageInterval) {
                document.querySelectorAll('.wishlist-engine-cart').forEach(function (e) {
                    if (!e.dataset.applyEvent) {
                        e.addEventListener("click", function () {
                            if (app_customre_id == '' && app_widget_data.is_enable_guest_whishlist == 0) {
                                if (app_widget_data.is_redirect_account_page == '1') {
                                    window.location.href = "/account";
                                } else {
                                    __this._wishlistAlerMessage('susccessMessageGuestLoginDisable');
                                }
                            } else {
                                if (app_widget_data.app_plan_type == 0 && parseInt(app_widget_data.wishlistMonthCount) >= 100) {
                                    console.log("Limit reached");
                                } else {
                                    let payload = {
                                        uuid: app_UUID_ID,
                                        ip_address: app_ip_address,
                                        customer_id: app_customre_id,
                                        customers: JSON.parse(document.getElementById('wishlist-engine-customer-records')?.textContent ?? '{}'),
                                        shopify_store_id: app_store_id,
                                        shopify_store: Shopify.shop,
                                        product_id: e.dataset.product_id,
                                        variant_id: e.dataset.variant_id,
                                        price: e.dataset.price,
                                        status: 1
                                    }
                                    __this._XMLHttpRequest("POST", app_base_url_wishlist + '/save-wishlist', payload, (async function (status, response) {

                                        WISHLIST_PRODUCTS_IDS = ((__this._getCookie('WISHLIST_PRODUCTS_IDS') != '' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != 'undefined' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != null) ? JSON.parse(__this._getCookie('WISHLIST_PRODUCTS_IDS')) : {});

                                        if (WISHLIST_PRODUCTS_IDS[e.dataset.product_id]) {
                                            if (!WISHLIST_PRODUCTS_IDS[e.dataset.product_id].variants.includes(parseInt(e.dataset.variant_id))) {
                                                WISHLIST_PRODUCTS_IDS[e.dataset.product_id].variants.push(parseInt(e.dataset.variant_id));
                                                WISHLIST_PRODUCTS_IDS[e.dataset.product_id].is_exist = true;
                                                WISHLIST_PRODUCTS_IDS[e.dataset.product_id].total = 0;
                                            }
                                        } else {
                                            WISHLIST_PRODUCTS_IDS[e.dataset.product_id] = {
                                                variants: [parseInt(e.dataset.variant_id)],
                                                is_exist: true,
                                                total: 0,
                                            };
                                        }
                                        app_UUID_ID = response.data.uuid, __this._setCookie("WISHLIST_UUID", (response.data.uuid));
                                        __this._setCookie("WISHLIST_PRODUCTS_IDS", JSON.stringify(WISHLIST_PRODUCTS_IDS));
                                        __this._setWishlistTotalCount(response.data.wishlistTotalCount);

                                        if (status == 200) {
                                            await __this._XMLHttpRequest('POST', window.Shopify.routes.root + 'cart/change.js', { line: e.dataset.line, quantity: 0, sections: ((app_widget_data.wishlist_section !== '' && app_widget_data.wishlist_section != 'null' && app_widget_data.wishlist_section != null) ? app_widget_data.wishlist_section : 'cart-drawer,cart-icon-bubble,mini-cart'), sections_url: '/' }, (function (status, cartResponse) {

                                                __this._faceBookPixelTracking("saveForLater", response.product);
                                                __this._getSectionsToRender().forEach((section => {
                                                    const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
                                                    if (sectionElement != '' && sectionElement != null && sectionElement != 'null') {
                                                        if (typeof cartResponse.sections != 'undefined' && cartResponse.sections != '') {
                                                            sectionElement.innerHTML = __this._getSectionInnerHTML(cartResponse?.sections[section.id], section.selector);
                                                            sectionElement?.parentNode?.classList?.remove('is-empty');
                                                        }
                                                    }
                                                }));

                                                if (typeof wishlistEngineCallback == 'function') {
                                                    wishlistEngineCallback(response);
                                                    var cartPageInterval = setInterval(function () {
                                                        __this._cartPageAction(cartPageInterval);
                                                    }, 300);
                                                } else {
                                                    window.location.href = "/cart"
                                                }

                                            }));
                                        }
                                    }));
                                }
                            }
                        });
                        e.dataset.applyEvent = "true";
                        clearInterval(cartPageInterval);
                    }
                });
            },
            _WishlistListenVariantChange: function () {
                const url = document.URL;
                __this._WishlistListenUrlStatus();
                if (url.indexOf('variant=') === -1) {
                    __this._WishlisCheckVariantChange();
                }
            },
            _WishlistListenUrlStatus: function () {
                __this._overwritePushstate();
                window.addEventListener('locationchange', () => {
                    const currentUrl = document.URL;

                    if (currentUrl !== initUrl) {
                        const currentUrl = document.URL;
                        const url = new URL(currentUrl);
                        const vid = url.searchParams.get('variant');
                        initUrl = currentUrl;
                        vid && __this._WishlisHandleVariantChange(vid);
                        listenVariantFlag = false;
                    }
                });
            },
            _overwritePushstate: function () {

                const oldPushState = history.pushState;
                history.pushState = function pushState() {
                    const ret = oldPushState.apply(this, arguments);
                    window.dispatchEvent(new Event('pushstate'));
                    window.dispatchEvent(new Event('locationchange'));
                    return ret;
                };

                const oldReplaceState = history.replaceState;
                history.replaceState = function replaceState() {
                    const ret = oldReplaceState.apply(this, arguments);
                    window.dispatchEvent(new Event('replacestate'));
                    window.dispatchEvent(new Event('locationchange'));
                    return ret;
                };

                window.addEventListener('popstate', () => {
                    window.dispatchEvent(new Event('locationchange'));
                });
            },
            _WishlisCheckVariantChange: function () {
                if (typeof ShopifyAnalytics != 'undefined') {
                    if (ShopifyAnalytics?.meta?.product?.variants.map(value => value.id)?.includes(parseInt(ShopifyAnalytics?.meta?.selectedVariantId))) {
                        const curVariantId = ShopifyAnalytics.meta.selectedVariantId;
                        __this._WishlisHandleVariantChange(curVariantId);
                    } else {
                        ShopifyAnalytics.meta.selectedVariantId = ShopifyAnalytics.meta.product.variants[0].id
                        const curVariantId = ShopifyAnalytics.meta.selectedVariantId;
                        __this._WishlisHandleVariantChange(curVariantId);
                    }
                    setTimeout(() => {
                        if (document.URL.indexOf('variant=') === -1) {
                            listenVariantFlag && __this._WishlisCheckVariantChange();
                        }
                    }, 100)
                }
            },
            _WishlisHandleVariantChange: function (vid) {
                if (!vid) return;
                if (String(selectVariantId) !== String(vid)) {
                    selectVariantId = vid;
                    app_widget_data.is_enable_wishlist_variant_level == 1 && document.querySelectorAll('.wishlist-engine[data-product_id="' + ShopifyAnalytics.meta.product?.id + '"]').forEach(function (wishlistButtonSelecter) {

                        if (typeof wishlistButtonSelecter.dataset.variantsIds != 'undefined') {

                            var variantsIds = JSON.parse(wishlistButtonSelecter.dataset.variantsIds);
                            if (wishlistButtonSelecter.dataset.full_button == 'true') {
                                let wishlistButton = '';
                                if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                    wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '" ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? `style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"` : `style="background:transparent;"`) + '>';
                                } else {
                                    wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '">';
                                }

                                if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '5') {
                                    if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                        wishlistButton += '<span class="wishlist-icon">' + (variantsIds.includes(parseInt(vid)) ? heartFillIcon.replaceAll("currentColor", wishlist_widget?.wishlistButtonTextColor) : heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor)) + '</span>';
                                    } else {
                                        wishlistButton += '<span class="wishlist-icon">' + (variantsIds.includes(parseInt(vid)) ? heartFillIcon : heartIcon) + '</span>';
                                    }
                                }
                                if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '4') {
                                    wishlistButton += '<span class="wishlist-text" style="color:' + wishlist_widget?.wishlistButtonTextColor + '">' + (variantsIds.includes(parseInt(vid)) ? wishlist_widget.wishlistButtonAfterText : wishlist_widget.wishlistButtonBeforeText) + '</span>';
                                }
                                if (app_widget_data.is_enable_public_wishlist_count == 1) {
                                    wishlistButton += '<span class="wishlist-count" data-total="' + wishlistButtonSelecter.dataset.total + '">(' + wishlistButtonSelecter.dataset.total + ')</span>';
                                }
                                wishlistButton += '</div>';
                                wishlistButtonSelecter.innerHTML = wishlistButton;
                                if (variantsIds.includes(parseInt(vid))) {
                                    wishlistButtonSelecter.setAttribute("data-added", "true");
                                } else {
                                    wishlistButtonSelecter.setAttribute("data-added", "false");
                                }
                                wishlistButtonSelecter.setAttribute("data-variant_id", vid);
                            } else {
                                if (variantsIds.includes(parseInt(vid))) {
                                    if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                        wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button" ' + (`style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"`) + '><span class="wishlist-icon">' + heartFillIcon.replaceAll("currentColor", wishlist_widget?.wishlistButtonTextColor) + '</span></div>';
                                    } else {
                                        wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button-icon"><span class="wishlist-icon">' + heartFillIcon + '</span></div>';
                                    }
                                    wishlistButtonSelecter.setAttribute("data-added", "true");
                                } else {
                                    if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                        wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button" ' + (`style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"`) + '><span class="wishlist-icon">' + heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor) + '</span></div>';
                                    } else {
                                        wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button-icon"><span class="wishlist-icon">' + heartIcon + '</span></div>';
                                    }
                                    wishlistButtonSelecter.setAttribute("data-added", "false");
                                }
                                wishlistButtonSelecter.setAttribute("data-variant_id", vid);
                            }
                        }
                    });
                }
            },
            _trendingWishlist: async function () {
                let payload = {
                    uuid: app_UUID_ID,
                    ip_address: app_ip_address,
                    customer_id: app_customre_id,
                    customers: JSON.parse(document.getElementById('wishlist-engine-customer-records')?.textContent ?? '{}'),
                    shopify_store_id: app_store_id,
                    shopify_store: Shopify.shop,
                    active_currency: Shopify?.currency?.active ?? '',

                }
                __this._XMLHttpRequest("POST", app_base_url_wishlist + '/trending-wishlist', payload, (async function (status, response) {
                    let pageHtml = '<div class="wslist-container">';
                    pageHtml += '<div class="headerwishlist"><h1 class="wishlist-heading">' + (response.appData.trending_wishlist_widget.wishlistRecommendationTitle ?? "You may also like") + '</h1></div>';
                    pageHtml += '<div class="ws_list_slider we_trending_slider ws-four-slide ws-desktop-' + (response.appData.trending_wishlist_widget.wishlistRecommendationDesktopPerRow ?? "4") + ' ws-mobile-' + (response.appData.trending_wishlist_widget.wishlistRecommendationMobilePerRow ?? "2") + '">';

                    (response.data || []).forEach(function (object, index) {
                        pageHtml += '<div class="ws_listgrid">';
                        pageHtml += '<div class="ws_listgridinr">';
                        pageHtml += '<a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '" class="ws_gridimg">';
                        pageHtml += '<img src="' + object.image + '" alt="Image" >';
                        pageHtml += '</a>';
                        pageHtml += '<div class="ws_gridmeta">';
                        // pageHtml += '<p class="ws_vendor">T-shirt</p>';
                        pageHtml += '<h4><a href="' + window.location.origin + window.Shopify.routes.root + 'products/' + object.handle + '">' + object.title + '</a></h4>';
                        pageHtml += '<p class="wishlist-price" data-price="' + object.variants[Object.keys(object.variants)[0]].price + '"  id="wishlist-price-' + index + '"><span class="money">' + ((app_widget_data.is_divided == 0) ? (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.money_format).replace("{{amount}}", (object.variants[Object.keys(object.variants)[0]].price)) : ((app_widget_data.is_divided == 100) ? Shopify.formatMoney(Math.ceil(parseFloat(object.variants[Object.keys(object.variants)[0]].price) * Shopify.currency.rate).toFixed(2).toString(), (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : ((app_widget_data.is_divided == 50) ? wishlistCustomCurrencyFormate(object.variants[Object.keys(object.variants)[0]].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : __this._wishlistCurrencyFormate(object.variants[Object.keys(object.variants)[0]].price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format))))) + '</span></p>';
                        pageHtml += '<p class="ws_variant">' + ((object.variants[Object.keys(object.variants)[0]].title != 'Default Title') ? object.variants[Object.keys(object.variants)[0]].title : "") + '</p>';
                        // if (response.appData.trending_wishlist_widget.wishlistRecommendationShowAddToCartButton == '1') {
                        //     pageHtml += '<button class="ws-cart" style="background:' + response.appData.trending_wishlist_widget.wishlistRecommendationButtonBackgroundColor + ';color:' + response.appData.trending_wishlist_widget?.wishlistRecommendationButtonTextColor + ';border:' + response.appData.trending_wishlist_widget?.wishlistRecommendationButtonBackgroundColor + ';" >' + response.appData.trending_wishlist_widget?.wishlistRecommendationButtonText + '</button>';
                        // }
                        pageHtml += '</div>';
                        pageHtml += '</div>';
                        pageHtml += '</div>';
                    })

                    pageHtml += '</div>';
                    pageHtml += '</div>';
                    document.querySelector('.wishlist-trending-widget').innerHTML = pageHtml;
                    if (response.appData.trending_wishlist_widget.wishlistRecommendationLayoutType == '1') {
                        __this._createSingleInstanceOfCSS("https://unpkg.com/flickity@2.3.0/dist/flickity.min.css");
                        loadScript('https://unpkg.com/flickity@2.3.0/dist/flickity.pkgd.min.js', function () {
                            setTimeout(function () {
                                new Flickity('.ws_list_slider', {
                                    cellAlign: 'left',
                                    contain: true,
                                    wrapAround: true,
                                    autoPlay: ((response.appData.trending_wishlist_widget.wishlistRecommendationSliderAutoRotate == '1') ? true : false),
                                    prevNextButtons: ((response.appData.trending_wishlist_widget.wishlistRecommendationSliderArrows == '1') ? true : false),
                                });
                            }, 500);
                        });
                    }
                }));
            },
            _WishlistQuntityEvent: async function () {
                document.querySelectorAll('.wishlist-qty-event').forEach((element) => {
                    element.addEventListener('click', function () {
                        let currentQty = parseInt(document.querySelector('#wishlist-qty-event-' + element.dataset.index).value);
                        if (element.dataset.type == 'minus') {
                            currentQty = (currentQty > 1 ? (currentQty - 1) : currentQty);
                        } else if (element.dataset.type == 'plus') {
                            currentQty = currentQty + 1
                        }
                        document.querySelector('#wishlist-qty-event-' + element.dataset.index).value = currentQty;
                        document.querySelector('#wishlist-move-cart-' + element.dataset.index).dataset.quntity = currentQty;
                        if (document.querySelector('#wishlist_item_checkbox_' + element.dataset.index)) {
                            document.querySelector('#wishlist_item_checkbox_' + element.dataset.index).dataset.quntity = currentQty;
                        }

                    });
                });
            },
            _WishlistVariantPicker: async function () {
                document.querySelectorAll('.wishlist-variant-picker').forEach((element) => {
                    element.addEventListener('change', function (event) {
                        document.querySelector('#wishlist-move-cart-' + element.dataset.index).dataset.variant_id = element.value;
                        document.querySelector('#wishlist-variant-title-' + element.dataset.index).textContent = event.target.options[event.target.selectedIndex].textContent;
                        document.querySelector('#wishlist-price-' + element.dataset.index).dataset.price = event.target.options[event.target.selectedIndex].dataset.price;
                        document.querySelector('#wishlist-price-' + element.dataset.index).innerHTML = '<span class="money">' + ((app_widget_data.is_divided == 0) ? (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.money_format).replace("{{amount}}", (event.target.options[event.target.selectedIndex].dataset.price)) : ((app_widget_data.is_divided == 100) ? Shopify.formatMoney(Math.ceil(parseFloat(event.target.options[event.target.selectedIndex].dataset.price) * Shopify.currency.rate).toFixed(2).toString(), (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : ((app_widget_data.is_divided == 50) ? wishlistCustomCurrencyFormate(event.target.options[event.target.selectedIndex].dataset.price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format)) : __this._wishlistCurrencyFormate(event.target.options[event.target.selectedIndex].dataset.price, (document?.body?.dataset?.wishlistCurrency ?? app_widget_data.original_money_format))))) + '</span>'
                        if (document.querySelector('#wishlist_item_checkbox_' + element.dataset.index)) {
                            document.querySelector('#wishlist_item_checkbox_' + element.dataset.index).dataset.variant_id = element.value;
                        }
                        if (app_widget_data.is_enable_show_outofstock_button == 1) {
                            if (event.target.options[event.target.selectedIndex].dataset.inventory_quantity > 0 || event.target.options[event.target.selectedIndex].dataset.inventory_management == 'null' || event.target.options[event.target.selectedIndex].dataset.inventory_management == null || (event.target.options[event.target.selectedIndex].dataset.inventory_management != '' && event.target.options[event.target.selectedIndex].dataset.inventory_management != 'null' && event.target.options[event.target.selectedIndex].dataset.inventory_management != null && event.target.options[event.target.selectedIndex].dataset.inventory_policy == 'continue')) {
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).textContent = wishlist_page?.pageButtonMoveToCart?.value;
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).style.cursor = "pointer";
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).style.pointerEvents = 'all';
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).disabled = false;
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).style.background = wishlist_page?.pageButtonMoveToCartBackgroundColor?.value;
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).style.color = wishlist_page?.pageButtonMoveToCartTextColor?.value;

                            } else {
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).textContent = wishlist_page?.pageButtonOutOfStock?.value;
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).style.cursor = "no-drop";
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).style.pointerEvents = 'none';
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).disabled = true;
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).style.background = wishlist_page?.pageButtonOutOfStockBackgroundColor?.value;
                                document.querySelector('#wishlist-move-cart-' + element.dataset.index).style.color = wishlist_page?.pageButtonOutOfStockTextColor?.value;
                            }
                        }
                    });
                });
            },
            _BulkActionEvent: function () {
                document.querySelector('#wishlist_select_all').addEventListener('click', function (parentElement) {
                    document.querySelectorAll('.wishlist_item_checkbox').forEach(function (element) {
                        element.checked = parentElement.target.checked;
                    });
                    if (document.querySelectorAll('.wishlist_item_checkbox:checked').length <= 0) {
                        document.querySelector('#move_to_cart_all').style.display = 'none';
                        document.querySelector('#delete_all').style.display = 'none';
                    } else {
                        document.querySelector('#move_to_cart_all').style.display = 'block';
                        document.querySelector('#delete_all').style.display = 'block';
                    }
                })
                document.querySelectorAll('.wishlist_item_checkbox').forEach(function (element) {
                    element.addEventListener('click', function () {
                        if (document.querySelectorAll('.wishlist_item_checkbox').length == document.querySelectorAll('.wishlist_item_checkbox:checked').length) {
                            document.querySelector('#wishlist_select_all').checked = true;
                        } else {
                            document.querySelector('#wishlist_select_all').checked = false;
                        }
                        if (document.querySelectorAll('.wishlist_item_checkbox:checked').length <= 0) {
                            document.querySelector('#move_to_cart_all').style.display = 'none';
                            document.querySelector('#delete_all').style.display = 'none';
                        } else {
                            document.querySelector('#move_to_cart_all').style.display = 'block';
                            document.querySelector('#delete_all').style.display = 'block';
                        }
                    })
                });
                document.querySelector('#move_to_cart_all').addEventListener('click', function () {
                    __this._wishlistAddToCartAll();
                })
                document.querySelector('#delete_all').addEventListener('click', function () {
                    var move_to_all_with_products = [];
                    document.querySelectorAll('.wishlist_item_checkbox:checked').forEach(function (element) {
                        move_to_all_with_products.push({
                            wishlist_id: element.dataset.wishlistId,
                            product_id: element.dataset.product_id,
                            variant_id: element.dataset.oldVariant_id,
                        });
                    });
                    __this._wishlistPageRemoveAll(move_to_all_with_products, 0);
                    __this._wishlistAlerMessage('susccessMessageItemRemove');
                })
            },
            _wishlistAddToCartAll: async function () {
                var move_to_all = [];
                var move_to_all_with_products = [];
                document.querySelectorAll('.wishlist_item_checkbox:checked').forEach(function (element) {
                    move_to_all.push({
                        id: element.dataset.variant_id,
                        quantity: element.dataset.quntity ?? 1,
                        properties: {
                            '_wishlist_engine': app_UUID_ID,
                            '_wishlist_uuid': app_UUID_ID
                        }
                    });
                    move_to_all_with_products.push({
                        wishlist_id: element.dataset.wishlistId,
                        product_id: element.dataset.product_id,
                        variant_id: element.dataset.oldVariant_id,
                    });
                });
                let payload = {
                    items: move_to_all,
                    sections: ((app_widget_data.wishlist_section !== '' && app_widget_data.wishlist_section != 'null' && app_widget_data.wishlist_section != null) ? app_widget_data.wishlist_section : 'cart-drawer,cart-icon-bubble,mini-cart'),
                    sections_url: '/',
                    form_type: 'product',
                    utf8: 'Ã¢Å“â€œ',
                };
                __this._XMLHttpRequest('POST', window.Shopify.routes.root + 'cart/add.js', payload, (function (status, response) {
                    if (response.status) {
                        __this._wishlistAlerMessage('custom', response);
                    } else {
                        if (response.error) {
                            console.log("errors", response.error);
                        }
                        if (!response.error) {
                            if (typeof wishlistEngineCallback == 'function') {
                                wishlistEngineCallback(response);
                            }
                            __this._wishlistAlerMessage('successMessageAddToCartAll', response);
                            if (app_widget_data.is_enable_delete_on_cart == 1) {
                                __this._wishlistPageRemoveAll(move_to_all_with_products, 1, response);
                            }
                            if (app_widget_data.is_enable_stay_on_page_after_cart != 1) {
                                window.location.href = "/cart";
                            }
                            __this._getSectionsToRender().forEach((section => {
                                const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
                                if (sectionElement != '' && sectionElement != null && sectionElement != 'null') {
                                    if (typeof response.sections != 'undefined' && response.sections != '') {
                                        sectionElement.innerHTML = __this._getSectionInnerHTML(response?.sections[section.id], section.selector);
                                        sectionElement?.parentNode?.classList?.remove('is-empty');
                                    }
                                }
                            }));
                        }
                    }
                }));
            },
            _wishlistPageRemoveAll: async function (moveAllData, type = 0, fetchResponse = {}) {
                let payload = {
                    uuid: app_UUID_ID,
                    ip_address: app_ip_address,
                    customer_id: app_customre_id,
                    customers: JSON.parse(document.getElementById('wishlist-engine-customer-records')?.textContent ?? '{}'),
                    shopify_store_id: app_store_id,
                    shopify_store: Shopify.shop,
                    products: moveAllData,
                    status: 0,
                    type
                }
                __this._XMLHttpRequest("POST", app_base_url_wishlist + '/move-all-wishlist', payload, (function (status, response) {
                    if (status == 200) {
                        __this._setWishlistTotalCount(response.data.wishlistTotalCount);
                        if (response.data.wishlistTotalCount <= 0) {
                            let emptyHTML = document.createElement('div');
                            emptyHTML.className = "wishlsitnoitem";
                            emptyHTML.innerHTML = '<p>' + wishlist_page?.pageEmptyWishlist.value + '</p>';
                            document.querySelector('.wishlistajaxLoad').appendChild(emptyHTML)
                            document.querySelector('.bulk_action').style.display = 'none';
                        }
                        moveAllData.forEach(function (e) {

                            document.getElementById("wishlist_page_" + e.product_id + "_" + e.variant_id) && document.getElementById("wishlist_page_" + e.product_id + "_" + e.variant_id).remove();

                            if (typeof wishlistCallback == 'function') {
                                wishlistCallback({
                                    "event": type == "0" ? "REMOVE" : "MOVETOCART",
                                    "product": response.product
                                });
                            }
                            __this._faceBookPixelTracking((type == "0" ? "removeFromWishlist" : "moveToCartFromWishlist"), response.product)
                            document.querySelectorAll('.wishlist-engine[data-product_id="' + e.product_id + '"]' + (app_widget_data.is_enable_wishlist_variant_level == 1 ? '[data-variant_id="' + e.variant_id + '"]' : '')).forEach(function (wishlistButtonSelecter) {
                                if (wishlistButtonSelecter.dataset.full_button == 'true') {
                                    let wishlistButton = '';
                                    if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                        wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '" ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? `style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"` : `style="background:transparent;"`) + '>';
                                    } else {
                                        wishlistButton = '<div class="wishlist-engine-button ' + ((wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2') ? "wishlist-button-border" : "") + '">';
                                    }

                                    if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '5') {
                                        if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                            wishlistButton += '<span class="wishlist-icon">' + heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor) + '</span>';
                                        } else {
                                            wishlistButton += '<span class="wishlist-icon">' + heartIcon + '</span>';
                                        }
                                    }
                                    if (wishlist_widget.wishlistButtonType === '1' || wishlist_widget.wishlistButtonType === '2' || wishlist_widget.wishlistButtonType === '3' || wishlist_widget.wishlistButtonType === '4') {
                                        wishlistButton += '<span class="wishlist-text" style="color:' + wishlist_widget?.wishlistButtonTextColor + '">' + wishlist_widget.wishlistButtonBeforeText + '</span>';
                                    }

                                    wishlistButton += '</div>';
                                    wishlistButtonSelecter.innerHTML = wishlistButton;
                                    wishlistButtonSelecter.setAttribute("data-total", wishlistButtonSelecter.dataset.total - 1);
                                    wishlistButtonSelecter.setAttribute("data-added", "false");


                                } else {

                                    if (wishlistButtonSelecter.dataset.css == 'true' || !wishlistButtonSelecter.dataset.css) {
                                        wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button" ' + (`style="background-color:${wishlist_widget?.wishlistButtonBackgroundColor}; color:${wishlist_widget?.wishlistButtonTextColor};"`) + '><span class="wishlist-icon">' + heartIcon.replace("currentColor", wishlist_widget?.wishlistButtonTextColor) + '</span></div>';
                                    } else {
                                        wishlistButtonSelecter.innerHTML = '<div class="wishlist-engine-button-icon"><span class="wishlist-icon">' + heartIcon + '</span></div>';
                                    }
                                    wishlistButtonSelecter.setAttribute("data-added", "false");

                                }
                                wishlistButtonSelecter.setAttribute("data-total", wishlistButtonSelecter.dataset.total - 1);
                            });
                            if (ShopifyAnalytics.meta.product?.id == e.product_id) {
                                document.querySelectorAll('.wishlist-engine[data-product_id="' + ShopifyAnalytics.meta.product?.id + '"]').forEach(function (wishlistButtonSelecter) {
                                    var variantsIds = JSON.parse(wishlistButtonSelecter.dataset.variantsIds);
                                    if (variantsIds.includes(parseInt(e.variant_id))) {
                                        var index = variantsIds.indexOf(parseInt(e.variant_id));
                                        variantsIds.splice(index, 1);
                                    } else {
                                        variantsIds.push(parseInt(e.variant_id))
                                    }
                                    wishlistButtonSelecter.setAttribute("data-variants-ids", JSON.stringify(variantsIds));
                                });
                            }

                            WISHLIST_PRODUCTS_IDS = ((__this._getCookie('WISHLIST_PRODUCTS_IDS') != '' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != 'undefined' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != null) ? JSON.parse(__this._getCookie('WISHLIST_PRODUCTS_IDS')) : {});
                            if (app_widget_data.is_enable_wishlist_variant_level == '1') {
                                let productsVariants = WISHLIST_PRODUCTS_IDS[e.product_id].variants;
                                var index = productsVariants.indexOf(parseInt(e.variant_id));
                                productsVariants.splice(index, 1);
                                if (productsVariants.length <= 0) {
                                    delete WISHLIST_PRODUCTS_IDS[e.product_id];
                                } else {
                                    WISHLIST_PRODUCTS_IDS[e.product_id].variants = productsVariants;
                                }
                            } else {
                                delete WISHLIST_PRODUCTS_IDS[e.product_id];
                            }
                            __this._setCookie("WISHLIST_PRODUCTS_IDS", JSON.stringify(WISHLIST_PRODUCTS_IDS));
                        })
                    }
                }));
            },
        };
        await app_widget_load.init();
    }
})();

window.WishEngineinit = function () {
    app_product_id = [];
    var app_variant_ids = [];
    document.querySelectorAll('.wishlist-engine:empty').forEach(function (e) {
        if (!app_variant_ids.includes(e.dataset.variant_id)) {
            app_variant_ids.push(e.dataset.variant_id);
            app_product_id.push({
                product_id: e.dataset.product_id,
                variant_id: e.dataset.variant_id
            });
        }
        e.addEventListener('click', function (event) {
            event.preventDefault();
            if (app_customre_id == '' && app_widget_data.is_enable_guest_whishlist == 0) {
                if (app_widget_data.is_redirect_account_page == '1') {
                    window.location.href = "/account";
                } else {
                    __this._wishlistAlerMessage('susccessMessageGuestLoginDisable');
                }
            } else {
                if (app_widget_data.app_plan_type == 0 && parseInt(app_widget_data.wishlistMonthCount) >= 100) {
                    console.log("Limit reached");
                } else {
                    __this._addOrRemoveWishlist(e);
                }
            }
        });
        e.dataset.applyEvent = "true";
    });
    document.querySelectorAll('.wishlist-engine').forEach(function (e) {
        if (!e.dataset.applyEvent && !e.dataset.loadedMenualy) {
            if (!app_variant_ids.includes(e.dataset.variant_id)) {
                app_variant_ids.push(e.dataset.variant_id);
                app_product_id.push({
                    product_id: e.dataset.product_id,
                    variant_id: e.dataset.variant_id
                });
            }
            e.addEventListener('click', function (event) {
                event.preventDefault();
                if (app_customre_id == '' && app_widget_data.is_enable_guest_whishlist == 0) {
                    if (app_widget_data.is_redirect_account_page == '1') {
                        window.location.href = "/account";
                    } else {
                        __this._wishlistAlerMessage('susccessMessageGuestLoginDisable');
                    }
                } else {
                    if (app_widget_data.app_plan_type == 0 && parseInt(app_widget_data.wishlistMonthCount) >= 100) {
                        console.log("Limit reached");
                    } else {
                        __this._addOrRemoveWishlist(e);
                    }
                }
            });
            e.dataset.applyEvent = "true";
        }
    })

    if (app_product_id.length > 0) {
        let old_app_product_id = app_product_id
        WISHLIST_PRODUCTS_IDS = ((__this._getCookie('WISHLIST_PRODUCTS_IDS') != '' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != 'undefined' && __this._getCookie('WISHLIST_PRODUCTS_IDS') != null) ? JSON.parse(__this._getCookie('WISHLIST_PRODUCTS_IDS')) : {});
        if (app_widget_data.is_enable_public_wishlist_count == 0 && __this._getCookie('WISHLIST_PRODUCTS_IDS_SET') == "1") {
            old_app_product_id.forEach(function (checkProductObject, index) {
                if (WISHLIST_PRODUCTS_IDS[checkProductObject.product_id]) {
                    old_app_product_id[index].is_exist = true;
                    old_app_product_id[index].total = 1;
                } else {
                    old_app_product_id[index].is_exist = false;
                }
                old_app_product_id[index].total = 0;
            });
            __this._setWishlistButtonLoad({ status: true, data: old_app_product_id, [ShopifyAnalytics?.meta?.product?.id ?? '']: WISHLIST_PRODUCTS_IDS[ShopifyAnalytics?.meta?.product?.id ?? '']?.variants });
        } else if ((__this._getCookie('WISHLIST_PRODUCTS_IDS_SET') || "0") == "0") {
            let payload = {
                uuid: __this._getCookie('WISHLIST_UUID'),
                ip_address: app_ip_address,
                shopify_store_id: app_store_id,
                shop: Shopify.shop
            }
            __this._XMLHttpRequest("POST", app_base_url_wishlist + '/get-all-product', payload, (function (status, responseJson) {
                if (status == 200) {
                    var objects = {};
                    (responseJson.data ?? []).forEach(function (responseObject, index) {
                        if (objects[responseObject.product_id]) {
                            objects[responseObject.product_id].variants.push(parseInt(responseObject.variant_id));
                            objects[responseObject.product_id].is_exist = true;
                            objects[responseObject.product_id].total = 0;
                        } else {
                            objects[responseObject.product_id] = {
                                variants: [parseInt(responseObject.variant_id)],
                                is_exist: true,
                                total: 0,
                            };
                        }

                    });
                    __this._setCookie("WISHLIST_PRODUCTS_IDS", JSON.stringify(objects));
                    __this._setCookie("WISHLIST_PRODUCTS_IDS_SET", "1");

                    let payload = {
                        ids: old_app_product_id,
                        shopify_store_id: app_store_id,
                        uuid: __this._getCookie('WISHLIST_UUID'),
                        is_enable_public_wishlist_count: app_widget_data.is_enable_public_wishlist_count,
                        is_enable_wishlist_variant_level: app_widget_data.is_enable_wishlist_variant_level,
                        shopify_product_id: ShopifyAnalytics.meta.product?.id || '',
                        shop: Shopify.shop
                    }
                    __this._XMLHttpRequest("POST", app_base_url_wishlist + '/product-status', payload, (function (status, responseJson) {
                        if (status == 200) {
                            __this._setWishlistButtonLoad(responseJson);
                        }
                    }));
                }
            }));
        } else {
            let payload = {
                ids: app_product_id,
                shopify_store_id: app_store_id,
                uuid: __this._getCookie('WISHLIST_UUID'),
                is_enable_public_wishlist_count: app_widget_data.is_enable_public_wishlist_count,
                is_enable_wishlist_variant_level: app_widget_data.is_enable_wishlist_variant_level,
                shopify_product_id: ShopifyAnalytics.meta.product?.id || '',
                shop: Shopify.shop
            }
            __this._XMLHttpRequest("POST", app_base_url_wishlist + '/product-status', payload, (function (status, responseJson) {
                if (status == 200) {
                    __this._setWishlistButtonLoad(responseJson);
                }
            }));
        }
    }
    return true;
}
window.loadScript = function (url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};