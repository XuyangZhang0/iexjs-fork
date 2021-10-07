/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { _raiseIfNotStr, _timeseriesWrapper } from "../common";
import { Client } from "../client";
import { timeSeries } from "../timeseries";

/**
 * Right to purchase up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#right-to-purchase
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseriesArgs Arguments to pass through to timeseries call
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const rightToPurchase = (
  symbol,
  refid,
  timeseriesArgs,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseriesArgs);

  return timeSeries(
    {
      id: "advanced_right_to_purchase",
      key: symbol,
      subkey: refid || "",
      ...(timeseriesArgs || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.rightToPurchase = function (
  symbol,
  refid,
  timeseriesArgs,
  { filter, format } = {},
) {
  return rightToPurchase(symbol, refid, timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
