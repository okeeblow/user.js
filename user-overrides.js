// Backspace == back navigation
user_pref("browser.backspace_action", 0);

// Re-enable userChrome.css for TreeStyleTab Sidebar
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disable annoying suggestions; keep useful ones
user_pref("browser.urlbar.suggest.addons", false);
user_pref("browser.urlbar.suggest.amp", false);
user_pref("browser.urlbar.suggest.calculator", false);
user_pref("browser.urlbar.suggest.clipboard", true);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.fakespot", false);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.suggest.mdn", false);
user_pref("browser.urlbar.suggest.openpage", true);
user_pref("browser.urlbar.suggest.quickactions", false);
// Two default off here, quicksuggest.(non)?sponsored
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.suggest.wikipedia", false);
user_pref("browser.urlbar.suggest.yelp", false);

// Instant availability of Download window OK Button
// In milliseconds; default 1000
user_pref("security.dialog_enable_delay", 0);

// Don't wait so long for Save As button to become available.
// https://kb.mozillazine.org/Browser.download.saveLinkAsFilenameTimeout
// says default is 1000ms, but mine was 4000. Way too long.
user_pref("browser.download.saveLinkAsFilenameTimeout", 555);

// I hate mystery meat UI
user_pref("browser.download.autohideButton", false);

// Restore Windows titlebar for Firefox Windows when using Tree Style Tabs
user_pref("browser.tabs.inTitlebar", 0);

// Unbreak Cloudflare Challenge embeds
user_pref("privacy.restrict3rdpartystorage.heuristic.recently_visited", false);
user_pref("privacy.restrict3rdpartystorage.heuristic.redirect", false);
user_pref("privacy.restrict3rdpartystorage.heuristic.window_open", false);
user_pref("privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction", false);
user_pref("privacy.restrict3rdpartystorage.heuristic.skip_list", "");

// Disable protocol-hiding in Location bar
user_pref("browser.urlbar.trimURLs", false);

// Drag and drop of tabs creating new windows is way too sensitive.
user_pref("browser.tabs.allowTabDetach", false);

//AI slop.
user_pref("browser.ml.linkPreview.enabled", false);

// Disable "Manage Passwords" menu that pops up on password fields and often obscures Sign In buttons.
user_pref("signon.showAutoCompleteFooter", false);

// Disable annoying nanny interstitial when accessing an HTTP-non-TLS site
user_pref("browser.fixup.fallback-to-https", false");
