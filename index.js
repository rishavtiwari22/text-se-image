

export default async function generateImage(prompt, model, {
  width = 512,
  height = 512,
  seed = 42
} = {}) {
  const encodedPrompt = encodeURIComponent(prompt);
  const params = new URLSearchParams({
    width,
    height,
    seed,
    model: model.id,
    nologo: 'true'
  });

  const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?${params.toString()}`;
  return url;
}


