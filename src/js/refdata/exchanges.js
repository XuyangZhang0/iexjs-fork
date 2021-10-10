/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get } from "../common";
import { Client } from "../client";

/**
 * Returns an array of U.S. exchanges.
 *
 * https://iexcloud.io/docs/api/#u-s-exchanges
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const exchanges = ({
  token = "",
  version = "",
  filter = "",
  format = "json",
} = {}) =>
  _get({
    url: `ref-data/market/us/exchanges`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.exchanges = function (standardOptions) {
  return exchanges({
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Returns an array of exchanges.
 *
 * https://iexcloud.io/docs/api/#international-exchanges
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const internationalExchanges = ({
  token = "",
  version = "",
  filter = "",
  format = "json",
} = {}) =>
  _get({
    url: `ref-data/exchanges`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.internationalExchanges = function (standardOptions) {
  return internationalExchanges({
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
