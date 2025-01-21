/**
 * Copyright 2025 Jiaqi Liu. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as Sentry from "@sentry/react";

import "./index.css";

import { i18n } from "fast-ui-i18n";
import { store } from "fast-ui-redux";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://bf0c538cf92cc0f08995225796399fe2@o4505480921022464.ingest.us.sentry.io/4508703437553664",
    integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}

void i18n; // force a i18n load

/* eslint-disable  @typescript-eslint/non-nullable-type-assertion-style */
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
