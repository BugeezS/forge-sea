
---

# 🛣️ Roadmap (Milestones & Issues)

## ✅ MVP (v0.1.0)
- [ ] **CLI commands**
  - `init`: scaffold `forge.sea.config.ts`
  - `build`: bundle → SEA → inject blob → produce binaries
  - `inspect`: print metadata (node version, blob size, assets)
  - `run`: run binary with verbose SEA logs
- [ ] **TypeScript support** via esbuild (compile entry automatically).
- [ ] **Asset bundling** (copy static files, embed into SEA blob).
- [ ] **Runtime helper** (`@forge-sea/runtime`) with `isSea()` + `resolveAssetPath()`.
- [ ] **Config schema** (platforms, node version, assets, env vars).
- [ ] Linux/macOS/Windows builds on local machine.
- [ ] CI sample workflow (GitHub Actions).

---

## 🚀 v0.2.0
- [ ] Cross-platform build targets (e.g. build Linux binaries from macOS).
- [ ] Signing hooks (Windows Authenticode, macOS notarization).
- [ ] Compression options (UPX/7z safe presets).
- [ ] Deterministic builds with checksums & build IDs.
- [ ] CLI: `export` command to package artifacts & SBOM.

---

## 📦 v0.3.0
- [ ] Vite/Rspack plugin integration (reuse existing build graph).
- [ ] Electron-style app template (CLI + web server examples).
- [ ] Auto-update feed support (delta updates).
- [ ] GUI helper (optional, for teams preferring config wizards).

---

## 🌍 Community Goals
- [ ] Good-first-issues: small docs & feature tasks for contributors.
- [ ] Detailed examples: CLI app, REST API app, TUI app.
- [ ] Contributor guide & design docs.
- [ ] Regularly track Node SEA changes across LTS & Current.

---

⚡️ With this roadmap you’ve got:
- **MVP in 2–3 weeks** → instant value for ex-`pkg` users.  
- **Clear differentiation** (signing, cross-builds, DX polish).  
- **Community growth path** (plugins, CI, docs).  

---

👉 Do you want me to also **draft the first `README.md` file** (with badges, installation, usage, and contribution guide) so you can push it as your repo’s initial commit?
