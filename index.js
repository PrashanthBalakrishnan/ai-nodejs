const results = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content:
        'You are an AI assistant, answer any question to the best of your ability.',
    },
    {
      role: 'user',
      content: 'Hi!',
    },
  ],
})

console.log(results.choices[0].message.content)
