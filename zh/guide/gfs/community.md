# GUI.for.SingBox 用户指南 (v1.9.0)

欢迎使用 GUI.for.SingBox！本指南将帮助您快速上手，通过简洁的图形界面操作，轻松生成 Sing-Box 客户端配置并运行，无需再为复杂的 JSON 配置而烦恼。GUI.for.SingBox 几乎支持 Sing-Box 作为客户端的全部特性。

## 软件设置

本节介绍 GUI.for.SingBox 的各项设置选项，以便您根据自身需求进行配置。

**通用设置**

<img src="/zh/resources/gfs/v1.9.0/GUI-settings.png" title="GUI设置" alt="GUI设置.png" data-align="center">

-   **语言 (Language)**：选择软件显示语言，目前支持中文和英文。本指南以**中文**为例。
-   **内核缓存**：Sing-Box 的缓存数据存储目录，路径为 `data/sing-box`，用于持久化 Fake-IP 数据和远程规则集。
-   **关闭窗口时退出程序**：勾选后，点击窗口关闭按钮将直接退出程序，不显示托盘图标。
-   **退出程序时同时关闭内核**：勾选后，退出程序时会同时结束 `sing-box.exe` 进程，停止 Sing-Box 运行。
-   **自动启动内核程序**：勾选后，启动软件时会自动启动 Sing-Box 内核。
-   **以管理员身份运行**：对于非 Windows `Administrators` 用户组成员，建议勾选此项，以避免 TUN 模式启动失败或在 `Tun.stack` 为 `system` 或 `mixed` 时无法修改系统防火墙设置。
-   **开机时启动**：勾选后，程序将随系统自动启动。

**内核选项卡**

用于管理 Sing-Box 核心程序，包括下载和更新。

**关于选项卡**

查看软件版本信息和进行在线更新。

## 订阅设置 (必须)

本节介绍如何配置订阅，这是使用 GUI.for.SingBox 的必要步骤。

GUI.for.SingBox 的订阅部分仅需包含出站 (outbounds) 部分，格式如下：

```json
[
    {
        "type": "vless",
        "tag": "Proxy1",
        "server": "xxx.xxx.xxx.xxx",
        "server_port": 443,
        "uuid": "..."
        ...
    },
    {
        "type": "shadowsocks",
        "tag": "Proxy2",
        ...
    }
]
```

以下以手动管理方式为例，后续您可使用 GUI 进行节点管理。

<img src="/zh/resources/gfs/v1.9.0/add-subscription.png" title="添加订阅" alt="添加订阅.png" data-align="center">

1.  **保存路径**：填写 JSON 文件的完整路径，建议使用相对路径。
2.  **命名**：为订阅文件命名并保存。
3.  **更新**：点击更新按钮，确保订阅的节点数量正确显示。

<img src="/zh/resources/gfs/v1.9.0/subscription-list.png" title="订阅信息" alt="订阅信息.png" data-align="center">

## 配置设置 (必须)

本节介绍如何创建和管理配置，这是使用 GUI.for.SingBox 的核心步骤。

<img src="/zh/resources/gfs/v1.9.0/config-menu.png" title="右键菜单" alt="右键菜单.png" data-align="center">

1.  **添加配置**：点击`添加`新建配置，并自定义配置名称。
2.  **右键菜单**：在创建的配置上点击右键，可以进行详细设置，或者使用向导模式进行逐步设置。
3.  **文档按钮**：在设置过程中，点击右上角的`文档按钮`，可以预览当前配置的 JSON 文件。

<img src="/zh/resources/gfs/v1.9.0/add-config.png" title="新建配置" alt="新建配置.png" data-align="center">

<img src="/zh/resources/gfs/v1.9.0/perview-config.png" title="预览配置" alt="预览配置.png" data-align="center">

### 通用设置

本节介绍配置的全局选项。

<img src="/zh/resources/gfs/v1.9.0/general-settings.png" title="通用设置" alt="通用设置.png" data-align="center">

