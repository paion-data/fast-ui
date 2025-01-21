---
sidebar_position: 1
title: Introduction
---

To use JWT as the basis for a webservice, we start by creating a repository using the template on GitHub.

## Creating a Repository from GitHub Template

We can click on this link to generate a repository using the template:
[Create a new repository](https://github.com/QubitPi/react-template/generate) from QubitPi/react-template.
Alternatively, we can visit the [react-template repository on GitHub](https://github.com/QubitPi/react-template) and
click on the "Use this template" button on the top-right.

In both cases, the next steps are:

1. Enter a name for the new repository.
2. Uncheck "Include all branches".
3. Click on "Create repository from template".

For more details on how to create repositories using template, read the article on the GitHub website:
[Creating a repository from a template](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

:::caution

If the repository is public, GitHub offers unlimited free build minutes. If it's a private repository, however,
[billing policy](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes)
applies

:::

## After Creating the Repository

At this point, A ReactJS project with just what we need to start quickly has been generated. Developer can now
start adding business value and **get work done much faster in a standard way**. The following sections of this
documentation contain further details on how to proceed next.

References used to create this template:

- [Create Monorepo Project from Scratch](https://react.qubitpi.org/learn/start-a-new-react-project#create-monorepo-from-scratch)
- [Typedoc](https://qubitpi.github.io/typedoc-site/guides/installation/#integrating-with-docusaurus)

### Automatically Formatting Codebase

```console
yarn prettier --ignore-path .gitignore . --write
```

### Importing SVG

```typescript
import MySvg from "./example.svg"

function MyComponent(): JSX.Element {
  return (
    <div className="svgIcon">
      <img src={MySvg} alt="MySvg" />
    </div>
);
}
```
