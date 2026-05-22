# Xin Yu Wu Academic Homepage

This is a Markdown-editable GitHub Pages academic homepage for:

https://xinyuwu0415.github.io/

## 文件说明

你后续主要只需要修改：

- `index.md`：主页所有文字内容
- `assets/img/profile.jpg`：个人照片
- `assets/css/style.css`：页面样式，一般不用改

不要上传 `index.html`，否则 GitHub Pages 会优先显示旧的 HTML 页面。

## 如何更新网站

1. 打开 GitHub 仓库：`xinyuwu0415.github.io`
2. 上传本文件夹中的所有文件
3. 如果提示同名文件，选择覆盖/替换
4. 点击 `Commit changes`
5. 等待 GitHub Pages 自动部署
6. 访问 `https://xinyuwu0415.github.io/`

## 如何加照片

1. 准备一张照片，命名为 `profile.jpg`
2. 上传到 `assets/img/profile.jpg`
3. 打开 `index.md`
4. 找到 placeholder 部分，删除占位框，使用这一行：

```markdown
<img class="avatar" src="assets/img/profile.jpg" alt="Xin Yu Wu">
```

## 如何新增获奖

在 `Selected Awards and Honors` 下面直接新增一行：

```markdown
- **Award Name**, Year
```