-   **工作模式**：对应 Sing-Box 的 `clash_api.default_mode` 字段，设置内核的默认工作模式，可选：
    -   **全局 (global)**：所有流量走代理。
    -   **规则 (rule)**：根据规则列表决定是否走代理，建议默认使用。
    -   **直连 (direct)**：所有流量直连。
-   **禁用日志**：对应 Sing-Box 的 `log.disabled` 字段，启用后将不输出日志。
-   **日志级别**：对应 Sing-Box 的 `log.level` 字段，设置日志输出级别，等级由低到高：
    -   跟踪 (trace)
    -   调试 (debug)
    -   信息 (info)
    -   警告 (warn)
    -   错误 (error)
    -   致命 (fatal)
    -   恐慌 (panic)
-   **日志保存路径**：对应 Sing-Box 的 `log.output` 字段，启用后日志将输出到指定文件。
-   **日志时间戳**：对应 Sing-Box 的 `log.timestamp` 字段，启用后输出的日志将显示时间。
-   **RESTful WEB API 监听地址**：对应 Sing-Box 的 `clash_api.external_controller` 字段，用于 `clash_api` 方式的监听地址，格式为 `address:port`。用于第三方控制面板。如果为空，则禁用 `clash_api`。如需局域网访问，请将 `address` 改为 `0.0.0.0`。
-   **RESTful API 密钥**：对应 Sing-Box 的 `clash_api.secret` 字段，用于 `clash_api` 的身份验证。当监听地址为 `0.0.0.0` 时，建议设置此项。
-   **Web UI 路径**：对应 Sing-Box 的 `clash_api.external_ui` 字段，指定本地 Web 面板资源的目录，例如目录为 `ui`，将通过 `http://{{external-controller}}/ui` 访问。
-   **Web UI 下载地址**：对应 Sing-Box 的 `clash_api.external_ui_download_url` 字段，用于下载 Web 面板资源的 ZIP 文件地址。
-   **Web UI 下载地址的出站标签**：对应 Sing-Box 的 `clash_api.external_ui_download_detour` 字段，用于下载 Web 面板资源的出站标签。
-  **允许从私有网络访问**：对应 Sing-Box 的 `clash_api.access_control_allow_private_network` 字段，启用后将允许从公共网站访问私有网络上的 `clash_api`。
- **允许的 CORS 来源**：对应 Sing-Box 的 `clash_api.access_control_allow_origin` 字段，指定允许访问 `clash_api` 的来源，如果需要从公共网站访问私有网络上的 `clash_api`，则必须明确指定来源地址，而不是使用 `*`。
-  **启用缓存**：对应 Sing-Box 的 `cache_file.enabled` 字段，启用后将记录出站分组的选择，以及将远程规则集存储到缓存文件中。
- **缓存文件路径**：对应 Sing-Box 的 `cache_file.path` 字段，用于指定缓存文件的路径，默认使用 `cache.db`。
- **缓存文件中的标识符**：对应 Sing-Box 的 `cache_file.cache_id` 字段，默认为空，如果设置了内容，指定的配置缓存将使用一个独立的存储区域。
-   **持久化 FakeIP**：对应 Sing-Box 的 `cache_file.store_fakeip` 字段，启用后将把 `fakeip` 记录存储到缓存文件中。
-   **持久化已拒绝的 DNS 响应**：对应 Sing-Box 的 `cache_file.store_rdrc` 字段，启用后将把被拒绝的 DNS 响应存储到缓存文件中。

### 入站设置

本节介绍如何配置 Sing-Box 的 `inbounds` 字段，用于设置入站配置的选项，可以添加或删除指定入站，支持 `Mixed`、`Http`、`Socks`、`Tun`。

<img src="/zh/resources/gfs/v1.9.0/inbounds-settings.png" title="入站设置" alt="入站设置.png" data-align="center">

#### Mixed 入站

