
# 🖼️ text-se-image

A simple Node.js package to generate AI image URLs.
Just pass a **prompt** (and optionally choose a model), and get back a direct image URL.

---

## ✨ Features

* 🚀 Lightweight — no dependencies
* 🎨 Generate AI image URLs instantly
* 🛠️ Defaults included (512×512, seed 42, `flux` model)
* 📦 Easy to use in Node.js (supports both **CommonJS** and **ESM**)

---

## 📦 Installation

```bash
npm install text-se-image
```

---

## 🔧 Usage

### CommonJS

```js
const { generateImage } = require("text-se-image");

(async () => {
  const url = await generateImage("A futuristic city skyline at sunset");
  console.log(url);
})();
```

### ES Modules

```js
import { generateImage } from "text-se-image";

const url = await generateImage("A futuristic city skyline at sunset");
console.log(url);
```

---

## ⚙️ API

### `generateImage(prompt, model?)`

Generates an image URL from a given prompt.

* `prompt` *(string, required)* → The text description of the image.
* `model` *(object, optional)* → Choose which model to use.

  * Default: `{ id: "flux" }`

#### Example with custom model

```js
const url = await generateImage("A cyberpunk robot", { id: "flux-schnell" });
console.log(url);
```

---

## 🎨 Example Output

Input:

```js
await generateImage("A cute cat wearing glasses");
```

Output:

```
https://image.pollinations.ai/prompt/A%20cute%20cat%20wearing%20glasses?width=512&height=512&seed=42&model=flux&nologo=true
```

---

## 🖼️ Available Models

You can pass any of these models in the second parameter:

| Model ID       | Description                             |
| -------------- | --------------------------------------- |
| `flux`         | High-quality image generation (default) |
| `flux-schnell` | Faster, lightweight version of Flux     |
| `turbo`        | Ultra-fast but lower quality images     |
| `majestic`     | Stylized, artistic outputs              |
| `anime`        | Optimized for anime/manga style images  |
| `realistic`    | More photorealistic images              |

✅ Example:

```js
const url = await generateImage("An anime-style dragon", { id: "anime" });
console.log(url);
```

---

## 📝 Notes

* The package **returns only the image URL** (not the image itself).
* You can use the URL directly in `<img>` tags or fetch it in your app.
* Defaults: `width = 512`, `height = 512`, `seed = 42`, `model = flux`.

---

## 👨‍💻 About the Author

**Rishav Tiwari** — Software Developer with a passion for **AI, automation, and building developer tools**.
When I’m not coding, I love exploring new ideas, experimenting with AI projects, and helping others learn tech.

* 🌐 GitHub: [https://github.com/rishavtiwari22](https://github.com/rishavtiwari22)

---

## 📄 License

MIT © 2025 Rishav Tiwari
