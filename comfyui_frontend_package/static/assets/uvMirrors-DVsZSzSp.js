var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { dg as isValidUrl, av as electronAPI } from "./index-CCYTB1GP.js";
const checkMirrorReachable = /* @__PURE__ */ __name(async (mirror) => {
  return isValidUrl(mirror) && await electronAPI().NetWork.canAccessUrl(mirror);
}, "checkMirrorReachable");
const PYTHON_MIRROR = {
  settingId: "Comfy-Desktop.UV.PythonInstallMirror",
  mirror: "https://github.com/astral-sh/python-build-standalone/releases/download",
  fallbackMirror: "https://python-standalone.org/mirror/astral-sh/python-build-standalone",
  validationPathSuffix: "/20250115/cpython-3.10.16+20250115-aarch64-apple-darwin-debug-full.tar.zst.sha256"
};
const PYPI_MIRROR = {
  settingId: "Comfy-Desktop.UV.PypiInstallMirror",
  mirror: "https://pypi.org/simple/",
  fallbackMirror: "https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple"
};
export {
  PYTHON_MIRROR as P,
  PYPI_MIRROR as a,
  checkMirrorReachable as c
};
//# sourceMappingURL=uvMirrors-DVsZSzSp.js.map