类型 `type` 为 `mixed`，是一个集合了 `socks4`、`socks4a`、`socks5` 和 `http` 服务器的混合入站。

-   **名称 (必须)**：对应 Sing-Box 的 `inbounds.tag` 字段，用于指定入站标签，默认为 `mixed-in`，可自定义。
-   **Http/Socks 验证用户**：对应 Sing-Box 的 `inbounds.users` 字段，用于添加用户认证，格式为 `user:password`，可设置多组。
-   **监听地址 (必须)**：对应 Sing-Box 的 `listen` 字段，指定入站服务的监听地址，默认为 `127.0.0.1`，如需局域网访问请改为 `0.0.0.0` 或者 `::`。
-   **端口 (必须)**：对应 Sing-Box 的 `listen_port` 字段，指定入站服务的监听端口，默认为 `20122`，可自定义。
-   **TCP 快速打开**：对应 Sing-Box 的 `tcp_fast_open` 字段，启用后可以加快连接速度，需要服务端支持。
-  **多路径 TCP**：对应 Sing-Box 的 `tcp_multi_path` 字段，启用后可以提高传输效率和可靠性，需要服务端支持。
-  **UDP 分段**：对应 Sing-Box 的 `udp_fragment` 字段，启用后可以优化传输 UDP 大数据包时的性能，但可能导致延迟或丢包，需要服务端支持。

#### HTTP 入站

类型 `type` 为 `http`，默认名称 `tag` 为 `http-in`，默认端口为 `20121`，其余设置同 `Mixed 入站`。

#### SOCKS 入站

类型 `type` 为 `socks`，默认名称 `tag` 为 `socks-in`，默认端口为 `20120`，其余设置同 `Mixed 入站`。

#### Tun 入站

一种透明代理模式，通过创建虚拟网络接口接管系统的所有网络流量，即使应用程序不支持手动设置代理。Windows 需要在设置里启用 `以管理员身份运行`，Linux 和 Mac 需要点击内核设置页面的授权按钮进行授权。

<img src="/zh/resources/gfs/v1.9.0/inbounds-tun.png" title="Tun 入站" alt="Tun入站.png" data-align="center">

-   **名称 (必须)**：对应 Sing-Box 的 `inbounds.tag` 字段，用于指定入站标签，默认为 `tun-in`，可自定义。
-   **TUN 网卡名称**：对应 Sing-Box 的 `tun.interface_name` 字段，默认会自动设置，可自定义。
-   **TUN 模式堆栈**：对应 Sing-Box 的 `tun.stack` 字段，用于选择网络协议栈实现。默认使用 `mixed`，可选项包括：
    *   **system**：使用操作系统内核协议栈，提供稳定全面的 TUN 体验，资源占用较低。
    *   **gvisor**：使用用户空间实现的协议栈，提供更高的安全性和隔离性，在特定情况下具有更好的网络性能。
    *   **mixed**：混合模式，TCP 使用 system 栈，UDP 使用 gvisor 栈，可能提供更好的整体体验。

    **注意**：如果启用了系统防火墙，可能需要放行内核（Windows、macOS）的网络连接，或者放行 TUN 网卡的出口流量（Linux）才能正常使用 system 或 mixed 协议栈。
-   **自动设置全局路由**：对应 Sing-Box 的 `tun.auto_route` 字段，用于自动设置到 Tun 的默认路由，建议启用。
    **注意**：为避免网络回环，在启用 `自动路由` 时，应同时启用 `自动检测出站接口`，或者手动设置正确的 `出站接口名称`。
-   **严格路由**：对应 Sing-Box 的 `tun.strict_route` 字段，启用后会强制执行更严格的路由规则，以避免 IP 地址泄露并增强 DNS 劫持效果。

    **注意**：启用严格路由可能会导致某些应用程序（如 VirtualBox）在特定情况下无法正常工作。
