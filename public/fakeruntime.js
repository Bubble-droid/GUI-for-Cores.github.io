window.WailsInvoke = () => {};
const CustomEventMapping = {};
let kernelApiStore;

window.runtime = {
  WindowSetSystemDefaultTheme() {},
  EventsOnMultiple(id, fn) {
    if (id === "onLaunchApp") {
      kernelApiStore = Plugins.useKernelApiStore();
      kernelApiStore.config = {
        mode: "rule",
        port: 0,
        "socks-port": 0,
        "redir-port": 0,
        "tproxy-port": 0,
        "mixed-port": 20112,
        tun: {
          enable: false,
          device: "",
          stack: "System",
        },
        "allow-lan": false,
        "log-level": "info",
        ipv6: false,
      };
      kernelApiStore.providers = {
        default: {
          name: "default",
          type: "Proxy",
          vehicleType: "Compatible",
          proxies: [
            {
              alive: true,
              "dialer-proxy": "",
              extra: {},
              history: [{ delay: 23 }],
              id: "1",
              interface: "",
              mptcp: false,
              name: "DIRECT",
              "routing-mark": 0,
              smux: false,
              tfo: false,
              type: "Direct",
              udp: true,
              uot: false,
              xudp: false,
            },
            {
              alive: true,
              "dialer-proxy": "",
              extra: {},
              history: [{ delay: 23 }],
              id: "2",
              interface: "",
              mptcp: false,
              name: "REJECT",
              "routing-mark": 0,
              smux: false,
              tfo: false,
              type: "Reject",
              udp: true,
              uot: false,
              xudp: false,
            },
            {
              alive: true,
              all: [
                "新加坡01",
                "新加坡02",
                "新加坡03",
                "新加坡04",
                "日本01",
                "日本02",
                "日本03",
                "日本04",
                "美国01",
                "美国02",
                "美国03",
                "美国04",
                "香港01",
                "香港02",
                "香港03",
                "香港04",
              ],
              "dialer-proxy": "",
              extra: {},
              hidden: false,
              history: [{ delay: 23 }],
              icon: "",
              interface: "",
              mptcp: false,
              name: "🚀 节点选择",
              now: "新加坡01",
              "routing-mark": 0,
              smux: false,
              testUrl: "",
              tfo: false,
              type: "Selector",
              udp: true,
              uot: false,
              xudp: false,
            },
            {
              alive: true,
              all: ["DIRECT", "REJECT"],
              "dialer-proxy": "",
              extra: {},
              hidden: false,
              history: [{ delay: 23 }],
              icon: "",
              interface: "",
              mptcp: false,
              name: "🎯 全球直连",
              now: "DIRECT",
              "routing-mark": 0,
              smux: false,
              testUrl: "",
              tfo: false,
              type: "Selector",
              udp: true,
              uot: false,
              xudp: false,
            },
            {
              alive: true,
              all: ["REJECT", "DIRECT"],
              "dialer-proxy": "",
              extra: {},
              hidden: false,
              history: [{ delay: 23 }],
              icon: "",
              interface: "",
              mptcp: false,
              name: "🛑 全球拦截",
              now: "REJECT",
              "routing-mark": 0,
              smux: false,
              testUrl: "",
              tfo: false,
              type: "Selector",
              udp: true,
              uot: false,
              xudp: false,
            },
            {
              alive: true,
              all: ["🚀 节点选择", "🎯 全球直连"],
              "dialer-proxy": "",
              extra: {},
              hidden: false,
              history: [{ delay: 23 }],
              icon: "",
              interface: "",
              mptcp: false,
              name: "🐟 漏网之鱼",
              now: "🚀 节点选择",
              "routing-mark": 0,
              smux: false,
              testUrl: "",
              tfo: false,
              type: "Selector",
              udp: true,
              uot: false,
              xudp: false,
            },
          ],
          testUrl: "",
          expectedStatus: "*",
          updatedAt: "0001-01-01T00:00:00Z",
        },
      };
      kernelApiStore.proxies = {
        COMPATIBLE: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "3",
          interface: "",
          mptcp: false,
          name: "COMPATIBLE",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Compatible",
          udp: true,
          uot: false,
          xudp: false,
        },
        DIRECT: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "4",
          interface: "",
          mptcp: false,
          name: "DIRECT",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Direct",
          udp: true,
          uot: false,
          xudp: false,
        },
        GLOBAL: {
          alive: true,
          all: [
            "DIRECT",
            "REJECT",
            "🚀 节点选择",
            "🎯 全球直连",
            "🛑 全球拦截",
            "🐟 漏网之鱼",
          ],
          "dialer-proxy": "",
          extra: {},
          hidden: false,
          history: [{ delay: 23 }],
          icon: "",
          interface: "",
          mptcp: false,
          name: "GLOBAL",
          now: "DIRECT",
          "routing-mark": 0,
          smux: false,
          testUrl: "",
          tfo: false,
          type: "Selector",
          udp: true,
          uot: false,
          xudp: false,
        },
        PASS: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "5",
          interface: "",
          mptcp: false,
          name: "PASS",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Pass",
          udp: true,
          uot: false,
          xudp: false,
        },
        REJECT: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "6",
          interface: "",
          mptcp: false,
          name: "REJECT",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Reject",
          udp: true,
          uot: false,
          xudp: false,
        },
        "REJECT-DROP": {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "7",
          interface: "",
          mptcp: false,
          name: "REJECT-DROP",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "RejectDrop",
          udp: true,
          uot: false,
          xudp: false,
        },
        新加坡01: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "8",
          interface: "",
          mptcp: false,
          name: "新加坡01",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        新加坡02: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "9",
          interface: "",
          mptcp: false,
          name: "新加坡02",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        新加坡03: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "10",
          interface: "",
          mptcp: false,
          name: "新加坡03",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        新加坡04: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "11",
          interface: "",
          mptcp: false,
          name: "新加坡04",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        日本01: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "12",
          interface: "",
          mptcp: false,
          name: "日本01",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        日本02: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "13",
          interface: "",
          mptcp: false,
          name: "日本02",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        日本03: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "14",
          interface: "",
          mptcp: false,
          name: "日本03",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        日本04: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "15",
          interface: "",
          mptcp: false,
          name: "日本04",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        美国01: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "16",
          interface: "",
          mptcp: false,
          name: "美国01",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        美国02: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "17",
          interface: "",
          mptcp: false,
          name: "美国02",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        美国03: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "18",
          interface: "",
          mptcp: false,
          name: "美国03",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        美国04: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "19",
          interface: "",
          mptcp: false,
          name: "美国04",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        香港01: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "20",
          interface: "",
          mptcp: false,
          name: "香港01",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        香港02: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "21",
          interface: "",
          mptcp: false,
          name: "香港02",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        香港03: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "22",
          interface: "",
          mptcp: false,
          name: "香港03",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        香港04: {
          alive: true,
          "dialer-proxy": "",
          extra: {},
          history: [{ delay: 23 }],
          id: "23",
          interface: "",
          mptcp: false,
          name: "香港04",
          "routing-mark": 0,
          smux: false,
          tfo: false,
          type: "Vless",
          udp: true,
          uot: true,
          xudp: true,
        },
        "🎯 全球直连": {
          alive: true,
          all: ["DIRECT", "REJECT"],
          "dialer-proxy": "",
          extra: {},
          hidden: false,
          history: [{ delay: 23 }],
          icon: "",
          interface: "",
          mptcp: false,
          name: "🎯 全球直连",
          now: "DIRECT",
          "routing-mark": 0,
          smux: false,
          testUrl: "",
          tfo: false,
          type: "Selector",
          udp: true,
          uot: false,
          xudp: false,
        },
        "🐟 漏网之鱼": {
          alive: true,
          all: ["🚀 节点选择", "🎯 全球直连"],
          "dialer-proxy": "",
          extra: {},
          hidden: false,
          history: [{ delay: 23 }],
          icon: "",
          interface: "",
          mptcp: false,
          name: "🐟 漏网之鱼",
          now: "🚀 节点选择",
          "routing-mark": 0,
          smux: false,
          testUrl: "",
          tfo: false,
          type: "Selector",
          udp: true,
          uot: false,
          xudp: false,
        },
        "🚀 节点选择": {
          alive: true,
          all: [
            "新加坡01",
            "新加坡02",
            "新加坡03",
            "新加坡04",
            "日本01",
            "日本02",
            "日本03",
            "日本04",
            "美国01",
            "美国02",
            "美国03",
            "美国04",
            "香港01",
            "香港02",
            "香港03",
            "香港04",
          ],
          "dialer-proxy": "",
          extra: {},
          hidden: false,
          history: [{ delay: 23 }],
          icon: "",
          interface: "",
          mptcp: false,
          name: "🚀 节点选择",
          now: "新加坡01",
          "routing-mark": 0,
          smux: false,
          testUrl: "",
          tfo: false,
          type: "Selector",
          udp: true,
          uot: false,
          xudp: false,
        },
        "🛑 全球拦截": {
          alive: true,
          all: ["REJECT", "DIRECT"],
          "dialer-proxy": "",
          extra: {},
          hidden: false,
          history: [{ delay: 23 }],
          icon: "",
          interface: "",
          mptcp: false,
          name: "🛑 全球拦截",
          now: "REJECT",
          "routing-mark": 0,
          smux: false,
          testUrl: "",
          tfo: false,
          type: "Selector",
          udp: true,
          uot: false,
          xudp: false,
        },
      };
    }
    if (CustomEventMapping["onCoreStarted"]) {
      CustomEventMapping["onCoreStarted"] = null;
      setTimeout(() => {
        // fn("Start initial compatible provider default");
        // fn("sing-box started");
        kernelApiStore.starting = false;
        kernelApiStore.running = true;
      }, 200);
    }
    if (CustomEventMapping["onCoreStopped"]) {
      CustomEventMapping["onCoreStopped"] = null;
      kernelApiStore.running = false;
      fn("");
    }
  },
  WindowIsMaximised() {},
  WindowIsMinimised() {},
  EventsOf(event) {
    console.log("EventsOf", event);
  },
  EventsOff(event) {
    console.log("EventsOff", event);
  },
  WindowReloadApp() {
    window.location.reload();
  },
  WindowSetSize() {},
  BrowserOpenURL(url) {
    if (url === "data/locales") {
      url =
        "https://github.com/GUI-for-Cores/GUI-for-Cores.github.io/tree/main/app-resources/locales";
    }
    if (url.startsWith("http")) {
      window.open(url, "_blank");
      return;
    }
    url = url.replace(window.location.pathname, "");
    const { data } = window.go.bridge.App.Readfile(url);
    const link = URL.createObjectURL(
      new Blob([data], { type: "text/plain; charset=utf-8" })
    );
    window.open(link, "_blank");
  },
  ClipboardSetText(msg) {
    navigator.clipboard.writeText(msg);
    return { flag: true };
  },
};

