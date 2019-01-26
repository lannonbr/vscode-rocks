---
title: 'VS Code Extension API: Code Lens'
date: '2019-01-27T1700'
description: 'Overview of how to implement Code Lens'
image: './debug.png'
tags: ['extensions API', 'extensions']
---

Visual Studio Code has taken many good features built from it's sister project Visual Studio, and Code Lens is one of them. They're interactions that allow context aware actions for portions of your code base. Let's dig into building a simple extension to show off the API.

<!-- end -->

# What is a Code Lens?

Talk about Code Lens

# Creating a Code Lens

Create the command that we'll activate when we click on the code lens

```js
async function addConsoleLog() {
  let lineNumStr = await window.showInputBox({
    prompt: 'Line Number',
  })

  let lineNum = +lineNumStr

  let insertionLocation = new Range(lineNum - 1, 0, lineNum - 1, 0)
  let snippet = new SnippetString('console.log($1);\n')

  window.activeTextEditor.insertSnippet(snippet, insertionLocation)
}
```

register it through the commands API

```js
let commandDisposable = commands.registerCommand(
  'extension.addConsoleLog',
  addConsoleLog
)

context.subscriptions.push(commandDisposable)
```

Add it to the `contributes` field in package.json

```json
"contributes": {
    "commands": [
      {
        "command": "extension.addConsoleLog",
        "title": "Add Console Log"
      }
    ]
}
```

# Attaching to a provider

Create the provider

```js
class MyCodeLensProvider implements CodeLensProvider {
  async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {
    let topOfDocument = new Range(0, 0, 0, 0)

    let c: Command = {
      command: 'extension.addConsoleLog',
      title: 'Insert console.log',
    }

    let codeLens = new CodeLens(topOfDocument, c)

    return [codeLens]
  }
}
```

Create a class that implements the `CodeLensProvider` interface

Then create a function that provides codeLenses

```js
async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {
  // Implement codeLenses
}
```

in this instance, create a codeLens that takes a command and range. range is top left corner of document

```js
let topOfDocument = new Range(0, 0, 0, 0)

let c: Command = {
  command: 'extension.addConsoleLog',
  title: 'Insert console.log',
}

let codeLens = new CodeLens(topOfDocument, c)
```

Then return array of CodeLens

```js
return [codeLens]
```

# Subscribing to the provider

Tell the extension what context the codeLens should be placed in:

```js
let docSelector = {
  language: 'javascript',
  scheme: 'file',
}
```

then register a new code lens provider, pass in the docSelector, and then subscribe to it.

```js
let codeLensProviderDisposable = languages.registerCodeLensProvider(
  docSelector,
  new MyCodeLensProvider()
)

context.subscriptions.push(codeLensProviderDisposable)
```
