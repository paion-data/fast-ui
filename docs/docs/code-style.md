---
sidebar_position: 4
title: Code Style
---

### Import Order

Fast UI
[does not use Prettier for sorting imports](https://prettier.io/docs/rationale.html#what-prettier-is-not-concerned-about).
Instead, an [ESLint plugin](https://react-perfectionist.qubitpi.org/) is utilized for this matter.

If we are using [WebStorm](https://www.jetbrains.com/webstorm/), this plugin should instantly spot the incorrectly
ordered import for us and we can simply autocorrect the order with just a click of button shown below:

![](./img/ide-correct-import-order.png)