window.go = {
  bridge: {
    App: {
      RestartApp() {
        Plugins.message.info("Web端不支持");
      },
      GetInterfaces() {
        return { flag: true, data: "eth0|WLAN0" };
      },
      UpdateTray() {},
      UpdateTrayMenus() {},
      GetEnv() {
        return {
          os: "darwin",
          arch: "arm64",
          basePath: window.location.pathname.slice(0, -1),
        };
      },
      ReadDir() {
        return { flag: true, data: "" };
      },
      IsStartup() {
        return true;
      },
      async Download(url, path) {
        return { flag: false, body: "Web端不支持" };
      },
      async Requests(method, url, headers, body, options) {
        if (
          url ==
          "https://github.com/MetaCubeX/mihomo/releases/download/Prerelease-Alpha/version.txt"
        ) {
          return {
            flag: true,
            status: 200,
            headers: {},
            body: "alpha-xxxxxxx",
          };
        }
        if (
          url ==
          "https://github.com/GUI-for-Cores/Ruleset-Hub/releases/download/latest/meta-full.json"
        ) {
          const res = await fetch("meta-full.json");
          const body = await res.text();
          return {
            flag: true,
            status: 200,
            headers: {},
            body: body,
          };
        }
        if (
          url ==
          "https://github.com/GUI-for-Cores/Ruleset-Hub/releases/download/latest/sing-full.json"
        ) {
          const res = await fetch("sing-full.json");
          const body = await res.text();
          return {
            flag: true,
            status: 200,
            headers: {},
            body: body,
          };
        }
        const res = await fetch(url, {
          method,
          headers,
          body: ["HEAD", "GET"].includes(method) ? null : JSON.stringify(body),
        });
        let respBody = await res.text();

        return {
          flag: true,
          status: res.status,
          headers: {
            ...res.headers,
            ...(url.includes("api.github.com")
              ? { "Content-Type": "application/json" }
              : {}),
          },
          body: respBody,
        };
      },
      WriteFile(path, content) {
        path = window.location.pathname + path;
        localStorage.setItem(path, content);
        return { flag: true };
      },
      ReadFile(path) {
        path = window.location.pathname + path;
        return { flag: true, data: localStorage.getItem(path) };
      },
      Readfile(path) {
        path = window.location.pathname + path;
        return { flag: true, data: localStorage.getItem(path) };
      },
      RemoveFile(path) {
        localStorage.removeItem(path);
        return { flag: true, data: !localStorage.getItem(path) };
      },
      MakeDir(path) {
        return { flag: true };
      },
      FileExists(path) {
        return { flag: true, data: !!localStorage.getItem(path) };
      },
      async Exec(path, args) {
        await new Promise((r) => setTimeout(r, 200));
        if (path == "bash" || path == "scutil") {
          return { flag: true, data: "" };
        }

        if (path == "data/mihomo/mihomo" && args.includes("-v")) {
          return {
            flag: true,
            data: "Mihomo Meta v1.19.14 darwin arm64 with go1.23.4 Tue Dec 31 16:58:41 UTC 2024\nUse tags: with_gvisor",
          };
        }
        if (path == "data/mihomo/mihomo-alpha" && args.includes("-v")) {
          return {
            flag: true,
            data: "Mihomo Meta alpha-xxxxxxx darwin arm64 with go1.23.4 Tue Jan  7 00:00:00 UTC 2025\nUse tags: with_gvisor",
          };
        }

        if (path == "data/sing-box/sing-box" && args.includes("version")) {
          return {
            flag: true,
            data: "sing-box version 1.10.7\n\nEnvironment: go1.23.4 darwin/arm64\nTags: with_gvisor,with_quic,with_dhcp,with_wireguard,with_ech,with_utls,with_reality_server,with_acme,with_clash_api\nRevision: 253b41936ecd6ae17948d49d9c510d7100830927\nCGO: disabled",
          };
        }

        if (
          path == "data/sing-box/sing-box-latest" &&
          args.includes("version")
        ) {
          return {
            flag: true,
            data: "sing-box version 1.11.0-beta.24\n\nEnvironment: go1.23.4 windows/amd64\nTags: with_gvisor,with_quic,with_dhcp,with_wireguard,with_ech,with_utls,with_reality_server,with_acme,with_clash_api\nRevision: 8cc7734a921bf6c24d52d3b8dc40a553a88d7f5a\nCGO: disabled",
          };
        }
        return { flag: false, data: "Web端不支持" };
      },
      KillProcess(pid) {
        return { flag: true, data: "" };
      },
      ExecBackground(path, args, out, end) {
        if (!path.includes("mihomo") && !path.includes("sing-box")) {
          return { flag: false, data: "Web端不支持" };
        }
        const pid = Math.random();
        CustomEventMapping["onCoreStarted"] = out;
        CustomEventMapping["onCoreStopped"] = end;
        return { flag: true, data: pid };
      },
      ValidateCron() {
        return { flag: true, data: "" };
      },
      AddScheduledTask() {
        return { flag: false, data: "Web端不支持" };
      },
      AbsolutePath(path) {
        return { flag: true, data: path };
      },
    },
  },
};
