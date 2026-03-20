# Clean Code

🌍 語言：[English](./README.md) | 繁體中文

刪除驅動開發 — 越少程式碼，越少錯誤。當無可刪減時，即達完美境界。

## 設計理念

Clean Code 是一套幫助開發者透過移除多餘程式碼和檔案來追求完美的工具，靈感來自聖埃克蘇佩里的名言：

> 「完美不是無可增添，而是無可刪減。」

這套工具實踐了刪除驅動開發（DDD）的理念：
- 程式碼越少，錯誤越少
- 程式碼越少，維護越簡單
- 程式碼越少，效能越佳

## 快速開始

### 安裝
```bash
git clone https://github.com/your-username/clean-code.git
cd clean-code
npm install
```

### 用法
```bash
# 預覽將被刪除的檔案（dry-run）
node cli.js /path/to/project --dry-run

# 實際刪除檔案（需要確認）
node cli.js /path/to/project
```

## 主要功能

- **智能清理**：自動移除無用檔案，保留重要資源
- **安全機制**：支援 dry-run 模式，刪除前先預覽變更
- **高度客製**：可在 `config.js` 中設定保留檔案清單
- **跨平台支援**：運行於 Node.js 14+，支援 Windows、macOS 及 Linux
- **自然語言指令**：透過 `skills/clean-code-delete/` 使用直覺操作

## 設定

在 `config.js` 中自訂您的 whitelist：

```javascript
module.exports = {
  exclude: [
    '.git',           // 版本控制
    'node_modules',   // 依賴項目
    'LICENSE',        // 法律文件
    'README.md',      // 文件
    '.github',        // GitHub 設定
    '.gitignore',      // Git 忽略規則
    'package.json',   // 專案中繼資料
    'pnpm-lock.yaml', // 依賴鎖定檔案
    '*.log',          // 日誌檔案
  ],
};
```

## 範例

```bash
# 清理目前目錄（先預覽！）
node cli.js . --dry-run

# 清理特定專案
node cli.js ~/projects/legacy-system

# 清理多個目錄
node cli.js ~/projects/old-project-1
node cli.js ~/projects/old-project-2
```

**AI 技能用法**：請參閱 `skills/clean-code-delete/README.md` 了解自然語言指令。

## 使用建議

1. **先預覽再執行**：雖然 `--dry-run` 看似多此一舉，但謹慎總是好的
2. **精簡保留清單**：保留檔案越少，清理效果越佳
3. **定期清理**：別讓無用檔案累積，定期維護專案健康
4. **移除冗餘註解**：過度解釋簡單程式碼反而降低可讀性
5. **保持文件精簡**：文件也需要定期審視和精簡

## 刪除驅動開發的優勢

- **降低維護成本**：移除無用程式碼和檔案
- **提升系統效能**：精簡的程式碼執行更快速
- **增強系統安全**：減少潛在安全風險
- **加速團隊適應**：簡潔的程式碼更易理解
- **減少除錯時間**：問題範圍更小，更易定位
- **提高開發效率**：專注於真正重要的功能
- **改善程式碼品質**：保持專案的簡潔與專注

## 貢獻指南

歡迎對本專案提出改進建議或貢獻程式碼，包括：
- 新的保留檔案規則
- 更智能的清理演算法
- 增強安全性檢查
- 效能優化
- 更靈活的刪除策略
- 功能擴展與改進

歡迎透過 Issue 或 Pull Request 參與貢獻。

## License

MIT - 隨意處置程式碼，就像我們對待刪除一樣。