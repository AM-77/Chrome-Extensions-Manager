(() => {
    'use strict'
    window.onload = () => {

        let extension_to_data = (extension) => {

            let data = {}

            data.id = extension.id

            data.name = extension.name

            data.description = extension.description !== "" ? extension.description : "Unavailable description."

            data.is_enabled = extension.enabled

            let enabled_icon_url = "data:image/png;base64,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"
            if (extension.icons) {
                enabled_icon_url = extension.icons[0].url
                extension.icons.forEach(icon => {
                    if (icon.size === 128) {
                        enabled_icon_url = icon.url
                    } else {
                        if (icon.size === 48) {
                            enabled_icon_url = icon.url
                        } else {
                            if (icon.size === 32) {
                                enabled_icon_url = icon.url
                            }
                        }
                    }
                })
            }

            let disabled_icon_url = enabled_icon_url
            if (enabled_icon_url.slice(0, 4) !== "data") {
                disabled_icon_url = enabled_icon_url + "?grayscale=true"
            }

            data.icon_url = data.is_enabled ? enabled_icon_url : disabled_icon_url

            data.install_type = extension.installType

            if (extension.homepageUrl !== "")
                data.home = extension.homepageUrl

            data.details = "chrome://extensions/?id=" + data.id

            if (extension.optionsUrl !== "")
                data.options = extension.optionsUrl

            data.type = extension.type

            data.version = extension.version

            return data
        }

        let data_2_HTML = (data) => {

            let links = document.createElement("div")
            links.className = "links"

            if (data.home) {
                let home_link = document.createElement("button")
                home_link.id = data.home
                home_link.className = "home link"
                home_link.innerText = "home"

                links.prepend(home_link)
            }

            if (data.options) {
                let option_link = document.createElement("button")
                option_link.id = data.options
                option_link.className = "options link"
                option_link.innerText = "options"

                links.prepend(option_link)
            }

            let details_link = document.createElement("button")
            details_link.id = data.details
            details_link.className = "link details"
            details_link.innerText = "details"

            links.prepend(details_link)

            let delete_btn = document.createElement("button")
            delete_btn.className = "delete"
            delete_btn.innerText = "delete"
            delete_btn.id = data.id
            links.prepend(delete_btn)

            let extension_element = document.createElement("div")
            extension_element.className = "extension " + data.install_type
            extension_element.id = data.id


            let infos_element = document.createElement("div")
            infos_element.className = "inofs"
            infos_element.innerHTML = `
                    <div class="icon">
                        <img src="${ data.icon_url }">
                    </div>
                    <div class="ext_info">
                        ${ data.name } >> ${ data.version } >>  <input id="${ data.id }" class="checkbox" type="checkbox" ${ data.is_enabled ? 'checked': '' }>
                        ${ data.description } >> 
                        ${ data.type } >> 
                    </div>
            `

            extension_element.appendChild(infos_element)
            extension_element.appendChild(links)

            return extension_element
        }

        let uninstall_extension = (extension_id) => {
            chrome.management.uninstall(extension_id, {
                showConfirmDialog: true
            })
        }

        let enable_extension = (extension_id, is_enabled) => {
            chrome.management.setEnabled(extension_id, is_enabled)

            let icon_src = document.querySelector(`#${extension_id} .icon img`).src

            if (icon_src.slice(0, 4) !== "data") {
                if (is_enabled) {
                    document.querySelector(`#${extension_id} .icon img`).src = icon_src.slice(0, icon_src.indexOf('?'))
                } else {
                    document.querySelector(`#${extension_id} .icon img`).src = icon_src + "?grayscale=true"
                }
            }

        }

        chrome.management.getAll((all_extensions) => {

            let _apps = document.querySelector("div.apps .list"),
                _extensions = document.querySelector("div.extensions .list"),
                _themes = document.querySelector("div.themes .list"),
                _extensions_innerHTML = "",
                _themes_innerHTML = "",
                _apps_innerHTML = ""

            if (all_extensions != null && all_extensions.length > 0) {

                all_extensions.forEach(extension => {

                    if (extension.type === "extension")
                        _extensions_innerHTML += data_2_HTML(extension_to_data(extension)).outerHTML
                    else
                    if (extension.type === "theme")
                        _themes_innerHTML += data_2_HTML(extension_to_data(extension)).outerHTML
                    else
                        _apps_innerHTML += data_2_HTML(extension_to_data(extension)).outerHTML

                })

                if (_extensions_innerHTML !== "")
                    _extensions.innerHTML = _extensions_innerHTML

                if (_themes_innerHTML !== "")
                    _themes.innerHTML = _themes_innerHTML

                if (_apps_innerHTML !== "")
                    _apps.innerHTML = _apps_innerHTML

                document.querySelectorAll("div.ext_info .checkbox").forEach(checkbox => {
                    checkbox.addEventListener("change", function () {
                        enable_extension(this.id, this.checked)
                    })
                })

                document.querySelectorAll("div.extensions .list .delete").forEach(checkbox => {
                    checkbox.addEventListener("click", function () {
                        uninstall_extension(this.id)
                    })
                })

                document.querySelectorAll("div.links .link").forEach(link => {
                    link.addEventListener("click", () => {
                        chrome.tabs.query({
                            url: link.id
                        }, function () {
                            chrome.tabs.create({
                                url: link.id
                            });
                        });

                    })
                })

            }

        })

    }

    chrome.management.onUninstalled.addListener((extension_id) => {
        document.querySelector("div#" + extension_id).remove()
    })

})();