-   **独立于端点的 NAT**：对应 Sing-Box 的 `tun.endpoint_independent_nat` 字段，此选项仅在堆栈为 `gvisor` 时可用，其他堆栈默认为已启用。可能对某些应用场景有帮助，但启用后可能导致性能下降，因此在没有明确需要时，不建议启用。
-   **最大传输单元**：对应 Sing-Box 的 `tun.mtu` 字段，默认为 `9000`，用于设置 TUN 网卡的最大传输单元 (MTU)。该值会影响极限状态下的网络传输速率，一般情况下使用默认值即可。
-   **IPv4 和 IPv6 前缀**：对应 Sing-Box 的 `tun.address` 字段，用于设置 TUN 接口的 IPv4 和 IPv6 地址前缀，一般默认即可。
-   **自定义路由**：对应 Sing-Box 的 `tun.route_address` 字段，用于在启用 `自动路由` 时指定自定义的路由网段，而不是使用默认路由，通常情况下无需设置。

### 出站设置

本节介绍如何配置 Sing-Box 的 `outbounds` 字段，用于配置节点分组。

<img src="/zh/resources/gfs/v1.9.0/outbounds-settins.png" title="出站设置" alt="出站设置.png" data-align="center">

编辑出站分组可以将自己添加的订阅节点加入该组。

<img src="/zh/resources/gfs/v1.9.0/edit-outbounds-group.png" title="编辑分组" alt="编辑分组.png" data-align="center">

-   **名称 (必须)**：对应 Sing-Box 的 `outbounds.tag` 字段，用于设置分组名称，可以添加 emoji 符号。
-   **类型**：对应 Sing-Box 的 `outbounds.type` 字段，可选：
    -   **直连 (direct)**：所有流量直连。
    -   **手动选择 (selector)**：手动选择出站节点。
    -   **自动选择 (urltest)**：自动选择延迟最低的节点。
-   **中断现有连接**：对应 Sing-Box 的 `interrupt_exist_connections` 字段，用于设置当选定的出站连接发生变化时，是否中断现有的入站连接。 内部连接将始终被中断。
-   **自动选择 (urltest)**：当 `type` 为 `urltest` 时，按照设置的间隔定期对目标链接进行延迟测试，最后根据延迟容差选择节点，可设置项包括：
    *   **测延迟链接**：对应 Sing-Box 的 `urltest.url` 字段，用于配置延迟测试的 URL，默认使用 `https://www.gstatic.com/generate_204` 进行测试。
    *   **测试间隔 (m)**：对应 Sing-Box 的 `urltest.interval` 字段，用于设置延迟测试的间隔，默认为 `3m`。
    *   **测试容差 (ms)**：对应 Sing-Box 的 `urltest.tolerance` 字段，用于设置节点切换的延迟容差，单位为毫秒，默认为 `150`。

**包含和排除**选项用于设置所选订阅或分组内需要包含或排除的节点名称，支持正则表达式。

可以根据需求添加/编辑/删除分组。

### 路由设置

本节介绍如何配置 Sing-Box 的 `route` 字段，用于配置路由规则、规则集等选项。

#### 通用

本节介绍路由设置的全局选项。

<img src="/zh/resources/gfs/v1.9.0/route-settings.png" title="路由设置" alt="路由设置.png" data-align="center">

-   **查找进程信息**：对应 Sing-Box 的 `route.find_process` 字段，启用后将在连接信息内显示进程名称。
-   **自动检测出站接口**：对应 Sing-Box 的 `route.auto_detect_interface` 字段，用于自动选择流量出口的网络接口。默认情况下，出站连接会绑定到默认网络接口，以防止在 TUN 模式下出现路由循环。启用 Tun 入站时，务必启用此选项。
-   **出站接口名称**：对应 Sing-Box 的 `route.default_interface` 字段，用于手动设置作为流量出口的网络接口。如果您有多出口网卡同时连接，建议手动指定出口网卡。
-   **默认出站标签**：对应 Sing-Box 的 `route.final` 字段，用于选择默认出站名称，即未命中任何规则时所使用的出站。

