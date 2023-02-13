/*
 * File: CTSExtension.ts
 *
 * Copyright (c) 2022-2022 pikokr
 *
 * Licensed under MIT License. Please see more defails in LICENSE file.
 */

import chalk from 'chalk'
import { Extension } from './Extension'

export class CTSExtension extends Extension {
  protected get logger() {
    if (!this._logger) this._logger = this.commandClient.ctsLogger.getSubLogger({ name: chalk.green(`${this.constructor.name}`) })
    return this._logger
  }
}