#### 规则集

本节介绍如何配置 Sing-Box 的 `route.rule_set` 字段，用于添加和管理当前配置内的本地或远程规则集。

<img src="/zh/resources/gfs/v1.9.0/route-rule_set.png" title="规则集" alt="规则集.png" data-align="center">

-   **名称 (必须)**：对应 Sing-Box 的 `tag` 字段，用于设置规则集名称，以便在路由规则和 DNS 规则内引用。
-   **类型**：对应 Sing-Box 的 `type` 字段，用于设置规则集类型，可选：
    -   **内联 (inline)**：直接在配置中定义规则集。
    -   **本地 (local)**：引用本地规则集文件。
    -   **远程 (remote)**：从远程仓库下载规则集文件。

-   **内联规则集**：请参考 [规则集 - sing-box](https://sing-box.sagernet.org/zh/configuration/rule-set/)。
-   **本地规则集**：需要在软件的规则集页面先进行添加，才能从配置内引用。

<img src="/zh/resources/gfs/v1.9.0/edit-rule_set-remote.png" title="编辑规则集" alt="编辑规则集.png" data-align="center">

-   **远程规则集**：当 `type` 为 `remote` 时，从指定远程仓库下载的规则集文件。如果缓存已启用，远程规则集将被存储到缓存文件内，可设置项包括：
    *   **格式**：对应 Sing-Box 的 `rule_set.format` 字段，用于指定远程规则集的格式，可选：
        -   **源文件 (source)**：JSON 格式的规则集文件。
        -   **二进制 (binary)**：SRS 格式的规则集文件。
    *   **远程链接**：对应 Sing-Box 的 `rule_set.format.url` 字段，用于设置下载远程规则集的地址，规则集文件后缀必须为 `json` 或者 `srs`。
    *   **下载方式**：对应 Sing-Box 的 `rule_set.download_detour` 字段，用于指定下载远程规则集的出站标签。
    *   **自动更新间隔**：对应 Sing-Box 的 `rule_set.update_interval` 字段，用于指定远程规则集的更新间隔，默认为 `1d`。

#### 规则

本节介绍如何配置 Sing-Box 的 `route.rule` 字段，用于设置 Sing-Box 的路由规则、规则动作、DNS 劫持和协议嗅探等选项。

<img src="/zh/resources/gfs/v1.9.0/route-rule.png" title="路由规则" alt="路由规则.png" data-align="center">

-   **规则类型**：选择要添加的规则类型，可选项包括：
    -   **入站 (inbound)**：对应 Sing-Box 的 `route.rule.inbound` 字段，用于匹配入站标签。
    -   **网络 (network)**：对应 Sing-Box 的 `route.rule.network` 字段，用于匹配网络类型，可选 `tcp` 或 `udp`。
    -   **协议 (protocol)**：对应 Sing-Box 的 `route.rule.protocol` 字段，用于匹配探测到的协议，例如 `quic`、`stun`、`bittorrent` 等。
    -   **域名 (domain)**：对应 Sing-Box 的 `route.rule.domain` 字段，用于匹配完整域名，例如 `example.com`。
    -   **域名后缀 (domain_suffix)**：对应 Sing-Box 的 `route.rule.domain_suffix` 字段，用于匹配域名后缀，例如 `.cn`。
    -   **域名关键词 (domain_keyword)**：对应 Sing-Box 的 `route.rule.domain_keyword` 字段，用于匹配域名关键字，例如 `google`。
    -   **域名正则 (domain_regex)**：对应 Sing-Box 的 `route.rule.domain_regex` 字段，用正则表达式匹配域名，例如 `^tracker\.[a-zA-Z0-9.-]+$`，表示匹配开头包含 `tracker` 的域名，如 `tracker.example.com`。
    -   **源 IP 地址段 (source_ip_cidr)**：对应 Sing-Box 的 `route.rule.source_ip_cidr` 字段，用于匹配来源 IP 地址段，例如 `192.168.0.0/24`，表示匹配来源为 `192.168.0.1`-`192.168.0.254` 地址范围内的连接。
    -   **IP 地址段 (ip_cidr)**：对应 Sing-Box 的 `route.rule.ip_cidr` 字段，用于匹配目标 IP 地址段，例如 `10.0.0.0/24`，表示匹配访问目标为 `10.0.0.1`-`10.0.0.254` 地址范围内的连接。
    -   **是否为私有 IP**：对应 Sing-Box 的 `route.rule.private_ip` 字段，用于匹配目标地址是否为私有 IP，地址范围包括 `10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16`。
     - **源端口 (source_port)**：对应 Sing-Box 的 `route.rule.source_port` 字段，用于匹配来源端口，例如 `8888`，表示匹配来源端口为 `8888` 的连接，可设置端口范围为 `1`-`65535`。
    -   **源端口范围 (source_port_range)**：对应 Sing-Box 的 `route.rule.source_port_range` 字段，用于匹配来源端口范围，例如 `1000:2000` 表示匹配 `1000`-`2000` 的所有端口，`:3000` 表示匹配到 `3000` 的所有端口，`4000:` 表示匹配 `4000` 开始的所有端口。
    -  **端口 (port)**：对应 Sing-Box 的 `route.rule.port` 字段，用于匹配目标端口，其余同 **源端口**。
     - **端口范围 (port_range)**：对应 Sing-Box 的 `route.rule.port_range` 字段，用于匹配目标端口范围，其余同 **源端口范围**。
    -   **进程名称 (process_name)**：对应 Sing-Box 的 `route.rule.process_name` 字段，用于匹配本地进程的名称，例如 `chrome.exe`，表示匹配来自此进程的连接。
    -   **进程路径 (process_path)**：对应 Sing-Box 的 `route.rule.process_path` 字段，用于匹配本地进程的路径，例如 `D:\MyApp\telegram.exe`，表示匹配来自指定路径的进程的连接。
    -   **进程路径正则 (process_path_regex)**：对应 Sing-Box 的 `route.rule.process_path_regex` 字段，用正则表达式匹配进程路径，例如 `.*beta.*` 表示匹配路径内包含 `beta` 的进程，如 `C:\app_beta\test.exe`。
    -   **Clash 模式 (clash_mode)**：对应 Sing-Box 的 `route.rules.clash_mode` 字段，用于匹配 Clash 模式，指定所选工作模式的规则策略，`direct` 和 `global` 应分别设置为直连和代理出站，一般情况下默认即可。
    -   **规则集 (rule_set)**：对应 Sing-Box 的 `route.rule.rule_set` 字段，用于匹配在规则集页面添加过的规则集。
    - **内联 (inline)**：使用多条件的复杂规则或逻辑规则时使用，可直接填写 json 内容
-   **规则动作**：对应 Sing-Box 的 `route.rule.action` 字段，选择要指定的动作，可选项包括：
    -   **路由 (route)**：将匹配规则的连接路由到指定出站。
    -   **路由设置选项 (route-options)**：为路由设置选项，添加拨号字段。
    -   **拒绝连接 (reject)**：将匹配规则的连接直接关闭。
    -   **劫持 DNS 请求 (hijack-dns)**：将匹配规则的 DNS 请求，劫持至 sing-box 的 DNS 模块。
    -   **协议嗅探 (sniff)**：对连接的协议纪进行嗅探，务必为入站规则添加此动作，否则协议和域名规则将不生效。
     - **解析 DNS (resolve)**：将请求的目标从域名解析为 IP 地址，一般情况无需添加
-   **反向匹配 (invert)**：对应 Sing-Box 的 `route.rule.invert` 字段，启用后将反选匹配结果，例如添加了 `cn-ip` 的规则，将会匹配不包含在此规则集中的连接。
-   **出站标签 (outbound)**：对应 Sing-Box 的 `route.rule.outbound` 字段，用于指定匹配规则的出站名称。
-   **路由选项 (route options)**：填写路由设置选项字段，可直接填写 JSON 内容，详情参考 [规则动作 - sing-box](https://sing-box.sagernet.org/zh/configuration/route/rule_action/#route-options_1)。
-    **启用的探测器 (sniffer)**：对应 Sing-Box 的 `route.rule.sniffer` 字段，用于设置需要启用的探测器，默认启用所有探测器，一般情况无需设置。
-    **策略 (strategy)**：对应 Sing-Box 的 `route.rule.strategy` 字段，用于设置 DNS 解析策略。
-   **DNS 服务器 (server)**：对应 Sing-Box 的 `route.rule.server` 字段，用于指定要使用的 DNS 服务器的标签，而不是通过 DNS 路由进行选择。
-   **载荷 (payload)**：选择或填写 `规则类型` 的值，例如 `quic`、`53`，无需带引号。

### DNS 设置

本节介绍如何配置 Sing-Box 的 `dns` 字段，用于配置 DNS 服务器、DNS 规则等选项。

#### 通用

本节介绍 DNS 设置的全局选项。

<img src="/zh/resources/gfs/v1.9.0/dns-settings.png" title="DNS设置" alt="DNS设置.png" data-align="center">

-   **禁用 DNS 缓存**：对应 Sing-Box 的 `dns.disable_cache` 字段，用于设置 DNS 查询的记录是否缓存，一般无需启用。
-   **禁用 DNS 缓存过期**：对应 Sing-Box 的 `dns.disable_expire` 字段，用于设置 DNS 查询缓存是否会过期，一般无需启用。
-  **独立缓存**：对应 Sing-Box 的 `dns.independent_cache` 字段，用于将每个 DNS 服务器的缓存独立存储，以满足特殊目的，启用后将性能轻微降低，一般无需启用。
-   **回退 DNS**：对应 Sing-Box 的 `dns.final` 字段，用于选择默认 DNS 服务器，即未命中任何 DNS 规则时所使用的服务器。
-   **解析策略**：对应 Sing-Box 的 `dns.strategy` 字段，用于设置默认的域名解析策略，可选 IPV4 优先、IPV6 优先、只使用 IPV4、只使用 IPV6。
-   **客户端子网**：对应 Sing-Box 的 `dns.client_subnet` 字段，用于设置 DNS 查询时附带的客户端 IP 子网信息，告诉 DNS 服务器你的大致 IP 地址范围，以便它能给你更准确的解析结果。 如果你提供的是一个 IP 地址，程序会自动把它转换成对应的子网格式，一般无需设置。
-   **Fake-IP**：对应 Sing-Box 的 `dns.fakeip` 字段，启用后将会自动添加 FakeIP 相关服务器和规则，一般按照弹出提示默认添加即可，按需启用。
-   **Fake-IP 范围 (IPv4)**：对应 Sing-Box 的 `dns.fakeip.inet4_range` 字段，用于指定 FakeIP 的 IPv4 地址范围，一般默认即可。
-   **Fake-IP 范围 (IPv6)**：对应 Sing-Box 的 `dns.fakeip.inet6_range` 字段，用于指定 FakeIP 的 IPv6 地址范围，一般默认即可。

#### 服务器

本节介绍如何配置 Sing-Box 的 `dns.servers` 字段，用于添加和配置 DNS 查询服务器，一般情况默认即可。

<img src="/zh/resources/gfs/v1.9.0/dns-servers.png" title="DNS服务器" alt="DNS服务器.png" data-align="center">

-   **名称**：对应 Sing-Box 的 `dns.servers.tag` 字段，用于设置 DNS 服务器的名称。
-   **地址**：对应 Sing-Box 的 `dns.servers.address` 字段，用于设置 DNS 服务器的地址，支持多种协议和格式，可填写 IP 地址、域名、`local`、`fakeip` 等，详情查看 [DNS 服务器 - sing-box](https://sing-box.sagernet.org/zh/configuration/dns/server/#address)。
-  **解析策略**：对应 Sing-Box 的 `dns.servers.strategy` 字段，用于设置当前 DNS 服务器的默认解析策略，如设置，**通用** 设置的 **解析策略** 将不再生效，一般默认即可。
-   **出站标签**：对应 Sing-Box 的 `dns.servers.detour` 字段，用于指定连接到 DNS 服务器的出站标签。
-  **解析本 DNS 服务器域名的 DNS**：对应 Sing-Box 的 `dns.servers.address_resolver` 字段，用于解析本 DNS 服务器的域名的另一个 DNS 服务器的标签，如果当前服务器地址包括域名则必须设置，指定的解析服务器必须为 IP 地址。
-   **客户端子网**：对应 Sing-Box 的 `dns.servers.client_subnet` 字段，同 **通用**，一般无需设置。

#### 规则

本节介绍如何配置 Sing-Box 的 `dns.rule` 字段，设置方法和 `路由规则` 基本一致，一般默认即可，仅介绍几个重点选项，其余请参考 `路由规则` 设置。

<img src="/zh/resources/gfs/v1.9.0/dns-rule.png" title="DNS规则" alt="DNS规则.png" data-align="center">

-   **出站 (outbound)**：对应 Sing-Box 的 `dns.rule.outbound` 字段，用于匹配出站标签，指定出站所使用的 DNS 服务器，`any` 可作为值用于匹配任意出站。
-  **拒绝方式 (method)**：对应 Sing-Box 的 `dns.rule.method` 字段，仅在选择 `拒绝连接` 规则动作时可用，可选 `返回 NXDOMAIN`、 `丢弃请求`，分别对应 `default`、 `drop`。
-   **目标 DNS 服务器的标签 (server)**：对应 Sing-Box 的 `dns.rule.server` 字段，用于指定匹配规则时所使用的 DNS 服务器的标签。

**注意**：`any` 出站规则必须添加，一般默认即可，用于解析节点服务器，且指定的 DNS 服务器必须为直连出站，否则将导致错误问题。

## 规则集

本节介绍如何配置和管理规则集。规则集有两种类型：本地规则集和远程规则集。远程规则集在 `路由设置` 中添加，此处不再赘述。

### 本地规则集

<img src="/zh/resources/gfs/v1.9.0/rule_set-list.png" title="本地规则集" alt="本地规则集.png" data-align="center">

本地规则集可以通过以下几种方式设置：

-   使用远程链接下载 SRS 格式的 binary 规则集或 JSON 格式的 source 规则集。
-   使用本地创建 JSON 格式的 source 规则集，格式参考 [源文件格式 - sing-box](https://sing-box.sagernet.org/zh/configuration/rule-set/source-format/) 和 [无头规则 - sing-box](https://sing-box.sagernet.org/zh/configuration/rule-set/headless-rule/)。

### 规则集获取方式

以下是一些常用的规则集资源：

-   **GEOIP**:
    -   [GitHub - MetaCubeX/meta-rules-dat - GEOIP](https://github.com/MetaCubeX/meta-rules-dat/tree/sing/geo/geoip)
    -   [GitHub - SagerNet/sing-geoip at rule-set](https://github.com/SagerNet/sing-geoip/tree/rule-set)
-   **GEOSITE**:
    -   [GitHub - MetaCubeX/meta-rules-dat - GEOSITE](https://github.com/MetaCubeX/meta-rules-dat/tree/sing/geo/geosite)
    -   [GitHub - SagerNet/sing-geosite at rule-set](https://github.com/SagerNet/sing-geosite/tree/rule-set)

## 注意事项

-   非 Administrators 用户组的用户建议打开 `设置` - `通用` 中的 `以管理员身份运行`，否则无法使用 TUN 启动内核。
-   若代理节点标签 (tag) 使用了国旗等图标无法正常显示，请安装插件 【Twemoji.Mozilla】。
